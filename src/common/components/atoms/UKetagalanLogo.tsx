import Image from 'next/image'
import { SxProps } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
interface UKetagalanLogoProps {
  width?: number
  height?: number
  sx?: SxProps
}

const StyledImage = styled(Image)(() => ({}))

const UKetagalanLogo = ({
  width = 271,
  height = 50,
  sx,
}: UKetagalanLogoProps) => {
  return (
    <StyledImage
      width={width}
      height={height}
      objectFit="contain"
      alt="Ketagalan Logo"
      src="/assets/logo/KetagalanLogo.png"
      sx={sx}
    />
  )
}

export default UKetagalanLogo
