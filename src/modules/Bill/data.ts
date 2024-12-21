import { Congress } from '@/common/classes/Congress'
import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { People } from '@/modules/People/classes/People'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import { Bill } from '@/modules/Bill/classes/Bill'
import { ChamberEnum } from '@/common/enums/Chamber'
import { BillCategoryEnum } from '@/modules/Bill/components/BillFilter/enums'
import { BillTrendData } from '@/modules/Bill/components/BillLanding/TrendCard'
import {
  CONGRESS_NUMBER_MIN,
  CURRENT_CONGRESS_NUMBER,
} from '@/common/assets/constants'
import {
  BILL_DTO_MOCK,
  BILL_ID_COSPONSORED_TIME_MAP_DTO_MOCK,
} from '@/modules/Bill/dtoData'
import {
  CategoriesBills,
  TopCosponsorsQuery,
  TopSponsorsQuery,
  TopTagsQuery,
  TrendByCategoryQuery,
  Bill as BillDto,
  CountBills,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'

const sponsor1 = new People({
  id: '1',
  name: 'Jeff Merkley',
  image: '/assets/category1.jpg',
  description:
    "Nunn is the representative for Iowa's 3rd congressional district(view map) and is a Nunn is the representative for Iowa's 3rd congressional district (view map) and is a Nunn is the representative for Iowa's 3rd congressional district(view map)",
  party: Party.DEMOCRATIC,
  position: PeoplePosition.SENATOR,
  chamber: ChamberEnum.SENATE,
  congress: new Congress({
    congressNumber: CURRENT_CONGRESS_NUMBER,
    startYear: 2023,
    endYear: 2025,
    houseMembers: 100,
    houseDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
    senateMembers: 100,
    senateDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
  }),
  partyExperience: [],
  experience: [],
  tags: [],
  constituency: 'IL',
})

const sponsor2 = new People({
  id: '2',
  name: 'Ami Bera',
  image: '/assets/category1.jpg',
  description:
    "Nunn is the representative for Iowa's 3rd congressional district(view map) and is a Nunn is the representative for Iowa's 3rd congressional district (view map) and is a Nunn is the representative for Iowa's 3rd congressional district(view map)",
  party: Party.REPUBLICAN,
  position: PeoplePosition.HOUSE_REPRESENTATIVE,
  chamber: ChamberEnum.HOUSE,
  congress: new Congress({
    congressNumber: CURRENT_CONGRESS_NUMBER,
    startYear: 2023,
    endYear: 2025,
    houseMembers: 100,
    houseDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
    senateMembers: 100,
    senateDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
  }),
  partyExperience: [],
  experience: [],
  tags: [],
  constituency: 'NJ',
})

const sponsor3 = new People({
  id: '3',
  name: 'Jon Ossoff',
  image: '/assets/category1.jpg',
  description:
    "Nunn is the representative for Iowa's 3rd congressional district(view map) and is a Nunn is the representative for Iowa's 3rd congressional district (view map) and is a Nunn is the representative for Iowa's 3rd congressional district(view map)",
  party: Party.INDEPENDENT,
  position: PeoplePosition.SENATOR,
  chamber: ChamberEnum.SENATE,
  congress: new Congress({
    congressNumber: CURRENT_CONGRESS_NUMBER,
    startYear: 2023,
    endYear: 2025,
    houseMembers: 100,
    houseDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
    senateMembers: 100,
    senateDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
  }),
  partyExperience: [],
  experience: [],
  tags: [],
  constituency: 'WA',
})

const sponsor4 = new People({
  id: '4',
  name: 'Tammy Baldwin',
  image: '/assets/category1.jpg',
  description:
    "Baldwin is the representative for Wisconsin's 2nd congressional district.",
  party: Party.DEMOCRATIC,
  position: PeoplePosition.SENATOR,
  chamber: ChamberEnum.SENATE,
  congress: new Congress({
    congressNumber: CURRENT_CONGRESS_NUMBER,
    startYear: 2023,
    endYear: 2025,
    houseMembers: 100,
    houseDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
    senateMembers: 100,
    senateDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
  }),
  partyExperience: [],
  experience: [],
  tags: [],
  constituency: 'WI',
})

const sponsor5 = new People({
  id: '5',
  name: 'Liz Cheney',
  image: '/assets/category1.jpg',
  description:
    "Cheney is the representative for Wyoming's at-large congressional district.",
  party: Party.REPUBLICAN,
  position: PeoplePosition.HOUSE_REPRESENTATIVE,
  chamber: ChamberEnum.HOUSE,
  congress: new Congress({
    congressNumber: CURRENT_CONGRESS_NUMBER,
    startYear: 2023,
    endYear: 2025,
    houseMembers: 100,
    houseDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
    senateMembers: 100,
    senateDistribution: new Map([
      [Party.DEMOCRATIC, 50],
      [Party.REPUBLICAN, 50],
    ]),
  }),
  partyExperience: [],
  experience: [],
  tags: [],
  constituency: 'WY',
})

export const BILL_SPONSOR_MOCK: People[] = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
]

export const PARLIAMENT_CHART_DATA_MOCK_1: ParliamentChartData[] = [
  {
    party: Party.DEMOCRATIC,
    count: 50,
  },
  {
    party: Party.REPUBLICAN,
    count: 62,
  },
  {
    party: Party.INDEPENDENT,
    count: 6,
  },
]

export const PARLIAMENT_CHART_DATA_MOCK_2: ParliamentChartData[] = [
  {
    party: Party.DEMOCRATIC,
    count: 69,
  },
  {
    party: Party.REPUBLICAN,
    count: 45,
  },
  {
    party: Party.INDEPENDENT,
    count: 4,
  },
]

export const BILL_DATA_MOCK: Bill[] = BILL_DTO_MOCK.map((dto) =>
  Bill.fromDTO('en-US', dto)
)

export const BILL_TREND_CHART_DATA_MOCK: BillTrendData[] = Array.from(
  { length: CURRENT_CONGRESS_NUMBER - CONGRESS_NUMBER_MIN + 1 },
  (_, index) => {
    return Object.values(BillCategoryEnum)
      .filter((category) => typeof category !== 'string')
      .map((category) => ({
        congress: CONGRESS_NUMBER_MIN + index,
        count: Math.floor(Math.random() * 10) + 1,
        category,
      }))
  }
).flat()

export const BILL_TAG_MOCK: string[] = [
  'Health',
  'Trade',
  'Environment',
  'Technology',
  'Social Policy',
  'Economy',
  'Business',
]

export const getCurrentCongressBillCount = (): CountBills => {
  return {
    totalDocs: 11,
  }
}

export const findAllBill = () => {
  return BILL_DTO_MOCK
}

export const findBill = (id: string) => {
  return BILL_DTO_MOCK.find((bill) => bill.id === id)
}

export const getBillCosponsorsTimeMap = (billId: string) => {
  return BILL_ID_COSPONSORED_TIME_MAP_DTO_MOCK[billId] ?? {}
}

export const getBillTopTags = (): TopTagsQuery[] => {
  return [
    {
      billCount: 1,
      tag: {
        id: '6749a45ca313f435f157fc3a',
        i18n: {
          en: {
            name: 'Taiwan Caucus',
          },
          zh: {
            name: '國會台灣連線',
          },
        },
      },
    },
  ]
}

export const getCategoriesBills = (): CategoriesBills => {
  return {
    docs: [
      {
        id: '67488795c842897fb7f2a2b9',
        i18n: {
          en: {
            name: 'Other',
          },
          zh: {
            name: '其他',
          },
        },
      },
      {
        id: '6748878cc842897fb7f2a2b1',
        i18n: {
          en: {
            name: 'Trade/Economy',
          },
          zh: {
            name: '經濟貿易',
          },
        },
      },
      {
        id: '67488781c842897fb7f2a2a9',
        i18n: {
          en: {
            name: 'Taiwan Relations Act',
          },
          zh: {
            name: '台灣相關法案',
          },
        },
      },
      {
        id: '67488777c842897fb7f2a2a1',
        i18n: {
          en: {
            name: 'Global health',
          },
          zh: {
            name: '國際公衛',
          },
        },
      },
      {
        id: '6748876cc842897fb7f2a299',
        i18n: {
          en: {
            name: 'U.S.-Taiwan Relations',
          },
          zh: {
            name: '美台關係',
          },
        },
      },
      {
        id: '6748875ec842897fb7f2a291',
        i18n: {
          en: {
            name: 'Taiwan’s Defense',
          },
          zh: {
            name: '台灣國防',
          },
        },
      },
      {
        id: '6748874bc842897fb7f2a289',
        i18n: {
          en: {
            name: 'International Participation',
          },
          zh: {
            name: '國際參與',
          },
        },
      },
      {
        id: '67488740c842897fb7f2a281',
        i18n: {
          en: {
            name: 'Democracy',
          },
          zh: {
            name: '民主',
          },
        },
      },
      {
        id: '67488731c842897fb7f2a279',
        i18n: {
          en: {
            name: 'Arms Sales/Transfer',
          },
          zh: {
            name: '軍援軍售',
          },
        },
      },
    ],
  }
}

export const getBillTrendByCategory = (
  category: string
): Array<{ congress: number; count: number }> => {
  if (!category) {
    const allData: TrendByCategoryQuery[] = [
      {
        congress: 96,
        billCount: 1,
      },
      {
        congress: 105,
        billCount: 1,
      },
      {
        congress: 106,
        billCount: 1,
      },
      {
        congress: 113,
        billCount: 1,
      },
      {
        congress: 115,
        billCount: 1,
      },
      {
        congress: 116,
        billCount: 1,
      },
      {
        congress: 117,
        billCount: 3,
      },
      {
        congress: 118,
        billCount: 11,
      },
    ]
    return allData.map((item) => ({
      congress: item.congress!,
      count: item.billCount!,
    }))
  }
  const map: Record<string, TrendByCategoryQuery[]> = {
    '67488795c842897fb7f2a2b9': [],
    '6748878cc842897fb7f2a2b1': [
      {
        congress: 117,
        billCount: 1,
      },
      {
        congress: 118,
        billCount: 1,
      },
    ],
    '67488781c842897fb7f2a2a9': [],
    '67488777c842897fb7f2a2a1': [
      {
        congress: 105,
        billCount: 1,
      },
    ],
    '6748876cc842897fb7f2a299': [
      {
        congress: 113,
        billCount: 1,
      },
      {
        congress: 115,
        billCount: 1,
      },
      {
        congress: 117,
        billCount: 1,
      },
      {
        congress: 118,
        billCount: 1,
      },
    ],
    '6748875ec842897fb7f2a291': [
      {
        congress: 106,
        billCount: 1,
      },
      {
        congress: 117,
        billCount: 1,
      },
      {
        congress: 118,
        billCount: 3,
      },
    ],
    '6748874bc842897fb7f2a289': [
      {
        congress: 105,
        billCount: 1,
      },
      {
        congress: 116,
        billCount: 1,
      },
      {
        congress: 118,
        billCount: 3,
      },
    ],
    '67488740c842897fb7f2a281': [
      {
        congress: 118,
        billCount: 2,
      },
    ],
    '67488731c842897fb7f2a279': [],
  }
  const data = map[category]
  return data.map((item) => ({
    congress: item.congress!,
    count: item.billCount!,
  }))
}

// TODO: 拿掉 adapter 後即可用 TopSponsorsQuery
export type BillTopSponsorsData = {
  billCount: number
  people: People
}

export const getBillTopSponsors = (lang: Language): BillTopSponsorsData[] => {
  const data = [
    {
      billCount: 2,
      people: {
        id: '6753cf371e937e031b1b2e13',
        i18n: {
          en: {
            displayName: 'Gerald E. Connolly',
          },
          zh: {
            displayName: null,
          },
        },
        currentParty: 'democratic',
        gender: 'male',
      },
    },
    {
      billCount: 2,
      people: {
        id: '67545c8f437319f5138be3e5',
        i18n: {
          en: {
            displayName: 'Robert Menendez',
          },
          zh: {
            displayName: '梅南德茲',
          },
        },
        currentParty: 'independent',
        gender: 'male',
      },
    },
    {
      billCount: 1,
      people: {
        id: '67547188437319f5138bebdc',
        i18n: {
          en: {
            displayName: 'Rick Scott',
          },
          zh: {
            displayName: '史考特',
          },
        },
        currentParty: 'republican',
        gender: 'male',
      },
    },
    {
      billCount: 1,
      people: {
        id: '67546e46437319f5138bea95',
        i18n: {
          en: {
            displayName: 'Ami Bera',
          },
          zh: {
            displayName: '貝拉',
          },
        },
        currentParty: 'democratic',
        gender: 'male',
      },
    },
    {
      billCount: 1,
      people: {
        id: '6754799f437319f5138bf65a',
        i18n: {
          en: {
            displayName: 'Thomas P. Tiffany',
          },
          zh: {
            displayName: '帝芬尼',
          },
        },
        currentParty: 'republican',
        gender: 'male',
      },
    },
  ] as TopSponsorsQuery[]
  return data.map((item) => ({
    billCount: item.billCount!,
    people: People.fromDTO(lang, item.people!),
  }))
}

export const getBillTopCosponsors = (lang: Language): BillTopSponsorsData[] => {
  const data = [
    {
      billCount: 1,
      people: {
        id: '6752ab3c2ddcf95deb375586',
        i18n: {
          en: {
            displayName: 'Young Kim',
          },
          zh: {
            displayName: '金映玉',
          },
        },
        currentParty: 'republican',
      },
    },
    {
      billCount: 1,
      people: {
        id: '6752948c4040f8e6920dece8',
        i18n: {
          en: {
            displayName: 'Brad Sherman',
          },
          zh: {
            displayName: '薛曼',
          },
        },
        currentParty: 'democratic',
      },
    },
    {
      billCount: 1,
      people: {
        id: '6752ac8d2ddcf95deb375652',
        i18n: {
          en: {
            displayName: 'Ann Wagner',
          },
          zh: {
            displayName: '華格納',
          },
        },
        currentParty: 'republican',
      },
    },
    {
      billCount: 1,
      people: {
        id: '6753ea9a1e937e031b1b343f',
        i18n: {
          en: {
            displayName: 'Marco Rubio',
          },
          zh: {
            displayName: '盧比歐',
          },
        },
        currentParty: 'republican',
      },
    },
    {
      billCount: 1,
      people: {
        id: '6752abce2ddcf95deb3755ec',
        i18n: {
          en: {
            displayName: 'Monica De La Cruz',
          },
          zh: {
            displayName: null,
          },
        },
        currentParty: 'republican',
      },
    },
  ] as TopCosponsorsQuery[]
  return data.map((item) => ({
    billCount: item.billCount!,
    people: People.fromDTO(lang, item.people!),
  }))
}

export const getLatestBills = (lang: Language): Bill[] => {
  const data = [
    {
      categories: [
        {
          id: '67488740c842897fb7f2a281',
          i18n: {
            en: {
              name: 'Democracy',
            },
            zh: {
              name: '民主',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-resolution/521',
      cosponsors: [],
      createdAt: '2024-12-07T17:10:26.203Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2024-01-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Submitted in the Senate, considered, and agreed to without amendment and with a preamble by Unanimous Consent. (consideration: CR S98-101; text: CR S95-96)',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2024-01-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in Senate: Submitted in the Senate, considered, and agreed to without amendment and with a preamble by Unanimous Consent.(consideration: CR S98-101; text: CR S95-96)',
            },
            {
              actionAt: {
                datetime: '2024-01-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in Senate',
            },
          ],
          summary: 'NA',
          title:
            "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '決議案表揚台灣的民主選舉歷史及支持台灣的民主制度',
        },
      },
      id: '67548182437319f5138bf983',
      introducedAt: {
        datetime: '2024-01-11T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '521',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: '[Wikipedia] Daniel Scott Sullivan (born November 13, 1964) is an American politician and attorney serving as the junior United States senator from Alaska since 2015. A member of the Republican Party, Sullivan previously served as the commissioner of the Alaska Department of Natural Resources from 2010 to 2013, and as the Alaska Attorney General from 2009 to 2010.',
          birthday: {
            datetime: '1964-11-13T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'S001198',
            govTrackId: 412665,
            committees: [
              {
                id: '675480c7d1d49300312fe0f1',
                name: 'Senate Committee on Armed Services',
                title: null,
                subcommittees: [
                  {
                    id: '675480c7d1d49300312fe0f7',
                    name: 'Seapower',
                    title: null,
                  },
                  {
                    id: '675480c7d1d49300312fe0f8',
                    name: 'Readiness and Management Support',
                    title: 'ranking',
                  },
                  {
                    id: '675480c7d1d49300312fe0f9',
                    name: 'Personnel',
                    title: null,
                  },
                ],
              },
              {
                id: '675480c7d1d49300312fe0f2',
                name: 'Senate Committee on Commerce, Science, and Transportation',
                title: null,
                subcommittees: [
                  {
                    id: '675480c7d1d49300312fe0fa',
                    name: 'Aviation Safety, Operations, and Innovation',
                    title: null,
                  },
                  {
                    id: '675480c7d1d49300312fe0fb',
                    name: 'Communications, Media, and Broadband',
                    title: null,
                  },
                  {
                    id: '675480c7d1d49300312fe0fc',
                    name: 'Consumer Protection, Product Safety, and Data Security',
                    title: null,
                  },
                  {
                    id: '675480c7d1d49300312fe0fd',
                    name: 'Oceans, Fisheries, Climate Change, and Manufacturing',
                    title: 'ranking',
                  },
                ],
              },
              {
                id: '675480c7d1d49300312fe0f3',
                name: 'Senate Committee on Environment and Public Works',
                title: null,
                subcommittees: [
                  {
                    id: '675480c7d1d49300312fe0fe',
                    name: 'Chemical Safety, Waste Management, Environmental Justice, and Regulatory Oversight',
                    title: null,
                  },
                  {
                    id: '675480c7d1d49300312fe0ff',
                    name: 'Clean Air, Climate, and Nuclear Safety',
                    title: null,
                  },
                  {
                    id: '675480c7d1d49300312fe100',
                    name: 'Fisheries, Water, and Wildlife',
                    title: null,
                  },
                ],
              },
              {
                id: '675480c7d1d49300312fe0f4',
                name: "Senate Committee on Veterans' Affairs",
                title: null,
                subcommittees: [],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T17:07:19.641Z',
          currentParty: 'republican',
          displayName: 'Dan Sullivan',
          experiences: [
            {
              isCurrent: true,
              category: 'Senator',
              company: 'United States Senate',
              positions: [
                {
                  title: 'Senator for Alaska',
                  start: {
                    datetime: '2015-01-06T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [114, 115, 116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412665',
          i18n: {
            en: {
              displayName: 'Dan Sullivan',
              bio: '[Wikipedia] Daniel Scott Sullivan (born November 13, 1964) is an American politician and attorney serving as the junior United States senator from Alaska since 2015. A member of the Republican Party, Sullivan previously served as the commissioner of the Alaska Department of Natural Resources from 2010 to 2013, and as the Alaska Attorney General from 2009 to 2010.',
            },
            zh: {
              displayName: '蘇利文',
              bio: '[Wikipedia] 丹尼爾·史考特·蘇利文（英語：Daniel Scott Sullivan；1964年11月13日—），是一位美國共和黨政治人物，現任阿拉斯加州的聯邦參議員。',
            },
          },
          id: '675480c7437319f5138bf8c1',
          links: [
            {
              id: '675480c7d1d49300312fe0ed',
              link: 'https://x.com/SenDanSullivan',
              title: '@SenDanSullivan',
            },
            {
              id: '675480c7d1d49300312fe0ee',
              link: 'https://instagram.com/sen_dansullivan',
              title: '@sen_dansullivan',
            },
            {
              id: '675480c7d1d49300312fe0ef',
              link: 'https://facebook.com/SenDanSullivan',
              title: '@SenDanSullivan',
            },
            {
              id: '675480c7d1d49300312fe0f0',
              link: 'https://youtube.com/channel/UC7tXCm8gKlAhTFo2kuf5ylw',
              title: '@SenatorDanSullivan',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Dan_Sullivan.png',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '67548182437319f5138bf983',
              title:
                "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T17:07:19.641Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'agreedToInSenate',
        futureSteps: [],
        passedSteps: ['introduced', 'passedSenate'],
      },
      summary: 'NA',
      tags: [],
      title:
        "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
      type: 'sres',
      updatedAt: '2024-12-07T17:10:26.203Z',
    },
    {
      categories: [
        {
          id: '67488740c842897fb7f2a281',
          i18n: {
            en: {
              name: 'Democracy',
            },
            zh: {
              name: '民主',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-resolution/955',
      cosponsors: [],
      createdAt: '2024-12-07T16:48:35.771Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2024-01-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Referred to the House Committee on Foreign Affairs.',
            },
            {
              actionAt: {
                datetime: '2024-01-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description: 'Introduced in House',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2024-01-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          summary:
            "[congress.gov] This resolution commends Taiwan for its example of self-governance and regards Taiwan's democracy as a great strategic strength for the free world. The resolution also expresses concern about Chinese interference in Taiwan's 2024 elections and expresses commitment to continuing a strong partnership with Taiwan, regardless of the outcome of the elections.",
          title:
            'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '表揚台灣的民主選舉歷史及支持台灣維護其民主制度',
        },
      },
      id: '67547c63437319f5138bf852',
      introducedAt: {
        datetime: '2024-01-10T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '955',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'democratic',
        people: {
          __typename: 'People',
          billCount: 2,
          bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
          birthday: {
            datetime: '1950-03-30T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'C001078',
            govTrackId: 412272,
            committees: [
              {
                id: '6753cf37a31c960031c15dc1',
                name: 'House Committee on Foreign Affairs',
                title: null,
                subcommittees: [
                  {
                    id: '6753cf37a31c960031c15dc6',
                    name: 'Indo-Pacific',
                    title: null,
                  },
                  {
                    id: '6753cf37a31c960031c15dc7',
                    name: 'Middle East, North Africa, and Central Asia',
                    title: null,
                  },
                ],
              },
              {
                id: '6753cf37a31c960031c15dc2',
                name: 'House Select Subcommittee on the Weaponization of the Federal Government',
                title: null,
                subcommittees: [],
              },
              {
                id: '6753cf37a31c960031c15dc3',
                name: 'House Committee on Oversight and Accountability',
                title: null,
                subcommittees: [
                  {
                    id: '6753cf37a31c960031c15dc8',
                    name: 'Cybersecurity, Information Technology, and Government Innovation',
                    title: 'ranking',
                  },
                  {
                    id: '6753cf37a31c960031c15dc9',
                    name: 'Government Operations and the Federal Workforce',
                    title: null,
                  },
                ],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T04:29:43.363Z',
          currentParty: 'democratic',
          displayName: 'Gerald E. Connolly',
          experiences: [
            {
              isCurrent: true,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 11, Virginia',
                  start: {
                    datetime: '2009-01-06T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [111, 112, 113, 114, 115, 116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412272',
          i18n: {
            en: {
              displayName: 'Gerald E. Connolly',
              bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
            },
            zh: {
              displayName: null,
              bio: null,
            },
          },
          id: '6753cf371e937e031b1b2e13',
          links: [
            {
              id: '6753cf37a31c960031c15dbd',
              link: 'https://connolly.house.gov',
              title: 'Offcial Website',
            },
            {
              id: '6753cf37a31c960031c15dbe',
              link: 'https://x.com/GerryConnolly',
              title: '@GerryConnolly',
            },
            {
              id: '6753cf37a31c960031c15dbf',
              link: 'https://www.facebook.com/CongressmanGerryConnolly',
              title: '@CongressmanGerryConnolly',
            },
            {
              id: '6753cf37a31c960031c15dc0',
              link: 'https://www.youtube.com/channel/UC4WG9PlmoOeSLIuyVjs-RSA',
              title: 'repconnolly',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Gerald_E_Connolly.png',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '6753d02c1e937e031b1b2f54',
              title: 'Taiwan International Solidarity Act',
            },
            {
              id: '67547c63437319f5138bf852',
              title:
                'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T04:29:43.363Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'introduced',
        futureSteps: ['passedHouse'],
        passedSteps: ['introduced'],
      },
      summary:
        "[congress.gov] This resolution commends Taiwan for its example of self-governance and regards Taiwan's democracy as a great strategic strength for the free world. The resolution also expresses concern about Chinese interference in Taiwan's 2024 elections and expresses commitment to continuing a strong partnership with Taiwan, regardless of the outcome of the elections.",
      tags: [],
      title:
        'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
      type: 'hres',
      updatedAt: '2024-12-07T16:48:35.771Z',
    },
    {
      categories: [],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-bill/3110',
      cosponsors: [],
      createdAt: '2024-12-07T06:29:39.088Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2023-10-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Read twice and referred to the Committee on Foreign Relations. (Action By: Senate)',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2023-10-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in Senate',
            },
          ],
          summary:
            '[congress.gov] The Department of State and other United States Government agencies shall treat the democratically elected Government of Taiwan as the legitimate representative of the people of Taiwan and end the outdated practice of referring to the government in Taiwan as the “authorities”.',
          title: 'Taiwan Relations Reinforcement Act of 2023',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '台灣關係強化法案',
        },
      },
      id: '6753eb531e937e031b1b3508',
      introducedAt: {
        datetime: '2023-10-24T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '3110',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
          birthday: {
            datetime: '1971-05-28T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'R000595',
            govTrackId: 412491,
            committees: [
              {
                id: '6753ea9aa31c960031c15de4',
                name: 'Senate Select Committee on Intelligence',
                title: 'viceChair',
                subcommittees: [],
              },
              {
                id: '6753ea9aa31c960031c15de5',
                name: 'Senate Special Committee on Aging',
                title: null,
                subcommittees: [],
              },
              {
                id: '6753ea9aa31c960031c15de6',
                name: 'Senate Committee on Appropriations',
                title: null,
                subcommittees: [
                  {
                    id: '6753ea9aa31c960031c15dea',
                    name: 'Legislative Branch',
                    title: null,
                  },
                  {
                    id: '6753ea9aa31c960031c15deb',
                    name: 'Labor, Health and Human Services, and Education, and Related Agencies',
                    title: null,
                  },
                  {
                    id: '6753ea9aa31c960031c15dec',
                    name: 'Military Construction, Veterans Affairs, and Related Agencies',
                    title: null,
                  },
                  {
                    id: '6753ea9aa31c960031c15ded',
                    name: 'State, Foreign Operations, and Related Programs',
                    title: null,
                  },
                  {
                    id: '6753ea9aa31c960031c15dee',
                    name: 'Financial Services and General Government',
                    title: null,
                  },
                ],
              },
              {
                id: '6753ea9aa31c960031c15de7',
                name: 'Senate Committee on Foreign Relations',
                title: null,
                subcommittees: [
                  {
                    id: '6753ea9aa31c960031c15def',
                    name: 'Europe and Regional Security Cooperation',
                    title: null,
                  },
                  {
                    id: '6753ea9aa31c960031c15df0',
                    name: "Western Hemisphere, Transnational Crime, Civilian …emocracy, Human Rights, and Global Women's Issues",
                    title: 'ranking',
                  },
                  {
                    id: '6753ea9aa31c960031c15df1',
                    name: 'Near East, South Asia, Central Asia, and Counterterrorism',
                    title: null,
                  },
                ],
              },
              {
                id: '6753ea9aa31c960031c15de8',
                name: 'Senate Committee on Small Business and Entrepreneurship',
                title: null,
                subcommittees: [],
              },
            ],
          },
          cosponsorBills: [
            {
              id: '67546936437319f5138be7df',
              title: 'Taiwan Fellowship Act',
            },
          ],
          createdAt: '2024-12-07T06:26:34.406Z',
          currentParty: 'republican',
          displayName: 'Marco Rubio',
          experiences: [
            {
              isCurrent: true,
              category: 'Senator',
              company: 'United States Senate',
              positions: [
                {
                  title: 'Senator for Florida',
                  start: {
                    datetime: '2011-01-05T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [112, 113, 114, 115, 116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412491',
          i18n: {
            en: {
              displayName: 'Marco Rubio',
              bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
            },
            zh: {
              displayName: '盧比歐',
              bio: '[Wikipedia] 馬可·安東尼奧·盧比歐（英語：Marco Antonio Rubio；1971年5月28日—），美國古巴裔政治人物、律師，生於美國佛羅里達州邁阿密，共和黨黨員，現任佛羅里達州資深聯邦參議員，自2011年起擔任該職務。',
            },
          },
          id: '6753ea9a1e937e031b1b343f',
          links: [
            {
              id: '6753ea9aa31c960031c15de1',
              link: 'https://x.com/SenRubioPress',
              title: '@SenRubioPress',
            },
            {
              id: '6753ea9aa31c960031c15de2',
              link: 'https://facebook.com/SenatorMarcoRubio',
              title: '@SenatorMarcoRubio',
            },
            {
              id: '6753ea9aa31c960031c15de3',
              link: 'https://youtube.com/channel/UCh8t7sV_DBKz4A-RkL9feyg',
              title: '@SenatorMarcoRubio',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Marco_Rubio.jpg',
          },
          publications: [
            {
              id: '6753ea9aa31c960031c15ddd',
              title: "100 Innovative Ideas for Florida's Future",
              link: null,
            },
            {
              id: '6753ea9aa31c960031c15dde',
              title:
                'American Dreams: Restoring Economic Opportunity for Everyone',
              link: null,
            },
            {
              id: '6753ea9aa31c960031c15ddf',
              title: 'An American Son: A Memoir',
              link: null,
            },
            {
              id: '6753ea9aa31c960031c15de0',
              title:
                "Decades of Decadence: How Our Spoiled Elites Blew America's Inheritance of Liberty, Security, and Prosperity",
              link: null,
            },
          ],
          records: [],
          sponsorBills: [
            {
              id: '6753eb531e937e031b1b3508',
              title: 'Taiwan Relations Reinforcement Act of 2023',
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T06:26:34.406Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'introduced',
        futureSteps: [
          'passedSenate',
          'passedHouse',
          'toPresident',
          'becomeLaw',
        ],
        passedSteps: ['introduced'],
      },
      summary:
        '[congress.gov] The Department of State and other United States Government agencies shall treat the democratically elected Government of Taiwan as the legitimate representative of the people of Taiwan and end the outdated practice of referring to the government in Taiwan as the “authorities”.',
      tags: [],
      title: 'Taiwan Relations Reinforcement Act of 2023',
      type: 's',
      updatedAt: '2024-12-07T06:29:39.088Z',
    },
    {
      categories: [],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/5988',
      cosponsors: [],
      createdAt: '2024-12-07T06:11:31.358Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2023-12-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Placed on the Union Calendar, Calendar No. 249. (Action By: House of Representatives)',
            },
            {
              actionAt: {
                datetime: '2023-12-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Reported (Amended) by the Committee on Ways and Means. H. Rept. 118-309.',
            },
            {
              actionAt: {
                datetime: '2023-11-30T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Ordered to be Reported in the Nature of a Substitute (Amended) by the Yeas and Nays: 40 - 0. (Action By: Committee on Ways and Means)',
            },
            {
              actionAt: {
                datetime: '2023-11-30T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Committee Consideration and Mark-up Session Held (Action By: Committee on Ways and Means)',
            },
            {
              actionAt: {
                datetime: '2023-10-25T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Referred to the House Committee on Ways and Means. (Action By: House of Representatives)',
            },
            {
              actionAt: {
                datetime: '2023-10-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Introduced in House (Action By: House of Representatives)',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2023-12-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Reported (Amended) by the Committee on Ways and Means. H. Rept. 118-309.',
            },
            {
              actionAt: {
                datetime: '2023-10-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          summary:
            '[congress.gov] This bill establishes special rules for the taxation of residents of Taiwan with income from sources within the United States. This includes the reduction of the rate of withholding of taxes, the application of permanent establishment rules, treatment of income from employment, and the determination of the residency of citizens of Taiwan.',
          title: 'United States-Taiwan Expedited Double-Tax Relief Act',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '美台快速雙重稅收減免法案',
        },
      },
      id: '6753e7131e937e031b1b33cc',
      introducedAt: {
        datetime: '2023-10-19T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '5988',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: "[Wikipedia] Jason Thomas Smith (born June 16, 1980) is an American businessman and politician who has been the U.S. representative for Missouri's 8th congressional district since 2013. The district comprises 30 counties, covering just under 20,000 square miles of southeastern and southern Missouri.",
          birthday: {
            datetime: '1980-06-16T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'S001195',
            govTrackId: 412596,
            committees: [
              {
                id: '6753e68ea31c960031c15dd9',
                name: 'House Committee on Ways and Means',
                title: 'chair',
                subcommittees: [],
              },
              {
                id: '6753e68ea31c960031c15dda',
                name: 'Joint Committee on Taxation',
                title: 'viceChair',
                subcommittees: [],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T06:09:18.796Z',
          currentParty: 'republican',
          displayName: 'Jason Smith',
          experiences: [
            {
              isCurrent: true,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 8, Missouri',
                  start: {
                    datetime: '2013-06-04T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [113, 114, 115, 116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412596',
          i18n: {
            en: {
              displayName: 'Jason Smith',
              bio: "[Wikipedia] Jason Thomas Smith (born June 16, 1980) is an American businessman and politician who has been the U.S. representative for Missouri's 8th congressional district since 2013. The district comprises 30 counties, covering just under 20,000 square miles of southeastern and southern Missouri.",
            },
            zh: {
              displayName: '史密斯',
              bio: '[Wikipedia] 傑森·T·史密斯（英語：Jason T. Smith；1980年6月16日—）是美國的一位政治人物。自2013年開始，他是密蘇里州第8選舉區選出的美國眾議院議員。他的黨籍是共和黨。他是共和黨在眾議院內第二年輕的議員。',
            },
          },
          id: '6753e68e1e937e031b1b3314',
          links: [
            {
              id: '6753e68ea31c960031c15dd6',
              link: 'https://x.com/RepJasonSmith',
              title: '@RepJasonSmith',
            },
            {
              id: '6753e68ea31c960031c15dd7',
              link: 'https://facebook.com/repjasonsmith',
              title: '@repjasonsmith',
            },
            {
              id: '6753e68ea31c960031c15dd8',
              link: 'https://youtube.com/channel/UCzj9-27Lr4gcqopmZAobXXg',
              title: '@RepJasonSmith',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Jason_Smith.png',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '6753e7131e937e031b1b33cc',
              title: 'United States-Taiwan Expedited Double-Tax Relief Act',
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T06:09:18.796Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'introduced',
        futureSteps: [
          'passedHouse',
          'passedSenate',
          'toPresident',
          'becomeLaw',
        ],
        passedSteps: ['introduced'],
      },
      summary:
        '[congress.gov] This bill establishes special rules for the taxation of residents of Taiwan with income from sources within the United States. This includes the reduction of the rate of withholding of taxes, the application of permanent establishment rules, treatment of income from employment, and the determination of the residency of citizens of Taiwan.',
      tags: [],
      title: 'United States-Taiwan Expedited Double-Tax Relief Act',
      type: 'hr',
      updatedAt: '2024-12-07T06:11:31.358Z',
    },
    {
      categories: [],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-bill/1457',
      cosponsors: [],
      createdAt: '2024-12-07T14:37:47.516Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2023-07-25T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Placed on Senate Legislative Calendar under General Orders. Calendar No. 151. (Action By: Senate)',
            },
            {
              actionAt: {
                datetime: '2023-07-25T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Committee on Foreign Relations. Reported by Senator Menendez with an amendment in the nature of a substitute. Without written report.',
            },
            {
              actionAt: {
                datetime: '2023-07-13T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Committee on Foreign Relations. Ordered to be reported with an amendment in the nature of a substitute favorably.',
            },
            {
              actionAt: {
                datetime: '2023-05-04T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Read twice and referred to the Committee on Foreign Relations. (Action By: Senate)',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2023-07-25T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Committee on Foreign Relations. Reported by Senator Menendez with an amendment in the nature of a substitute. Without written report.',
            },
            {
              actionAt: {
                datetime: '2023-05-04T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in Senate',
            },
          ],
          summary:
            '[congress.gov] This bill authorizes the United States to enter into a tax agreement with Taiwan.',
          title: 'Taiwan Tax Agreement Act of 2023',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '台灣租稅協定法案',
        },
      },
      id: '67545dbb437319f5138be4fd',
      introducedAt: {
        datetime: '2023-05-04T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '1457',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'democratic',
        people: {
          __typename: 'People',
          billCount: 2,
          bio: '[Wikipedia] Robert Menendez (born January 1, 1954) is an American lawyer and politician who served as a United States senator from New Jersey from 2006 until his resignation in 2024 following his conviction on 16 counts in a political corruption case. A member of the Democratic Party and the Cuban–American lobby, he was first appointed to the Senate by Governor Jon Corzine, and chaired the United States Senate Committee on Foreign Relations from 2013 to 2015 and from 2021 to 2023.',
          birthday: {
            datetime: '1954-01-01T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'M000639',
            govTrackId: 400272,
            committees: [],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T14:32:47.690Z',
          currentParty: 'independent',
          displayName: 'Robert Menendez',
          experiences: [
            {
              isCurrent: false,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 13, New Jersey',
                  start: {
                    datetime: '1993-01-05T00:00:00.000Z',
                  },
                  end: {
                    datetime: '2006-01-16T00:00:00.000Z',
                  },
                  congresses: [103, 104, 105, 106, 107, 108, 109],
                },
              ],
            },
            {
              isCurrent: false,
              category: 'Senator',
              company: 'United States Senate',
              positions: [
                {
                  title: 'Senator for New Jersey',
                  start: {
                    datetime: '2006-01-18T00:00:00.000Z',
                  },
                  end: {
                    datetime: '2024-08-20T00:00:00.000Z',
                  },
                  congresses: [
                    109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
                  ],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '400272',
          i18n: {
            en: {
              displayName: 'Robert Menendez',
              bio: '[Wikipedia] Robert Menendez (born January 1, 1954) is an American lawyer and politician who served as a United States senator from New Jersey from 2006 until his resignation in 2024 following his conviction on 16 counts in a political corruption case. A member of the Democratic Party and the Cuban–American lobby, he was first appointed to the Senate by Governor Jon Corzine, and chaired the United States Senate Committee on Foreign Relations from 2013 to 2015 and from 2021 to 2023.',
            },
            zh: {
              displayName: '梅南德茲',
              bio: '[Wikipedia] 羅伯特·「鮑勃」·梅南德茲（英語：Robert "Bob" Menendez；1954年1月1日—），是一位美國民主黨政治人物，2006年至2024年擔任紐澤西州聯邦參議院議員，亦曾任參議院外交委員會主席。',
            },
          },
          id: '67545c8f437319f5138be3e5',
          links: [],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Robert_Menendez.png',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '67545dbb437319f5138be4fd',
              title: 'Taiwan Tax Agreement Act of 2023',
            },
            {
              id: '675477ed437319f5138bef66',
              title:
                'A joint resolution relating to the approval of the proposed Agreement for Cooperation Between the American Institute in Taiwan and the Taipei Economic and Cultural Representatives Office in the United States Concerning Peaceful Uses of Nuclear Energy.',
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T16:27:28.282Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'introduced',
        futureSteps: [
          'passedSenate',
          'passedHouse',
          'toPresident',
          'becomeLaw',
        ],
        passedSteps: ['introduced'],
      },
      summary:
        '[congress.gov] This bill authorizes the United States to enter into a tax agreement with Taiwan.',
      tags: [],
      title: 'Taiwan Tax Agreement Act of 2023',
      type: 's',
      updatedAt: '2024-12-07T14:37:47.516Z',
    },
    {
      categories: [
        {
          id: '6748874bc842897fb7f2a289',
          i18n: {
            en: {
              name: 'International Participation',
            },
            zh: {
              name: '國際參與',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/1176',
      cosponsors: [],
      createdAt: '2024-12-07T04:33:48.684Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2023-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Received in the Senate and Read twice and referred to the Committee on Foreign Relations.',
            },
            {
              actionAt: {
                datetime: '2023-07-25T16:52:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2023-07-25T16:52:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion to suspend the rules and pass the bill Agreed to by voice vote. (text: CR H3913)',
            },
            {
              actionAt: {
                datetime: '2023-07-25T16:33:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - The House proceeded with forty minutes of debate on H.R. 1176.',
            },
            {
              actionAt: {
                datetime: '2023-07-25T16:33:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Considered under suspension of the rules. (consideration: CR H3913-3915)',
            },
            {
              actionAt: {
                datetime: '2023-07-25T16:33:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Mr. Barr moved to suspend the rules and pass the bill.',
            },
            {
              actionAt: {
                datetime: '2023-05-16T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Ordered to be Reported by Voice Vote. (Action By: Committee on Foreign Affairs)',
            },
            {
              actionAt: {
                datetime: '2023-05-16T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Committee Consideration and Mark-up Session Held. (Action By: Committee on Foreign Affairs)',
            },
            {
              actionAt: {
                datetime: '2023-02-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Referred to the House Committee on Foreign Affairs.',
            },
            {
              actionAt: {
                datetime: '2023-02-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Introduced in House',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2023-07-25T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in House: On motion to suspend the rules and pass the bill Agreed to by voice vote. (text: CR H3913)',
            },
            {
              actionAt: {
                datetime: '2023-02-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          summary:
            "[congress.gov] This bill requires the Department of State to annually report to Congress on efforts by China to undermine Taiwan's participation in international organizations or Taiwan's relationships with other countries.",
          title: 'Taiwan International Solidarity Act',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '台灣國際團結法案',
        },
      },
      id: '6753d02c1e937e031b1b2f54',
      introducedAt: {
        datetime: '2023-02-24T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '1176',
      popularityRank: 1,
      relatedBills: [],
      sponsor: {
        party: 'democratic',
        people: {
          __typename: 'People',
          billCount: 2,
          bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
          birthday: {
            datetime: '1950-03-30T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'C001078',
            govTrackId: 412272,
            committees: [
              {
                id: '6753cf37a31c960031c15dc1',
                name: 'House Committee on Foreign Affairs',
                title: null,
                subcommittees: [
                  {
                    id: '6753cf37a31c960031c15dc6',
                    name: 'Indo-Pacific',
                    title: null,
                  },
                  {
                    id: '6753cf37a31c960031c15dc7',
                    name: 'Middle East, North Africa, and Central Asia',
                    title: null,
                  },
                ],
              },
              {
                id: '6753cf37a31c960031c15dc2',
                name: 'House Select Subcommittee on the Weaponization of the Federal Government',
                title: null,
                subcommittees: [],
              },
              {
                id: '6753cf37a31c960031c15dc3',
                name: 'House Committee on Oversight and Accountability',
                title: null,
                subcommittees: [
                  {
                    id: '6753cf37a31c960031c15dc8',
                    name: 'Cybersecurity, Information Technology, and Government Innovation',
                    title: 'ranking',
                  },
                  {
                    id: '6753cf37a31c960031c15dc9',
                    name: 'Government Operations and the Federal Workforce',
                    title: null,
                  },
                ],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T04:29:43.363Z',
          currentParty: 'democratic',
          displayName: 'Gerald E. Connolly',
          experiences: [
            {
              isCurrent: true,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 11, Virginia',
                  start: {
                    datetime: '2009-01-06T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [111, 112, 113, 114, 115, 116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412272',
          i18n: {
            en: {
              displayName: 'Gerald E. Connolly',
              bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
            },
            zh: {
              displayName: null,
              bio: null,
            },
          },
          id: '6753cf371e937e031b1b2e13',
          links: [
            {
              id: '6753cf37a31c960031c15dbd',
              link: 'https://connolly.house.gov',
              title: 'Offcial Website',
            },
            {
              id: '6753cf37a31c960031c15dbe',
              link: 'https://x.com/GerryConnolly',
              title: '@GerryConnolly',
            },
            {
              id: '6753cf37a31c960031c15dbf',
              link: 'https://www.facebook.com/CongressmanGerryConnolly',
              title: '@CongressmanGerryConnolly',
            },
            {
              id: '6753cf37a31c960031c15dc0',
              link: 'https://www.youtube.com/channel/UC4WG9PlmoOeSLIuyVjs-RSA',
              title: 'repconnolly',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Gerald_E_Connolly.png',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '6753d02c1e937e031b1b2f54',
              title: 'Taiwan International Solidarity Act',
            },
            {
              id: '67547c63437319f5138bf852',
              title:
                'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T04:29:43.363Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'passedHouse',
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
        passedSteps: ['introduced', 'passedHouse'],
      },
      summary:
        "[congress.gov] This bill requires the Department of State to annually report to Congress on efforts by China to undermine Taiwan's participation in international organizations or Taiwan's relationships with other countries.",
      tags: [],
      title: 'Taiwan International Solidarity Act',
      type: 'hr',
      updatedAt: '2024-12-08T07:01:09.372Z',
    },
    {
      categories: [
        {
          id: '6748875ec842897fb7f2a291',
          i18n: {
            en: {
              name: 'Taiwan’s Defense',
            },
            zh: {
              name: '台灣國防',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-bill/477',
      cosponsors: [],
      createdAt: '2024-12-07T16:04:25.248Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2023-02-16T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description:
                'Read twice and referred to the Committee on Foreign Relations. (Action By: Senate)',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2023-02-16T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in Senate',
            },
          ],
          summary:
            "[congress.gov] This bill authorizes the President to use the Armed Forces to defend Taiwan against a direct attack by China's military, a taking of Taiwan's territory by China, or a threat that endangers the lives of civilians in Taiwan or members of Taiwan's military. The bill also directs the Department of Defense to convene an annual regional security dialogue with Taiwan and other partners to improve U.S. security relationships with countries in the Western Pacific.",
          title: 'Taiwan Invasion Prevention Act',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '防止台灣遭侵略法案',
        },
      },
      id: '67547209437319f5138beca4',
      introducedAt: {
        datetime: '2023-02-16T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '477',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: '[Wikipedia] Richard Lynn Scott (born December 1, 1952) is an American attorney, businessman, and politician who has been the junior United States senator from Florida since 2019. A member of the Republican Party, he served two terms as the 45th governor of Florida from 2011 to 2019.',
          birthday: {
            datetime: '1952-12-01T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'S001217',
            govTrackId: 412838,
            committees: [
              {
                id: '67547188d1d49300312fe0c4',
                name: 'Senate Special Committee on Aging',
                title: null,
                subcommittees: [],
              },
              {
                id: '67547188d1d49300312fe0c5',
                name: 'Senate Committee on Armed Services',
                title: null,
                subcommittees: [
                  {
                    id: '67547188d1d49300312fe0ca',
                    name: 'Seapower',
                    title: null,
                  },
                  {
                    id: '67547188d1d49300312fe0cb',
                    name: 'Airland',
                    title: null,
                  },
                  {
                    id: '67547188d1d49300312fe0cc',
                    name: 'Personnel',
                    title: 'ranking',
                  },
                ],
              },
              {
                id: '67547188d1d49300312fe0c6',
                name: 'Senate Committee on the Budget',
                title: null,
                subcommittees: [],
              },
              {
                id: '67547188d1d49300312fe0c7',
                name: 'Senate Committee on Homeland Security and Governmental Affairs',
                title: null,
                subcommittees: [
                  {
                    id: '67547188d1d49300312fe0cd',
                    name: 'Permanent Subcommittee on Investigations',
                    title: null,
                  },
                  {
                    id: '67547188d1d49300312fe0ce',
                    name: 'Emerging Threats and Spending Oversight',
                    title: null,
                  },
                ],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T16:02:16.172Z',
          currentParty: 'republican',
          displayName: 'Rick Scott',
          experiences: [
            {
              isCurrent: true,
              category: 'Senator',
              company: 'United States Senate',
              positions: [
                {
                  title: 'Senator for Florida',
                  start: {
                    datetime: '2019-01-08T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412838',
          i18n: {
            en: {
              displayName: 'Rick Scott',
              bio: '[Wikipedia] Richard Lynn Scott (born December 1, 1952) is an American attorney, businessman, and politician who has been the junior United States senator from Florida since 2019. A member of the Republican Party, he served two terms as the 45th governor of Florida from 2011 to 2019.',
            },
            zh: {
              displayName: '史考特',
              bio: '[Wikipedia] 李察·「瑞克」·林恩·史考特（英語：Richard "Rick" Lynn Scott；1952年12月1日—）是美國一位共和黨籍的政治家和商人，現任佛羅里達州聯邦參議員。他曾於2011年當選佛羅里達州州長，2014年再次當選連任。',
            },
          },
          id: '67547188437319f5138bebdc',
          links: [
            {
              id: '67547188d1d49300312fe0c1',
              link: 'https://x.com/SenRickScott',
              title: '@SenRickScott',
            },
            {
              id: '67547188d1d49300312fe0c2',
              link: 'https://facebook.com/RickScottSenOffice',
              title: '@RickScottSenOffice',
            },
            {
              id: '67547188d1d49300312fe0c3',
              link: 'https://youtube.com/channel/UC-Y9pFmW4PYGZHkC8lcqSkQ',
              title: '@senrickscott8007',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Rick_Scott.jpg',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '67547209437319f5138beca4',
              title: 'Taiwan Invasion Prevention Act',
            },
          ],
          tags: [],
          updatedAt: '2024-12-07T16:02:16.172Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'introduced',
        futureSteps: [
          'passedSenate',
          'passedHouse',
          'toPresident',
          'becomeLaw',
        ],
        passedSteps: ['introduced'],
      },
      summary:
        "[congress.gov] This bill authorizes the President to use the Armed Forces to defend Taiwan against a direct attack by China's military, a taking of Taiwan's territory by China, or a threat that endangers the lives of civilians in Taiwan or members of Taiwan's military. The bill also directs the Department of Defense to convene an annual regional security dialogue with Taiwan and other partners to improve U.S. security relationships with countries in the Western Pacific.",
      tags: [],
      title: 'Taiwan Invasion Prevention Act',
      type: 's',
      updatedAt: '2024-12-07T16:04:25.248Z',
    },
    {
      categories: [
        {
          id: '6748875ec842897fb7f2a291',
          i18n: {
            en: {
              name: 'Taiwan’s Defense',
            },
            zh: {
              name: '台灣國防',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/815',
      cosponsors: [],
      createdAt: '2024-12-07T05:23:17.629Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2024-04-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description: 'Became Public Law No: 118-50.',
            },
            {
              actionAt: {
                datetime: '2024-04-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description: 'Signed by President.',
            },
            {
              actionAt: {
                datetime: '2024-04-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Presented to President.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Message on Senate action sent to the House.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Senate agreed to the House amendment to the Senate amendment to H.R. 815 by Yea-Nay Vote. 79 - 18. Record Vote Number: 154.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1843 SA 1843 fell when SA 1842 was withdrawn.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1842 Proposed amendment SA 1842 withdrawn in Senate.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to waive all applicable budgetary discipline with respect to the measure (the motion to concur in the House amendment to the Senate amendment) agreed to in Senate by Yea-Nay Vote. 75 - 20. Record Vote Number: 153. (CR S2991)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Point of order by Senator Lee pursuant to section 314(e) of the Congressional Budget Act of 1974 against the measure raised in Senate.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'S.Amdt.1846 SA 1846 fell when SA 1845 fell.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1845 SA 1845 fell when SA 1844 (the instructions of the motion to refer) fell.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1844 SA 1844 fell when cloture invoked on the motion to concur in the House amendment to the Senate amendment to H.R. 815.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to refer to Senate Committee on Appropriations with instructions to report back forthwith with the following amendment (SA 1844) fell when cloture was invoked on the motion to concur in the House amendment to the Senate amendment to H.R. 815 in Senate.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture on the motion to concur in the House amendment to the Senate amendment to H.R. 815 invoked in Senate by Yea-Nay Vote. 80 - 19. Record Vote Number: 152. (CR S2960-2961)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to table the motion to refer the House message to accompany H.R. 815 to the Committee on Appropriations with instructions to report back forthwith with the following amendment (SA 1844) rejected in Senate by Yea-Nay Vote. 48 - 50. Record Vote Number: 151.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1846 Amendment SA 1846 proposed by Senator Schumer to Amendment SA 1845. (consideration: CR S2944) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1845 Amendment SA 1845 proposed by Senator Schumer to Amendment SA 1844 (the instructions of the motion to refer). (consideration: CR S2944) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1844 Amendment SA 1844 proposed by Senator Schumer. (consideration: CR S2944, S2961) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to refer to Senate Committee on Appropriations the House message to accompany H.R. 815 with instructions to report back forthwith with the following amendment (SA 1844) made in Senate. (CR S2944)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1843 Amendment SA 1843 proposed by Senator Schumer to Amendment SA 1842. (consideration: CR S2944) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1842 Amendment SA 1842 proposed by Senator Schumer. (consideration: CR S2944, S2992) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to concur in the House amendment to the Senate amendment to H.R. 815 with an amendment (SA 1842) made in Senate. (CR S2944)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture motion on the motion to concur in the House amendment to the Senate amendment to H.R. 815 presented in Senate. (CR S2943-2944)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to concur in the House amendment to the Senate amendment to H.R. 815. (CR S2943)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Measure laid before Senate by unanimous consent. (consideration: CR S2943-2992)',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Message on House action received in Senate and at desk: House amendment to Senate amendment.',
            },
            {
              actionAt: {
                datetime: '2024-04-20T14:03:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2024-04-20T14:03:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion that the House agree with an amendment to the Senate amendment Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2024-04-20T14:03:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                "Pursuant to the provisions of H. Res. 1160, the House took from the Speaker's table the bill H.R. 815 with the Senate amendment, and agreed to the Senate amendment with the amendment described in section 6.",
            },
            {
              actionAt: {
                datetime: '2024-04-20T14:03:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Pursuant to H. Res. 1160, the Senate amendment to H.R. 815 is considered as agreed to with the amendment described in section 6 of H. Res. 1160.',
            },
            {
              actionAt: {
                datetime: '2024-02-13T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Message on Senate action sent to the House.',
            },
            {
              actionAt: {
                datetime: '2024-02-13T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Passed Senate with an amendment by Yea-Nay Vote. 70 - 29. Record Vote Number: 48.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture invoked in Senate by Yea-Nay Vote. 66 - 33. Record Vote Number: 47. (CR S907)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Amendment SA 1388 agreed to in Senate by Yea-Nay Vote. 66 - 33. Record Vote Number: 46.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to waive all applicable budgetary discipline with respect to the measure agreed to in Senate by Yea-Nay Vote. 66 - 33. Record Vote Number: 45. (CR S906-907)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Point of order that the emergency designations within the amendment violates the Congressional Budget Act of 1974 raised in Senate with respect to amendment SA 1388.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'S.Amdt.1578 SA 1578 fell when SA 1577 was tabled.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1577 Motion to table amendment SA 1577 agreed to in Senate by Voice Vote.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'S.Amdt.1580 SA 1580 fell when SA 1579 was tabled.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1579 Motion to table amendment SA 1579 agreed to in Senate by Voice Vote.',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1580 Considered by Senate. (consideration: CR S859)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1579 Considered by Senate. (consideration: CR S859, S906)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1578 Considered by Senate. (consideration: CR S859)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1577 Considered by Senate. (consideration: CR S859, S906)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Considered by Senate. (consideration: CR S859, S907)',
            },
            {
              actionAt: {
                datetime: '2024-02-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Considered by Senate. (consideration: CR S859-953)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'S.Amdt.1583 SA 1583 fell when SA 1582 fell.',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1582 SA 1582 fell when SA 1581 (the instructions of the motion to commit) fell.',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                "Motion by Senator Schumer to commit to Senate Committee on Veterans' Affairs with instructions to report forthwith with the following Senate amendment (SA 1581) fell when cloture was invoked on amendment SA 1388 in Senate.",
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Cloture on SA 1388 invoked in Senate by Yea-Nay Vote. 67 - 27. Record Vote Number: 44.',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                "Motion to table the motion by Senator Schumer to commit the bill (H.R. 815) to Senate Committee on Veterans' Affairs with instructions to report back forthwith with amendment SA 1581 rejected in Senate by Yea-Nay Vote. 40 - 53. Record Vote Number: 43.",
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1583 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1582 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1581 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1580 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1579 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1578 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1577 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Considered by Senate. (consideration: CR S838)',
            },
            {
              actionAt: {
                datetime: '2024-02-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Considered by Senate. (consideration: CR S838-856)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1583 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1582 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1581 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1580 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1579 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1578 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1577 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Considered by Senate. (consideration: CR S805)',
            },
            {
              actionAt: {
                datetime: '2024-02-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Considered by Senate. (consideration: CR S805-831)',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture motion on the measure presented in Senate. (CR S594)',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1583 Amendment SA 1583 proposed by Senator Schumer to Amendment SA 1582. (consideration: CR S594) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1582 Amendment SA 1582 proposed by Senator Schumer to Amendment SA 1581 (the instructions of the motion to commit). (consideration: CR S594) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1581 Amendment SA 1581 proposed by Senator Schumer. (consideration: CR S593) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                "Motion by Senator Schumer to commit to Senate Committee on Veterans' Affairs with instructions to report back forthwith with the following amendment (SA 1581) made in Senate. (text: CR S593)",
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1580 Amendment SA 1580 proposed by Senator Schumer to Amendment SA 1579. (consideration: CR S593) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1579 Amendment SA 1579 proposed by Senator Schumer to language proposed to be stricken by amendment no. 1388. (consideration: CR S593) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1578 Amendment SA 1578 proposed by Senator Schumer to Amendment SA 1577. (consideration: CR S593) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1577 Amendment SA 1577 proposed by Senator Schumer to Amendment SA 1388. (consideration: CR S593) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Cloture motion on amendment SA 1388 presented in Senate. (CR S593)',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.1388 Amendment SA 1388 proposed by Senator Schumer for Senator Murray. (consideration: CR S593) In the nature of a substitute.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Measure laid before Senate by motion. (consideration: CR S593-594)',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to reconsider the vote by which the second cloture motion on the motion to proceed to H.R. 815 was not invoked (Record Vote No. 332) rendered moot in Senate.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to consideration of measure agreed to in Senate by Yea-Nay Vote. 64 - 19. Record Vote Number: 42.',
            },
            {
              actionAt: {
                datetime: '2024-02-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to measure considered in Senate. (CR S565)',
            },
            {
              actionAt: {
                datetime: '2024-02-08T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Upon reconsideration, third cloture motion on the motion to proceed to the measure invoked in Senate by Yea-Nay Vote. 67 - 32. Record Vote Number: 41.',
            },
            {
              actionAt: {
                datetime: '2024-02-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to reconsider the vote by which the second cloture motion on the motion to proceed to H.R. 815 was not invoked (Record Vote No. 332) rendered moot in Senate.',
            },
            {
              actionAt: {
                datetime: '2024-02-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to reconsider the vote by which cloture on the motion to proceed to the measure was not invoked (Record Vote No. 39) agreed to in Senate by Yea-Nay Vote. 58 - 41. Record Vote Number: 40.',
            },
            {
              actionAt: {
                datetime: '2024-02-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to reconsider the vote by which the third cloture motion on the motion to proceed to the measure was not invoked (Record Vote No. 39) was agreed to in Senate by Yea-Nay Vote. 58 - 41. Record Vote Number: 40.',
            },
            {
              actionAt: {
                datetime: '2024-02-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Third cloture motion on the motion to proceed to the measure not invoked in Senate by Yea-Nay Vote. 49 - 50. Record Vote Number: 39.',
            },
            {
              actionAt: {
                datetime: '2024-02-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to measure considered in Senate. (CR S427)',
            },
            {
              actionAt: {
                datetime: '2024-02-05T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Third cloture motion on the motion to proceed to the measure presented in Senate. (CR S354)',
            },
            {
              actionAt: {
                datetime: '2024-02-05T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to consideration of measure made in Senate. (CR S354)',
            },
            {
              actionAt: {
                datetime: '2023-12-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to measure considered in Senate. (CR S5831)',
            },
            {
              actionAt: {
                datetime: '2023-12-06T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to reconsider the vote by which the second cloture motion on the motion to proceed to H.R. 815 was not invoked (Record Vote No. 332) entered in Senate.',
            },
            {
              actionAt: {
                datetime: '2023-12-06T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Second cloture motion on the motion to proceed to the measure not invoked in Senate by Yea-Nay Vote. 49 - 51. Record Vote Number: 332. (CR S5793)',
            },
            {
              actionAt: {
                datetime: '2023-12-06T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to consideration of measure made in Senate. (CR S5767)',
            },
            {
              actionAt: {
                datetime: '2023-12-04T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Second cloture motion on the motion to proceed to the measure presented in Senate. (CR S5709)',
            },
            {
              actionAt: {
                datetime: '2023-12-04T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to consideration of measure made in Senate. (CR S5709)',
            },
            {
              actionAt: {
                datetime: '2023-11-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Under the order of 11/13/2023, cloture motion on the motion to proceed withdrawn by unanimous consent in Senate.',
            },
            {
              actionAt: {
                datetime: '2023-11-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture motion on the motion to proceed to the measure presented in Senate.',
            },
            {
              actionAt: {
                datetime: '2023-11-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to consideration of measure made in Senate.',
            },
            {
              actionAt: {
                datetime: '2023-03-21T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Read the second time. Placed on Senate Legislative Calendar under General Orders. Calendar No. 30.',
            },
            {
              actionAt: {
                datetime: '2023-03-16T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Read the first time. Placed on Senate Legislative Calendar under Read the First Time.',
            },
            {
              actionAt: {
                datetime: '2023-03-08T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Received in the Senate.',
            },
            {
              actionAt: {
                datetime: '2023-03-07T17:29:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2023-03-07T17:29:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion to suspend the rules and pass the bill, as amended Agreed to by voice vote. (text: CR H1126)',
            },
            {
              actionAt: {
                datetime: '2023-03-07T17:18:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - The House proceeded with forty minutes of debate on H.R. 815.',
            },
            {
              actionAt: {
                datetime: '2023-03-07T17:18:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Considered under suspension of the rules. (consideration: CR H1126-1127)',
            },
            {
              actionAt: {
                datetime: '2023-03-07T17:18:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Mr. Bost moved to suspend the rules and pass the bill, as amended.',
            },
            {
              actionAt: {
                datetime: '2023-03-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                "Referred to the Subcommittee on Health. (Action By: Committee on Veterans' Affairs)",
            },
            {
              actionAt: {
                datetime: '2023-02-02T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                "Referred to the House Committee on Veterans' Affairs.",
            },
            {
              actionAt: {
                datetime: '2023-02-02T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Introduced in House',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2024-04-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Became Public Law No: 118-50.',
            },
            {
              actionAt: {
                datetime: '2024-04-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Signed by President.',
            },
            {
              actionAt: {
                datetime: '2024-04-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Presented to President.',
            },
            {
              actionAt: {
                datetime: '2024-04-23T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Resolving differences -- Senate actions: Senate agreed to the House amendment to the Senate amendment to H.R. 815 by Yea-Nay Vote. 79 - 18. Record Vote Number: 154.',
            },
            {
              actionAt: {
                datetime: '2024-04-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Resolving differences -- House actions: On motion that the House agree with an amendment to the Senate amendment Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2024-02-13T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in Senate: Passed Senate with an amendment by Yea-Nay Vote. 70 - 29. Record Vote Number: 48.',
            },
            {
              actionAt: {
                datetime: '2023-03-07T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in House: On motion to suspend the rules and pass the bill, as amended Agreed to by voice vote. (text: CR H1126)',
            },
            {
              actionAt: {
                datetime: '2023-02-02T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          summary:
            '[congress.gov] This act provides FY2024 supplemental appropriations to several federal agencies for assistance to Ukraine, Israel, and U.S. allies in the Indo-Pacific region. The act also addresses various foreign policy issues.',
          title:
            'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '2024年國安緊急補充撥款法案',
        },
      },
      id: '6753dbc51e937e031b1b320a',
      introducedAt: {
        datetime: '2023-02-02T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '815',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: "[Wikipedia] Cathy Anne McMorris Rodgers (born May 22, 1969) is an American politician who is the United States representative for Washington's 5th congressional district, which encompasses the eastern third of the state and includes Spokane, the state's second-largest city. A Republican, McMorris Rodgers previously served in the Washington House of Representatives. From 2013 to 2019, she chaired the House Republican Conference.",
          birthday: {
            datetime: '1969-05-22T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'M001159',
            govTrackId: 400659,
            committees: [
              {
                id: '6753dafca31c960031c15dd3',
                name: 'House Committee on Energy and Commerce',
                title: 'chair',
                subcommittees: [],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-07T05:19:56.242Z',
          currentParty: 'republican',
          displayName: 'Cathy McMorris Rodgers',
          experiences: [
            {
              isCurrent: true,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 5, Washington',
                  start: {
                    datetime: '2005-01-04T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [
                    109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
                  ],
                },
              ],
            },
          ],
          gender: 'female',
          govTrackId: '400659',
          i18n: {
            en: {
              displayName: 'Cathy McMorris Rodgers',
              bio: "[Wikipedia] Cathy Anne McMorris Rodgers (born May 22, 1969) is an American politician who is the United States representative for Washington's 5th congressional district, which encompasses the eastern third of the state and includes Spokane, the state's second-largest city. A Republican, McMorris Rodgers previously served in the Washington House of Representatives. From 2013 to 2019, she chaired the House Republican Conference.",
            },
            zh: {
              displayName: '羅傑斯',
              bio: '[Wikipedia] 凱西·安妮·麥克莫里斯·羅傑斯（英語：Cathy Anne McMorris Rodgers，1969年5月22日—），是美國政治人物，現任代表華盛頓州第五國會選區聯邦眾議員，該選區涵蓋該州東部三分之一的面積，包括該州第二大城市斯波坎。曾在華盛頓眾議院任職。2013年至2019年擔任眾議院共和黨會議主席，2023年成為美國眾議院能源和商業委員會主席。',
            },
          },
          id: '6753dafc1e937e031b1b3107',
          links: [
            {
              id: '6753dafca31c960031c15dcf',
              link: 'https://x.com/CathyMcMorris',
              title: '@CathyMcMorris',
            },
            {
              id: '6753dafca31c960031c15dd0',
              link: 'https://www.facebook.com/mcmorrisrodgers',
              title: '@mcmorrisrodgers',
            },
            {
              id: '6753dafca31c960031c15dd1',
              link: 'https://www.youtube.com/channel/UCRp0lwIxAhq2Ia9_YgRWUkg',
              title: 'mcmorrisrodgers',
            },
            {
              id: '6753dafca31c960031c15dd2',
              link: 'https://instagram.com/cathymcmorris',
              title: '@cathymcmorris',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Cathy_McMorris_Rodgers.jpg',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '6753dbc51e937e031b1b320a',
              title:
                'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
            },
          ],
          tags: [],
          updatedAt: '2024-12-09T03:07:33.284Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'becomeLaw',
        futureSteps: [],
        passedSteps: [
          'introduced',
          'passedHouse',
          'passedSenate',
          'resolvingDifferences',
          'toPresident',
          'becomeLaw',
        ],
      },
      summary:
        '[congress.gov] This act provides FY2024 supplemental appropriations to several federal agencies for assistance to Ukraine, Israel, and U.S. allies in the Indo-Pacific region. The act also addresses various foreign policy issues.',
      tags: [],
      title:
        'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
      type: 'hr',
      updatedAt: '2024-12-07T05:23:17.629Z',
    },
    {
      categories: [
        {
          id: '6748875ec842897fb7f2a291',
          i18n: {
            en: {
              name: 'Taiwan’s Defense',
            },
            zh: {
              name: '台灣國防',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/554',
      cosponsors: [
        {
          id: '6752b1cae3d2f2003198864b',
          party: 'democratic',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Bradley James Sherman (born October 24, 1954) is an American accountant and politician serving as the U.S. representative for California's 32nd congressional district. A member of the Democratic Party, he first entered Congress in 1997. Sherman represented California's 24th congressional district for three terms, California's 27th congressional district for five terms, and California's 30th congressional district for five terms. His district includes parts of the San Fernando Valley in Los Angeles County and the eastern part of the Simi Hills in Ventura County.",
            birthday: {
              datetime: '1954-10-24T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            congressionalData: {
              bioGuideId: 'S000344',
              govTrackId: 400371,
              committees: [
                {
                  id: '675295c1363aa0029d97df64',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      id: '675295c9363aa0029d97df66',
                      name: 'Capital Markets',
                      title: 'ranking',
                    },
                    {
                      id: '675295d3363aa0029d97df67',
                      name: 'Digital Assets, Financial Technology and Inclusion',
                      title: null,
                    },
                    {
                      id: '675295dc363aa0029d97df68',
                      name: 'Financial Institutions and Monetary Policy',
                      title: null,
                    },
                  ],
                },
                {
                  id: '675295c7363aa0029d97df65',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      id: '675295ef363aa0029d97df69',
                      name: 'Indo-Pacific',
                      title: null,
                    },
                    {
                      id: '675295f5363aa0029d97df6a',
                      name: 'Middle East, North Africa, and Central Asia',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T06:07:08.308Z',
            currentParty: 'democratic',
            displayName: 'Brad Sherman',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 24, California',
                    start: {
                      datetime: '1997-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: '2003-01-03T00:00:00.000Z',
                    },
                    congresses: [105, 106, 107],
                  },
                  {
                    title: 'Representative for district 27, California',
                    start: {
                      datetime: '2003-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: '2013-01-03T00:00:00.000Z',
                    },
                    congresses: [108, 109, 110, 111, 112],
                  },
                  {
                    title: 'Representative for district 30, California',
                    start: {
                      datetime: '2013-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [118],
                  },
                ],
              },
            ],
            gender: 'male',
            govTrackId: '400371',
            i18n: {
              en: {
                displayName: 'Brad Sherman',
                bio: "[Wikipedia] Bradley James Sherman (born October 24, 1954) is an American accountant and politician serving as the U.S. representative for California's 32nd congressional district. A member of the Democratic Party, he first entered Congress in 1997. Sherman represented California's 24th congressional district for three terms, California's 27th congressional district for five terms, and California's 30th congressional district for five terms. His district includes parts of the San Fernando Valley in Los Angeles County and the eastern part of the Simi Hills in Ventura County.",
              },
              zh: {
                displayName: '薛曼',
                bio: '[Wikipedia] 布萊德·詹姆士·薛曼（英語：Brad James Sherman；1954年10月24日—）是美國的一位政治人物。他的黨籍是民主黨。自2013年開始，他是加利福尼亞州第三十二國會選區選出的眾議員。他從1997年起擔任聯邦眾議員，之前的選區是第24選區和第27選區。',
              },
            },
            id: '6752948c4040f8e6920dece8',
            links: [
              {
                id: '67529598363aa0029d97df61',
                link: 'https://x.com/BradSherman',
                title: '@BradSherman',
              },
              {
                id: '6752959f363aa0029d97df62',
                link: 'https://www.facebook.com/CongressmanBradSherman',
                title: '@CongressmanBradSherman',
              },
              {
                id: '675295a9363aa0029d97df63',
                link: 'https://www.youtube.com/channel/UCPisrz6-SLwVy2l9Mcy8kug',
                title: 'Congressman Brad Sherman',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman.jpg',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-11T10:00:06.874Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f2003198864c',
          party: 'republican',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Michael Vincent Lawler (born September 9, 1986) is an American politician serving as the U.S. representative for New York's 17th congressional district since 2023. From 2021 to 2022, he was a Republican member of the New York State Assembly from the 97th district in Rockland County.",
            birthday: {
              datetime: '1986-09-09T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            congressionalData: {
              bioGuideId: 'L000599',
              govTrackId: 456924,
              committees: [
                {
                  id: '67529ba2363aa0029d97df6f',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      id: '67529bad363aa0029d97df70',
                      name: 'Housing and Insurance',
                      title: null,
                    },
                    {
                      id: '67529bb5363aa0029d97df71',
                      name: 'Capital Markets',
                      title: null,
                    },
                  ],
                },
                {
                  id: '67529bbd363aa0029d97df72',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      id: '67529bc7363aa0029d97df73',
                      name: 'Europe',
                      title: null,
                    },
                    {
                      id: '67529bd0363aa0029d97df74',
                      name: 'Middle East, North Africa, and Central Asia',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T06:36:04.411Z',
            currentParty: 'republican',
            displayName: 'Michael Lawler',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 17, New York',
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [118],
                  },
                ],
              },
            ],
            gender: 'male',
            govTrackId: '456924',
            i18n: {
              en: {
                displayName: 'Michael Lawler',
                bio: "[Wikipedia] Michael Vincent Lawler (born September 9, 1986) is an American politician serving as the U.S. representative for New York's 17th congressional district since 2023. From 2021 to 2022, he was a Republican member of the New York State Assembly from the 97th district in Rockland County.",
              },
              zh: {
                displayName: '勞勒',
                bio: '',
              },
            },
            id: '67529b544040f8e6920df153',
            links: [
              {
                id: '67529b8d363aa0029d97df6e',
                link: 'https://x.com/RepMikeLawler',
                title: '@RepMikeLawler',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler.png',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-06T07:25:30.865Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f2003198864d',
          party: 'democratic',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Suzanne Marie Lee (née Kelley; born November 7, 1966) is an American politician from the state of Nevada. As a member of the Democratic Party, she has served as the U. S. representative for Nevada's 3rd congressional district since 2019. Lee was the founding director of the Inner-City Games in Las Vegas and president of Communities In Schools of Nevada.",
            birthday: {
              datetime: '1966-11-07T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            congressionalData: {
              bioGuideId: 'L000590',
              govTrackId: 412802,
              committees: [
                {
                  id: '67529cdaf5009a00321fea50',
                  name: 'House Committee on Natural Resources',
                  title: null,
                  subcommittees: [
                    {
                      id: '67529cdaf5009a00321fea53',
                      name: 'Energy and Mineral Resources',
                      title: null,
                    },
                    {
                      id: '67529cdaf5009a00321fea54',
                      name: 'Oversight and Investigations',
                      title: null,
                    },
                  ],
                },
                {
                  id: '67529cdaf5009a00321fea51',
                  name: 'House Committee on Appropriations',
                  title: null,
                  subcommittees: [
                    {
                      id: '67529cdaf5009a00321fea55',
                      name: 'Energy and Water Development, and Related Agencies',
                      title: null,
                    },
                    {
                      id: '67529cdaf5009a00321fea56',
                      name: 'Military Construction, Veterans Affairs, and Related Agencies',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T06:42:34.905Z',
            currentParty: 'democratic',
            displayName: 'Susie Lee',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 3, Nevada',
                    start: {
                      datetime: '2019-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [116, 117, 118],
                  },
                ],
              },
            ],
            gender: 'female',
            govTrackId: '412802',
            i18n: {
              en: {
                displayName: 'Susie Lee',
                bio: "[Wikipedia] Suzanne Marie Lee (née Kelley; born November 7, 1966) is an American politician from the state of Nevada. As a member of the Democratic Party, she has served as the U. S. representative for Nevada's 3rd congressional district since 2019. Lee was the founding director of the Inner-City Games in Las Vegas and president of Communities In Schools of Nevada.",
              },
              zh: {
                displayName: '',
                bio: '',
              },
            },
            id: '67529cda4040f8e6920df1d0',
            links: [
              {
                id: '67529cdaf5009a00321fea4f',
                link: 'https://x.com/RepSusieLee',
                title: '@RepSusieLee',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee.jpg',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-06T07:24:57.908Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f2003198864e',
          party: 'democratic',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Patrick Kevin Ryan (born March 28, 1982) is an American businessman, Democratic politician, and veteran serving as the U.S. representative for New York's 18th congressional district since 2023. He served as the representative for New York's 19th congressional district from 2022 to 2023 after being elected in a special election. He previously served as the county executive of Ulster County, New York.",
            birthday: {
              datetime: '1982-03-28T00:00:00.000Z',
              precision: [],
            },
            congressionalData: {
              bioGuideId: 'R000579',
              govTrackId: 456871,
              committees: [
                {
                  id: '6752a93de3d2f20031988606',
                  name: 'House Committee on Transportation and Infrastructure',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752a93de3d2f2003198860a',
                      name: 'Highways and Transit',
                      title: null,
                    },
                    {
                      id: '6752a93de3d2f2003198860b',
                      name: 'Water Resources and Environment',
                      title: null,
                    },
                  ],
                },
                {
                  id: '6752a93de3d2f20031988607',
                  name: 'House Committee on Armed Services',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752a93de3d2f2003198860c',
                      name: 'Cyber, Information Technologies, and Innovation',
                      title: null,
                    },
                    {
                      id: '6752a93de3d2f2003198860d',
                      name: 'Tactical Air and Land Forces',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T07:35:25.201Z',
            currentParty: 'democratic',
            displayName: 'Patrick Ryan',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 19, New York',
                    start: {
                      datetime: '2022-09-13T00:00:00.000Z',
                    },
                    end: {
                      datetime: '2023-01-03T00:00:00.000Z',
                    },
                    congresses: [117],
                  },
                  {
                    title: 'Representative for district 18, New York',
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [118],
                  },
                ],
              },
            ],
            gender: 'male',
            govTrackId: '456871',
            i18n: {
              en: {
                displayName: 'Patrick Ryan',
                bio: "[Wikipedia] Patrick Kevin Ryan (born March 28, 1982) is an American businessman, Democratic politician, and veteran serving as the U.S. representative for New York's 18th congressional district since 2023. He served as the representative for New York's 19th congressional district from 2022 to 2023 after being elected in a special election. He previously served as the county executive of Ulster County, New York.",
              },
              zh: {
                displayName: null,
                bio: null,
              },
            },
            id: '6752a93d2ddcf95deb375352',
            links: [
              {
                id: '6752a93de3d2f20031988605',
                link: 'https://x.com/RepPatRyanNY',
                title: '@RepPatRyanNY',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan.png',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-06T07:35:25.201Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f2003198864f',
          party: 'democratic',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Christopher Charles Pappas (born June 4, 1980) is an American politician who has served as the U.S. representative from New Hampshire's 1st congressional district since 2019. A member of the Democratic Party, Pappas previously served on the New Hampshire Executive Council from 2013 to 2019.",
            birthday: {
              datetime: '1980-06-04T00:00:00.000Z',
              precision: [],
            },
            congressionalData: {
              bioGuideId: 'P000614',
              govTrackId: 412795,
              committees: [
                {
                  id: '6752a9fee3d2f20031988610',
                  name: 'House Committee on Transportation and Infrastructure',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752a9fee3d2f20031988614',
                      name: 'Coast Guard and Maritime Transportation',
                      title: null,
                    },
                    {
                      id: '6752a9fee3d2f20031988615',
                      name: 'Highways and Transit',
                      title: null,
                    },
                    {
                      id: '6752a9fee3d2f20031988616',
                      name: 'Water Resources and Environment',
                      title: null,
                    },
                  ],
                },
                {
                  id: '6752a9fee3d2f20031988611',
                  name: "House Committee on Veterans' Affairs",
                  title: null,
                  subcommittees: [
                    {
                      id: '6752a9fee3d2f20031988617',
                      name: 'Disability Assistance and Memorial Affairs',
                      title: 'ranking',
                    },
                    {
                      id: '6752a9fee3d2f20031988618',
                      name: 'Oversight and Investigations',
                      title: null,
                    },
                  ],
                },
                {
                  id: '6752a9fee3d2f20031988612',
                  name: 'House Committee on Small Business',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752a9fee3d2f20031988619',
                      name: 'Innovation, Entrepreneurship, and Workforce Development',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T07:38:38.247Z',
            currentParty: 'democratic',
            displayName: 'Chris Pappas',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 1, New Hampshire',
                    start: {
                      datetime: '2019-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [116, 117, 118],
                  },
                ],
              },
            ],
            gender: 'male',
            govTrackId: '412795',
            i18n: {
              en: {
                displayName: 'Chris Pappas',
                bio: "[Wikipedia] Christopher Charles Pappas (born June 4, 1980) is an American politician who has served as the U.S. representative from New Hampshire's 1st congressional district since 2019. A member of the Democratic Party, Pappas previously served on the New Hampshire Executive Council from 2013 to 2019.",
              },
              zh: {
                displayName: null,
                bio: null,
              },
            },
            id: '6752a9fe2ddcf95deb375520',
            links: [
              {
                id: '6752a9fee3d2f2003198860f',
                link: 'https://x.com/RepChrisPappas',
                title: '@RepChrisPappas',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas.png',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-09T03:21:33.017Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f20031988650',
          party: 'republican',
          people: {
            __typename: 'People',
            billCount: 1,
            bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
            birthday: {
              datetime: '1962-10-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            congressionalData: {
              bioGuideId: 'K000397',
              govTrackId: 456802,
              committees: [
                {
                  id: '6752ab3ce3d2f2003198861c',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752ab3ce3d2f20031988620',
                      name: 'Financial Institutions and Monetary Policy',
                      title: null,
                    },
                    {
                      id: '6752ab3ce3d2f20031988621',
                      name: 'National Security, Illicit Finance, and International Financial Institutions',
                      title: 'viceChair',
                    },
                  ],
                },
                {
                  id: '6752ab3ce3d2f2003198861d',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752ab3ce3d2f20031988622',
                      name: 'Indo-Pacific',
                      title: 'chair',
                    },
                    {
                      id: '6752ab3ce3d2f20031988623',
                      name: 'Africa',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T07:43:56.020Z',
            currentParty: 'republican',
            displayName: 'Young Kim',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 39, California',
                    start: {
                      datetime: '2021-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: '2023-01-03T00:00:00.000Z',
                    },
                    congresses: [117],
                  },
                  {
                    title: 'Representative for district 40, California',
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [118],
                  },
                ],
              },
            ],
            gender: 'female',
            govTrackId: '456802',
            i18n: {
              en: {
                displayName: 'Young Kim',
                bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
              },
              zh: {
                displayName: '金映玉',
                bio: '[Wikipedia] 金映玉（英語：Young Oak Kim，韓語：최영옥；1962年10月18日—），本姓崔（金為夫姓），是一位韓裔美籍政治家和商人，現任加利福尼亞州第40國會選區的眾議員，此前曾於2021年至2023年任第39國會選區的眾議員。在2020年美國眾議院選舉中，金映玉、朴銀珠和瑪麗蓮·斯特里克蘭成為首批當選美國國會議員的三位韓裔女性。 她和朴銀珠也是自金昌準後第一批當選國會議員的韓裔加州人。',
              },
            },
            id: '6752ab3c2ddcf95deb375586',
            links: [
              {
                id: '6752ab3ce3d2f2003198861b',
                link: 'https://x.com/RepYoungKim',
                title: '@RepYoungKim',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim.jpg',
            },
            publications: [],
            records: [],
            sponsorBills: [
              {
                id: '6754822c437319f5138bfa48',
                title: 'Taiwan Non-Discrimination Act of 2023',
              },
            ],
            tags: [],
            updatedAt: '2024-12-06T07:43:56.020Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f20031988651',
          party: 'republican',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Monica De La Cruz (born November 11, 1974) is an American politician and insurance agent from the state of Texas. She has represented Texas's 15th congressional district in the U.S. House of Representatives since 2023.",
            birthday: {
              datetime: '1974-11-11T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            congressionalData: {
              bioGuideId: 'D000594',
              govTrackId: 456943,
              committees: [
                {
                  id: '6752abcee3d2f20031988626',
                  name: 'House Committee on Agriculture',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752abcee3d2f20031988629',
                      name: 'Nutrition, Foreign Agriculture, and Horticulture',
                      title: null,
                    },
                    {
                      id: '6752abcee3d2f2003198862a',
                      name: 'General Farm Commodities, Risk Management, and Credit',
                      title: null,
                    },
                  ],
                },
                {
                  id: '6752abcee3d2f20031988627',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752abcee3d2f2003198862b',
                      name: 'Housing and Insurance',
                      title: null,
                    },
                    {
                      id: '6752abcee3d2f2003198862c',
                      name: 'Financial Institutions and Monetary Policy',
                      title: null,
                    },
                    {
                      id: '6752abcee3d2f2003198862d',
                      name: 'National Security, Illicit Finance, and International Financial Institutions',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T07:46:22.064Z',
            currentParty: 'republican',
            displayName: 'Monica De La Cruz',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 15, Texas',
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [118],
                  },
                ],
              },
            ],
            gender: 'female',
            govTrackId: '456943',
            i18n: {
              en: {
                displayName: 'Monica De La Cruz',
                bio: "[Wikipedia] Monica De La Cruz (born November 11, 1974) is an American politician and insurance agent from the state of Texas. She has represented Texas's 15th congressional district in the U.S. House of Representatives since 2023.",
              },
              zh: {
                displayName: null,
                bio: null,
              },
            },
            id: '6752abce2ddcf95deb3755ec',
            links: [
              {
                id: '6752abcee3d2f20031988625',
                link: 'https://x.com/monica4congress',
                title: '@monica4congress',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz.jpg',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-06T07:46:22.064Z',
            viewCount: 0,
            votes: [],
          },
        },
        {
          id: '6752b1cae3d2f20031988652',
          party: 'republican',
          people: {
            __typename: 'People',
            billCount: 0,
            bio: "[Wikipedia] Ann Louise Wagner (née Trousdale, September 13, 1962) is an American politician and former diplomat serving as the U.S. representative for Missouri's 2nd congressional district. A member of the Republican Party, she was the United States ambassador to Luxembourg from 2005 to 2009.",
            birthday: {
              datetime: '1962-09-13T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            congressionalData: {
              bioGuideId: 'W000812',
              govTrackId: 412548,
              committees: [
                {
                  id: '6752ac8de3d2f20031988633',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752ac8de3d2f20031988636',
                      name: 'Capital Markets',
                      title: 'chair',
                    },
                    {
                      id: '6752ac8de3d2f20031988637',
                      name: 'Oversight and Investigations',
                      title: null,
                    },
                  ],
                },
                {
                  id: '6752ac8de3d2f20031988634',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      id: '6752ac8de3d2f20031988638',
                      name: 'Indo-Pacific',
                      title: null,
                    },
                    {
                      id: '6752ac8de3d2f20031988639',
                      name: 'Europe',
                      title: null,
                    },
                  ],
                },
              ],
            },
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
              },
            ],
            createdAt: '2024-12-06T07:49:33.927Z',
            currentParty: 'republican',
            displayName: 'Ann Wagner',
            experiences: [
              {
                isCurrent: true,
                category: 'House Representative',
                company: 'United States House of Representatives',
                positions: [
                  {
                    title: 'Representative for district 2, Missouri',
                    start: {
                      datetime: '2013-01-03T00:00:00.000Z',
                    },
                    end: {
                      datetime: null,
                    },
                    congresses: [113, 114, 115, 116, 117, 118],
                  },
                ],
              },
            ],
            gender: 'female',
            govTrackId: '412548',
            i18n: {
              en: {
                displayName: 'Ann Wagner',
                bio: "[Wikipedia] Ann Louise Wagner (née Trousdale, September 13, 1962) is an American politician and former diplomat serving as the U.S. representative for Missouri's 2nd congressional district. A member of the Republican Party, she was the United States ambassador to Luxembourg from 2005 to 2009.",
              },
              zh: {
                displayName: '華格納',
                bio: '[Wikipedia] 安·路易斯·瓦格納（英語：Ann Louise Wagner，1962年9月13日—）是美國政治人物和前外交官，現任代表密蘇里州第二國會選區眾議院議員，曾擔任美國駐盧森堡大使。',
              },
            },
            id: '6752ac8d2ddcf95deb375652',
            links: [
              {
                id: '6752ac8de3d2f2003198862f',
                link: 'https://x.com/RepAnnWagner',
                title: '@RepAnnWagner',
              },
              {
                id: '6752ac8de3d2f20031988630',
                link: 'https://facebook.com/RepAnnWagner',
                title: '@RepAnnWagner',
              },
              {
                id: '6752ac8de3d2f20031988631',
                link: 'https://youtube.com/channel/UCy2v2DXXvQnbRc8Zx77Dnsg',
                title: '@annwagner160',
              },
              {
                id: '6752ac8de3d2f20031988632',
                link: 'https://instagram.com/repannwagner',
                title: '@repannwagner',
              },
            ],
            partyChangeRecords: [],
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner.jpg',
            },
            publications: [],
            records: [],
            sponsorBills: [],
            tags: [],
            updatedAt: '2024-12-11T09:58:19.768Z',
            viewCount: 0,
            votes: [],
          },
        },
      ],
      createdAt: '2024-12-06T08:11:54.651Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2024-09-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Received in the Senate and Read twice and referred to the Committee on Banking, Housing, and Urban Affairs.',
            },
            {
              actionAt: {
                datetime: '2024-09-09T15:00:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2024-09-09T15:00:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion to suspend the rules and pass the bill, as amended Agreed to by voice vote. (text: CR H5042-5043)',
            },
            {
              actionAt: {
                datetime: '2024-09-09T14:39:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - The House proceeded with forty minutes of debate on H.R. 554.',
            },
            {
              actionAt: {
                datetime: '2024-09-09T14:39:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Considered under suspension of the rules. (consideration: CR H5042-5046)',
            },
            {
              actionAt: {
                datetime: '2024-09-09T14:39:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Mrs. Kim (CA) moved to suspend the rules and pass the bill, as amended.',
            },
            {
              actionAt: {
                datetime: '2023-12-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Placed on the Union Calendar, Calendar No. 236.',
            },
            {
              actionAt: {
                datetime: '2023-12-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Reported (Amended) by the Committee on Financial Services. H. Rept. 118-292.',
            },
            {
              actionAt: {
                datetime: '2023-02-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Ordered to be Reported in the Nature of a Substitute (Amended) by the Yeas and Nays: 41 - 0. (Action By: Committee on Financial Services)',
            },
            {
              actionAt: {
                datetime: '2023-02-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Committee Consideration and Mark-up Session Held. (Action By: Committee on Financial Services)',
            },
            {
              actionAt: {
                datetime: '2023-01-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Referred to the House Committee on Financial Services.',
            },
            {
              actionAt: {
                datetime: '2023-01-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Introduced in House',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2024-09-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in House: On motion to suspend the rules and pass the bill, as amended Agreed to by voice vote. (text: CR H5042-5043)',
            },
            {
              actionAt: {
                datetime: '2023-12-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Reported (Amended) by the Committee on Financial Services. H. Rept. 118-292.',
            },
            {
              actionAt: {
                datetime: '2023-01-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          summary:
            '[Congress.Gov] This bill, in the event of a threat to U.S. interests by China, (1) requires additional reporting on the domestic and foreign financial activity of specified Chinese officials, and (2) prohibits certain financial transactions with specified Chinese officials.',
          title: 'Taiwan Conflict Deterrence Act of 2023',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: '',
          title: '台灣衝突嚇阻法案',
        },
      },
      id: '6752b1ca2ddcf95deb37622c',
      introducedAt: {
        datetime: '2023-01-26T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '554',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: "[Wikipedia] James French Hill (born December 5, 1956) is an American businessman and politician serving as the U.S. representative for Arkansas's 2nd congressional district since 2015. He is a member of the Republican Party.",
          birthday: {
            datetime: '1956-12-05T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'H001072',
            govTrackId: 412609,
            committees: [
              {
                id: '675293f7363aa0029d97df52',
                name: 'House Permanent Select Committee on Intelligence',
                title: null,
                subcommittees: [
                  {
                    id: '67529401363aa0029d97df53',
                    name: 'National Intelligence Enterprise',
                    title: null,
                  },
                  {
                    id: '67529409363aa0029d97df54',
                    name: 'National Security Agency and Cyber',
                    title: null,
                  },
                ],
              },
              {
                id: '67529413363aa0029d97df55',
                name: 'House Committee on Financial Services',
                title: null,
                subcommittees: [
                  {
                    id: '67529418363aa0029d97df56',
                    name: 'Capital Markets',
                    title: null,
                  },
                  {
                    id: '67529421363aa0029d97df57',
                    name: 'Digital Assets, Financial Technology and Inclusion',
                    title: 'chair',
                  },
                ],
              },
              {
                id: '6752942d363aa0029d97df58',
                name: 'House Committee on Foreign Affairs',
                title: null,
                subcommittees: [
                  {
                    id: '67529432363aa0029d97df59',
                    name: 'Oversight and Accountability',
                    title: null,
                  },
                  {
                    id: '67529439363aa0029d97df5a',
                    name: 'Global Health, Global Human Rights, and International Organizations',
                    title: null,
                  },
                ],
              },
            ],
          },
          cosponsorBills: [],
          createdAt: '2024-12-06T06:04:16.433Z',
          currentParty: 'republican',
          displayName: 'French Hill',
          experiences: [
            {
              isCurrent: true,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 2, Arkansas',
                  start: {
                    datetime: '2015-01-03T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [114, 115, 116, 117, 118],
                },
              ],
            },
          ],
          gender: 'male',
          govTrackId: '412609',
          i18n: {
            en: {
              displayName: 'French Hill',
              bio: "[Wikipedia] James French Hill (born December 5, 1956) is an American businessman and politician serving as the U.S. representative for Arkansas's 2nd congressional district since 2015. He is a member of the Republican Party.",
            },
            zh: {
              displayName: '希爾',
              bio: '[Wikipedia] 弗蘭奇·希爾（英語：French Hill；1956年12月5日—）是美國的一位政治人物。自2015年開始，他是阿肯色州第2選舉區選出的美國眾議院議員。他的黨籍是共和黨。他的2014年的眾議員選舉中首次當選。希爾畢業於范德堡大學。',
            },
          },
          id: '675293e04040f8e6920dec77',
          links: [
            {
              id: '675293e0f5009a00321fea45',
              link: 'https://x.com/RepFrenchHill',
              title: '@RepFrenchHill',
            },
            {
              id: '675293e0f5009a00321fea46',
              link: 'https://www.facebook.com/RepFrenchHill',
              title: '@RepFrenchHill',
            },
            {
              id: '675293e0f5009a00321fea47',
              link: 'https://www.instagram.com/repfrenchhill',
              title: '@repfrenchhill',
            },
            {
              id: '675293e0f5009a00321fea48',
              link: 'https://www.youtube.com/channel/UCT8uWroJtkwSsCJlVg0IKvQ',
              title: '@RepFrenchHill',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill.png',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '6752b1ca2ddcf95deb37622c',
              title: 'Taiwan Conflict Deterrence Act of 2023',
            },
          ],
          tags: [],
          updatedAt: '2024-12-06T06:05:50.815Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'passedHouse',
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
        passedSteps: ['introduced', 'passedHouse'],
      },
      summary:
        '[Congress.Gov] This bill, in the event of a threat to U.S. interests by China, (1) requires additional reporting on the domestic and foreign financial activity of specified Chinese officials, and (2) prohibits certain financial transactions with specified Chinese officials.',
      tags: [
        {
          id: '6749a45ca313f435f157fc3a',
          i18n: {
            en: {
              name: 'Taiwan Caucus',
            },
            zh: {
              name: '國會台灣連線',
            },
          },
        },
      ],
      title: 'Taiwan Conflict Deterrence Act of 2023',
      type: 'hr',
      updatedAt: '2024-12-08T06:13:18.102Z',
    },
    {
      categories: [
        {
          id: '6748874bc842897fb7f2a289',
          i18n: {
            en: {
              name: 'International Participation',
            },
            zh: {
              name: '國際參與',
            },
          },
        },
      ],
      congress: 118,
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/540',
      cosponsors: [],
      createdAt: '2024-12-07T17:13:16.607Z',
      i18n: {
        en: {
          actionsAll: [
            {
              actionAt: {
                datetime: '2024-01-16T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Received in the Senate and Read twice and referred to the Committee on Foreign Relations.',
            },
            {
              actionAt: {
                datetime: '2024-01-12T10:51:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2024-01-12T10:51:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion to suspend the rules and pass the bill, as amended Agreed to by voice vote. (text: 1/10/2024 CR H31-32)',
            },
            {
              actionAt: {
                datetime: '2024-01-12T10:50:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Considered as unfinished business. (consideration: CR H125)',
            },
            {
              actionAt: {
                datetime: '2024-01-10T14:40:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'At the conclusion of debate, the chair put the question on the motion to suspend the rules. Mr. McHenry objected to the vote on the grounds that a quorum was not present. Further proceedings on the motion were postponed. The point of no quorum was considered as withdrawn.',
            },
            {
              actionAt: {
                datetime: '2024-01-10T14:40:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - The House proceeded with forty minutes of debate on H.R. 540.',
            },
            {
              actionAt: {
                datetime: '2024-01-10T14:39:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Considered under suspension of the rules. (consideration: CR H31-33)',
            },
            {
              actionAt: {
                datetime: '2024-01-10T14:39:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Mr. McHenry moved to suspend the rules and pass the bill, as amended.',
            },
            {
              actionAt: {
                datetime: '2023-12-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Placed on the Union Calendar, Calendar No. 237.',
            },
            {
              actionAt: {
                datetime: '2023-12-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Reported (Amended) by the Committee on Financial Services. H. Rept. 118-293.',
            },
            {
              actionAt: {
                datetime: '2023-02-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Ordered to be Reported in the Nature of a Substitute (Amended) by the Yeas and Nays: 38 - 0. (Action By: Committee on Financial Services)',
            },
            {
              actionAt: {
                datetime: '2023-02-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Committee Consideration and Mark-up Session Held. (Action By: Committee on Financial Services)',
            },
            {
              actionAt: {
                datetime: '2023-01-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'Referred to the House Committee on Financial Services.',
            },
            {
              actionAt: {
                datetime: '2023-01-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Introduced in House',
            },
          ],
          actionsOverview: [
            {
              actionAt: {
                datetime: '2024-01-12T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in House: On motion to suspend the rules and pass the bill, as amended Agreed to by voice vote. (text: 1/10/2024 CR H31-32)',
            },
            {
              actionAt: {
                datetime: '2023-12-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Reported (Amended) by the Committee on Financial Services. H. Rept. 118-293.',
            },
            {
              actionAt: {
                datetime: '2023-01-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          summary:
            "[congress.gov] This bill requires actions to support Taiwan's participation in the International Monetary Fund (IMF).\n\nThe U.S. Governor of the IMF must advocate for (1) Taiwan's admission into the IMF as a member, to the extent Taiwan seeks to be a member; (2) Taiwan's participation in the IMF's regular surveillance activities relating to Taiwan's economic and financial policies; (3) employment opportunities at the IMF for Taiwan nationals; and (4) Taiwan's ability to receive IMF technical assistance and training.",
          title: 'Taiwan Non-Discrimination Act of 2023',
        },
        zh: {
          actionsAll: null,
          actionsOverview: null,
          summary: null,
          title: '不歧視台灣法案',
        },
      },
      id: '6754822c437319f5138bfa48',
      introducedAt: {
        datetime: '2023-01-26T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      latestActionTime: null,
      number: '540',
      popularityRank: null,
      relatedBills: [],
      sponsor: {
        party: 'republican',
        people: {
          __typename: 'People',
          billCount: 1,
          bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
          birthday: {
            datetime: '1962-10-18T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          congressionalData: {
            bioGuideId: 'K000397',
            govTrackId: 456802,
            committees: [
              {
                id: '6752ab3ce3d2f2003198861c',
                name: 'House Committee on Financial Services',
                title: null,
                subcommittees: [
                  {
                    id: '6752ab3ce3d2f20031988620',
                    name: 'Financial Institutions and Monetary Policy',
                    title: null,
                  },
                  {
                    id: '6752ab3ce3d2f20031988621',
                    name: 'National Security, Illicit Finance, and International Financial Institutions',
                    title: 'viceChair',
                  },
                ],
              },
              {
                id: '6752ab3ce3d2f2003198861d',
                name: 'House Committee on Foreign Affairs',
                title: null,
                subcommittees: [
                  {
                    id: '6752ab3ce3d2f20031988622',
                    name: 'Indo-Pacific',
                    title: 'chair',
                  },
                  {
                    id: '6752ab3ce3d2f20031988623',
                    name: 'Africa',
                    title: null,
                  },
                ],
              },
            ],
          },
          cosponsorBills: [
            {
              id: '6752b1ca2ddcf95deb37622c',
              title: 'Taiwan Conflict Deterrence Act of 2023',
            },
          ],
          createdAt: '2024-12-06T07:43:56.020Z',
          currentParty: 'republican',
          displayName: 'Young Kim',
          experiences: [
            {
              isCurrent: true,
              category: 'House Representative',
              company: 'United States House of Representatives',
              positions: [
                {
                  title: 'Representative for district 39, California',
                  start: {
                    datetime: '2021-01-03T00:00:00.000Z',
                  },
                  end: {
                    datetime: '2023-01-03T00:00:00.000Z',
                  },
                  congresses: [117],
                },
                {
                  title: 'Representative for district 40, California',
                  start: {
                    datetime: '2023-01-03T00:00:00.000Z',
                  },
                  end: {
                    datetime: null,
                  },
                  congresses: [118],
                },
              ],
            },
          ],
          gender: 'female',
          govTrackId: '456802',
          i18n: {
            en: {
              displayName: 'Young Kim',
              bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
            },
            zh: {
              displayName: '金映玉',
              bio: '[Wikipedia] 金映玉（英語：Young Oak Kim，韓語：최영옥；1962年10月18日—），本姓崔（金為夫姓），是一位韓裔美籍政治家和商人，現任加利福尼亞州第40國會選區的眾議員，此前曾於2021年至2023年任第39國會選區的眾議員。在2020年美國眾議院選舉中，金映玉、朴銀珠和瑪麗蓮·斯特里克蘭成為首批當選美國國會議員的三位韓裔女性。 她和朴銀珠也是自金昌準後第一批當選國會議員的韓裔加州人。',
            },
          },
          id: '6752ab3c2ddcf95deb375586',
          links: [
            {
              id: '6752ab3ce3d2f2003198861b',
              link: 'https://x.com/RepYoungKim',
              title: '@RepYoungKim',
            },
          ],
          partyChangeRecords: [],
          photo: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim.jpg',
          },
          publications: [],
          records: [],
          sponsorBills: [
            {
              id: '6754822c437319f5138bfa48',
              title: 'Taiwan Non-Discrimination Act of 2023',
            },
          ],
          tags: [],
          updatedAt: '2024-12-06T07:43:56.020Z',
          viewCount: 0,
          votes: [],
        },
      },
      statusTracker: {
        currentStep: 'passedHouse',
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
        passedSteps: ['introduced', 'passedHouse'],
      },
      summary:
        "[congress.gov] This bill requires actions to support Taiwan's participation in the International Monetary Fund (IMF).\n\nThe U.S. Governor of the IMF must advocate for (1) Taiwan's admission into the IMF as a member, to the extent Taiwan seeks to be a member; (2) Taiwan's participation in the IMF's regular surveillance activities relating to Taiwan's economic and financial policies; (3) employment opportunities at the IMF for Taiwan nationals; and (4) Taiwan's ability to receive IMF technical assistance and training.",
      tags: [],
      title: 'Taiwan Non-Discrimination Act of 2023',
      type: 'hr',
      updatedAt: '2024-12-07T17:13:16.607Z',
    },
  ] as unknown as BillDto[]
  return data.map((item) => Bill.fromDTO(lang, item))
}

export const getPopularBills = (lang: Language): Bill[] => {
  // 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
  return getLatestBills(lang)
}
