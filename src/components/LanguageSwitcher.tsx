import React from "react";
import { useTranslation } from "react-i18next";

type Lang = "en" | "de";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const current = ((i18n.resolvedLanguage ?? i18n.language ?? "en") as Lang) ===
  "de"
    ? "de"
    : "en";

  const setLanguage = (lng: Lang) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    localStorage.setItem("lang_confirmed", "1");
    document.documentElement.lang = lng;
  };

  const buttonClass = (active: boolean) =>
    [
      "px-3 py-1 rounded-md border text-sm transition-colors",
      active
        ? "bg-primary text-white border-primary"
        : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
    ].join(" ");

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={current === "en"}
        className={buttonClass(current === "en")}
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLanguage("de")}
        aria-pressed={current === "de"}
        className={buttonClass(current === "de")}
      >
        DE
      </button>
    </div>
  );
};
