'use client'

import React, { useState, useCallback, useRef } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Paper,
  Slider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  CloudUpload,
  Delete,
  Crop,
  ZoomIn,
  ZoomOut,
  RotateLeft,
  RotateRight,
} from '@mui/icons-material'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface UImageUploaderProps {
  cropDialogTitle?: string
  caption?: string | React.ReactNode
  value?: Blob | null
  onChange?: (blob: Blob | null) => void
  enableCrop?: boolean
  cropAspectRatio?: number // width/height ratio, e.g., 16/9 = 1.78
}

const StyledUploadArea = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  border: `2px dashed ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.info.main,
  },
  '&.dragover': {
    borderColor: theme.palette.info.main,
    backgroundColor: theme.palette.action.hover,
  },
}))

const StyledPreviewContainer = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  maxWidth: '100%',
})

const StyledPreviewImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '300px',
  borderRadius: theme.shape.borderRadius,
  display: 'block',
}))

const StyledPreviewActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
}))

const StyledActionButton = styled(IconButton)(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(4px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
}))

const StyledCropContainer = styled(Box)({
  position: 'relative',
  maxWidth: '100%',
  maxHeight: '400px',
  overflow: 'hidden',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledCropImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
})

const StyledCropOverlay = styled(Box)({
  position: 'absolute',
  border: '2px solid #fff',
  cursor: 'move',
  background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
  userSelect: 'none',
  touchAction: 'none',
})

const StyledResizeHandle = styled(Box)(() => ({
  position: 'absolute',
  width: '12px',
  height: '12px',
  background: '#fff',
  border: '1px solid #333',
  borderRadius: '50%',
  cursor: 'pointer',
  touchAction: 'none',
  '&:hover': {
    transform: 'scale(1.2)',
    transition: 'transform 0.2s ease',
  },
  '&.nw-resize': {
    top: '-6px',
    left: '-6px',
    cursor: 'nw-resize',
  },
  '&.ne-resize': {
    top: '-6px',
    right: '-6px',
    cursor: 'ne-resize',
  },
  '&.sw-resize': {
    bottom: '-6px',
    left: '-6px',
    cursor: 'sw-resize',
  },
  '&.se-resize': {
    bottom: '-6px',
    right: '-6px',
    cursor: 'se-resize',
  },
  '&.n-resize': {
    top: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'n-resize',
  },
  '&.s-resize': {
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 's-resize',
  },
  '&.w-resize': {
    left: '-6px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'w-resize',
  },
  '&.e-resize': {
    right: '-6px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'e-resize',
  },
  // 手機端樣式
  '@media (max-width: 768px)': {
    width: '12px',
    height: '12px',
    '&.nw-resize': {
      top: '-6px',
      left: '-6px',
    },
    '&.ne-resize': {
      top: '-6px',
      right: '-6px',
    },
    '&.sw-resize': {
      bottom: '-6px',
      left: '-6px',
    },
    '&.se-resize': {
      bottom: '-6px',
      right: '-6px',
    },
    '&.n-resize': {
      top: '-6px',
    },
    '&.s-resize': {
      bottom: '-6px',
    },
    '&.w-resize': {
      left: '-6px',
    },
    '&.e-resize': {
      right: '-6px',
    },
  },
}))

const StyledSliderContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}))

const StyledControlsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}))

const StyledHiddenInput = styled('input')({
  display: 'none',
})

const StyledUploadIcon = styled(CloudUpload)(({ theme }) => ({
  fontSize: 48,
  color: theme.palette.grey[400],
}))

interface CropArea {
  x: number
  y: number
  width: number
  height: number
}

const UImageUploader: React.FC<UImageUploaderProps> = ({
  caption,
  cropDialogTitle,
  value,
  onChange,
  enableCrop = true,
  cropAspectRatio,
}) => {
  const { t } = useTranslationClient('common')
  const [isDragOver, setIsDragOver] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [cropDialogOpen, setCropDialogOpen] = useState(false)
  const [cropImageUrl, setCropImageUrl] = useState<string | null>(null)
  const [cropArea, setCropArea] = useState<CropArea>({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  })
  const [imageScale, setImageScale] = useState(1)
  const [imageRotation, setImageRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeHandle, setResizeHandle] = useState<string>('')
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({
    x: 0,
    y: 0,
    cropArea: { x: 0, y: 0, width: 0, height: 0 },
  })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const cropImageRef = useRef<HTMLImageElement>(null)
  const cropContainerRef = useRef<HTMLDivElement>(null)

  // 使用 useEffect 綁定觸控事件以支持 preventDefault
  React.useEffect(() => {
    const cropContainer = cropContainerRef.current
    if (!cropContainer) return

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging || isResizing) {
        e.preventDefault() // 防止頁面滾動

        const touch = e.touches[0]
        const containerRect = cropContainer.getBoundingClientRect()
        const touchX = touch.clientX - containerRect.left
        const touchY = touch.clientY - containerRect.top

        updateCropArea(touchX, touchY, containerRect)
      }
    }

    // 以非被動模式綁定事件
    cropContainer.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    })

    return () => {
      cropContainer.removeEventListener('touchmove', handleTouchMove)
    }
  }, [
    isDragging,
    isResizing,
    dragStart,
    resizeStart,
    cropArea,
    cropAspectRatio,
  ])

  // 初始化預覽
  React.useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value)
      setPreviewUrl(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setPreviewUrl(null)
    }
  }, [value])

  // 處理文件選擇
  const handleFileSelect = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) {
        return
      }

      if (enableCrop) {
        const url = URL.createObjectURL(file)
        setCropImageUrl(url)
        setCropDialogOpen(true)
      } else {
        onChange?.(file)
      }
    },
    [enableCrop, onChange]
  )

  // 點擊上傳
  const handleClick = () => {
    fileInputRef.current?.click()
  }

  // 文件輸入變化
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
    // 重置 input 值，允許重複選擇同一文件
    event.target.value = ''
  }

  // 拖拽事件
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find((file) => file.type.startsWith('image/'))

    if (imageFile) {
      handleFileSelect(imageFile)
    }
  }

  // 刪除圖片
  const handleDelete = () => {
    onChange?.(null)
  }

  // 初始化裁切區域
  const initializeCropArea = () => {
    if (!cropImageRef.current || !cropContainerRef.current) return

    const container = cropContainerRef.current
    const containerRect = container.getBoundingClientRect()

    let width = 200
    let height = 200

    if (cropAspectRatio) {
      if (cropAspectRatio > 1) {
        // 寬圖
        width = Math.min(300, containerRect.width * 0.6)
        height = width / cropAspectRatio
      } else {
        // 高圖
        height = Math.min(300, containerRect.height * 0.6)
        width = height * cropAspectRatio
      }
    }

    // 置中放置
    const x = (containerRect.width - width) / 2
    const y = (containerRect.height - height) / 2

    setCropArea({
      x: Math.max(0, x),
      y: Math.max(0, y),
      width,
      height,
    })
  }

  // 裁切區域拖拽 - 滑鼠事件
  const handleCropMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)

    if (!cropContainerRef.current) return

    const containerRect = cropContainerRef.current.getBoundingClientRect()
    setDragStart({
      x: e.clientX - containerRect.left - cropArea.x,
      y: e.clientY - containerRect.top - cropArea.y,
    })
  }

  // 裁切區域拖拽 - 觸控事件
  const handleCropTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)

    if (!cropContainerRef.current) return

    const touch = e.touches[0]
    const containerRect = cropContainerRef.current.getBoundingClientRect()
    setDragStart({
      x: touch.clientX - containerRect.left - cropArea.x,
      y: touch.clientY - containerRect.top - cropArea.y,
    })
  }

  // 縮放手柄拖拽 - 滑鼠事件
  const handleResizeMouseDown = (e: React.MouseEvent, handle: string) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    setResizeHandle(handle)

    if (!cropContainerRef.current) return

    const containerRect = cropContainerRef.current.getBoundingClientRect()
    setResizeStart({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
      cropArea: { ...cropArea },
    })
  }

  // 縮放手柄拖拽 - 觸控事件
  const handleResizeTouchStart = (e: React.TouchEvent, handle: string) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    setResizeHandle(handle)

    if (!cropContainerRef.current) return

    const touch = e.touches[0]
    const containerRect = cropContainerRef.current.getBoundingClientRect()
    setResizeStart({
      x: touch.clientX - containerRect.left,
      y: touch.clientY - containerRect.top,
      cropArea: { ...cropArea },
    })
  }

  const handleCropMouseMove = (e: React.MouseEvent) => {
    if (!cropContainerRef.current) return

    const containerRect = cropContainerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - containerRect.left
    const mouseY = e.clientY - containerRect.top

    updateCropArea(mouseX, mouseY, containerRect)
  }

  // 統一的裁切區域更新邏輯
  const updateCropArea = (
    clientX: number,
    clientY: number,
    containerRect: DOMRect
  ) => {
    if (isDragging) {
      // 拖拽移動
      const newX = Math.max(
        0,
        Math.min(clientX - dragStart.x, containerRect.width - cropArea.width)
      )
      const newY = Math.max(
        0,
        Math.min(clientY - dragStart.y, containerRect.height - cropArea.height)
      )

      setCropArea((prev) => ({
        ...prev,
        x: newX,
        y: newY,
      }))
    } else if (isResizing) {
      // 縮放調整
      const deltaX = clientX - resizeStart.x
      const deltaY = clientY - resizeStart.y
      const startArea = resizeStart.cropArea

      const newArea = { ...startArea }
      const minSize = 50 // 最小尺寸

      switch (resizeHandle) {
        case 'nw-resize':
          newArea.width = Math.max(minSize, startArea.width - deltaX)
          newArea.height = cropAspectRatio
            ? newArea.width / cropAspectRatio
            : Math.max(minSize, startArea.height - deltaY)
          newArea.x = startArea.x + startArea.width - newArea.width
          newArea.y = startArea.y + startArea.height - newArea.height
          break
        case 'ne-resize':
          newArea.width = Math.max(minSize, startArea.width + deltaX)
          newArea.height = cropAspectRatio
            ? newArea.width / cropAspectRatio
            : Math.max(minSize, startArea.height - deltaY)
          newArea.y = startArea.y + startArea.height - newArea.height
          break
        case 'sw-resize':
          newArea.width = Math.max(minSize, startArea.width - deltaX)
          newArea.height = cropAspectRatio
            ? newArea.width / cropAspectRatio
            : Math.max(minSize, startArea.height + deltaY)
          newArea.x = startArea.x + startArea.width - newArea.width
          break
        case 'se-resize':
          newArea.width = Math.max(minSize, startArea.width + deltaX)
          newArea.height = cropAspectRatio
            ? newArea.width / cropAspectRatio
            : Math.max(minSize, startArea.height + deltaY)
          break
        case 'n-resize':
          if (!cropAspectRatio) {
            newArea.height = Math.max(minSize, startArea.height - deltaY)
            newArea.y = startArea.y + startArea.height - newArea.height
          }
          break
        case 's-resize':
          if (!cropAspectRatio) {
            newArea.height = Math.max(minSize, startArea.height + deltaY)
          }
          break
        case 'w-resize':
          if (!cropAspectRatio) {
            newArea.width = Math.max(minSize, startArea.width - deltaX)
            newArea.x = startArea.x + startArea.width - newArea.width
          }
          break
        case 'e-resize':
          if (!cropAspectRatio) {
            newArea.width = Math.max(minSize, startArea.width + deltaX)
          }
          break
      }

      // 確保不超出容器邊界
      newArea.x = Math.max(
        0,
        Math.min(newArea.x, containerRect.width - newArea.width)
      )
      newArea.y = Math.max(
        0,
        Math.min(newArea.y, containerRect.height - newArea.height)
      )
      newArea.width = Math.min(newArea.width, containerRect.width - newArea.x)
      newArea.height = Math.min(
        newArea.height,
        containerRect.height - newArea.y
      )

      setCropArea(newArea)
    }
  }

  const handleCropMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeHandle('')
  }

  const handleCropTouchEnd = () => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeHandle('')
  }

  // 執行裁切
  const handleCropConfirm = async () => {
    if (!cropImageRef.current || !cropImageUrl) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      // 計算實際裁切區域（相對於原始圖片）
      const imgElement = cropImageRef.current!
      const containerRect = cropContainerRef.current!.getBoundingClientRect()
      const imgRect = imgElement.getBoundingClientRect()

      const scaleX = img.naturalWidth / imgRect.width
      const scaleY = img.naturalHeight / imgRect.height

      const cropX = (cropArea.x - (imgRect.left - containerRect.left)) * scaleX
      const cropY = (cropArea.y - (imgRect.top - containerRect.top)) * scaleY
      const cropWidth = cropArea.width * scaleX
      const cropHeight = cropArea.height * scaleY

      canvas.width = cropWidth
      canvas.height = cropHeight

      // 應用旋轉和縮放
      ctx!.translate(canvas.width / 2, canvas.height / 2)
      ctx!.rotate((imageRotation * Math.PI) / 180)
      ctx!.scale(imageScale, imageScale)
      ctx!.translate(-cropWidth / 2, -cropHeight / 2)

      // 繪製裁切後的圖片
      ctx!.drawImage(
        img,
        Math.max(0, cropX),
        Math.max(0, cropY),
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      )

      canvas.toBlob(
        (blob) => {
          if (blob) {
            onChange?.(blob)
          }
          setCropDialogOpen(false)
          URL.revokeObjectURL(cropImageUrl)
          setCropImageUrl(null)
          setImageScale(1)
          setImageRotation(0)
        },
        'image/jpeg',
        0.9
      )
    }

    img.src = cropImageUrl
  }

  // 取消裁切
  const handleCropCancel = () => {
    setCropDialogOpen(false)
    if (cropImageUrl) {
      URL.revokeObjectURL(cropImageUrl)
      setCropImageUrl(null)
    }
    setImageScale(1)
    setImageRotation(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <StyledHiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
      />

      {previewUrl ? (
        <StyledPreviewContainer>
          <StyledPreviewImage src={previewUrl} alt="Preview" />
          <StyledPreviewActions>
            {enableCrop && (
              <StyledActionButton
                size="small"
                color="info"
                onClick={() => {
                  if (value) {
                    const url = URL.createObjectURL(value)
                    setCropImageUrl(url)
                    setCropDialogOpen(true)
                  }
                }}
              >
                <Crop />
              </StyledActionButton>
            )}
            <StyledActionButton
              size="small"
              color="warning"
              onClick={handleDelete}
            >
              <Delete />
            </StyledActionButton>
          </StyledPreviewActions>
        </StyledPreviewContainer>
      ) : (
        <StyledUploadArea
          className={isDragOver ? 'dragover' : ''}
          onClick={handleClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          elevation={0}
        >
          <StyledUploadIcon />
          {typeof caption === 'string' ? (
            <Typography variant="body1" color="text.secondary">
              {caption}
            </Typography>
          ) : (
            caption
          )}
        </StyledUploadArea>
      )}

      {/* 裁切對話框 */}
      <Dialog
        open={cropDialogOpen}
        onClose={handleCropCancel}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle>{cropDialogTitle}</DialogTitle>
        <DialogContent>
          {cropImageUrl && (
            <>
              <StyledCropContainer
                ref={cropContainerRef}
                onMouseMove={handleCropMouseMove}
                onMouseUp={handleCropMouseUp}
                onMouseLeave={handleCropMouseUp}
                onTouchEnd={handleCropTouchEnd}
                sx={{
                  touchAction: 'none',
                }}
              >
                <StyledCropImage
                  ref={cropImageRef}
                  src={cropImageUrl}
                  alt="Crop"
                  onLoad={initializeCropArea}
                  style={{
                    transform: `scale(${imageScale}) rotate(${imageRotation}deg)`,
                    transition: 'transform 0.3s ease',
                  }}
                />
                <StyledCropOverlay
                  style={{
                    left: cropArea.x,
                    top: cropArea.y,
                    width: cropArea.width,
                    height: cropArea.height,
                  }}
                  onMouseDown={handleCropMouseDown}
                  onTouchStart={handleCropTouchStart}
                >
                  {/* 縮放手柄 - 只在沒有固定比例時顯示所有手柄 */}
                  {!cropAspectRatio && (
                    <>
                      <StyledResizeHandle
                        className="n-resize"
                        onMouseDown={(e) =>
                          handleResizeMouseDown(e, 'n-resize')
                        }
                        onTouchStart={(e) =>
                          handleResizeTouchStart(e, 'n-resize')
                        }
                      />
                      <StyledResizeHandle
                        className="s-resize"
                        onMouseDown={(e) =>
                          handleResizeMouseDown(e, 's-resize')
                        }
                        onTouchStart={(e) =>
                          handleResizeTouchStart(e, 's-resize')
                        }
                      />
                      <StyledResizeHandle
                        className="w-resize"
                        onMouseDown={(e) =>
                          handleResizeMouseDown(e, 'w-resize')
                        }
                        onTouchStart={(e) =>
                          handleResizeTouchStart(e, 'w-resize')
                        }
                      />
                      <StyledResizeHandle
                        className="e-resize"
                        onMouseDown={(e) =>
                          handleResizeMouseDown(e, 'e-resize')
                        }
                        onTouchStart={(e) =>
                          handleResizeTouchStart(e, 'e-resize')
                        }
                      />
                    </>
                  )}

                  {/* 角落手柄 - 總是顯示 */}
                  <StyledResizeHandle
                    className="nw-resize"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'nw-resize')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'nw-resize')}
                  />
                  <StyledResizeHandle
                    className="ne-resize"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'ne-resize')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'ne-resize')}
                  />
                  <StyledResizeHandle
                    className="sw-resize"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'sw-resize')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'sw-resize')}
                  />
                  <StyledResizeHandle
                    className="se-resize"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'se-resize')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'se-resize')}
                  />
                </StyledCropOverlay>
              </StyledCropContainer>

              <StyledSliderContainer>
                <Box display="flex" alignItems="center" gap={2}>
                  <ZoomOut color="action" />
                  <Slider
                    value={imageScale}
                    onChange={(_, value) => setImageScale(value as number)}
                    min={0.1}
                    max={3}
                    step={0.1}
                    sx={{ flex: 1 }}
                    color="info"
                  />
                  <ZoomIn color="action" />
                </Box>
              </StyledSliderContainer>

              <StyledControlsBox>
                <IconButton
                  onClick={() => setImageRotation((prev) => prev - 90)}
                  color="info"
                >
                  <RotateLeft />
                </IconButton>
                <IconButton
                  onClick={() => setImageRotation((prev) => prev + 90)}
                  color="info"
                >
                  <RotateRight />
                </IconButton>
              </StyledControlsBox>
            </>
          )}
        </DialogContent>
        <DialogActions
          sx={{
            padding: 3,
            gap: 1,
            pt: 0,
          }}
        >
          <Button onClick={handleCropCancel} variant="outlined" color="info">
            {t('cancel.btn', { ns: 'common' })}
          </Button>
          <Button
            onClick={handleCropConfirm}
            color="secondary"
            variant="contained"
            sx={{ minWidth: 100 }}
          >
            {t('confirm.btn', { ns: 'common' })}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default UImageUploader
