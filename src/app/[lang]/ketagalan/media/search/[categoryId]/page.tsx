import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import KetagalanArticleNavbar from '@/modules/Article/components/KetagalanArticleNavbar'
import ArticleSearchCategorySection from '@/modules/Article/components/ArticleSearch/ArticleSearchCategorySection'
import { ArticleType } from '@/modules/Article/business/Article'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'

interface ArticleSearchCategoryProps {
  params: {
    lang: Language
    categoryId: string
  }
}

export const generateStaticParams = async ({
  params,
}: ArticleSearchCategoryProps) => {
  const categories = await ServerArticleApi.getCategories(
    params.lang,
    ArticleType.Ketagalan
  )
  return I18N_SUPPORTED_LANGUAGE.flatMap((lang) =>
    categories.map((category) => ({
      lang,
      categoryId: category.id,
    }))
  )
}

export default async function ArticleSearchCategory({
  params: { lang, categoryId },
}: ArticleSearchCategoryProps) {
  const [category, categories] = await Promise.all([
    ServerArticleApi.getCategory(lang, ArticleType.Ketagalan, categoryId),
    ServerArticleApi.getCategories(lang, ArticleType.Ketagalan),
  ])
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <KetagalanArticleNavbar categories={categories} activeId={categoryId} />
      </UFullWidthBackgroundBox>
      {category && (
        <ArticleSearchCategorySection
          category={category}
          articleType={ArticleType.Ketagalan}
        />
      )}
    </Stack>
  )
}
