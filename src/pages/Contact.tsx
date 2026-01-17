import { useLanguage } from "../contexts/LanguageContext";

import pt from "../locales/pt.json";
import en from "../locales/en.json";

type Language = "pt" | "en";

const translations = {
  pt,
  en,
};

export default function Contact() {
  const { language } = useLanguage() as { language: Language };

  const t = translations[language].contact;

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        {t.title}
      </h1>

      <p className="mb-8 text-textSecondary">
        {t.subtitle}
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder={t.name}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md"
        />

        <input
          type="email"
          placeholder={t.email}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md"
        />

        <textarea
          placeholder={t.message}
          rows={5}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md"
        />

        <button
          type="submit"
          className="bg-accent-green text-black px-6 py-3 rounded-md font-semibold"
        >
          {t.send}
        </button>
      </form>
    </main>
  );
}
