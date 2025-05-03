import UButton from '@/common/components/atoms/UButton'
import UIconButton from '@/common/components/atoms/UIconButton'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { People } from '@/modules/People/business/People'
import { memo } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useAccount } from '@/modules/Account/providers/AccountProvider'

type SubscribeButtonProps = {
  people: People
}

const SubscribeButton = memo(function SubscribeButton({
  people,
}: SubscribeButtonProps) {
  const { subscribePeople } = useAccount()
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient(['people'])

  if (isMobile) {
    return (
      <UIconButton
        variant="rounded"
        color="primary"
        size="xs"
        onClick={() => subscribePeople(people)}
      >
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
      onClick={() => subscribePeople(people)}
    >
      {t('page.subscribe.btn', { ns: 'people' })}
    </UButton>
  )
})

export default SubscribeButton
