import * as React from 'react'
import Container from '@mui/material/Container'
import IndexKvCards from '@/common/components/elements/IndexKvCards'
import { Stack } from '@mui/material'

export default function Home () {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" gap={10} alignContent="center" justifyContent="center">
        <IndexKvCards />
      </Stack>
    </Container>
  )
}
