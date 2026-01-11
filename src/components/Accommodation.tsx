import React from 'react';
import { Section } from './Section';
import { BedDouble } from 'lucide-react';

export const Accommodation: React.FC = () => {
  return (
    <Section id="accommodation" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <BedDouble className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        Accommodation
      </h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        Where to stay
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-6">
        We recommend the on-site rooms at Bildungsgut Schmochtitz.
      </p>

      <div className="flex justify-center mb-6">
        <a
          href="https://bildungsgut-schmochtitz.de/uebernachtung/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-primary text-white font-sans text-sm rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <BedDouble size={16} />
          Book on-site rooms
        </a>
      </div>

     <p className="font-serif text-lg text-text max-w-xl mx-auto">
     Otherwise, we recommend staying in <strong>Bautzen</strong> or <strong>Dresden</strong>.
     </p>
    </Section>
  );
};
