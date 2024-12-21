import React from 'react'
import OpinionStoreProvider from '@/modules/Opinion/providers/OpinionStoreProvider'

export default function OpinionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OpinionStoreProvider />
      {children}
    </>
  )
}
