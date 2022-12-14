/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "hi",
    name: "Hindi",
    country_code: "in",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

export default function LanguageSelector() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="container">
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
              style={{ listStyleType: "none", display: "flex",flexDirection:"row" }}
            >
              {languages.map(({ code, name, country_code }) => (
                <li
                  key={country_code}
                  style={{
                    fontSize: "18px",
                    margin: "10px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  <a
                    href="#"
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                  >
                    <span
                      className=""
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
