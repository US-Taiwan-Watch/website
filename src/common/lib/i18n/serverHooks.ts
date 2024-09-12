import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { Language } from "./types";

const initI18next = async (lang: Language) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel

  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: Language, namespace: string) => {
        return import(`./locales/${language}/${namespace}.json`);
      }),
    )
    .init(getOptions(lang));
  return i18nInstance;
};

export async function useTranslation(
  lang: Language,
  namespace?: string,
  options?: {
    keyPrefix?: string;
  },
) {
  const i18nextInstance = await initI18next(lang);
  return {
    t: i18nextInstance.getFixedT(lang, namespace, options?.keyPrefix),
    i18n: i18nextInstance,
  };
}
