import {
  ModifyTaiwanRecordMutation,
  ModifyTaiwanRecordMutationVariables,
  SubmitTaiwanRecordMutation,
  SubmitTaiwanRecordMutationVariables,
  WithdrawTaiwanRecordMutation,
  WithdrawTaiwanRecordMutationVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import {
  uploadImage,
  type UploadImageResponse,
} from '@/modules/TaiwanRecord/api/uploadImage'
import {
  TaiwanRecordCreateOutput,
  TaiwanRecordUpdateOutput,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import {
  MUTATION_MODIFY_TAIWAN_RECORD,
  MUTATION_SUBMIT_TAIWAN_RECORD,
  MUTATION_WITHDRAW_TAIWAN_RECORD,
} from '@/modules/TaiwanRecord/graphql/gql'
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
            images.map((image) => uploadImage(image.url))
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

  const [gqlUpdateTaiwanRecord] = useMutation<
    ModifyTaiwanRecordMutation,
    ModifyTaiwanRecordMutationVariables
  >(MUTATION_MODIFY_TAIWAN_RECORD)
  /**
   * 更新 Taiwan Record
   */
  const handleUpdateTaiwanRecord = useCallback(
    async (value: TaiwanRecordUpdateOutput) => {
      // Filter by started with `data:`
      const newImages = value.images.filter((image) =>
        image.url.startsWith('data:')
      )
      const existingImages = value.images.filter(
        (image) => !image.url.startsWith('data:')
      )
      const uploadedImageIds = await handleUploadImages(newImages)
      await gqlUpdateTaiwanRecord({
        variables: {
          id: value.id,
          resubmitForReview: true,
          data: {
            title: value.title,
            description: value.content,
            people: value.peopleId,
            sources: value.sources.map((source) => ({
              link: source,
            })),
            photos: [
              ...existingImages.map((image) => ({
                photo: image.id,
              })),
              ...uploadedImageIds.map((imageId) => ({
                photo: imageId,
              })),
            ],
          },
        },
      })
    },
    [gqlUpdateTaiwanRecord, handleUploadImages]
  )

  const [gqlWithdrawTaiwanRecord] = useMutation<
    WithdrawTaiwanRecordMutation,
    WithdrawTaiwanRecordMutationVariables
  >(MUTATION_WITHDRAW_TAIWAN_RECORD)
  /**
   * 撤回 Taiwan Record
   */
  const handleWithdrawTaiwanRecord = useCallback(
    async (id: string) => {
      await gqlWithdrawTaiwanRecord({
        variables: {
          id,
        },
      })
    },
    [gqlWithdrawTaiwanRecord]
  )

  return {
    handleSubmitTaiwanRecord,
    handleUpdateTaiwanRecord,
    handleWithdrawTaiwanRecord,
  }
}
