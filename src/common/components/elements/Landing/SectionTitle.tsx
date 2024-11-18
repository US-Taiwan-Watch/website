'use client'

import UHStack from '@/common/components/atoms/UHStack'
import ULinkText from '@/common/components/atoms/ULinkText'
import { StackProps, Typography, TypographyProps } from '@mui/material'
import { ReactNode } from 'react'
import type { UrlObject } from 'url'

export type SectionTitleProps = {
  containerProps?: StackProps
  title?: string
  titleProps?: TypographyProps
  renderTitle?: () => ReactNode
  renderEndComponent?: () => ReactNode
}

const SectionTitle = ({
  containerProps,
  title,
  titleProps,
  renderTitle,
  renderEndComponent,
}: SectionTitleProps) => {
  return (
    <UHStack
      justifyContent="space-between"
      alignItems="flex-end"
      {...containerProps}
    >
      {renderTitle ? (
        renderTitle()
      ) : (
        <Typography variant="h2" fontWeight={500} {...titleProps}>
          {title}
        </Typography>
      )}
      {renderEndComponent && renderEndComponent()}
    </UHStack>
  )
}

export default SectionTitle

export type SectionTitleWithLinkProps = SectionTitleProps & {
  link?: UrlObject | string
}

export const SectionTitleWithLink = ({
  title,
  renderTitle,
  link,
  containerProps,
  titleProps,
}: SectionTitleWithLinkProps) => {
  return (
    <SectionTitle
      containerProps={containerProps}
      title={title}
      titleProps={titleProps}
      renderTitle={renderTitle}
      {...(link && {
        renderEndComponent: () => <ULinkText link={link} />,
      })}
    />
  )
}
