import UButton from '@/common/components/atoms/UButton'
import UIconButton from '@/common/components/atoms/UIconButton'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { People } from '@/modules/People/business/People'
import { memo } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type SubscribeButtonProps = {
  people: People
}

const SubscribeButton = memo(function SubscribeButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  people,
}: SubscribeButtonProps) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient(['people'])

  if (isMobile) {
    return (
      <UIconButton variant="rounded" color="primary" size="xs">
        <BookmarkBorderOutlinedIcon />
      </UIconButton>
    )
  }

  return (
    <UButton
      variant="contained"
      color="primary"
      rounded
      startIcon={<BookmarkBorderOutlinedIcon width={24} height={24} />}
    >
      {t('page.subscribe.btn', { ns: 'people' })}
    </UButton>
  )
})

export default SubscribeButton
