import React from 'react';
import { Section } from './Section';
import { UserPen } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <UserPen className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        Contact
      </h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        Happy to help
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-6">
        For any questions, don't hesitate to reach out to Nele or Luis directly. 
        To help coordinate wedding games and activities, please contact:
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto">
        <strong>Maid of honor:</strong>{' '}
        <a
          href="tel:+491762819394"
          className="hover:text-primary transition-colors"
        >
          Laura González (+49 1578 3217817)
        </a>
        <br />
        <strong>Best man:</strong>{' '}
        <a
          href="tel:+49176731678"
          className="hover:text-primary transition-colors"
        >
          Piero Navarrete (+49 176 62057204)
        </a>
      </p>
    </Section>
  );
};
