import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import KetagalanArticleNavbar from '@/modules/Article/components/KetagalanArticleNavbar'
import ArticleSearchCategorySection from '@/modules/Article/components/ArticleSearch/ArticleSearchCategorySection'
import { ArticleType } from '@/modules/Article/business/Article'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'

export default async function ArticleSearchCategory({
  params: { lang, categoryId },
}: {
  params: {
    lang: Language
    categoryId: string
  }
}) {
  const [category, highlightedCategories] = await Promise.all([
    ServerArticleApi.getCategory(lang, ArticleType.Ketagalan, categoryId),
    ServerArticleApi.getHighlightedCategories(lang, ArticleType.Ketagalan),
  ])
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <KetagalanArticleNavbar
          categories={highlightedCategories}
          activeId={categoryId}
        />
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
