import React from "react";
import { Section } from "./Section";
import { Signpost, Car, TrainFront, SquareParking } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Directions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="directions" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Signpost className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        {t("directions.title")}
      </h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        {t("directions.subtitle")}
      </p>

      <div className="max-w-xl mx-auto text-left space-y-8">
        {/* By car from Dresden */}
        <div className="flex gap-3">
          <Car className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>{t("directions.byCarFromDresden.title")}</strong>
            </p>
            <p className="font-sans text-text/70 text-sm mt-1">
              {t("directions.travelTimeLabel")}:{" "}
              {t("directions.byCarFromDresden.travelTime")}
            </p>
            <p className="font-serif text-lg text-text mt-2">
              {t("directions.byCarFromDresden.description")}
            </p>
          </div>
        </div>

        {/* By car from Bautzen */}
        <div className="flex gap-3">
          <Car className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>{t("directions.byCarFromBautzen.title")}</strong>
            </p>
            <p className="font-sans text-text/70 text-sm mt-1">
              {t("directions.travelTimeLabel")}:{" "}
              {t("directions.byCarFromBautzen.travelTime")}
            </p>
            <p className="font-serif text-lg text-text mt-2">
              {t("directions.byCarFromBautzen.description")}
            </p>
          </div>
        </div>

        {/* By train from Dresden */}
        <div className="flex gap-3">
          <TrainFront className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>{t("directions.byTrainFromDresden.title")}</strong>
            </p>
            <p className="font-sans text-text/70 text-sm mt-1">
              {t("directions.travelTimeLabel")}:{" "}
              {t("directions.byTrainFromDresden.travelTime")}
            </p>
            <p className="font-serif text-lg text-text mt-2">
              {t("directions.byTrainFromDresden.description")}
            </p>
          </div>
        </div>

        {/* Parking */}
        <div className="flex gap-3">
          <SquareParking className="text-primary w-5 h-5 mt-1 shrink-0" />
          <div>
            <p className="font-serif text-lg text-text">
              <strong>{t("directions.parking.title")}</strong>
            </p>

            <p className="font-serif text-lg text-text mt-2">
              {t("directions.parking.description")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
