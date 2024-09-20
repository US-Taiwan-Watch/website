'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ContentImage from '@/modules/Opinion/components/OpinionPost/Content/ContentImage'

interface OpinionPostBannerProps {
  className?: string
  image: string
  caption: string
}

const OpinionPostBanner = function OpinionPostBanner({
  className,
  image,
  caption,
}: OpinionPostBannerProps) {
  return (
    <UFullWidthBackgroundBox className={className}>
      <ContentImage
        image={image}
        caption={caption}
        sx={{ margin: 'auto', width: '1400px', maxWidth: '100%' }}
      />
    </UFullWidthBackgroundBox>
  )
}

export default OpinionPostBanner
