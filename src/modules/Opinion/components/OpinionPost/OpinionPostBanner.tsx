'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { OpinionImage } from '@/modules/Opinion/classes/Opinion'
import ContentImage from '@/modules/Opinion/components/OpinionPost/Content/ContentImage'

interface OpinionPostBannerProps {
  className?: string
  bannerImage: OpinionImage
}

const OpinionPostBanner = function OpinionPostBanner({
  className,
  bannerImage,
}: OpinionPostBannerProps) {
  return (
    <UFullWidthBackgroundBox className={className}>
      <ContentImage
        image={bannerImage.src}
        caption={bannerImage.caption}
        sx={{ margin: 'auto', width: '1400px', maxWidth: '100%' }}
      />
    </UFullWidthBackgroundBox>
  )
}

export default OpinionPostBanner
