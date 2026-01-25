import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArticleNavbar from '@/modules/Article/components/ArticleNavbar'
import ArticleSearchCategorySection from '@/modules/Article/components/ArticleSearch/ArticleSearchCategorySection'
import { ArticleType } from '@/modules/Article/business/Article'
import { Stack } from '@mui/material'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { Language } from '@/common/lib/i18n/types'
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
    ArticleType.Article
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
    ServerArticleApi.getCategory(lang, ArticleType.Article, categoryId),
    ServerArticleApi.getCategories(lang, ArticleType.Article),
  ])
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <ArticleNavbar categories={categories} activeId={categoryId} />
      </UFullWidthBackgroundBox>
      {category && (
        <ArticleSearchCategorySection
          category={category}
          articleType={ArticleType.Article}
        />
      )}
    </Stack>
  )
}
