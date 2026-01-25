import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArticleNavbar from '@/modules/Article/components/ArticleNavbar'
import ArticleSearchCategorySection from '@/modules/Article/components/ArticleSearch/ArticleSearchCategorySection'
import { ArticleType } from '@/modules/Article/business/Article'
import { Stack } from '@mui/material'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { Language } from '@/common/lib/i18n/types'

export default async function ArticleSearchCategory({
  params: { lang, categoryId },
}: {
  params: {
    lang: Language
    categoryId: string
  }
}) {
  const [category, highlightedCategories] = await Promise.all([
    ServerArticleApi.getCategory(lang, ArticleType.Article, categoryId),
    ServerArticleApi.getHighlightedCategories(lang, ArticleType.Article),
  ])
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <ArticleNavbar
          categories={highlightedCategories}
          activeId={categoryId}
        />
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
