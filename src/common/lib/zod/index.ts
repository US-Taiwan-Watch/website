import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'
import { makeZodI18nMap, ZodI18nMapOption } from 'zod-i18n-map'

/** 設定 zod i18n map, 使得 zod 錯誤能夠進行 i18n 轉換 */
export const setZodI18n = (option: ZodI18nMapOption) => {
  const errorMap = makeZodI18nMap(option)
  z.setErrorMap((issue, ctx) => {
    /**
     * 若使用 `discriminatedUnion`，error message 會先被 zod 攔截，
     * 無法透過 `.refine(() => false, { params: { i18n: "ageAdult" } })` 方式配置 i18n，
     * 因此透過 `errorMap` 攔截 `z.ZodIssueCode.invalid_union_discriminator`，
     * 並透過 `t` 取得 i18n 翻譯
     */
    if (issue.code === z.ZodIssueCode.invalid_union_discriminator) {
      const path = [issue.code, ...issue.path]
      const i18nKey = path.join('.')
      return { message: option.t?.(i18nKey) ?? i18nKey }
    }
    return errorMap(issue, ctx)
  })
}

/**
 * 取得 zod 的翻譯檔, 在套件本身的翻譯檔上增加 custom 的翻譯
 * @see https://github.com/aiji42/zod-i18n?tab=readme-ov-file#custom-errors
 * */
export const getZodTranslations = async (language: Language) => {
  const namespace = 'zod'
  const zodLanguage = (() => {
    switch (language) {
      case 'zh-TW':
        return 'zh-TW'
      case 'en-US':
        return 'en'
      default:
        return language
    }
  })()

  // Load translation file from "zod-i18n-map" package
  const zodTranslation = (
    await import(`zod-i18n-map/locales/${zodLanguage}/${namespace}.json`)
  ).default

  // Assign custom translations
  const customTranslations = await import(
    `@/common/lib/i18n/locales/${language}/${namespace}.json`
  )

  Object.assign(zodTranslation, customTranslations)
  return zodTranslation
}

/** 加入 i18n 後的 zod object, 需要使用此 object 來定義 schema 才有 i18n */
export { z }
