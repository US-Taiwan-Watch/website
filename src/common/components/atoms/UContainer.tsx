import { Container, ContainerProps } from '@mui/material'

export default function UContainer({ children, ...props }: ContainerProps) {
  return (
    <Container
      maxWidth="lg"
      {...props}
      sx={{ flex: 1, display: 'flex', flexDirection: 'column', ...props.sx }}
    >
      {children}
    </Container>
  )
}
