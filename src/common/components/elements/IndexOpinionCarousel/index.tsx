'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import IndexOpinionCard from '@/common/components/elements/IndexOpinionCard'
import { Language } from '@/common/lib/i18n/types'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { OPINION_DTO_MOCK } from '@/modules/Opinion/dtoData'

import { Container } from '@mui/material'
import { useParams } from 'next/navigation'

const IndexOpinionCarousel = () => {
  const { lang } = useParams<{ lang: Language }>()
  const dtos = OPINION_DTO_MOCK.filter((dto) => dto.isFeatured)
  const opinions = dtos.map((dto) => Opinion.fromDTO(lang, dto))

  return (
    <UFullWidthBackgroundBox>
      <Container maxWidth="xl">
        <Carousel>
          {opinions.map((opinion) => (
            <IndexOpinionCard opinion={opinion} key={opinion.id} />
          ))}
        </Carousel>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

export default IndexOpinionCarousel
