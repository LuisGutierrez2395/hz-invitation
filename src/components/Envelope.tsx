import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface EnvelopeProps {
  onOpen: () => void;
  autoplay?: boolean;      // default false (don’t start timers automatically)
  startSignal?: number;    // when this number changes, start animation
}

export const Envelope: React.FC<EnvelopeProps> = ({
  onOpen,
  autoplay = false,
  startSignal = 0
}) => {
  const { t } = useTranslation();

  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const startAnimation = () => {
    // Reset to initial state (important if user switches language)
    setIsFlapOpen(false);
    setIsVisible(true);

    const openTimer = setTimeout(() => setIsFlapOpen(true), 1000);
    const fadeTimer = setTimeout(() => setIsVisible(false), 3500);
    const finishTimer = setTimeout(() => onOpen(), 4500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  };

  // 1) Autoplay on mount (optional)
  useEffect(() => {
    if (!autoplay) return;
    const cleanup = startAnimation();
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  // 2) Start when startSignal changes
  useEffect(() => {
    if (startSignal === 0) return; // ignore initial render
    const cleanup = startAnimation();
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSignal]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-secondary"
        >
          <div className="relative w-full max-w-sm h-64 mx-4 perspective-1000">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full bg-[#b6cdbd] shadow-2xl rounded-lg"
            >
              {/* Envelope Back */}
              <div className="absolute inset-0 bg-[#b6cdbd] rounded-lg" />

              {/* Letter inside */}
              <motion.div
                initial={{ y: 0 }}
                animate={isFlapOpen ? { y: -120 } : { y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-x-2 top-2 bottom-2 bg-white shadow-sm p-6 flex flex-col items-center justify-center text-center z-[5]"
              >
                <p className="font-script text-3xl md:text-2xl text-primary mb-6">
                  {t("envelope.tagline")}
                </p>
                <h1 className="font-serif text-1xl md:text-2xl tracking-widest text-text mb-4">
                  Nele <span className="text-accent">&</span> Luis
                </h1>
                <p className="font-sans text-xs mt-4 text-text/60">
                  {t("envelope.date")}
                </p>
              </motion.div>

              {/* Envelope Flaps (Front) */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {/* Bottom */}
                <div className="absolute bottom-0 w-full h-0 border-l-[190px] border-r-[190px] border-b-[130px] border-l-transparent border-r-transparent border-b-[#F2EFE9] rounded-b-lg shadow-sm" />
                {/* Left */}
                <div className="absolute left-0 top-0 h-full w-0 border-t-[128px] border-b-[128px] border-l-[160px] border-t-transparent border-b-transparent border-l-[#EBE5DE] rounded-l-lg" />
                {/* Right */}
                <div className="absolute right-0 top-0 h-full w-0 border-t-[128px] border-b-[128px] border-r-[160px] border-t-transparent border-b-transparent border-r-[#EBE5DE] rounded-r-lg" />
              </div>

              {/* Top Flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={
                  isFlapOpen
                    ? { rotateX: 180, zIndex: 0 }
                    : { rotateX: 0, zIndex: 20 }
                }
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
                className="absolute top-0 w-full h-0 border-l-[192px] border-r-[192px] border-t-[140px] border-l-transparent border-r-transparent border-t-[#b6cdbd] z-20 flex justify-center"
              >
                {/* Wax Seal */}
                <div className="absolute -top-[100px] w-25 h-25 rounded-full bg-[#c46a51] shadow-lg flex items-center justify-center border-4 border-[#b6cdbd]/30">
                  <img
                    src="/alpacas.png"
                    alt="Wedding seal"
                      className="
                      w-30 h-30 object-contain
                      drop-shadow-[0_0_2px_white]
                      drop-shadow-[0_0_4px_white]
                    "
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
