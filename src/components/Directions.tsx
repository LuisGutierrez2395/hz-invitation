import React from 'react';
import { Section } from './Section';
import { Signpost, Car, TrainFront, SquareParking } from 'lucide-react';

export const Directions: React.FC = () => {
  return (
    <Section id="directions" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Signpost className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">Directions</h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        How to get there
      </p>

      <div className="max-w-xl mx-auto text-left space-y-8">
        {/* By car from Dresden */}
        <div className="flex gap-3">
          <Car className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>By car from Dresden</strong>
            </p>
            <p className="font-sans text-text/70 text-sm mt-1">
              Travel time: ~45–60 min
            </p>
            <p className="font-serif text-lg text-text mt-2">
              Take A4 until exit Salzenforst, follow signage to Schmochtitz.
            </p>
          </div>
        </div>

        {/* By car from Bautzen */}
        <div className="flex gap-3">
          <Car className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>By car from Bautzen</strong>
            </p>
            <p className="font-sans text-text/70 text-sm mt-1">
              Travel time: ~10–15 min
            </p>
            <p className="font-serif text-lg text-text mt-2">
              Take S111 until Dreistern, turn right onto S106, follow signage to Schmochtitz.
            </p>
          </div>
        </div>

        {/* By train from Dresden */}
        <div className="flex gap-3">
          <TrainFront className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>By train from Dresden</strong>
            </p>
            <p className="font-sans text-text/70 text-sm mt-1">
              Travel time: ~60–75 min
            </p>
            <p className="font-serif text-lg text-text mt-2">
              Take RE1/RB60 from Dresden until Bautzen and take a taxi from Bautzen station to location (~10km).
            </p>
          </div>
        </div>

        {/* Parking */}
        <div className="flex gap-3">
          <SquareParking className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>Parking</strong>
            </p>

            <p className="font-serif text-lg text-text mt-2">
              Free parking is available, look for signage on site.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
