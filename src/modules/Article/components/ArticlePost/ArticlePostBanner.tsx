'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { Article } from '@/modules/Article/business/Article'
import ContentImage from '@/modules/Article/components/ArticlePost/Content/ContentImage'

interface ArticlePostBannerProps {
  className?: string
  bannerImage: NonNullable<Article['bannerImage']>
}

const ArticlePostBanner = function ArticlePostBanner({
  className,
  bannerImage,
}: ArticlePostBannerProps) {
  return (
    <UFullWidthBackgroundBox className={className}>
      <ContentImage
        image={bannerImage.src}
        caption={bannerImage.caption}
        sx={{ margin: 'auto', width: '1000px', maxWidth: '100%' }}
      />
    </UFullWidthBackgroundBox>
  )
}

export default ArticlePostBanner
