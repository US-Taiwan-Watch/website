'use client'

import UCategoryTag, {
  UCategoryTagProps,
} from '@/common/components/atoms/UCategoryTag'
import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import useModal from '@/common/hooks/useModal'
import { StackProps, useTheme } from '@mui/material'
import { Fragment, type ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'

// NOTE: 預設顯示 5 個（mobile 3 個）
const DEFAULT_MAX_COUNT = 5

type MoreButtonProps = {
  count: number
} & UCategoryTagProps

const MoreButton = ({ count, ...props }: MoreButtonProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <UCategoryTag
      value={`+${count} More`}
      containerProps={{
        sx: {
          backgroundColor: 'transparent',
          color: theme.color.grey[600],
          px: 0.5,
        },
      }}
      {...props}
    />
  )
}

type Props = {
  tags: ReactNode[]
  maxTags?: number
  containerProps?: StackProps
  moreButtonProps?: UCategoryTagProps
}

export default function UTagList({
  tags,
  maxTags = DEFAULT_MAX_COUNT,
  containerProps,
  moreButtonProps,
}: Props) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const isOverLimit = tags.length > maxTags

  return (
    <>
      <UHStack
        alignItems="center"
        {...(isOverLimit && {
          // NOTE: 先假設 tag 數量未超過上限時，字數不會爆版。若實際資料單一 tag 字數過長，則一律加上 maxWidth
          sx: {
            '.category-tag': {
              maxWidth: '100px',
            },
          },
        })}
        {...containerProps}
      >
        {tags.slice(0, maxTags).map((tag, index) => (
          <Fragment key={index}>{tag}</Fragment>
        ))}
        {isOverLimit && (
          <MoreButton
            count={tags.length - maxTags}
            {...moreButtonProps}
            onClick={(e) => {
              e.stopPropagation()
              handleOpenModal()
              moreButtonProps?.onClick?.(e)
            }}
          />
        )}

        {isModalOpen && (
          <UContentCardDialog open={isModalOpen} onClose={handleCloseModal}>
            <UContentCard
              withHeader={true}
              headerProps={{
                title: 'Tags',
                action: (
                  <UIconButton
                    variant="rounded"
                    color="inherit"
                    size="small"
                    onClick={handleCloseModal}
                  >
                    <CloseIcon sx={{ color: theme.color.neutral[500] }} />
                  </UIconButton>
                ),
              }}
              sx={{
                padding: 0,
                border: 'none',
                borderRadius: 0,
              }}
            >
              <UHStack
                gap={1}
                pt={3}
                pb={2}
                flexWrap="wrap"
                sx={{
                  '.category-tag': {
                    maxWidth: 'unset',
                  },
                }}
              >
                {tags.map((tag, index) => (
                  <Fragment key={index}>{tag}</Fragment>
                ))}
              </UHStack>
            </UContentCard>
          </UContentCardDialog>
        )}
      </UHStack>
    </>
  )
}
