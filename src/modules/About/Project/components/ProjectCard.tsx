'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Project } from '@/modules/About/Project/business/Project'
import { Typography, Stack, useTheme } from '@mui/material'
import Image from 'next/image'

const StyledImage = styled(Image)(() => ({}))

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      p={2.5}
      gap={{
        xs: 2,
        sm: 4.5,
      }}
      sx={{
        borderRadius: '15px',
        backgroundColor: theme.color.about.card.backgroundColor,
      }}
    >
      <StyledImage
        width={200}
        height={200}
        src={project.image}
        alt={project.title}
        sx={{
          borderRadius: 2,
          scale: 1,
          width: {
            xs: '100%',
            sm: '200px',
          },
          height: {
            xs: 'auto',
            sm: '200px',
          },
        }}
        objectFit="cover"
      />
      <Stack gap={1.5}>
        <Typography
          sx={{
            fontSize: {
              xs: '1.125rem',
              lg: '1.5rem',
            },
            fontWeight: 700,
          }}
        >
          {project.title}
        </Typography>
        <Typography variant="bodyS">{project.description}</Typography>
      </Stack>
    </Stack>
  )
}
