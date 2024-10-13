'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import OpinionPostAuthor from '@/modules/Opinion/components/OpinionPost/OpinionPostAuthor'
import OpinionPostBanner from '@/modules/Opinion/components/OpinionPost/OpinionPostBanner'
import OpinionPostContent from '@/modules/Opinion/components/OpinionPost/OpinionPostContent'
import OpinionPostDivider from '@/modules/Opinion/components/OpinionPost/OpinionPostDivider'
import OpinionPostFooter from '@/modules/Opinion/components/OpinionPost/OpinionPostFooter'
import OpinionPostHeader from '@/modules/Opinion/components/OpinionPost/OpinionPostHeader'
import OpinionPostRelatedPosts from '@/modules/Opinion/components/OpinionPost/OpinionPostRelatedPosts'
import { Container, Stack } from '@mui/material'
import { Opinion, OpinionArgs } from '@/modules/Opinion/classes/Opinion'
import OpinionFixed from '@/modules/Opinion/components/OpinionPost/OpinionFixed'

interface OpinionPostProps {
  opinionData: OpinionArgs
}

const OpinionPost = function OpinionPost({ opinionData }: OpinionPostProps) {
  const opinion = new Opinion(opinionData)

  return (
    <Stack gap={4} marginTop={10}>
      <Stack gap={4}>
        {/** Fixed 放這邊是為了讓他與 Header 切齊，也就是上一層 Container */}
        <OpinionFixed />
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
        <OpinionPostFooter tags={opinion.tags} resources={opinion.resources} />

        {/** Author Section */}
        <OpinionPostDivider />
        {opinion.author && (
          <>
            <OpinionPostAuthor author={opinion.author} />
            <OpinionPostDivider />
          </>
        )}
      </Stack>

      {/** Related Posts Section */}
      <UFullWidthBackgroundBox>
        <Container maxWidth="xl">
          <OpinionPostRelatedPosts />
        </Container>
      </UFullWidthBackgroundBox>
    </Stack>
  )
}

export default OpinionPost
