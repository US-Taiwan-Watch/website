import { Tag } from '@/common/lib/graphql/__generated__/graphql'

export const TAGS_DTO_MOCK = [
  {
    id: '6758e385e981ce40d9597c90',
    isFeatured: true,
    i18n: {
      en: {
        name: 'TSMC',
      },
      zh: {
        name: '台積電',
      },
    },
  },
  {
    id: '6758e2c4e981ce40d9597c5a',
    isFeatured: true,
    i18n: {
      en: {
        name: 'Shutsung Liao',
      },
      zh: {
        name: '廖述宗',
      },
    },
  },
  {
    id: '6749a45ca313f435f157fc3a',
    isFeatured: true,
    i18n: {
      en: {
        name: 'Taiwan Caucus',
      },
      zh: {
        name: '國會台灣連線',
      },
    },
  },
] as unknown as Array<Tag>
