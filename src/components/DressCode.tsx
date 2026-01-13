import React from 'react';
import { Section } from './Section';
import { Shirt, Mars, Venus } from 'lucide-react';

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

        <p className="font-serif text-lg text-text space-y-2">
          <span className="flex items-center justify-center gap-2">
            <Mars className="w-5 h-5 text-primary" />
            <span>Suits or slacks with a colourful shirt and/or tie</span>
          </span>

          <span className="flex items-center justify-center gap-2">
            <Venus className="w-5 h-5 text-primary" />
            <span>Cocktail dresses or dressy separates in a nice colour</span>
          </span>
        </p>

        <p className="font-serif text-lg text-text">
          <strong>Please note:</strong> Our wedding ceremony will take place outdoors on grass, followed by an indoor reception.
        </p>
      </div>
    </Section>
  );
};
