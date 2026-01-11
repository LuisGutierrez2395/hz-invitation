import React from 'react';
import { Section } from './Section';
import { Shirt } from 'lucide-react';

export const DressCode: React.FC = () => {
  return (
    <Section id="dress-code" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Shirt className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        Dress code
      </h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        What to wear
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto">
        Please dress formal. Our ceremony will take place on the lawn, followed by an indoor reception.
      </p>
    </Section>
  );
};
