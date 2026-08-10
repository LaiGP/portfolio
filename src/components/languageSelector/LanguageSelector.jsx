import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./languageSelector.scss";

const languages = [
  { code: "ca", label: "Català", flag: "/flags/ca.png" },
  { code: "es", label: "Español", flag: "/flags/es.png" },
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "fr", label: "Français", flag: "/flags/fr.png" },
  { code: "de", label: "Deutsch", flag: "/flags/de.png" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="languageSelector" ref={ref}>
      <button className="selected" onClick={() => setOpen(!open)}>
        <img src={current.flag} alt={current.label} />
      </button>

      {open && (
        <ul className="dropdown">
          {languages
            .filter((l) => l.code !== current.code)
            .map((lang) => (
              <li key={lang.code} onClick={() => handleSelect(lang.code)}>
                <img src={lang.flag} alt={lang.label} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;