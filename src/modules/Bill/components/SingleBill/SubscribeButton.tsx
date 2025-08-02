import { memo, useState, useEffect } from 'react'
import UButton from '@/common/components/atoms/UButton'
import { BookmarkFilledIcon, BookmarkIcon } from '@/common/styles/assets/Icons'
import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UIconButton from '@/common/components/atoms/UIconButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useAccount } from '@/modules/Account/providers/AccountProvider'

type SubscribeButtonProps = {
  bill: Bill
}

const SubscribeButton = memo(function SubscribeButton({
  bill,
}: SubscribeButtonProps) {
  const { subscribeBill, isMutating, checkIfBillIsSubscribed } = useAccount()
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('bill')

  const [isSubscribed, setIsSubscribed] = useState(false)
  useEffect(() => {
    setIsSubscribed(checkIfBillIsSubscribed(bill))
  }, [checkIfBillIsSubscribed, bill])

  if (isMobile) {
    return (
      <UIconButton
        variant="rounded"
        color="primary"
        size="xs"
        onClick={async () => {
          await subscribeBill(bill)
          setIsSubscribed(true)
        }}
        disabled={isMutating}
      >
        {isSubscribed ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </UIconButton>
    )
  }

  return (
    <UButton
      variant="contained"
      color="primary"
      rounded
      startIcon={
        isSubscribed ? (
          <BookmarkFilledIcon sx={{ width: 24, height: 24 }} />
        ) : (
          <BookmarkIcon sx={{ width: 24, height: 24 }} />
        )
      }
      onClick={async () => {
        await subscribeBill(bill)
        setIsSubscribed(true)
      }}
      disabled={isMutating}
    >
      {t(isSubscribed ? 'page.subscribed.btn' : 'page.subscribe.btn', {
        ns: 'bill',
      })}
    </UButton>
  )
})

export default SubscribeButton
