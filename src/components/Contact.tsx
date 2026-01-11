import React from 'react';
import { Section } from './Section';
import { Users } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Users className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        Contact
      </h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        We are happy to help
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-6">
        If you want to organize a game or want further information please contact our witnesses:
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto">
        <strong>Piero Navarrete</strong>:{" "}
        <a
          href="tel:+491762819394"
          className="underline hover:text-primary transition-colors"
        >
          +49 176 281 9394
        </a>
        <br />
        <strong>Laura Gonzalez</strong>:{" "}
        <a
          href="tel:+49176731678"
          className="underline hover:text-primary transition-colors"
        >
          +49 176 731 678
        </a>
      </p>
    </Section>
  );
};
