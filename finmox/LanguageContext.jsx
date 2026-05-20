import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const languageConfig = {
    en: { name: 'English', direction: 'ltr' },
    kn: { name: 'ಕನ್ನಡ', direction: 'ltr' }
};

export const LanguageProvider = ({ children }) => {
    // Initialize language from URL, SessionStorage, or default to 'en'
    const [language, setLanguage] = useState(() => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang') || sessionStorage.getItem('preferredLanguage') || 'en';
    });

    useEffect(() => {
        // Persist language to session storage
        sessionStorage.setItem('preferredLanguage', language);
        
        // Update HTML attributes for Accessibility and SEO
        document.documentElement.lang = language;
        document.documentElement.dir = languageConfig[language].direction;
        
        // Dispatch event just in case external non-React libraries need it
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }));
    }, [language]);

    const switchLanguage = (lang) => setLanguage(lang);

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);