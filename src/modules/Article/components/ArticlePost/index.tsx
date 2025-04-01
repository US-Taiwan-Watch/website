import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArticlePostAuthor from '@/modules/Article/components/ArticlePost/ArticlePostAuthor'
import ArticlePostBanner from '@/modules/Article/components/ArticlePost/ArticlePostBanner'
import ArticlePostContent from '@/modules/Article/components/ArticlePost/ArticlePostContent'
import ArticlePostDivider from '@/modules/Article/components/ArticlePost/ArticlePostDivider'
import ArticlePostFooter from '@/modules/Article/components/ArticlePost/ArticlePostFooter'
import ArticlePostHeader from '@/modules/Article/components/ArticlePost/ArticlePostHeader'
import ArticlePostRelatedPosts from '@/modules/Article/components/ArticlePost/ArticlePostRelatedPosts'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Article } from '@/modules/Article/business/Article'
import ArticleFixed from '@/modules/Article/components/ArticlePost/ArticleFixed'
import ArticlePodcast from '@/modules/Article/components/ArticlePost/Content/ArticlePodcast'
import UContainer from '@/common/components/atoms/UContainer'

interface ArticlePostProps {
  article: Article
  relatedArticles?: Array<Article>
}

const ArticlePost = function ArticlePost({
  article,
  relatedArticles,
}: ArticlePostProps) {
  return (
    <Stack
      gap={{
        xs: 2,
        sm: 4,
      }}
      marginTop={{
        sm: 3,
        md: 5,
      }}
    >
      <Box>
        <ArticleFixed />
        <UContainer>
          <Box
            sx={{
              maxWidth: {
                xs: '100%',
                sm: '700px',
              },
              margin: '0 auto',
              px: {
                xs: 2,
                sm: 0,
              },
            }}
          >
            <Stack
              gap={{
                xs: 2,
                md: 4,
              }}
            >
              {/** Header Section */}
              <ArticlePostHeader article={article} />

              {/** Banner Section */}
              {article.bannerImage && (
                <ArticlePostBanner bannerImage={article.bannerImage} />
              )}

              {/** Content Section */}
              {article.content && (
                <ArticlePostContent content={article.content} />
              )}

              {/** Podcast Section */}
              {article.episodeId && (
                <ArticlePodcast episodeId={article.episodeId} />
              )}

              {/** Footer Section */}
              {article.tags &&
                article.tags.length > 0 &&
                article.resources &&
                article.resources.length > 0 && (
                  <>
                    <ArticlePostDivider />
                    <ArticlePostFooter
                      tags={article.tags}
                      resources={article.resources}
                    />
                  </>
                )}

              {/** Author Section */}
              <ArticlePostDivider />
              {article.authors && (
                <>
                  {article.authors.map((author) => (
                    <ArticlePostAuthor key={author.name} author={author} />
                  ))}
                  <ArticlePostDivider />
                </>
              )}
            </Stack>
          </Box>
        </UContainer>
      </Box>

      {/** Related Posts Section */}
      <UFullWidthBackgroundBox>
        <UContainer>
          <ArticlePostRelatedPosts articles={relatedArticles} />
        </UContainer>
      </UFullWidthBackgroundBox>
    </Stack>
  )
}

export default ArticlePost
