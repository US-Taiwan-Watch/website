export interface GetEpisodeParams {
  podcastId: string
  episodeId: string
}

export interface GetEpisodeResponse {
  status: number
  result: string
  data: {
    id: string
    updatedAt: string
    createdAt: string
    data: {
      id: string
      guid: string
      hash: string
      title: string
      audioUrl: string
      explicit: boolean
      description: string
      complete: boolean
      publishDate: string
      itunesKeywords: string[]
      audioType: string
      duration: number
      artistName: string
      url: string
      cover: string
      season: number
      episode: number
      contentEncoded: string
      podcastId: string
      summary: string
      episodeType: string
      exclusiveType: string
      createdAt: string
      updatedAt: string
      weight: number
      keywords: string[]
      activated: boolean
    }
  }
}
