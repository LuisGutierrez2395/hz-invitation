import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt auto-play on mount
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          console.log("Autoplay blocked, waiting for user interaction");
          setIsPlaying(false);
          
          // Fallback: Play on first interaction
          const handleInteraction = async () => {
            if (audioRef.current) {
              try {
                await audioRef.current.play();
                setIsPlaying(true);
                // Remove listeners once played
                document.removeEventListener('click', handleInteraction);
                document.removeEventListener('touchstart', handleInteraction);
                document.removeEventListener('keydown', handleInteraction);
              } catch (e) {
                console.error("Autoplay failed even after interaction", e);
              }
            }
          };

          document.addEventListener('click', handleInteraction);
          document.addEventListener('touchstart', handleInteraction);
          document.addEventListener('keydown', handleInteraction);
        }
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-primary/20">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-11176.mp3" 
      />
      <button
        onClick={togglePlay}
        className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button
        onClick={toggleMute}
        className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};
