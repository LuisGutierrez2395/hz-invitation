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

      <div className="max-w-xl mx-auto space-y-6">
        <p className="font-serif text-lg text-text">
          The dress code for our wedding is <strong>semi-formal</strong>. We kindly encourage you to wear <strong>bright colours</strong> for our special day.
        </p>

        <p className="font-serif text-lg text-text">
          <strong>Gentlemen:</strong> Suits or slacks with a colourful shirt and/or tie
          <br />
          <strong>Ladies:</strong> Cocktail dresses or dressy separates in a nice colour
        </p>

        <p className="font-serif text-lg text-text">
          <strong>Please note:</strong> Our wedding ceremony will take place outdoors on grass, followed by an indoor reception.
        </p>
      </div>
    </Section>
  );
};
