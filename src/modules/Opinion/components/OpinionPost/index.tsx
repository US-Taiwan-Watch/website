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

interface OpinionPostProps {
  opinion: Opinion
}

const OpinionPost = function OpinionPost({ opinion }: OpinionPostProps) {
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
              />
              {/** Banner Section */}
              {opinion.bannerImage && (
                <OpinionPostBanner bannerImage={opinion.bannerImage} />
              )}

              {/** Content Section */}
              {opinion.contentHtml && (
                <OpinionPostContent contentHtml={opinion.contentHtml} />
              )}

              {/** Footer Section */}
              <OpinionPostDivider />
              <OpinionPostFooter
                tags={opinion.tags}
                resources={opinion.resources}
              />

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
          <OpinionPostRelatedPosts />
        </Container>
      </UFullWidthBackgroundBox>
    </Stack>
  )
}

export default OpinionPost
