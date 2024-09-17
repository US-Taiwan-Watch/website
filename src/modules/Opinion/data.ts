import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { OpinionCategory } from '@/modules/Opinion/types/OpinionCategory'

export const opinion: Opinion = new Opinion({
  id: '1',
  title: '國家級警報：中共發射衛星火箭',
  image: '/assets/category1.jpg',
  description:
    '大家都有收到嗎 ？ 1/9 下午三點多，觀測站的小編們都收到了國家級警報。華語寫著「衛星」，英語版可能會讓民眾嚇一跳：上面寫著 missile。事實上，這是一個「火箭搭載的衛星」， 英文可能要寫成「 a rocket carrying a satellite 」比較合適？',
  categories: [
    {
      id: '1',
      label: '軍事國防',
    },
    {
      id: '2',
      label: '外交貿易',
    },
  ],
})

export const opinions: Array<Opinion> = Array.from(
  { length: 10 },
  (_, index) =>
    new Opinion({
      id: index.toString(),
      title: '國家級警報：中共發射衛星火箭',
      image: '/assets/category1.jpg',
      description:
        '大家都有收到嗎 ？ 1/9 下午三點多，觀測站的小編們都收到了國家級警報。華語寫著「衛星」，英語版可能會讓民眾嚇一跳：上面寫著 missile。事實上，這是一個「火箭搭載的衛星」， 英文可能要寫成「 a rocket carrying a satellite 」比較合適？',
      categories: [
        {
          id: '1',
          label: '軍事國防',
        },
        {
          id: '2',
          label: '外交貿易',
        },
      ],
    })
)

export const opinionCategories: Array<OpinionCategory> = [
  {
    id: '1',
    label: '軍事國防',
  },
  {
    id: '2',
    label: '外交貿易',
  },
  {
    id: '3',
    label: '兩岸議題',
  },
  {
    id: '4',
    label: '行政選舉',
  },
  {
    id: '5',
    label: '美國法案',
  },
]
export const opinionNavbarItems = opinionCategories.map((category) => ({
  ...category,
  href: Opinion.getCategoryUrl(category),
}))
