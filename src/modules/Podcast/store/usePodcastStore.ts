import { Episode } from '@/modules/Podcast/classes/Episode'
import { create } from 'zustand'
import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
  episodes: Array<Episode>
}

type Action = {
  setEpisodes: (episodes: Array<Episode>) => void
}

const initialState: State = {
  episodes: [],
}

const usePodcastStore = createSelectors(
  create<State & Action>()(
    immer(
      devtools(
        (set) => ({
          ...initialState,
          setEpisodes: (episodes) => set(() => ({ episodes })),
        }),
        {
          name: 'EpisodeStore',
        }
      )
    )
  )
)

export default usePodcastStore
