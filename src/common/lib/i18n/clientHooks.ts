"use client";

import i18next from "i18next";
import { useEffect, useState } from "react";
import {
  initReactI18next,
  UseTranslationOptions,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";
import { Language } from "./types";

const runsOnServerSide = typeof window === "undefined";

/**
 * On client side the normal i18next singleton is ok.
 * It will be initialized just once. And we can make use of the "normal" useTranslation hook.
 * We just wrap it to have the possibility to pass in the language.
 * To align with the server side language detection we make use of i18next-browser-languagedetector and configure it accordingly.
 * https://github.com/i18next/i18next-browser-languageDetector
 */

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: Language, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(
  lang: Language,
  namespace?: string,
  options?: UseTranslationOptions<string>,
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(namespace, options);
  const { i18n } = ret;
  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lang || i18n.resolvedLanguage === lang) return;
      i18n.changeLanguage(lang);
    }, [lang, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === lang) return;
      setCookie(cookieName, lang, { path: "/" });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang, cookies.i18next]);
  }
  return ret;
}
