import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

import pt from "../locales/pt.json";
import en from "../locales/en.json";

type Language = "pt" | "en";

const translations = {
  pt,
  en,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { language } = useLanguage() as { language: Language };
  const t = translations[language].contact;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost/send-contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponse(t.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse(data.error || t.error);
      }
    } catch {
      setResponse(t.connectionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-white">
        {t.title}
      </h1>

      <p className="mb-8 text-gray-400">
        {t.description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t.name}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-[#B6FF2E] focus:outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t.email}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-[#B6FF2E] focus:outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder={t.message}
          rows={5}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-[#B6FF2E] focus:outline-none resize-vertical"
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-[#B6FF2E] text-black px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#9EFF26] active:scale-95"
          }`}
        >
          {loading ? t.sending : t.send}
        </button>

        {response && (
          <div className="p-4 rounded-md bg-white/5 text-white">
            {response}
          </div>
        )}
      </form>
    </main>
  );
}
