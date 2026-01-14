import React from "react";
import { Section } from "./Section";
import { Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Gifts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="gifts" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Gift className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        {t("gifts.title")}
      </h2>

      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        {t("gifts.subtitle")}
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-8">
        {t("gifts.description")}
      </p>
    </Section>
  );
};
