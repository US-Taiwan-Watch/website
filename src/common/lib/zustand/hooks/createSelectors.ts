import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

/**
 * Utils to simplify useStore pattern
 *
 * @example
 * // Before
 *  const bears = useBearStore((state) => state.bears)
 * // After
 *  const bears = useBearStore.use.bears()
 *
 * @see {@link https://zustand.docs.pmnd.rs/guides/auto-generating-selectors#create-the-following-function:-createselectors Zustand docs}
 */
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    ;(store.use as Record<string, () => unknown>)[k] = () =>
      store((s) => s[k as keyof typeof s])
  }

  return store
}

export default createSelectors
