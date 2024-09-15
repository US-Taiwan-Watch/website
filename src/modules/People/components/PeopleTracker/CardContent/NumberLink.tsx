import UIconButton from '@/common/components/atoms/UIconButton'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Stack, Typography, useTheme } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import UContentCard from '@/common/components/atoms/UContentCard'

const StyledArrowOutwardIcon = styled(ArrowOutwardIcon)(({ theme }) => ({
  color: theme.color.grey[400],
}))

interface NumberLinkProps {
  title: string
  number: number
  onModalOpen?: () => void
}

const NumberLink = function ({ title, number, onModalOpen }: NumberLinkProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCard>
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        position="relative"
      >
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.neutral[500] }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {title.toLowerCase()}
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          {number}
        </Typography>
        <UIconButton
          variant="rounded"
          size="small"
          color="inherit"
          onClick={onModalOpen}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        >
          <StyledArrowOutwardIcon />
        </UIconButton>
      </Stack>
    </UContentCard>
  )
}

export default NumberLink
