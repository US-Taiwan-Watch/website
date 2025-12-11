import {
  SubmitTaiwanRecordMutation,
  SubmitTaiwanRecordMutationVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import {
  uploadImage,
  type UploadImageResponse,
} from '@/modules/TaiwanRecord/api/uploadImage'
import {
  TaiwanRecordCreateOutput,
  TaiwanRecordUpdateOutput,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import { MUTATION_SUBMIT_TAIWAN_RECORD } from '@/modules/TaiwanRecord/graphql/gql'
import { useMutation } from '@apollo/client'
import { useCallback } from 'react'

export default function useTaiwanRecord() {
  const handleUploadImages = useCallback(
    async (
      images:
        | TaiwanRecordCreateOutput['images']
        | TaiwanRecordUpdateOutput['images']
    ) => {
      try {
        const uploadedImageIds: string[] = []
        if (images) {
          const uploadedImages = await Promise.allSettled(
            images.map((image) => uploadImage(image))
          )
          uploadedImageIds.push(
            ...uploadedImages
              .filter((image) => image.status === 'fulfilled')
              .map(
                (image) =>
                  (image as PromiseFulfilledResult<UploadImageResponse>).value
                    .doc.id
              )
          )
        }

        return uploadedImageIds
      } catch (error) {
        console.error('Upload images failed:', error)
        return []
      }
    },
    []
  )

  const [gqlSubmitTaiwanRecord] = useMutation<
    SubmitTaiwanRecordMutation,
    SubmitTaiwanRecordMutationVariables
  >(MUTATION_SUBMIT_TAIWAN_RECORD)
  /**
   * 首次提交 Taiwan Record
   */
  const handleSubmitTaiwanRecord = useCallback(
    async (peopleId: string, value: TaiwanRecordCreateOutput) => {
      const uploadedImageIds = await handleUploadImages(value.images)
      await gqlSubmitTaiwanRecord({
        variables: {
          data: {
            title: value.title,
            description: value.content,
            people: peopleId,
            sources: value.sources.map((source) => ({
              link: source,
            })),
            photos: uploadedImageIds.map((imageId) => ({
              photo: imageId,
            })),
          },
        },
      })
    },
    [gqlSubmitTaiwanRecord, handleUploadImages]
  )

  return {
    handleSubmitTaiwanRecord,
  }
}
