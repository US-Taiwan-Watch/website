import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { OpinionCategoryArgs } from '@/modules/Opinion/classes/OpinionCategory'

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
      image: '/assets/category1.jpg',
    },
    {
      id: '2',
      label: '外交貿易',
      image: '/assets/category1.jpg',
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
          image: '/assets/category1.jpg',
        },
        {
          id: '2',
          label: '外交貿易',
          image: '/assets/category1.jpg',
        },
      ],
    })
)

export const opinionCategories: Array<OpinionCategoryArgs> = [
  {
    id: '1',
    label: '軍事國防',
    image: '/assets/category1.jpg',
  },
  {
    id: '2',
    label: '外交貿易',
    image: '/assets/category1.jpg',
  },
  {
    id: '3',
    label: '兩岸議題',
    image: '/assets/category1.jpg',
  },
  {
    id: '4',
    label: '行政選舉',
    image: '/assets/category1.jpg',
  },
  {
    id: '5',
    label: '美國法案',
    image: '/assets/category1.jpg',
  },
  {
    id: '6',
    label: '國際新聞',
    image: '/assets/category1.jpg',
  },
  {
    id: '7',
    label: '台美關係',
    image: '/assets/category1.jpg',
  },
  {
    id: '8',
    label: '國際經濟',
    image: '/assets/category1.jpg',
  },
  {
    id: '9',
    label: '國際政治',
    image: '/assets/category1.jpg',
  },
]

export const highlightedOpinionCategories: Array<OpinionCategoryArgs> = [
  {
    id: '5',
    label: '美國法案',
    image: '/assets/category1.jpg',
  },
  {
    id: '6',
    label: '國際新聞',
    image: '/assets/category1.jpg',
  },
  {
    id: '7',
    label: '台美關係',
    image: '/assets/category1.jpg',
  },
  {
    id: '8',
    label: '國際經濟',
    image: '/assets/category1.jpg',
  },
  {
    id: '9',
    label: '國際政治',
    image: '/assets/category1.jpg',
  },
]

export const homeOpinionCategories: Array<OpinionCategoryArgs> = [
  {
    id: '1',
    label: '軍事國防',
    image: '/assets/category1.jpg',
  },
  {
    id: '2',
    label: '外交貿易',
    image: '/assets/category1.jpg',
  },
  {
    id: '3',
    label: '兩岸議題',
    image: '/assets/category1.jpg',
  },
  {
    id: '4',
    label: '行政選舉',
    image: '/assets/category1.jpg',
  },
  {
    id: '5',
    label: '美國法案',
    image: '/assets/category1.jpg',
  },
]
