// Mock

import { OpinionArgs } from '@/modules/Opinion/classes/Opinion'
import { OpinionResponse, OpinionsResponse } from '@/modules/Opinion/data'

export const getOpinion = (): Promise<OpinionArgs> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(OpinionResponse)
    }, 1000)
  })
}

export const getRelatedOpinions = (): Promise<Array<OpinionArgs>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(OpinionsResponse)
    }, 1000)
  })
}
