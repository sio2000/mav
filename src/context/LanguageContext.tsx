import React, { createContext, useContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from '../locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

interface LanguageContextType {
  currentLanguage: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'el' : 'en';
    setCurrentLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};