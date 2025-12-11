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
  if (alt) formData.append('_payload', JSON.stringify({ alt }))
  formData.append('file', file)

  const apiBaseUrl = config.API_BASE_URL

  // Make POST request
  const response = await fetch(`${apiBaseUrl}/media-taiwan-record`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`)
  }

  const data = (await response.json()) as UploadImageResponse
  return data
}
