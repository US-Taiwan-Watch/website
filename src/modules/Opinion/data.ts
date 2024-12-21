import {
  Article,
  CategoriesArticle,
} from '@/common/lib/graphql/__generated__/graphql'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { OpinionCategoryArgs } from '@/modules/Opinion/classes/OpinionCategory'
import {
  CATEGORIES_DTO_MOCK,
  OPINION_DTO_MOCK,
} from '@/modules/Opinion/dtoData'

export const OpinionResponse = {
  id: '1',
  title: '國家級警報：中共發射衛星火箭',
  subtitle: '國家級警報：中共發射衛星火箭飛越「南台灣」',
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
    {
      id: '3',
      label: '經濟金融',
      image: '/assets/category1.jpg',
    },
    {
      id: '4',
      label: '環境生態',
      image: '/assets/category1.jpg',
    },
    {
      id: '5',
      label: '社會文化',
      image: '/assets/category1.jpg',
    },
    {
      id: '6',
      label: '教育科研',
      image: '/assets/category1.jpg',
    },
    {
      id: '7',
      label: '健康醫療',
      image: '/assets/category1.jpg',
    },
    {
      id: '8',
      label: '交通運輸',
      image: '/assets/category1.jpg',
    },
    {
      id: '9',
      label: '科技資訊',
      image: '/assets/category1.jpg',
    },
    {
      id: '10',
      label: '藝術設計',
      image: '/assets/category1.jpg',
    },
    {
      id: '11',
      label: '體育運動',
      image: '/assets/category1.jpg',
    },
    {
      id: '12',
      label: '政治法律',
      image: '/assets/category1.jpg',
    },
  ],
  date: '2024-01-01',
  tags: [
    {
      label: '軍事',
    },
    {
      label: '軍事',
    },
  ],
  repostSources: [
    {
      title:
        'CNN NEWS - The entire town is burning.’ Fires rage as Rohingya caught up on the front lines of Myanmar’s civil war',
      link: 'https://www.google.com',
    },
    {
      title:
        'BBC NEWS - The billionaires rallying behind Trump after his conviction',
      link: 'https://www.google.com',
    },
  ],
  thumbnailImage: {
    src: '/assets/category1.jpg',
  },
  bannerImage: {
    src: '/assets/category1.jpg',
    caption:
      '1967年，中國共產黨主席毛澤東掀起文化大革命，當時在北京市中心展示了他的巨大畫像與標語。（攝影／JEAN VINCENT／AFP）',
  },
  resources: [
    {
      title:
        'CNN NEWS - The entire town is burning.’ Fires rage as Rohingya caught up on the front lines of Myanmar’s civil war',
      link: 'https://www.google.com',
    },
    {
      title:
        'BBC NEWS - The billionaires rallying behind Trump after his conviction',
      link: 'https://www.google.com',
    },
  ],
  author: {
    name: '村上春樹',
    description: `
          1949年生，日本早稻田大學戲劇系畢業。受歐美文化薰陶，被譽為日本「八０年代文學旗手」，曾獲得「群像新人賞」、「野間文藝賞」、「谷崎潤一郎文學賞」，並被名頻論家推舉為最具都市感受性的作家、最能掌握時代特質與節奏感的作家。<br><br>
村上春樹的中譯作品有「遇見100％的女孩」、「聽風的歌」、「1973年的彈珠玩具」、「國境之南、太陽之西」、「世界末日與冷酷翼境」、「尋羊冒險記」等。
          `,
  },
}

export const opinion: Opinion = new Opinion(OpinionResponse)

export const OpinionsResponse = Array.from({ length: 10 }, (_, index) => ({
  ...OpinionResponse,
  id: index.toString(),
}))
export const opinions: Array<Opinion> = OpinionsResponse.map(
  (opinion) => new Opinion(opinion)
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

export const getOpinionCategories = (): CategoriesArticle[] => {
  return CATEGORIES_DTO_MOCK
}

export const findAllOpinion = () => {
  return OPINION_DTO_MOCK
}

const OPINION_MOCK_MAP = OPINION_DTO_MOCK.reduce<Record<string, Article>>(
  (acc, opinion) => {
    if (!opinion.id) return acc
    acc[opinion.id] = opinion
    return acc
  },
  {}
)

export const findOpinion = (id: string) => {
  return OPINION_MOCK_MAP[id]
}

export const findLandingBannerOpinions = () => {
  return OPINION_DTO_MOCK.filter((opinion) => opinion.isFeatured)
}

export const filterOpinionsByCategory = (id: string) => {
  return OPINION_DTO_MOCK.filter((opinion) =>
    opinion.categories?.some((category) => category.id === id)
  )
}
