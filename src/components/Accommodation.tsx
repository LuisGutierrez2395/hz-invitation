import React from "react";
import { Section } from "./Section";
import { BedDouble } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const Accommodation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="accommodation" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <BedDouble className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        {t("accommodation.title")}
      </h2>

      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        {t("accommodation.subtitle")}
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-6">
        <Trans
          i18nKey="accommodation.descriptionPrimary"
          values={{ date: "31.03.2026" }}
          components={{ strong: <strong />, br: <br /> }}
        />
      </p>

      <div className="flex justify-center mb-6">
        <a
          href="https://bildungsgut-schmochtitz.de/uebernachtung/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-primary text-white font-sans text-sm rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <BedDouble size={16} />
          {t("accommodation.bookOnSite")}
        </a>
      </div>

      <p className="font-serif text-lg text-text max-w-xl mx-auto">
        <Trans
          i18nKey="accommodation.descriptionSecondary"
          values={{ cities: t("accommodation.cities", "Bautzen or Dresden") }}
          components={{ strong: <strong /> }}
        />
      </p>
    </Section>
  );
};
