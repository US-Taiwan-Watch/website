'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import OpinionPostAuthor from '@/modules/Opinion/components/OpinionPost/OpinionPostAuthor'
import OpinionPostBanner from '@/modules/Opinion/components/OpinionPost/OpinionPostBanner'
import OpinionPostContent from '@/modules/Opinion/components/OpinionPost/OpinionPostContent'
import OpinionPostDivider from '@/modules/Opinion/components/OpinionPost/OpinionPostDivider'
import OpinionPostFooter from '@/modules/Opinion/components/OpinionPost/OpinionPostFooter'
import OpinionPostHeader from '@/modules/Opinion/components/OpinionPost/OpinionPostHeader'
import OpinionPostRelatedPosts from '@/modules/Opinion/components/OpinionPost/OpinionPostRelatedPosts'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import OpinionFixed from '@/modules/Opinion/components/OpinionPost/OpinionFixed'
import OpinionPodcast from '@/modules/Opinion/components/OpinionPost/Content/OpinionPodcast'

interface OpinionPostProps {
  opinion: Opinion
  relatedOpinions?: Array<Opinion>
}

const OpinionPost = function OpinionPost({
  opinion,
  relatedOpinions,
}: OpinionPostProps) {
  return (
    <Stack gap={4} marginTop={10}>
      <Box>
        <OpinionFixed />
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <Stack gap={4}>
              {/** Header Section */}
              <OpinionPostHeader
                categories={opinion.categories}
                title={opinion.title}
                subtitle={opinion.subtitle}
                date={opinion.date}
                tags={opinion.tags}
                repostSources={opinion.repostSources}
                authors={opinion.authors}
              />
              {/** Banner Section */}
              {opinion.bannerImage && (
                <OpinionPostBanner bannerImage={opinion.bannerImage} />
              )}

              {/** Content Section */}
              {opinion.content && (
                <OpinionPostContent content={opinion.content} />
              )}

              {/** Podcast Section */}
              {opinion.episodeId && (
                <OpinionPodcast episodeId={opinion.episodeId} />
              )}

              {/** Footer Section */}
              {opinion.tags &&
                opinion.tags.length > 0 &&
                opinion.resources &&
                opinion.resources.length > 0 && (
                  <>
                    <OpinionPostDivider />
                    <OpinionPostFooter
                      tags={opinion.tags}
                      resources={opinion.resources}
                    />
                  </>
                )}

              {/** Author Section */}
              <OpinionPostDivider />
              {opinion.authors && (
                <>
                  {opinion.authors.map((author) => (
                    <OpinionPostAuthor key={author.name} author={author} />
                  ))}
                  <OpinionPostDivider />
                </>
              )}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/** Related Posts Section */}
      <UFullWidthBackgroundBox>
        <Container maxWidth="lg">
          <OpinionPostRelatedPosts opinions={relatedOpinions} />
        </Container>
      </UFullWidthBackgroundBox>
    </Stack>
  )
}

export default OpinionPost
