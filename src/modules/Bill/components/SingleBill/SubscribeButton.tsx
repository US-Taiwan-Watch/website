import { memo } from 'react'
import UButton from '@/common/components/atoms/UButton'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UIconButton from '@/common/components/atoms/UIconButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type SubscribeButtonProps = {
  bill: Bill
}

const SubscribeButton = memo(function SubscribeButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bill,
}: SubscribeButtonProps) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('bill')

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
      {t('page.subscribe.btn', {
        ns: 'bill',
      })}
    </UButton>
  )
})

export default SubscribeButton
