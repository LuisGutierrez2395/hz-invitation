import React from "react";
import { Section } from "./Section";
import { UserPen } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <UserPen className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        {t("contact.title")}
      </h2>

      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">
        {t("contact.subtitle")}
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-6">
        <Trans
          i18nKey="contact.intro"
          components={{ br: <br /> }}
        />
      </p>

      <p className="font-serif text-lg text-text max-w-xl mx-auto">
        <strong>{t("contact.maidOfHonor")}:</strong>{" "}
        <a
          href="tel:+4915783217817"
          className="hover:text-primary transition-colors"
        >
          Laura González (+49 157 83217817)
        </a>
        <br />
        <strong>{t("contact.bestMan")}:</strong>{" "}
        <a
          href="tel:+4917662057204"
          className="hover:text-primary transition-colors"
        >
          Piero Navarrete (+49 176 62057204)
        </a>
      </p>
    </Section>
  );
};
