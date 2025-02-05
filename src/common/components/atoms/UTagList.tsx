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
import Box from '@mui/material/Box'
import { Fragment, ReactNode, useRef, useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'

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
  containerProps?: StackProps
  moreButtonProps?: UCategoryTagProps
}

export default function UTagList({
  tags,
  containerProps,
  moreButtonProps,
}: Props) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const containerRef = useRef<HTMLDivElement>(null)
  const moreButtonRef = useRef<HTMLDivElement>(null)
  const [visibleIndex, setVisibleIndex] = useState<number>(tags.length - 1)
  const [calculated, setCalculated] = useState<boolean>(false)

  // 計算超出寬度的標籤數量
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    if (!container) return

    const moreButton = moreButtonRef.current
    if (!moreButton) return

    const maxWidth = container.clientWidth - moreButton.clientWidth - 8 // 8px for gap

    let currentWidth = 0
    let newVisibleIndex = 0

    // 重置所有標籤為可見
    container.querySelectorAll('.category-tag').forEach((tag, index) => {
      const tagWidth = (tag as HTMLElement).offsetWidth
      if (currentWidth + tagWidth < maxWidth) {
        newVisibleIndex = index
      }
      currentWidth += tagWidth + 8 // 8px for gap
    })

    setVisibleIndex(newVisibleIndex)
    setCalculated(true)
  }, [tags])

  const tagLeftCount = tags.length - 1 - visibleIndex

  return (
    <>
      <UHStack
        ref={containerRef}
        alignItems="center"
        width="100%"
        overflow="hidden"
        visibility={calculated ? 'visible' : 'hidden'}
        flexWrap={calculated ? 'wrap' : 'nowrap'}
        {...containerProps}
      >
        {tags.slice(0, visibleIndex + 1).map((tag, index) => (
          <Fragment key={index}>{tag}</Fragment>
        ))}
        <Box
          sx={{
            visibility: tagLeftCount > 0 ? 'visible' : 'hidden',
          }}
          ref={moreButtonRef}
        >
          <MoreButton
            count={tagLeftCount}
            {...moreButtonProps}
            onClick={(e) => {
              e.stopPropagation()
              handleOpenModal()
              moreButtonProps?.onClick?.(e)
            }}
          />
        </Box>
      </UHStack>

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
    </>
  )
}
