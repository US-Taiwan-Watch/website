import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import type React from 'react'

interface FullWidthScrollableListWrapperProps {
  children: React.ReactNode
}

export default function FullWidthScrollableListWrapper({
  children,
}: FullWidthScrollableListWrapperProps) {
  return <UFullWidthBackgroundBox>{children}</UFullWidthBackgroundBox>
}
