'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/business/Bill'
import Link from 'next/link'
import { CongressIcon } from '@/common/styles/assets/Icons'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UIconButton from '@/common/components/atoms/UIconButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledTitleVersionButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

type Props = {
  bill: Bill
}

/**
 * 標題版本，連結到國會網站
 */
export default function TitleVersion({ bill }: Props) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('bill')

  return (
    <Link
      href={bill.congressGovUrl ?? ''}
      target="_blank"
      rel="noopener noreferrer"
    >
      {isMobile ? (
        <UIconButton variant="rounded" color="white" size="xs">
          <CongressIcon />
        </UIconButton>
      ) : (
        <StyledTitleVersionButton
          variant="contained"
          startIcon={<CongressIcon sx={{ width: 24, height: 24 }} />}
          rounded
        >
          {t('page.titleVersion.btn', {
            ns: 'bill',
          })}
        </StyledTitleVersionButton>
      )}
    </Link>
  )
}
