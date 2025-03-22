import { memo } from 'react'
import UButton from '@/common/components/atoms/UButton'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UIconButton from '@/common/components/atoms/UIconButton'

type SubscribeButtonProps = {
  bill: Bill
}

const SubscribeButton = memo(function SubscribeButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bill,
}: SubscribeButtonProps) {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return (
      <UIconButton variant="rounded" color="primary" size="medium">
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
      Subscribe
    </UButton>
  )
})

export default SubscribeButton
