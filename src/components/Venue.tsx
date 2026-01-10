import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Section } from './Section';

export const Venue: React.FC = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: 'Boda de Luis & Nele',
      location: 'Bildungsgut Schmochtitz Sankt Benno, Bautzen, Alemania',
      description: '¡Nos casamos! Esperamos contar con tu presencia.',
      start: '20260620T153000',
      end: '20260621T020000',
    };
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:${event.description}
DTSTART:${event.start}
DTEND:${event.end}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'boda-Luis-Nele.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="venue" className="text-center" withPattern>
      <h2 className="font-script text-4xl text-primary mb-2">Location</h2>
      <p className="font-sans text-text/60 mb-8 uppercase tracking-widest text-xs">Where we celebrate with you!</p>
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto border border-primary/20">
        <div className="flex justify-center mb-4">
          <div className="bg-secondary p-4 rounded-full">
            <MapPin className="text-primary w-8 h-8" />
          </div>
        </div>
        
        <h3 className="font-serif text-2xl text-text mb-2">Bildungsgut Schmochtitz Sankt Benno</h3>
        <p className="font-sans text-text/70 mb-1">Schmochtitz Nr. 1, 02625 Bautzen</p>
        
        <div className="flex justify-center gap-4 my-6 text-sm text-text/80">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-accent" />
            <span>Saturday, 20 June 2026</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-accent" />
            <span>15:30h</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <a 
            href="https://maps.app.goo.gl/8QrAwpc9QdeyCjW76" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white font-sans text-sm rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin size={16} />
            How to get there
          </a>
          <button 
            onClick={handleAddToCalendar}
            className="px-6 py-2 border border-primary text-primary font-sans text-sm rounded-full hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={16} />
            Add to Calendar
          </button>
        </div>
      </div>
      
      {/* Optional Embedded Map */}
      <div className="mt-8 rounded-lg overflow-hidden shadow-sm border border-gray-200 h-64 max-w-md mx-auto">
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{ border: 0 }} 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.232230492109!2d14.35921877761542!3d51.214797471748334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47085418e638cd81%3A0x1a0d7b526fe099bc!2sBischof%20-%20Benno%20-%20Haus!5e0!3m2!1sen!2sde!4v1768045442759!5m2!1sen!2sde" 
          allowFullScreen
          title="Map"
        ></iframe>
      </div>
    </Section>
  );
};
