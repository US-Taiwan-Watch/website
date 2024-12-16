import React from 'react'
import CategoryProvider from '@/modules/Opinion/providers/CategoryProvider'

export default function OpinionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CategoryProvider />
      {children}
    </>
  )
}
