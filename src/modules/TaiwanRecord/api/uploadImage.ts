import { config } from '@/config'

/**
 * Response type for media upload
 */
export type UploadImageResponse = {
  message: string
  doc: {
    id: string
    alt: string
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
    sizes: {
      tablet?: {
        width: number
        height: number
        mimeType: string
        filesize: number
        filename: string
        url: string
      }
    }
    createdAt: string
    updatedAt: string
    url: string
  }
}

/**
 * Convert dataUrl to Blob
 * @param dataUrl - Data URL string (e.g., data:image/png;base64,...)
 * @returns Blob object
 */
const dataUrlToBlob = (dataUrl: string): Blob => {
  const arr = dataUrl.split(',')
  const mimeMatch = arr[0].match(/:(.*?);/)
  const mime = mimeMatch ? mimeMatch[1] : 'image/png'
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * Upload Image to Server
 * @param dataUrl - Data URL string (e.g., data:image/png;base64,...)
 * @param alt - Alt text for the image (taiwan record title)
 * @returns Upload response with image URL and metadata
 */
export const uploadImage = async (
  dataUrl: string,
  alt?: string
): Promise<UploadImageResponse> => {
  // Convert dataUrl to Blob
  const blob = dataUrlToBlob(dataUrl)

  // Extract mime type to determine file extension
  const mimeMatch = dataUrl.match(/data:(.*?);/)
  const mimeType = mimeMatch ? mimeMatch[1] : 'image/png'
  const extension = mimeType.split('/')[1] || 'png'

  // Create File from Blob with a filename
  const file = new File([blob], `taiwan-record-${Date.now()}.${extension}`, {
    type: mimeType,
  })

  // Create FormData
  const formData = new FormData()
  if (alt) formData.append('alts', alt)
  formData.append('files', file)

  const apiBaseUrl = config.API_BASE_URL

  // Make POST request
  const session = await fetch('/api/auth/token', {
    cache: 'no-store',
    signal: AbortSignal.timeout(10000),
  })
  if (!session.ok) throw new Error('Please sign in before uploading an image')
  const { idToken } = await session.json()
  if (!idToken) throw new Error('Please sign in before uploading an image')
  const response = await fetch(`${apiBaseUrl}/taiwan-record-media`, {
    method: 'POST',
    headers: { authorization: `Bearer ${idToken}` },
    body: formData,
    signal: AbortSignal.timeout(15000),
  }).catch(() => {
    throw new Error(
      'Image upload failed. Your form has been kept. Please try again.'
    )
  })

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`)
  }

  const data = await response.json()
  if (data.docs?.length !== 1 || !data.docs[0]?.id) {
    throw new Error('The uploaded image could not be confirmed')
  }
  return { message: data.message, doc: data.docs[0] } as UploadImageResponse
}
