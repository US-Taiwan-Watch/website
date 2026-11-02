'use client'

import { useCallback, useState } from 'react'

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return { isModalOpen, handleOpenModal, handleCloseModal }
}
