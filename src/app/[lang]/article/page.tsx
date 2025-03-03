import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArticleApi from '@/modules/Article/api/ArticleApi'
import ArticleLandingBannerCards from '@/modules/Article/components/ArticleLanding/ArticleLandingBannerCards'
import ArticlePostSection from '@/modules/Article/components/ArticleLanding/ArticlePostSection'
import ArticleNavbar from '@/modules/Article/components/ArticleNavbar'
import Stack from '@mui/material/Stack'

/**
 * 首頁橫幅卡片數量
 */
const ARTICLE_LANDING_BANNER_CARDS_LIMIT = 4

/**
 * 預設拉取的文章數量
 */
const ARTICLE_POST_COUNT = 9

export default async function Article() {
  const landingBannerArticles = await ArticleApi.getLandingArticles({
    limit: ARTICLE_LANDING_BANNER_CARDS_LIMIT,
  })

  const articles = await ArticleApi.getArticles({
    limit: ARTICLE_POST_COUNT,
  })

  return (
    <UContainer>
      <Stack flex={1}>
        <UFullWidthBackgroundBox>
          <ArticleNavbar />
        </UFullWidthBackgroundBox>
        {landingBannerArticles.length > 0 && (
          <ArticleLandingBannerCards articles={landingBannerArticles} />
        )}
        <ArticlePostSection defaultArticles={articles} />
      </Stack>
    </UContainer>
  )
}
