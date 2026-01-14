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
          The dress code for our wedding is <strong>semi-formal</strong>. 
          <br />
          We kindly encourage you to wear <strong>bright colours</strong> for our special day.
        </p>

        {/* ✅ Fixed alignment block */}
        <div className="mx-auto inline-block text-left">
          <div className="grid grid-cols-[24px_1fr] gap-x-3 gap-y-3 font-serif text-lg text-text">
            <Mars className="w-5 h-5 text-primary mt-1" />
            <span>Suits or slacks with a colourful shirt and/or tie</span>

            <Venus className="w-5 h-5 text-primary mt-1" />
            <span>Cocktail dresses or dressy separates in a nice colour</span>
          </div>
        </div>

        <p className="font-serif text-lg text-text">
          <strong>Please note:</strong> Our wedding ceremony will take place outdoors
          on grass, followed by an indoor reception.
        </p>
      </div>
    </Section>
  );
};
