import UContainer from '@/common/components/atoms/UContainer'
import type React from 'react'

interface SearchLayoutProps {
  children: React.ReactNode
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return <UContainer>{children}</UContainer>
}
