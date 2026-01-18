import React from "react";
import { Section } from "./Section";
import { Shirt, Mars, Venus } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const DressCode: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="dress-code" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Shirt className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        {t("dressCode.title")}
      </h2>

      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        {t("dressCode.subtitle")}
      </p>

      <div className="max-w-xl mx-auto space-y-6">
        <p className="font-serif text-lg text-text">
          <Trans
            i18nKey="dressCode.intro"
            components={{ strong: <strong />, br: <br /> }}
          />
        </p>

        {/* Outfit suggestions */}
        <div className="mx-auto inline-block text-left">
          <div className="grid grid-cols-[24px_1fr] gap-x-3 gap-y-3 font-serif text-lg text-text">
            <Mars className="w-5 h-5 text-primary mt-1" />
            <span>{t("dressCode.men")}</span>

            <Venus className="w-5 h-5 text-accent mt-1" />
            <span>{t("dressCode.women")}</span>
          </div>
        </div>

        <p className="font-serif text-lg text-text">
          <Trans
            i18nKey="dressCode.note"
            components={{ strong: <strong /> }}
          />
        </p>
      </div>
    </Section>
  );
};
