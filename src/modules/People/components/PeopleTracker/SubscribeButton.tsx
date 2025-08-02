import UButton from '@/common/components/atoms/UButton'
import UIconButton from '@/common/components/atoms/UIconButton'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { People } from '@/modules/People/business/People'
import { memo, useState, useEffect } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { BookmarkFilledIcon, BookmarkIcon } from '@/common/styles/assets/Icons'

type SubscribeButtonProps = {
  people: People
}

const SubscribeButton = memo(function SubscribeButton({
  people,
}: SubscribeButtonProps) {
  const { subscribePeople, isMutating, checkIfPeopleIsSubscribed } =
    useAccount()
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient(['people'])

  const [isSubscribed, setIsSubscribed] = useState(false)
  useEffect(() => {
    setIsSubscribed(checkIfPeopleIsSubscribed(people))
  }, [checkIfPeopleIsSubscribed, people])

  if (isMobile) {
    return (
      <UIconButton
        variant="rounded"
        color="primary"
        size="xs"
        onClick={async () => {
          await subscribePeople(people)
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
        await subscribePeople(people)
        setIsSubscribed(true)
      }}
      disabled={isMutating}
    >
      {t(isSubscribed ? 'page.subscribed.btn' : 'page.subscribe.btn', {
        ns: 'people',
      })}
    </UButton>
  )
})

export default SubscribeButton
