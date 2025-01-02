import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { People } from '@/modules/People/classes/People'
import { Bill } from '@/modules/Bill/classes/Bill'
import { BILL_DTO_MOCK } from '@/modules/Bill/dtoData'
import {
  CategoriesBills,
  TopCosponsorsQuery,
  TopSponsorsQuery,
  TopTagsQuery,
  TrendByCategoryQuery,
  Bill as BillDto,
  CountBills,
  Tags,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'

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
    {
      billCount: 0,
      tag: {
        id: '6758e2c4e981ce40d9597c5a',
        i18n: {
          en: {
            name: 'Shutsung Liao',
          },
          zh: {
            name: '廖述宗',
          },
        },
      },
    },
    {
      billCount: 0,
      tag: {
        id: '6758e385e981ce40d9597c90',
        i18n: {
          en: {
            name: 'TSMC',
          },
          zh: {
            name: '台積電',
          },
        },
      },
    },
  ]
}

export const getAllTags = (): Tags => {
  return {
    docs: [
      {
        id: '6758e385e981ce40d9597c90',
        i18n: {
          en: {
            name: 'TSMC',
          },
          zh: {
            name: '台積電',
          },
        },
        isFeatured: true,
      },
      {
        id: '6758e2c4e981ce40d9597c5a',
        i18n: {
          en: {
            name: 'Shutsung Liao',
          },
          zh: {
            name: '廖述宗',
          },
        },
        isFeatured: true,
      },
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
        isFeatured: true,
      },
    ],
  }
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
      id: '67548182437319f5138bf983',
      i18n: {
        en: {
          title:
            "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
          summary: 'NA',
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
        },
        zh: {
          title: '決議案表揚台灣的民主選舉歷史及支持台灣的民主制度',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '521',
      type: 'sres',
      introducedAt: {
        datetime: '2024-01-11T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: false,
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
      tags: [],
      statusTracker: {
        currentStep: 'agreedToInSenate',
        passedSteps: ['introduced', 'passedSenate'],
        futureSteps: [],
      },
      sponsor: {
        people: {
          id: '675480c7437319f5138bf8c1',
          i18n: {
            en: {
              firstName: 'Daniel',
              lastName: 'Sullivan',
              middleName: 'Scott',
              displayName: 'Dan Sullivan',
              bio: '[Wikipedia] Daniel Scott Sullivan (born November 13, 1964) is an American politician and attorney serving as the junior United States senator from Alaska since 2015. A member of the Republican Party, Sullivan previously served as the commissioner of the Alaska Department of Natural Resources from 2010 to 2013, and as the Alaska Attorney General from 2009 to 2010.',
              otherNames: [
                {
                  otherName: 'Dan',
                  id: '675480c7d1d49300312fe0f6',
                },
              ],
            },
            zh: {
              firstName: null,
              lastName: '蘇利文',
              middleName: null,
              displayName: '蘇利文',
              bio: '[Wikipedia] 丹尼爾·史考特·蘇利文（英語：Daniel Scott Sullivan；1964年11月13日—），是一位美國共和黨政治人物，現任阿拉斯加州的聯邦參議員。',
              otherNames: [],
            },
          },
          photo: {
            id: '67595e8b7e1c21b02dd70b3e',
            alt: 'Dan_Sullivan.png',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Dan_Sullivan.png',
            filename: 'Dan_Sullivan.png',
            mimeType: 'image/png',
            width: 1024,
            height: 1280,
          },
          birthday: {
            datetime: '1964-11-13T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'S001198',
            govTrackId: 412665,
            committees: [
              {
                systemCode: 'ssas',
                name: 'Senate Committee on Armed Services',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'ssas13',
                    name: 'Seapower',
                    title: null,
                    id: '675480c7d1d49300312fe0f7',
                  },
                  {
                    systemCode: 'ssas15',
                    name: 'Readiness and Management Support',
                    title: 'ranking',
                    id: '675480c7d1d49300312fe0f8',
                  },
                  {
                    systemCode: 'ssas17',
                    name: 'Personnel',
                    title: null,
                    id: '675480c7d1d49300312fe0f9',
                  },
                ],
                id: '675480c7d1d49300312fe0f1',
              },
              {
                systemCode: 'sscm',
                name: 'Senate Committee on Commerce, Science, and Transportation',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'sscm33',
                    name: 'Aviation Safety, Operations, and Innovation',
                    title: null,
                    id: '675480c7d1d49300312fe0fa',
                  },
                  {
                    systemCode: 'sscm34',
                    name: 'Communications, Media, and Broadband',
                    title: null,
                    id: '675480c7d1d49300312fe0fb',
                  },
                  {
                    systemCode: 'sscm35',
                    name: 'Consumer Protection, Product Safety, and Data Security',
                    title: null,
                    id: '675480c7d1d49300312fe0fc',
                  },
                  {
                    systemCode: 'sscm36',
                    name: 'Oceans, Fisheries, Climate Change, and Manufacturing',
                    title: 'ranking',
                    id: '675480c7d1d49300312fe0fd',
                  },
                ],
                id: '675480c7d1d49300312fe0f2',
              },
              {
                systemCode: 'ssev',
                name: 'Senate Committee on Environment and Public Works',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'ssev09',
                    name: 'Chemical Safety, Waste Management, Environmental Justice, and Regulatory Oversight',
                    title: null,
                    id: '675480c7d1d49300312fe0fe',
                  },
                  {
                    systemCode: 'ssev10',
                    name: 'Clean Air, Climate, and Nuclear Safety',
                    title: null,
                    id: '675480c7d1d49300312fe0ff',
                  },
                  {
                    systemCode: 'ssev15',
                    name: 'Fisheries, Water, and Wildlife',
                    title: null,
                    id: '675480c7d1d49300312fe100',
                  },
                ],
                id: '675480c7d1d49300312fe0f3',
              },
              {
                systemCode: 'ssva',
                name: "Senate Committee on Veterans' Affairs",
                title: null,
                subcommittees: [],
                id: '675480c7d1d49300312fe0f4',
              },
            ],
          },
          experiences: [
            {
              company: 'United States Senate',
              category: 'Senator',
              isCurrent: true,
              positions: [
                {
                  title: 'Senator for Alaska',
                  description: null,
                  start: {
                    datetime: '2015-01-06T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: null,
                    precision: [],
                  },
                  state: 'alaska',
                  district: null,
                  party: 'republican',
                  congresses: [114, 115, 116, 117, 118],
                  officialAreas: [],
                  companyType: null,
                  id: '675480c7d1d49300312fe0f5',
                },
              ],
              id: '675480c7d1d49300312fe0ec',
            },
          ],
          publications: [],
          links: [
            {
              type: 'twitter',
              title: '@SenDanSullivan',
              link: 'https://x.com/SenDanSullivan',
              id: '675480c7d1d49300312fe0ed',
            },
            {
              type: 'instagram',
              title: '@sen_dansullivan',
              link: 'https://instagram.com/sen_dansullivan',
              id: '675480c7d1d49300312fe0ee',
            },
            {
              type: 'facebook',
              title: '@SenDanSullivan',
              link: 'https://facebook.com/SenDanSullivan',
              id: '675480c7d1d49300312fe0ef',
            },
            {
              type: 'youtube',
              title: '@SenatorDanSullivan',
              link: 'https://youtube.com/channel/UC7tXCm8gKlAhTFo2kuf5ylw',
              id: '675480c7d1d49300312fe0f0',
            },
          ],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 1,
          currentParty: 'republican',
          records: [],
          sponsorBills: [
            {
              id: '67548182437319f5138bf983',
              title:
                "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
              congress: 118,
              number: '521',
              type: 'sres',
              isFeatured: false,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'Dan Sullivan',
          bio: '[Wikipedia] Daniel Scott Sullivan (born November 13, 1964) is an American politician and attorney serving as the junior United States senator from Alaska since 2015. A member of the Republican Party, Sullivan previously served as the commissioner of the Alaska Department of Natural Resources from 2010 to 2013, and as the Alaska Attorney General from 2009 to 2010.',
          govTrackId: '412665',
        },
        party: 'republican',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-resolution/521',
      popularityRank: null,
      relatedBills: [
        {
          id: '67545a48437319f5138be376',
          i18n: {
            en: {
              title: 'Taiwan Relations Act',
              summary:
                "[congress.gov] Taiwan Relations Act - Declares it to be the policy of the United States to preserve and promote extensive, close, and friendly commercial, cultural, and other relations between the people of the United States and the people on Taiwan, as well as the people on the China mainland and all other people of the Western Pacific area. Declares that peace and stability in the area are in the political, security, and economic interests of the United States, and are matters of international concern. States that the United States decision to establish diplomatic relations with the People's Republic of China rests upon the expectation that the future of Taiwan will be determined by peaceful means and that any effort to determine the future of Taiwan by other than peaceful means, including by boycotts or embargoes is considered a threat to the peace and security of the Western Pacific area and of grave concern to the United States. States that the United States shall provide Taiwan with arms of a defensive character and shall maintain the capacity of the United States to resist any resort to force or other forms of coercion that would jeopardize the security, or social or economic system, of the people of Taiwan.",
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Public Law 96-8.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Measure presented to President.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Conference report agreed to in Senate: Senate agreed to conference report, roll call #32 (85-4).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Conference report agreed to in House: House agreed to conference report, roll call #62 (339-50).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-24T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Conference report filed: Conference report filed in House, H. Rept. 96-71.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in Senate: Measure passed Senate, amended, in lieu of S. 245, roll call #17 (90-6).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in House: Measure passed House, amended, roll call #38 (345-55).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Reported to House from the Committee on Foreign Affairs, H. Rept. 96-26.',
                },
                {
                  actionAt: {
                    datetime: '1979-02-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in House',
                },
              ],
              actionsAll: [
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Public Law 96-8.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure presented to President.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Measure enrolled in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Measure enrolled in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Senate agreed to conference report, roll call #32 (85-4).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'House agreed to conference report, roll call #62 (339-50).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-24T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Conference report filed in House, H. Rept. 96-71.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-15T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Conference scheduled in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Conference scheduled in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Measure passed Senate, amended, in lieu of S. 245, roll call #17 (90-6).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Measure considered in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Measure called up by unanimous consent in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Measure passed House, amended, roll call #38 (345-55).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Motion to recommit to Committee on Foreign Affairs with instructions passed House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure considered in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-08T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure considered in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-08T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure called up by special rule in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Reported to House from the Committee on Foreign Affairs, H. Rept. 96-26.',
                },
                {
                  actionAt: {
                    datetime: '1979-02-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Referred to House Committee on Foreign Affairs.',
                },
                {
                  actionAt: {
                    datetime: '1979-02-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Introduced in House',
                },
              ],
            },
            zh: {
              title: '台灣關係法',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 96,
          number: '2479',
          type: 'hr',
          introducedAt: {
            datetime: '1979-02-28T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
          categories: [
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
          ],
          tags: [],
          statusTracker: {
            currentStep: 'becomeLaw',
            passedSteps: [
              'introduced',
              'passedHouse',
              'passedSenate',
              'resolvingDifferences',
              'toPresident',
              'becomeLaw',
            ],
            futureSteps: [],
          },
          sponsor: {
            people: {
              id: '6754597e437319f5138be2be',
              i18n: {
                en: {
                  firstName: 'Clement',
                  lastName: 'Zablocki',
                  middleName: 'John',
                  displayName: 'Clement J. Zablocki',
                  bio: "[Wikipedia] Clement John Zablocki (November 18, 1912 – December 3, 1983) was a Polish American politician from Milwaukee, Wisconsin. He was one of Wisconsin's longest-serving members of the U.S. House of Representatives, representing Wisconsin's 4th congressional district for 18 terms, from 1949 until his death in 1983.",
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: null,
                  middleName: null,
                  displayName: null,
                  bio: '[Wikipedia] 克萊門特·約翰·扎布洛基（英語：Clement John Zablocki；1912年11月18日—1983年12月3日），是一名美國民主黨籍政治家。曾任美國眾議院外交委員會主席、美國聯邦眾議員。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595f2b7e1c21b02dd70b50',
                alt: 'Clement_J_Zablocki.png',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Clement_J_Zablocki.png',
                filename: 'Clement_J_Zablocki.png',
                mimeType: 'image/png',
                width: 242,
                height: 310,
              },
              birthday: {
                datetime: '1912-11-18T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'Z000001',
                govTrackId: 411994,
                committees: [],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: false,
                  positions: [
                    {
                      title: 'Representative for district 4, Wisconsin',
                      description: null,
                      start: {
                        datetime: '1949-01-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: '1983-12-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      state: 'wisconsin',
                      district: 4,
                      party: 'democratic',
                      congresses: [
                        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
                        95, 96, 97,
                      ],
                      officialAreas: [],
                      companyType: null,
                      id: '6754597ed1d49300312fe08f',
                    },
                  ],
                  id: '6754597ed1d49300312fe08e',
                },
              ],
              publications: [],
              links: [],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'independent',
              records: [],
              sponsorBills: [
                {
                  id: '67545a48437319f5138be376',
                  title: 'Taiwan Relations Act',
                  congress: 96,
                  number: '2479',
                  type: 'hr',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Clement J. Zablocki',
              bio: "[Wikipedia] Clement John Zablocki (November 18, 1912 – December 3, 1983) was a Polish American politician from Milwaukee, Wisconsin. He was one of Wisconsin's longest-serving members of the U.S. House of Representatives, representing Wisconsin's 4th congressional district for 18 terms, from 1949 until his death in 1983.",
              govTrackId: '411994',
            },
            party: 'democratic',
          },
        },
        {
          id: '6753eb531e937e031b1b3508',
          i18n: {
            en: {
              title: 'Taiwan Relations Reinforcement Act of 2023',
              summary:
                '[congress.gov] The Department of State and other United States Government agencies shall treat the democratically elected Government of Taiwan as the legitimate representative of the people of Taiwan and end the outdated practice of referring to the government in Taiwan as the “authorities”.',
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '2023-10-24T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in Senate',
                },
              ],
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
            },
            zh: {
              title: '台灣關係強化法案',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 118,
          number: '3110',
          type: 's',
          introducedAt: {
            datetime: '2023-10-24T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
          categories: [
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
          ],
          tags: [],
          statusTracker: {
            currentStep: 'introduced',
            passedSteps: ['introduced'],
            futureSteps: [
              'passedSenate',
              'passedHouse',
              'toPresident',
              'becomeLaw',
            ],
          },
          sponsor: {
            people: {
              id: '6753ea9a1e937e031b1b343f',
              i18n: {
                en: {
                  firstName: 'Marco',
                  lastName: 'Rubio',
                  middleName: null,
                  displayName: 'Marco Rubio',
                  bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: '盧比歐',
                  middleName: null,
                  displayName: '盧比歐',
                  bio: '[Wikipedia] 馬可·安東尼奧·盧比歐（英語：Marco Antonio Rubio；1971年5月28日—），美國古巴裔政治人物、律師，生於美國佛羅里達州邁阿密，共和黨黨員，現任佛羅里達州資深聯邦參議員，自2011年起擔任該職務。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595d3a7e1c21b02dd70ad6',
                alt: 'Marco_Rubio.jpg',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Marco_Rubio.jpg',
                filename: 'Marco_Rubio.jpg',
                mimeType: 'image/jpeg',
                width: 3048,
                height: 3809,
              },
              birthday: {
                datetime: '1971-05-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'R000595',
                govTrackId: 412491,
                committees: [
                  {
                    systemCode: 'slin',
                    name: 'Senate Select Committee on Intelligence',
                    title: 'viceChair',
                    subcommittees: [],
                    id: '6753ea9aa31c960031c15de4',
                  },
                  {
                    systemCode: 'spag',
                    name: 'Senate Special Committee on Aging',
                    title: null,
                    subcommittees: [],
                    id: '6753ea9aa31c960031c15de5',
                  },
                  {
                    systemCode: 'ssap',
                    name: 'Senate Committee on Appropriations',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'ssap08',
                        name: 'Legislative Branch',
                        title: null,
                        id: '6753ea9aa31c960031c15dea',
                      },
                      {
                        systemCode: 'ssap18',
                        name: 'Labor, Health and Human Services, and Education, and Related Agencies',
                        title: null,
                        id: '6753ea9aa31c960031c15deb',
                      },
                      {
                        systemCode: 'ssap19',
                        name: 'Military Construction, Veterans Affairs, and Related Agencies',
                        title: null,
                        id: '6753ea9aa31c960031c15dec',
                      },
                      {
                        systemCode: 'ssap20',
                        name: 'State, Foreign Operations, and Related Programs',
                        title: null,
                        id: '6753ea9aa31c960031c15ded',
                      },
                      {
                        systemCode: 'ssap23',
                        name: 'Financial Services and General Government',
                        title: null,
                        id: '6753ea9aa31c960031c15dee',
                      },
                    ],
                    id: '6753ea9aa31c960031c15de6',
                  },
                  {
                    systemCode: 'ssfr',
                    name: 'Senate Committee on Foreign Relations',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'ssfr01',
                        name: 'Europe and Regional Security Cooperation',
                        title: null,
                        id: '6753ea9aa31c960031c15def',
                      },
                      {
                        systemCode: 'ssfr06',
                        name: "Western Hemisphere, Transnational Crime, Civilian …emocracy, Human Rights, and Global Women's Issues",
                        title: 'ranking',
                        id: '6753ea9aa31c960031c15df0',
                      },
                      {
                        systemCode: 'ssfr07',
                        name: 'Near East, South Asia, Central Asia, and Counterterrorism',
                        title: null,
                        id: '6753ea9aa31c960031c15df1',
                      },
                    ],
                    id: '6753ea9aa31c960031c15de7',
                  },
                  {
                    systemCode: 'sssb',
                    name: 'Senate Committee on Small Business and Entrepreneurship',
                    title: null,
                    subcommittees: [],
                    id: '6753ea9aa31c960031c15de8',
                  },
                ],
              },
              experiences: [
                {
                  company: 'United States Senate',
                  category: 'Senator',
                  isCurrent: true,
                  positions: [
                    {
                      title: 'Senator for Florida',
                      description: null,
                      start: {
                        datetime: '2011-01-05T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: null,
                        precision: [],
                      },
                      state: 'florida',
                      district: null,
                      party: 'republican',
                      congresses: [112, 113, 114, 115, 116, 117, 118],
                      officialAreas: [],
                      companyType: null,
                      id: '6753ea9aa31c960031c15de9',
                    },
                  ],
                  id: '6753ea9aa31c960031c15ddc',
                },
              ],
              publications: [
                {
                  title: "100 Innovative Ideas for Florida's Future",
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15ddd',
                },
                {
                  title:
                    'American Dreams: Restoring Economic Opportunity for Everyone',
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15dde',
                },
                {
                  title: 'An American Son: A Memoir',
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15ddf',
                },
                {
                  title:
                    "Decades of Decadence: How Our Spoiled Elites Blew America's Inheritance of Liberty, Security, and Prosperity",
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15de0',
                },
              ],
              links: [
                {
                  type: 'twitter',
                  title: '@SenRubioPress',
                  link: 'https://x.com/SenRubioPress',
                  id: '6753ea9aa31c960031c15de1',
                },
                {
                  type: 'facebook',
                  title: '@SenatorMarcoRubio',
                  link: 'https://facebook.com/SenatorMarcoRubio',
                  id: '6753ea9aa31c960031c15de2',
                },
                {
                  type: 'youtube',
                  title: '@SenatorMarcoRubio',
                  link: 'https://youtube.com/channel/UCh8t7sV_DBKz4A-RkL9feyg',
                  id: '6753ea9aa31c960031c15de3',
                },
              ],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'republican',
              records: [],
              sponsorBills: [
                {
                  id: '6753eb531e937e031b1b3508',
                  title: 'Taiwan Relations Reinforcement Act of 2023',
                  congress: 118,
                  number: '3110',
                  type: 's',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [
                {
                  id: '67546936437319f5138be7df',
                  title: 'Taiwan Fellowship Act',
                  congress: 117,
                  number: '811',
                  type: 's',
                  isFeatured: true,
                },
              ],
              votes: [],
              displayName: 'Marco Rubio',
              bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
              govTrackId: '412491',
            },
            party: 'republican',
          },
        },
        {
          id: '6753d3951e937e031b1b3091',
          i18n: {
            en: {
              title:
                'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
              summary:
                "[congress.gov] This bill requires the Department of State to annually report to Congress on steps the State Department has taken to help strengthen Taiwan's diplomatic relationships and partnerships around the world. (Taiwan is self-governing, but China considers it a renegade province and has taken actions to encourage countries and international organizations to limit or cut off relations with Taiwan.)",
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Became Public Law No: 116-135.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-16T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Presented to President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-11T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Resolving differences -- Senate actions: Senate agreed to the House amendment to S. 1678 by Unanimous Consent.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in House: On motion to suspend the rules and pass the bill, as amended Agreed to by the Yeas and Nays: (2/3 required): 415 - 0 (Roll no. 85).',
                },
                {
                  actionAt: {
                    datetime: '2019-10-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in Senate: Passed Senate with an amendment by Unanimous Consent.(consideration: CR S6254-6255)',
                },
                {
                  actionAt: {
                    datetime: '2019-09-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Committee on Foreign Relations. Reported by Senator Risch with an amendment in the nature of a substitute. Without written report.',
                },
                {
                  actionAt: {
                    datetime: '2019-05-23T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in Senate',
                },
              ],
              actionsAll: [
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Became Public Law No: 116-135.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-16T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Presented to President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-12T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Message on Senate action sent to the House.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-11T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Senate agreed to the House amendment to S. 1678 by Unanimous Consent.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-11T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Measure laid before Senate by unanimous consent. (consideration: CR S1710)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-05T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Message on House action received in Senate and at desk: House amendment to Senate bill.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T16:32:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Motion to reconsider laid on the table Agreed to without objection.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T16:32:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'On motion to suspend the rules and pass the bill, as amended Agreed to by the Yeas and Nays: (2/3 required): 415 - 0 (Roll no. 85). (text: 03/03/2020 CR H1452-1453)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T16:01:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Considered as unfinished business. (consideration: CR H1494-1495)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:47:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'At the conclusion of debate, the Yeas and Nays were demanded and ordered. Pursuant to the provisions of clause 8, rule XX, the Chair announced that further proceedings on the motion would be postponed.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:42:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'DEBATE - The House proceeded with forty minutes of debate on S. 1678.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:42:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Considered under suspension of the rules. (consideration: CR H1452-1454)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:42:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Mr. Cicilline moved to suspend the rules and pass the bill, as amended.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-31T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-31T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-31T12:28:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description: 'Received in the House.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-30T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Message on Senate action sent to the House.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Passed Senate with an amendment by Unanimous Consent. (consideration: CR S6254-6255)',
                },
                {
                  actionAt: {
                    datetime: '2019-09-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Placed on Senate Legislative Calendar under General Orders. Calendar No. 237.',
                },
                {
                  actionAt: {
                    datetime: '2019-09-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Committee on Foreign Relations. Reported by Senator Risch with an amendment in the nature of a substitute. Without written report.',
                },
                {
                  actionAt: {
                    datetime: '2019-09-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Committee on Foreign Relations. Ordered to be reported with an amendment favorably.',
                },
                {
                  actionAt: {
                    datetime: '2019-05-23T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Read twice and referred to the Committee on Foreign Relations.',
                },
              ],
            },
            zh: {
              title: '2019年台灣盟邦國際保障與強化倡議法 (台北法)',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 116,
          number: '1678',
          type: 's',
          introducedAt: {
            datetime: '2019-05-23T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
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
          tags: [],
          statusTracker: {
            currentStep: 'becomeLaw',
            passedSteps: [
              'introduced',
              'passedSenate',
              'passedHouse',
              'resolvingDifferences',
              'toPresident',
              'becomeLaw',
            ],
            futureSteps: [],
          },
          sponsor: {
            people: {
              id: '6753d2a91e937e031b1b2fcf',
              i18n: {
                en: {
                  firstName: 'Cory',
                  lastName: 'Gardner',
                  middleName: '',
                  displayName: 'Cory Gardner',
                  bio: "[Wikipedia] Cory Scott Gardner (born August 22, 1974) is an American attorney and politician who served as a United States senator from Colorado from 2015 to 2021. A Republican, he was the U.S. representative for Colorado's 4th congressional district from 2011 to 2015 and a member of the Colorado House of Representatives from 2005 to 2011.",
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: '賈德納',
                  middleName: null,
                  displayName: '賈德納',
                  bio: '[Wikipedia] 柯瑞·史考特·賈德納（英語：Cory Scott Gardner；1974年8月22日—），是美國一位共和黨籍的政治人物，曾任科羅拉多州聯邦參議員和聯邦眾議員，以及科羅拉多州眾議院議員。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595d367e1c21b02dd70ac3',
                alt: 'Cory_Gardner.jpeg',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Cory_Gardner.jpg',
                filename: 'Cory_Gardner.jpg',
                mimeType: 'image/jpeg',
                width: 1616,
                height: 2048,
              },
              birthday: {
                datetime: '1974-08-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'G000562',
                govTrackId: 412406,
                committees: [],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: false,
                  positions: [
                    {
                      title: 'Representative for district 4, Colorado',
                      description: null,
                      start: {
                        datetime: '2011-01-05T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: '2015-01-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      state: 'colorado',
                      district: 4,
                      party: 'republican',
                      congresses: [112, 113],
                      officialAreas: [],
                      companyType: null,
                      id: '6753d2a9a31c960031c15dcc',
                    },
                  ],
                  id: '6753d2a9a31c960031c15dca',
                },
                {
                  company: 'United States Senate',
                  category: 'Senator',
                  isCurrent: false,
                  positions: [
                    {
                      title: 'Senator for Colorado',
                      description: null,
                      start: {
                        datetime: '2015-01-06T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: '2021-01-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      state: 'colorado',
                      district: null,
                      party: 'republican',
                      congresses: [114, 115, 116],
                      officialAreas: [],
                      companyType: null,
                      id: '6753d2a9a31c960031c15dcd',
                    },
                  ],
                  id: '6753d2a9a31c960031c15dcb',
                },
              ],
              publications: [],
              links: [],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'independent',
              records: [],
              sponsorBills: [
                {
                  id: '6753d3951e937e031b1b3091',
                  title:
                    'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
                  congress: 116,
                  number: '1678',
                  type: 's',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Cory Gardner',
              bio: "[Wikipedia] Cory Scott Gardner (born August 22, 1974) is an American attorney and politician who served as a United States senator from Colorado from 2015 to 2021. A Republican, he was the U.S. representative for Colorado's 4th congressional district from 2011 to 2015 and a member of the Colorado House of Representatives from 2005 to 2011.",
              govTrackId: '412406',
            },
            party: 'republican',
          },
        },
        {
          id: '6753d02c1e937e031b1b2f54',
          i18n: {
            en: {
              title: 'Taiwan International Solidarity Act',
              summary:
                "[congress.gov] This bill requires the Department of State to annually report to Congress on efforts by China to undermine Taiwan's participation in international organizations or Taiwan's relationships with other countries.",
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
            },
            zh: {
              title: '台灣國際團結法案',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 118,
          number: '1176',
          type: 'hr',
          introducedAt: {
            datetime: '2023-02-24T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: true,
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
          tags: [],
          statusTracker: {
            currentStep: 'passedHouse',
            passedSteps: ['introduced', 'passedHouse'],
            futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
          },
          sponsor: {
            people: {
              id: '6753cf371e937e031b1b2e13',
              i18n: {
                en: {
                  firstName: 'Gerald',
                  lastName: 'Connolly',
                  middleName: 'E.',
                  displayName: 'Gerald E. Connolly',
                  bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
                  otherNames: [
                    {
                      otherName: 'Gerry',
                      id: '6753cf37a31c960031c15dc5',
                    },
                  ],
                },
                zh: {
                  firstName: '康諾里',
                  lastName: null,
                  middleName: null,
                  displayName: null,
                  bio: null,
                  otherNames: [],
                },
              },
              photo: {
                id: '67595f7d7e1c21b02dd70b62',
                alt: 'Gerald_E_Connolly.png',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Gerald_E_Connolly.png',
                filename: 'Gerald_E_Connolly.png',
                mimeType: 'image/png',
                width: 851,
                height: 1064,
              },
              birthday: {
                datetime: '1950-03-30T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'C001078',
                govTrackId: 412272,
                committees: [
                  {
                    systemCode: 'hsfa',
                    name: 'House Committee on Foreign Affairs',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsfa05',
                        name: 'Indo-Pacific',
                        title: null,
                        id: '6753cf37a31c960031c15dc6',
                      },
                      {
                        systemCode: 'hsfa13',
                        name: 'Middle East, North Africa, and Central Asia',
                        title: null,
                        id: '6753cf37a31c960031c15dc7',
                      },
                    ],
                    id: '6753cf37a31c960031c15dc1',
                  },
                  {
                    systemCode: 'hsfd',
                    name: 'House Select Subcommittee on the Weaponization of the Federal Government',
                    title: null,
                    subcommittees: [],
                    id: '6753cf37a31c960031c15dc2',
                  },
                  {
                    systemCode: 'hsgo',
                    name: 'House Committee on Oversight and Accountability',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsgo12',
                        name: 'Cybersecurity, Information Technology, and Government Innovation',
                        title: 'ranking',
                        id: '6753cf37a31c960031c15dc8',
                      },
                      {
                        systemCode: 'hsgo24',
                        name: 'Government Operations and the Federal Workforce',
                        title: null,
                        id: '6753cf37a31c960031c15dc9',
                      },
                    ],
                    id: '6753cf37a31c960031c15dc3',
                  },
                ],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: true,
                  positions: [
                    {
                      title: 'Representative for district 11, Virginia',
                      description: null,
                      start: {
                        datetime: '2009-01-06T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: null,
                        precision: [],
                      },
                      state: 'virginia',
                      district: 11,
                      party: 'democratic',
                      congresses: [111, 112, 113, 114, 115, 116, 117, 118],
                      officialAreas: [],
                      companyType: null,
                      id: '6753cf37a31c960031c15dc4',
                    },
                  ],
                  id: '6753cf37a31c960031c15dbc',
                },
              ],
              publications: [],
              links: [
                {
                  type: 'other',
                  title: 'Offcial Website',
                  link: 'https://connolly.house.gov',
                  id: '6753cf37a31c960031c15dbd',
                },
                {
                  type: 'twitter',
                  title: '@GerryConnolly',
                  link: 'https://x.com/GerryConnolly',
                  id: '6753cf37a31c960031c15dbe',
                },
                {
                  type: 'facebook',
                  title: '@CongressmanGerryConnolly',
                  link: 'https://www.facebook.com/CongressmanGerryConnolly',
                  id: '6753cf37a31c960031c15dbf',
                },
                {
                  type: 'youtube',
                  title: 'repconnolly',
                  link: 'https://www.youtube.com/channel/UC4WG9PlmoOeSLIuyVjs-RSA',
                  id: '6753cf37a31c960031c15dc0',
                },
              ],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 2,
              currentParty: 'democratic',
              records: [],
              sponsorBills: [
                {
                  id: '6753d02c1e937e031b1b2f54',
                  title: 'Taiwan International Solidarity Act',
                  congress: 118,
                  number: '1176',
                  type: 'hr',
                  isFeatured: true,
                },
                {
                  id: '67547c63437319f5138bf852',
                  title:
                    'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
                  congress: 118,
                  number: '955',
                  type: 'hres',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Gerald E. Connolly',
              bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
              govTrackId: '412272',
            },
            party: 'democratic',
          },
        },
        {
          id: '67547aa3437319f5138bf725',
          i18n: {
            en: {
              title:
                "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
              summary:
                '[congress.gov] This concurrent resolution calls on the President to abandon the One China policy in favor of one that recognizes Taiwan as an independent country that is not a part of China. The resolution also urges the President to bolster diplomatic and economic relations between the United States and Taiwan through specified means.',
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in House',
                },
              ],
              actionsAll: [
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned. (Action By: House of Representatives)',
                },
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned. (Action By: House of Representatives)',
                },
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description:
                    'Introduced in House (Action By: House of Representatives)',
                },
              ],
            },
            zh: {
              title:
                '表達國會認為美國應與台灣恢復正常的外交關係、協調雙邊自由貿易協定及支持台灣加入國際組織',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 118,
          number: '10',
          type: 'hconres',
          introducedAt: {
            datetime: '2023-01-25T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
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
          ],
          tags: [],
          statusTracker: {
            currentStep: 'introduced',
            passedSteps: ['introduced'],
            futureSteps: ['agreedToInHouse', 'agreedToInSenate'],
          },
          sponsor: {
            people: {
              id: '6754799f437319f5138bf65a',
              i18n: {
                en: {
                  firstName: 'Thomas',
                  lastName: 'Tiffany',
                  middleName: 'P.',
                  displayName: 'Thomas P. Tiffany',
                  bio: "[Wikipedia] Thomas P. Tiffany (born December 30, 1957) is an American businessman and politician serving as the U.S. representative for Wisconsin's 7th congressional district since winning a special election in 2020. A member of the Republican Party, he previously served seven years in the Wisconsin Senate and two years in the State Assembly, representing the northeast region of the state.",
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: '帝芬尼',
                  middleName: null,
                  displayName: '帝芬尼',
                  bio: '[Wikipedia] 湯瑪斯·P·蒂芬尼（英語：Thomas P. Tiffany，1957年12月30日—），美國商人、政治家，2020年起接替尚恩·達菲，當選威斯康辛州第七國會選區聯邦眾議院議員，共和黨員。此前曾當選威斯康辛州眾議院議員和威斯康辛州參議院議員。2021年2月，與賓夕法尼亞州聯邦眾議員史考特·佩里提出共同決議案，呼籲拜登政府終結「一個中國政策」並與台灣建立外交關係。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595e607e1c21b02dd70b29',
                alt: 'Thomas_P_Tiffany.png',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Thomas_P_Tiffany.png',
                filename: 'Thomas_P_Tiffany.png',
                mimeType: 'image/png',
                width: 1024,
                height: 1280,
              },
              birthday: {
                datetime: '1957-12-30T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'T000165',
                govTrackId: 456791,
                committees: [
                  {
                    systemCode: 'hsii',
                    name: 'House Committee on Natural Resources',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsii06',
                        name: 'Energy and Mineral Resources',
                        title: null,
                        id: '6754799fd1d49300312fe0e8',
                      },
                      {
                        systemCode: 'hsii10',
                        name: 'Federal Lands',
                        title: 'chair',
                        id: '6754799fd1d49300312fe0e9',
                      },
                    ],
                    id: '6754799fd1d49300312fe0e5',
                  },
                  {
                    systemCode: 'hsju',
                    name: 'House Committee on the Judiciary',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsju01',
                        name: 'Immigration Integrity, Security, and Enforcement',
                        title: null,
                        id: '6754799fd1d49300312fe0ea',
                      },
                      {
                        systemCode: 'hsju08',
                        name: 'Crime and Federal Government Surveillance',
                        title: null,
                        id: '6754799fd1d49300312fe0eb',
                      },
                    ],
                    id: '6754799fd1d49300312fe0e6',
                  },
                ],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: true,
                  positions: [
                    {
                      title: 'Representative for district 7, Wisconsin',
                      description: null,
                      start: {
                        datetime: '2020-05-19T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: null,
                        precision: [],
                      },
                      state: 'wisconsin',
                      district: 7,
                      party: 'republican',
                      congresses: [116, 117, 118],
                      officialAreas: [],
                      companyType: null,
                      id: '6754799fd1d49300312fe0e7',
                    },
                  ],
                  id: '6754799fd1d49300312fe0e3',
                },
              ],
              publications: [],
              links: [
                {
                  type: 'twitter',
                  title: '@RepTiffany',
                  link: 'https://x.com/RepTiffany',
                  id: '6754799fd1d49300312fe0e4',
                },
              ],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'republican',
              records: [],
              sponsorBills: [
                {
                  id: '67547aa3437319f5138bf725',
                  title:
                    "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
                  congress: 118,
                  number: '10',
                  type: 'hconres',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Thomas P. Tiffany',
              bio: "[Wikipedia] Thomas P. Tiffany (born December 30, 1957) is an American businessman and politician serving as the U.S. representative for Wisconsin's 7th congressional district since winning a special election in 2020. A member of the Republican Party, he previously served seven years in the Wisconsin Senate and two years in the State Assembly, representing the northeast region of the state.",
              govTrackId: '456791',
            },
            party: 'republican',
          },
        },
      ],
      title:
        "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
      summary: 'NA',
      latestActionTime: '2024-01-11T00:00:00.000Z',
      updatedAt: '2024-12-26T05:16:12.299Z',
      createdAt: '2024-12-07T17:10:26.203Z',
    },
    {
      id: '67547c63437319f5138bf852',
      i18n: {
        en: {
          title:
            'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
          summary:
            "[congress.gov] This resolution commends Taiwan for its example of self-governance and regards Taiwan's democracy as a great strategic strength for the free world. The resolution also expresses concern about Chinese interference in Taiwan's 2024 elections and expresses commitment to continuing a strong partnership with Taiwan, regardless of the outcome of the elections.",
          actionsOverview: [
            {
              actionAt: {
                datetime: '2024-01-10T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
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
        },
        zh: {
          title: '表揚台灣的民主選舉歷史及支持台灣維護其民主制度',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '955',
      type: 'hres',
      introducedAt: {
        datetime: '2024-01-10T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: false,
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
      tags: [],
      statusTracker: {
        currentStep: 'introduced',
        passedSteps: ['introduced'],
        futureSteps: ['passedHouse'],
      },
      sponsor: {
        people: {
          id: '6753cf371e937e031b1b2e13',
          i18n: {
            en: {
              firstName: 'Gerald',
              lastName: 'Connolly',
              middleName: 'E.',
              displayName: 'Gerald E. Connolly',
              bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
              otherNames: [
                {
                  otherName: 'Gerry',
                  id: '6753cf37a31c960031c15dc5',
                },
              ],
            },
            zh: {
              firstName: '康諾里',
              lastName: null,
              middleName: null,
              displayName: null,
              bio: null,
              otherNames: [],
            },
          },
          photo: {
            id: '67595f7d7e1c21b02dd70b62',
            alt: 'Gerald_E_Connolly.png',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Gerald_E_Connolly.png',
            filename: 'Gerald_E_Connolly.png',
            mimeType: 'image/png',
            width: 851,
            height: 1064,
          },
          birthday: {
            datetime: '1950-03-30T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'C001078',
            govTrackId: 412272,
            committees: [
              {
                systemCode: 'hsfa',
                name: 'House Committee on Foreign Affairs',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'hsfa05',
                    name: 'Indo-Pacific',
                    title: null,
                    id: '6753cf37a31c960031c15dc6',
                  },
                  {
                    systemCode: 'hsfa13',
                    name: 'Middle East, North Africa, and Central Asia',
                    title: null,
                    id: '6753cf37a31c960031c15dc7',
                  },
                ],
                id: '6753cf37a31c960031c15dc1',
              },
              {
                systemCode: 'hsfd',
                name: 'House Select Subcommittee on the Weaponization of the Federal Government',
                title: null,
                subcommittees: [],
                id: '6753cf37a31c960031c15dc2',
              },
              {
                systemCode: 'hsgo',
                name: 'House Committee on Oversight and Accountability',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'hsgo12',
                    name: 'Cybersecurity, Information Technology, and Government Innovation',
                    title: 'ranking',
                    id: '6753cf37a31c960031c15dc8',
                  },
                  {
                    systemCode: 'hsgo24',
                    name: 'Government Operations and the Federal Workforce',
                    title: null,
                    id: '6753cf37a31c960031c15dc9',
                  },
                ],
                id: '6753cf37a31c960031c15dc3',
              },
            ],
          },
          experiences: [
            {
              company: 'United States House of Representatives',
              category: 'House Representative',
              isCurrent: true,
              positions: [
                {
                  title: 'Representative for district 11, Virginia',
                  description: null,
                  start: {
                    datetime: '2009-01-06T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: null,
                    precision: [],
                  },
                  state: 'virginia',
                  district: 11,
                  party: 'democratic',
                  congresses: [111, 112, 113, 114, 115, 116, 117, 118],
                  officialAreas: [],
                  companyType: null,
                  id: '6753cf37a31c960031c15dc4',
                },
              ],
              id: '6753cf37a31c960031c15dbc',
            },
          ],
          publications: [],
          links: [
            {
              type: 'other',
              title: 'Offcial Website',
              link: 'https://connolly.house.gov',
              id: '6753cf37a31c960031c15dbd',
            },
            {
              type: 'twitter',
              title: '@GerryConnolly',
              link: 'https://x.com/GerryConnolly',
              id: '6753cf37a31c960031c15dbe',
            },
            {
              type: 'facebook',
              title: '@CongressmanGerryConnolly',
              link: 'https://www.facebook.com/CongressmanGerryConnolly',
              id: '6753cf37a31c960031c15dbf',
            },
            {
              type: 'youtube',
              title: 'repconnolly',
              link: 'https://www.youtube.com/channel/UC4WG9PlmoOeSLIuyVjs-RSA',
              id: '6753cf37a31c960031c15dc0',
            },
          ],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 2,
          currentParty: 'democratic',
          records: [],
          sponsorBills: [
            {
              id: '6753d02c1e937e031b1b2f54',
              title: 'Taiwan International Solidarity Act',
              congress: 118,
              number: '1176',
              type: 'hr',
              isFeatured: true,
            },
            {
              id: '67547c63437319f5138bf852',
              title:
                'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
              congress: 118,
              number: '955',
              type: 'hres',
              isFeatured: false,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'Gerald E. Connolly',
          bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
          govTrackId: '412272',
        },
        party: 'democratic',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-resolution/955',
      popularityRank: null,
      relatedBills: [
        {
          id: '67545a48437319f5138be376',
          i18n: {
            en: {
              title: 'Taiwan Relations Act',
              summary:
                "[congress.gov] Taiwan Relations Act - Declares it to be the policy of the United States to preserve and promote extensive, close, and friendly commercial, cultural, and other relations between the people of the United States and the people on Taiwan, as well as the people on the China mainland and all other people of the Western Pacific area. Declares that peace and stability in the area are in the political, security, and economic interests of the United States, and are matters of international concern. States that the United States decision to establish diplomatic relations with the People's Republic of China rests upon the expectation that the future of Taiwan will be determined by peaceful means and that any effort to determine the future of Taiwan by other than peaceful means, including by boycotts or embargoes is considered a threat to the peace and security of the Western Pacific area and of grave concern to the United States. States that the United States shall provide Taiwan with arms of a defensive character and shall maintain the capacity of the United States to resist any resort to force or other forms of coercion that would jeopardize the security, or social or economic system, of the people of Taiwan.",
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Public Law 96-8.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Measure presented to President.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Conference report agreed to in Senate: Senate agreed to conference report, roll call #32 (85-4).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Conference report agreed to in House: House agreed to conference report, roll call #62 (339-50).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-24T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Conference report filed: Conference report filed in House, H. Rept. 96-71.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in Senate: Measure passed Senate, amended, in lieu of S. 245, roll call #17 (90-6).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in House: Measure passed House, amended, roll call #38 (345-55).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Reported to House from the Committee on Foreign Affairs, H. Rept. 96-26.',
                },
                {
                  actionAt: {
                    datetime: '1979-02-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in House',
                },
              ],
              actionsAll: [
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Public Law 96-8.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-10T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure presented to President.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Measure enrolled in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-04-02T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Measure enrolled in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Senate agreed to conference report, roll call #32 (85-4).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'House agreed to conference report, roll call #62 (339-50).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-24T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Conference report filed in House, H. Rept. 96-71.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-15T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Conference scheduled in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Conference scheduled in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Measure passed Senate, amended, in lieu of S. 245, roll call #17 (90-6).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Measure considered in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-14T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Measure called up by unanimous consent in Senate.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Measure passed House, amended, roll call #38 (345-55).',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Motion to recommit to Committee on Foreign Affairs with instructions passed House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-13T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure considered in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-08T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure considered in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-08T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Measure called up by special rule in House.',
                },
                {
                  actionAt: {
                    datetime: '1979-03-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Reported to House from the Committee on Foreign Affairs, H. Rept. 96-26.',
                },
                {
                  actionAt: {
                    datetime: '1979-02-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Referred to House Committee on Foreign Affairs.',
                },
                {
                  actionAt: {
                    datetime: '1979-02-28T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description: 'Introduced in House',
                },
              ],
            },
            zh: {
              title: '台灣關係法',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 96,
          number: '2479',
          type: 'hr',
          introducedAt: {
            datetime: '1979-02-28T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
          categories: [
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
          ],
          tags: [],
          statusTracker: {
            currentStep: 'becomeLaw',
            passedSteps: [
              'introduced',
              'passedHouse',
              'passedSenate',
              'resolvingDifferences',
              'toPresident',
              'becomeLaw',
            ],
            futureSteps: [],
          },
          sponsor: {
            people: {
              id: '6754597e437319f5138be2be',
              i18n: {
                en: {
                  firstName: 'Clement',
                  lastName: 'Zablocki',
                  middleName: 'John',
                  displayName: 'Clement J. Zablocki',
                  bio: "[Wikipedia] Clement John Zablocki (November 18, 1912 – December 3, 1983) was a Polish American politician from Milwaukee, Wisconsin. He was one of Wisconsin's longest-serving members of the U.S. House of Representatives, representing Wisconsin's 4th congressional district for 18 terms, from 1949 until his death in 1983.",
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: null,
                  middleName: null,
                  displayName: null,
                  bio: '[Wikipedia] 克萊門特·約翰·扎布洛基（英語：Clement John Zablocki；1912年11月18日—1983年12月3日），是一名美國民主黨籍政治家。曾任美國眾議院外交委員會主席、美國聯邦眾議員。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595f2b7e1c21b02dd70b50',
                alt: 'Clement_J_Zablocki.png',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Clement_J_Zablocki.png',
                filename: 'Clement_J_Zablocki.png',
                mimeType: 'image/png',
                width: 242,
                height: 310,
              },
              birthday: {
                datetime: '1912-11-18T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'Z000001',
                govTrackId: 411994,
                committees: [],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: false,
                  positions: [
                    {
                      title: 'Representative for district 4, Wisconsin',
                      description: null,
                      start: {
                        datetime: '1949-01-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: '1983-12-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      state: 'wisconsin',
                      district: 4,
                      party: 'democratic',
                      congresses: [
                        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
                        95, 96, 97,
                      ],
                      officialAreas: [],
                      companyType: null,
                      id: '6754597ed1d49300312fe08f',
                    },
                  ],
                  id: '6754597ed1d49300312fe08e',
                },
              ],
              publications: [],
              links: [],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'independent',
              records: [],
              sponsorBills: [
                {
                  id: '67545a48437319f5138be376',
                  title: 'Taiwan Relations Act',
                  congress: 96,
                  number: '2479',
                  type: 'hr',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Clement J. Zablocki',
              bio: "[Wikipedia] Clement John Zablocki (November 18, 1912 – December 3, 1983) was a Polish American politician from Milwaukee, Wisconsin. He was one of Wisconsin's longest-serving members of the U.S. House of Representatives, representing Wisconsin's 4th congressional district for 18 terms, from 1949 until his death in 1983.",
              govTrackId: '411994',
            },
            party: 'democratic',
          },
        },
        {
          id: '6753eb531e937e031b1b3508',
          i18n: {
            en: {
              title: 'Taiwan Relations Reinforcement Act of 2023',
              summary:
                '[congress.gov] The Department of State and other United States Government agencies shall treat the democratically elected Government of Taiwan as the legitimate representative of the people of Taiwan and end the outdated practice of referring to the government in Taiwan as the “authorities”.',
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '2023-10-24T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in Senate',
                },
              ],
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
            },
            zh: {
              title: '台灣關係強化法案',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 118,
          number: '3110',
          type: 's',
          introducedAt: {
            datetime: '2023-10-24T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
          categories: [
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
          ],
          tags: [],
          statusTracker: {
            currentStep: 'introduced',
            passedSteps: ['introduced'],
            futureSteps: [
              'passedSenate',
              'passedHouse',
              'toPresident',
              'becomeLaw',
            ],
          },
          sponsor: {
            people: {
              id: '6753ea9a1e937e031b1b343f',
              i18n: {
                en: {
                  firstName: 'Marco',
                  lastName: 'Rubio',
                  middleName: null,
                  displayName: 'Marco Rubio',
                  bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: '盧比歐',
                  middleName: null,
                  displayName: '盧比歐',
                  bio: '[Wikipedia] 馬可·安東尼奧·盧比歐（英語：Marco Antonio Rubio；1971年5月28日—），美國古巴裔政治人物、律師，生於美國佛羅里達州邁阿密，共和黨黨員，現任佛羅里達州資深聯邦參議員，自2011年起擔任該職務。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595d3a7e1c21b02dd70ad6',
                alt: 'Marco_Rubio.jpg',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Marco_Rubio.jpg',
                filename: 'Marco_Rubio.jpg',
                mimeType: 'image/jpeg',
                width: 3048,
                height: 3809,
              },
              birthday: {
                datetime: '1971-05-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'R000595',
                govTrackId: 412491,
                committees: [
                  {
                    systemCode: 'slin',
                    name: 'Senate Select Committee on Intelligence',
                    title: 'viceChair',
                    subcommittees: [],
                    id: '6753ea9aa31c960031c15de4',
                  },
                  {
                    systemCode: 'spag',
                    name: 'Senate Special Committee on Aging',
                    title: null,
                    subcommittees: [],
                    id: '6753ea9aa31c960031c15de5',
                  },
                  {
                    systemCode: 'ssap',
                    name: 'Senate Committee on Appropriations',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'ssap08',
                        name: 'Legislative Branch',
                        title: null,
                        id: '6753ea9aa31c960031c15dea',
                      },
                      {
                        systemCode: 'ssap18',
                        name: 'Labor, Health and Human Services, and Education, and Related Agencies',
                        title: null,
                        id: '6753ea9aa31c960031c15deb',
                      },
                      {
                        systemCode: 'ssap19',
                        name: 'Military Construction, Veterans Affairs, and Related Agencies',
                        title: null,
                        id: '6753ea9aa31c960031c15dec',
                      },
                      {
                        systemCode: 'ssap20',
                        name: 'State, Foreign Operations, and Related Programs',
                        title: null,
                        id: '6753ea9aa31c960031c15ded',
                      },
                      {
                        systemCode: 'ssap23',
                        name: 'Financial Services and General Government',
                        title: null,
                        id: '6753ea9aa31c960031c15dee',
                      },
                    ],
                    id: '6753ea9aa31c960031c15de6',
                  },
                  {
                    systemCode: 'ssfr',
                    name: 'Senate Committee on Foreign Relations',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'ssfr01',
                        name: 'Europe and Regional Security Cooperation',
                        title: null,
                        id: '6753ea9aa31c960031c15def',
                      },
                      {
                        systemCode: 'ssfr06',
                        name: "Western Hemisphere, Transnational Crime, Civilian …emocracy, Human Rights, and Global Women's Issues",
                        title: 'ranking',
                        id: '6753ea9aa31c960031c15df0',
                      },
                      {
                        systemCode: 'ssfr07',
                        name: 'Near East, South Asia, Central Asia, and Counterterrorism',
                        title: null,
                        id: '6753ea9aa31c960031c15df1',
                      },
                    ],
                    id: '6753ea9aa31c960031c15de7',
                  },
                  {
                    systemCode: 'sssb',
                    name: 'Senate Committee on Small Business and Entrepreneurship',
                    title: null,
                    subcommittees: [],
                    id: '6753ea9aa31c960031c15de8',
                  },
                ],
              },
              experiences: [
                {
                  company: 'United States Senate',
                  category: 'Senator',
                  isCurrent: true,
                  positions: [
                    {
                      title: 'Senator for Florida',
                      description: null,
                      start: {
                        datetime: '2011-01-05T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: null,
                        precision: [],
                      },
                      state: 'florida',
                      district: null,
                      party: 'republican',
                      congresses: [112, 113, 114, 115, 116, 117, 118],
                      officialAreas: [],
                      companyType: null,
                      id: '6753ea9aa31c960031c15de9',
                    },
                  ],
                  id: '6753ea9aa31c960031c15ddc',
                },
              ],
              publications: [
                {
                  title: "100 Innovative Ideas for Florida's Future",
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15ddd',
                },
                {
                  title:
                    'American Dreams: Restoring Economic Opportunity for Everyone',
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15dde',
                },
                {
                  title: 'An American Son: A Memoir',
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15ddf',
                },
                {
                  title:
                    "Decades of Decadence: How Our Spoiled Elites Blew America's Inheritance of Liberty, Security, and Prosperity",
                  abstract: null,
                  link: null,
                  id: '6753ea9aa31c960031c15de0',
                },
              ],
              links: [
                {
                  type: 'twitter',
                  title: '@SenRubioPress',
                  link: 'https://x.com/SenRubioPress',
                  id: '6753ea9aa31c960031c15de1',
                },
                {
                  type: 'facebook',
                  title: '@SenatorMarcoRubio',
                  link: 'https://facebook.com/SenatorMarcoRubio',
                  id: '6753ea9aa31c960031c15de2',
                },
                {
                  type: 'youtube',
                  title: '@SenatorMarcoRubio',
                  link: 'https://youtube.com/channel/UCh8t7sV_DBKz4A-RkL9feyg',
                  id: '6753ea9aa31c960031c15de3',
                },
              ],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'republican',
              records: [],
              sponsorBills: [
                {
                  id: '6753eb531e937e031b1b3508',
                  title: 'Taiwan Relations Reinforcement Act of 2023',
                  congress: 118,
                  number: '3110',
                  type: 's',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [
                {
                  id: '67546936437319f5138be7df',
                  title: 'Taiwan Fellowship Act',
                  congress: 117,
                  number: '811',
                  type: 's',
                  isFeatured: true,
                },
              ],
              votes: [],
              displayName: 'Marco Rubio',
              bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
              govTrackId: '412491',
            },
            party: 'republican',
          },
        },
        {
          id: '6753d3951e937e031b1b3091',
          i18n: {
            en: {
              title:
                'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
              summary:
                "[congress.gov] This bill requires the Department of State to annually report to Congress on steps the State Department has taken to help strengthen Taiwan's diplomatic relationships and partnerships around the world. (Taiwan is self-governing, but China considers it a renegade province and has taken actions to encourage countries and international organizations to limit or cut off relations with Taiwan.)",
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Became Public Law No: 116-135.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-16T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Presented to President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-11T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Resolving differences -- Senate actions: Senate agreed to the House amendment to S. 1678 by Unanimous Consent.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in House: On motion to suspend the rules and pass the bill, as amended Agreed to by the Yeas and Nays: (2/3 required): 415 - 0 (Roll no. 85).',
                },
                {
                  actionAt: {
                    datetime: '2019-10-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Passed/agreed to in Senate: Passed Senate with an amendment by Unanimous Consent.(consideration: CR S6254-6255)',
                },
                {
                  actionAt: {
                    datetime: '2019-09-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description:
                    'Committee on Foreign Relations. Reported by Senator Risch with an amendment in the nature of a substitute. Without written report.',
                },
                {
                  actionAt: {
                    datetime: '2019-05-23T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in Senate',
                },
              ],
              actionsAll: [
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Became Public Law No: 116-135.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description: 'Signed by President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-16T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Presented to President.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-12T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Message on Senate action sent to the House.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-11T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Senate agreed to the House amendment to S. 1678 by Unanimous Consent.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-11T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Measure laid before Senate by unanimous consent. (consideration: CR S1710)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-05T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Message on House action received in Senate and at desk: House amendment to Senate bill.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T16:32:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Motion to reconsider laid on the table Agreed to without objection.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T16:32:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'On motion to suspend the rules and pass the bill, as amended Agreed to by the Yeas and Nays: (2/3 required): 415 - 0 (Roll no. 85). (text: 03/03/2020 CR H1452-1453)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-04T16:01:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Considered as unfinished business. (consideration: CR H1494-1495)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:47:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'At the conclusion of debate, the Yeas and Nays were demanded and ordered. Pursuant to the provisions of clause 8, rule XX, the Chair announced that further proceedings on the motion would be postponed.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:42:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'DEBATE - The House proceeded with forty minutes of debate on S. 1678.',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:42:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Considered under suspension of the rules. (consideration: CR H1452-1454)',
                },
                {
                  actionAt: {
                    datetime: '2020-03-03T12:42:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description:
                    'Mr. Cicilline moved to suspend the rules and pass the bill, as amended.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-31T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-31T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'house',
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-31T12:28:00.000Z',
                    precision: ['year', 'month', 'day', 'time'],
                  },
                  chamber: 'house',
                  description: 'Received in the House.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-30T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description: 'Message on Senate action sent to the House.',
                },
                {
                  actionAt: {
                    datetime: '2019-10-29T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Passed Senate with an amendment by Unanimous Consent. (consideration: CR S6254-6255)',
                },
                {
                  actionAt: {
                    datetime: '2019-09-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Placed on Senate Legislative Calendar under General Orders. Calendar No. 237.',
                },
                {
                  actionAt: {
                    datetime: '2019-09-26T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Committee on Foreign Relations. Reported by Senator Risch with an amendment in the nature of a substitute. Without written report.',
                },
                {
                  actionAt: {
                    datetime: '2019-09-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Committee on Foreign Relations. Ordered to be reported with an amendment favorably.',
                },
                {
                  actionAt: {
                    datetime: '2019-05-23T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: 'senate',
                  description:
                    'Read twice and referred to the Committee on Foreign Relations.',
                },
              ],
            },
            zh: {
              title: '2019年台灣盟邦國際保障與強化倡議法 (台北法)',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 116,
          number: '1678',
          type: 's',
          introducedAt: {
            datetime: '2019-05-23T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
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
          tags: [],
          statusTracker: {
            currentStep: 'becomeLaw',
            passedSteps: [
              'introduced',
              'passedSenate',
              'passedHouse',
              'resolvingDifferences',
              'toPresident',
              'becomeLaw',
            ],
            futureSteps: [],
          },
          sponsor: {
            people: {
              id: '6753d2a91e937e031b1b2fcf',
              i18n: {
                en: {
                  firstName: 'Cory',
                  lastName: 'Gardner',
                  middleName: '',
                  displayName: 'Cory Gardner',
                  bio: "[Wikipedia] Cory Scott Gardner (born August 22, 1974) is an American attorney and politician who served as a United States senator from Colorado from 2015 to 2021. A Republican, he was the U.S. representative for Colorado's 4th congressional district from 2011 to 2015 and a member of the Colorado House of Representatives from 2005 to 2011.",
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: '賈德納',
                  middleName: null,
                  displayName: '賈德納',
                  bio: '[Wikipedia] 柯瑞·史考特·賈德納（英語：Cory Scott Gardner；1974年8月22日—），是美國一位共和黨籍的政治人物，曾任科羅拉多州聯邦參議員和聯邦眾議員，以及科羅拉多州眾議院議員。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595d367e1c21b02dd70ac3',
                alt: 'Cory_Gardner.jpeg',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Cory_Gardner.jpg',
                filename: 'Cory_Gardner.jpg',
                mimeType: 'image/jpeg',
                width: 1616,
                height: 2048,
              },
              birthday: {
                datetime: '1974-08-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'G000562',
                govTrackId: 412406,
                committees: [],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: false,
                  positions: [
                    {
                      title: 'Representative for district 4, Colorado',
                      description: null,
                      start: {
                        datetime: '2011-01-05T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: '2015-01-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      state: 'colorado',
                      district: 4,
                      party: 'republican',
                      congresses: [112, 113],
                      officialAreas: [],
                      companyType: null,
                      id: '6753d2a9a31c960031c15dcc',
                    },
                  ],
                  id: '6753d2a9a31c960031c15dca',
                },
                {
                  company: 'United States Senate',
                  category: 'Senator',
                  isCurrent: false,
                  positions: [
                    {
                      title: 'Senator for Colorado',
                      description: null,
                      start: {
                        datetime: '2015-01-06T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: '2021-01-03T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      state: 'colorado',
                      district: null,
                      party: 'republican',
                      congresses: [114, 115, 116],
                      officialAreas: [],
                      companyType: null,
                      id: '6753d2a9a31c960031c15dcd',
                    },
                  ],
                  id: '6753d2a9a31c960031c15dcb',
                },
              ],
              publications: [],
              links: [],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'independent',
              records: [],
              sponsorBills: [
                {
                  id: '6753d3951e937e031b1b3091',
                  title:
                    'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
                  congress: 116,
                  number: '1678',
                  type: 's',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Cory Gardner',
              bio: "[Wikipedia] Cory Scott Gardner (born August 22, 1974) is an American attorney and politician who served as a United States senator from Colorado from 2015 to 2021. A Republican, he was the U.S. representative for Colorado's 4th congressional district from 2011 to 2015 and a member of the Colorado House of Representatives from 2005 to 2011.",
              govTrackId: '412406',
            },
            party: 'republican',
          },
        },
        {
          id: '6753d02c1e937e031b1b2f54',
          i18n: {
            en: {
              title: 'Taiwan International Solidarity Act',
              summary:
                "[congress.gov] This bill requires the Department of State to annually report to Congress on efforts by China to undermine Taiwan's participation in international organizations or Taiwan's relationships with other countries.",
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
            },
            zh: {
              title: '台灣國際團結法案',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 118,
          number: '1176',
          type: 'hr',
          introducedAt: {
            datetime: '2023-02-24T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: true,
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
          tags: [],
          statusTracker: {
            currentStep: 'passedHouse',
            passedSteps: ['introduced', 'passedHouse'],
            futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
          },
          sponsor: {
            people: {
              id: '6753cf371e937e031b1b2e13',
              i18n: {
                en: {
                  firstName: 'Gerald',
                  lastName: 'Connolly',
                  middleName: 'E.',
                  displayName: 'Gerald E. Connolly',
                  bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
                  otherNames: [
                    {
                      otherName: 'Gerry',
                      id: '6753cf37a31c960031c15dc5',
                    },
                  ],
                },
                zh: {
                  firstName: '康諾里',
                  lastName: null,
                  middleName: null,
                  displayName: null,
                  bio: null,
                  otherNames: [],
                },
              },
              photo: {
                id: '67595f7d7e1c21b02dd70b62',
                alt: 'Gerald_E_Connolly.png',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Gerald_E_Connolly.png',
                filename: 'Gerald_E_Connolly.png',
                mimeType: 'image/png',
                width: 851,
                height: 1064,
              },
              birthday: {
                datetime: '1950-03-30T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'C001078',
                govTrackId: 412272,
                committees: [
                  {
                    systemCode: 'hsfa',
                    name: 'House Committee on Foreign Affairs',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsfa05',
                        name: 'Indo-Pacific',
                        title: null,
                        id: '6753cf37a31c960031c15dc6',
                      },
                      {
                        systemCode: 'hsfa13',
                        name: 'Middle East, North Africa, and Central Asia',
                        title: null,
                        id: '6753cf37a31c960031c15dc7',
                      },
                    ],
                    id: '6753cf37a31c960031c15dc1',
                  },
                  {
                    systemCode: 'hsfd',
                    name: 'House Select Subcommittee on the Weaponization of the Federal Government',
                    title: null,
                    subcommittees: [],
                    id: '6753cf37a31c960031c15dc2',
                  },
                  {
                    systemCode: 'hsgo',
                    name: 'House Committee on Oversight and Accountability',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsgo12',
                        name: 'Cybersecurity, Information Technology, and Government Innovation',
                        title: 'ranking',
                        id: '6753cf37a31c960031c15dc8',
                      },
                      {
                        systemCode: 'hsgo24',
                        name: 'Government Operations and the Federal Workforce',
                        title: null,
                        id: '6753cf37a31c960031c15dc9',
                      },
                    ],
                    id: '6753cf37a31c960031c15dc3',
                  },
                ],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: true,
                  positions: [
                    {
                      title: 'Representative for district 11, Virginia',
                      description: null,
                      start: {
                        datetime: '2009-01-06T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: null,
                        precision: [],
                      },
                      state: 'virginia',
                      district: 11,
                      party: 'democratic',
                      congresses: [111, 112, 113, 114, 115, 116, 117, 118],
                      officialAreas: [],
                      companyType: null,
                      id: '6753cf37a31c960031c15dc4',
                    },
                  ],
                  id: '6753cf37a31c960031c15dbc',
                },
              ],
              publications: [],
              links: [
                {
                  type: 'other',
                  title: 'Offcial Website',
                  link: 'https://connolly.house.gov',
                  id: '6753cf37a31c960031c15dbd',
                },
                {
                  type: 'twitter',
                  title: '@GerryConnolly',
                  link: 'https://x.com/GerryConnolly',
                  id: '6753cf37a31c960031c15dbe',
                },
                {
                  type: 'facebook',
                  title: '@CongressmanGerryConnolly',
                  link: 'https://www.facebook.com/CongressmanGerryConnolly',
                  id: '6753cf37a31c960031c15dbf',
                },
                {
                  type: 'youtube',
                  title: 'repconnolly',
                  link: 'https://www.youtube.com/channel/UC4WG9PlmoOeSLIuyVjs-RSA',
                  id: '6753cf37a31c960031c15dc0',
                },
              ],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 2,
              currentParty: 'democratic',
              records: [],
              sponsorBills: [
                {
                  id: '6753d02c1e937e031b1b2f54',
                  title: 'Taiwan International Solidarity Act',
                  congress: 118,
                  number: '1176',
                  type: 'hr',
                  isFeatured: true,
                },
                {
                  id: '67547c63437319f5138bf852',
                  title:
                    'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
                  congress: 118,
                  number: '955',
                  type: 'hres',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Gerald E. Connolly',
              bio: "[Wikipedia] Gerald Edward Connolly (born March 30, 1950) is an American politician serving as the U.S. representative for Virginia's 11th congressional district, first elected in 2008. The district is anchored in Fairfax County, an affluent suburban county west of Washington, D.C. It includes all of Fairfax City and part of Prince William County. Connolly is a Democrat.",
              govTrackId: '412272',
            },
            party: 'democratic',
          },
        },
        {
          id: '67547aa3437319f5138bf725',
          i18n: {
            en: {
              title:
                "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
              summary:
                '[congress.gov] This concurrent resolution calls on the President to abandon the One China policy in favor of one that recognizes Taiwan as an independent country that is not a part of China. The resolution also urges the President to bolster diplomatic and economic relations between the United States and Taiwan through specified means.',
              actionsOverview: [
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  description: 'Introduced in House',
                },
              ],
              actionsAll: [
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned. (Action By: House of Representatives)',
                },
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description:
                    'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned. (Action By: House of Representatives)',
                },
                {
                  actionAt: {
                    datetime: '2023-01-25T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  chamber: null,
                  description:
                    'Introduced in House (Action By: House of Representatives)',
                },
              ],
            },
            zh: {
              title:
                '表達國會認為美國應與台灣恢復正常的外交關係、協調雙邊自由貿易協定及支持台灣加入國際組織',
              summary: null,
              actionsOverview: null,
              actionsAll: null,
            },
          },
          congress: 118,
          number: '10',
          type: 'hconres',
          introducedAt: {
            datetime: '2023-01-25T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          isFeatured: false,
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
          ],
          tags: [],
          statusTracker: {
            currentStep: 'introduced',
            passedSteps: ['introduced'],
            futureSteps: ['agreedToInHouse', 'agreedToInSenate'],
          },
          sponsor: {
            people: {
              id: '6754799f437319f5138bf65a',
              i18n: {
                en: {
                  firstName: 'Thomas',
                  lastName: 'Tiffany',
                  middleName: 'P.',
                  displayName: 'Thomas P. Tiffany',
                  bio: "[Wikipedia] Thomas P. Tiffany (born December 30, 1957) is an American businessman and politician serving as the U.S. representative for Wisconsin's 7th congressional district since winning a special election in 2020. A member of the Republican Party, he previously served seven years in the Wisconsin Senate and two years in the State Assembly, representing the northeast region of the state.",
                  otherNames: [],
                },
                zh: {
                  firstName: null,
                  lastName: '帝芬尼',
                  middleName: null,
                  displayName: '帝芬尼',
                  bio: '[Wikipedia] 湯瑪斯·P·蒂芬尼（英語：Thomas P. Tiffany，1957年12月30日—），美國商人、政治家，2020年起接替尚恩·達菲，當選威斯康辛州第七國會選區聯邦眾議院議員，共和黨員。此前曾當選威斯康辛州眾議院議員和威斯康辛州參議院議員。2021年2月，與賓夕法尼亞州聯邦眾議員史考特·佩里提出共同決議案，呼籲拜登政府終結「一個中國政策」並與台灣建立外交關係。',
                  otherNames: [],
                },
              },
              photo: {
                id: '67595e607e1c21b02dd70b29',
                alt: 'Thomas_P_Tiffany.png',
                url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Thomas_P_Tiffany.png',
                filename: 'Thomas_P_Tiffany.png',
                mimeType: 'image/png',
                width: 1024,
                height: 1280,
              },
              birthday: {
                datetime: '1957-12-30T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              gender: 'male',
              tags: [],
              congressionalData: {
                bioGuideId: 'T000165',
                govTrackId: 456791,
                committees: [
                  {
                    systemCode: 'hsii',
                    name: 'House Committee on Natural Resources',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsii06',
                        name: 'Energy and Mineral Resources',
                        title: null,
                        id: '6754799fd1d49300312fe0e8',
                      },
                      {
                        systemCode: 'hsii10',
                        name: 'Federal Lands',
                        title: 'chair',
                        id: '6754799fd1d49300312fe0e9',
                      },
                    ],
                    id: '6754799fd1d49300312fe0e5',
                  },
                  {
                    systemCode: 'hsju',
                    name: 'House Committee on the Judiciary',
                    title: null,
                    subcommittees: [
                      {
                        systemCode: 'hsju01',
                        name: 'Immigration Integrity, Security, and Enforcement',
                        title: null,
                        id: '6754799fd1d49300312fe0ea',
                      },
                      {
                        systemCode: 'hsju08',
                        name: 'Crime and Federal Government Surveillance',
                        title: null,
                        id: '6754799fd1d49300312fe0eb',
                      },
                    ],
                    id: '6754799fd1d49300312fe0e6',
                  },
                ],
              },
              experiences: [
                {
                  company: 'United States House of Representatives',
                  category: 'House Representative',
                  isCurrent: true,
                  positions: [
                    {
                      title: 'Representative for district 7, Wisconsin',
                      description: null,
                      start: {
                        datetime: '2020-05-19T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      end: {
                        datetime: null,
                        precision: [],
                      },
                      state: 'wisconsin',
                      district: 7,
                      party: 'republican',
                      congresses: [116, 117, 118],
                      officialAreas: [],
                      companyType: null,
                      id: '6754799fd1d49300312fe0e7',
                    },
                  ],
                  id: '6754799fd1d49300312fe0e3',
                },
              ],
              publications: [],
              links: [
                {
                  type: 'twitter',
                  title: '@RepTiffany',
                  link: 'https://x.com/RepTiffany',
                  id: '6754799fd1d49300312fe0e4',
                },
              ],
              partyChangeRecords: [],
              viewCount: 0,
              billCount: 1,
              currentParty: 'republican',
              records: [],
              sponsorBills: [
                {
                  id: '67547aa3437319f5138bf725',
                  title:
                    "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
                  congress: 118,
                  number: '10',
                  type: 'hconres',
                  isFeatured: false,
                },
              ],
              cosponsorBills: [],
              votes: [],
              displayName: 'Thomas P. Tiffany',
              bio: "[Wikipedia] Thomas P. Tiffany (born December 30, 1957) is an American businessman and politician serving as the U.S. representative for Wisconsin's 7th congressional district since winning a special election in 2020. A member of the Republican Party, he previously served seven years in the Wisconsin Senate and two years in the State Assembly, representing the northeast region of the state.",
              govTrackId: '456791',
            },
            party: 'republican',
          },
        },
      ],
      title:
        'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
      summary:
        "[congress.gov] This resolution commends Taiwan for its example of self-governance and regards Taiwan's democracy as a great strategic strength for the free world. The resolution also expresses concern about Chinese interference in Taiwan's 2024 elections and expresses commitment to continuing a strong partnership with Taiwan, regardless of the outcome of the elections.",
      latestActionTime: '2024-01-10T00:00:00.000Z',
      updatedAt: '2024-12-26T05:16:18.734Z',
      createdAt: '2024-12-07T16:48:35.771Z',
    },
    {
      id: '6753eb531e937e031b1b3508',
      i18n: {
        en: {
          title: 'Taiwan Relations Reinforcement Act of 2023',
          summary:
            '[congress.gov] The Department of State and other United States Government agencies shall treat the democratically elected Government of Taiwan as the legitimate representative of the people of Taiwan and end the outdated practice of referring to the government in Taiwan as the “authorities”.',
          actionsOverview: [
            {
              actionAt: {
                datetime: '2023-10-24T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in Senate',
            },
          ],
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
        },
        zh: {
          title: '台灣關係強化法案',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '3110',
      type: 's',
      introducedAt: {
        datetime: '2023-10-24T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: false,
      categories: [
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
      ],
      tags: [],
      statusTracker: {
        currentStep: 'introduced',
        passedSteps: ['introduced'],
        futureSteps: [
          'passedSenate',
          'passedHouse',
          'toPresident',
          'becomeLaw',
        ],
      },
      sponsor: {
        people: {
          id: '6753ea9a1e937e031b1b343f',
          i18n: {
            en: {
              firstName: 'Marco',
              lastName: 'Rubio',
              middleName: null,
              displayName: 'Marco Rubio',
              bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
              otherNames: [],
            },
            zh: {
              firstName: null,
              lastName: '盧比歐',
              middleName: null,
              displayName: '盧比歐',
              bio: '[Wikipedia] 馬可·安東尼奧·盧比歐（英語：Marco Antonio Rubio；1971年5月28日—），美國古巴裔政治人物、律師，生於美國佛羅里達州邁阿密，共和黨黨員，現任佛羅里達州資深聯邦參議員，自2011年起擔任該職務。',
              otherNames: [],
            },
          },
          photo: {
            id: '67595d3a7e1c21b02dd70ad6',
            alt: 'Marco_Rubio.jpg',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Marco_Rubio.jpg',
            filename: 'Marco_Rubio.jpg',
            mimeType: 'image/jpeg',
            width: 3048,
            height: 3809,
          },
          birthday: {
            datetime: '1971-05-28T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'R000595',
            govTrackId: 412491,
            committees: [
              {
                systemCode: 'slin',
                name: 'Senate Select Committee on Intelligence',
                title: 'viceChair',
                subcommittees: [],
                id: '6753ea9aa31c960031c15de4',
              },
              {
                systemCode: 'spag',
                name: 'Senate Special Committee on Aging',
                title: null,
                subcommittees: [],
                id: '6753ea9aa31c960031c15de5',
              },
              {
                systemCode: 'ssap',
                name: 'Senate Committee on Appropriations',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'ssap08',
                    name: 'Legislative Branch',
                    title: null,
                    id: '6753ea9aa31c960031c15dea',
                  },
                  {
                    systemCode: 'ssap18',
                    name: 'Labor, Health and Human Services, and Education, and Related Agencies',
                    title: null,
                    id: '6753ea9aa31c960031c15deb',
                  },
                  {
                    systemCode: 'ssap19',
                    name: 'Military Construction, Veterans Affairs, and Related Agencies',
                    title: null,
                    id: '6753ea9aa31c960031c15dec',
                  },
                  {
                    systemCode: 'ssap20',
                    name: 'State, Foreign Operations, and Related Programs',
                    title: null,
                    id: '6753ea9aa31c960031c15ded',
                  },
                  {
                    systemCode: 'ssap23',
                    name: 'Financial Services and General Government',
                    title: null,
                    id: '6753ea9aa31c960031c15dee',
                  },
                ],
                id: '6753ea9aa31c960031c15de6',
              },
              {
                systemCode: 'ssfr',
                name: 'Senate Committee on Foreign Relations',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'ssfr01',
                    name: 'Europe and Regional Security Cooperation',
                    title: null,
                    id: '6753ea9aa31c960031c15def',
                  },
                  {
                    systemCode: 'ssfr06',
                    name: "Western Hemisphere, Transnational Crime, Civilian …emocracy, Human Rights, and Global Women's Issues",
                    title: 'ranking',
                    id: '6753ea9aa31c960031c15df0',
                  },
                  {
                    systemCode: 'ssfr07',
                    name: 'Near East, South Asia, Central Asia, and Counterterrorism',
                    title: null,
                    id: '6753ea9aa31c960031c15df1',
                  },
                ],
                id: '6753ea9aa31c960031c15de7',
              },
              {
                systemCode: 'sssb',
                name: 'Senate Committee on Small Business and Entrepreneurship',
                title: null,
                subcommittees: [],
                id: '6753ea9aa31c960031c15de8',
              },
            ],
          },
          experiences: [
            {
              company: 'United States Senate',
              category: 'Senator',
              isCurrent: true,
              positions: [
                {
                  title: 'Senator for Florida',
                  description: null,
                  start: {
                    datetime: '2011-01-05T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: null,
                    precision: [],
                  },
                  state: 'florida',
                  district: null,
                  party: 'republican',
                  congresses: [112, 113, 114, 115, 116, 117, 118],
                  officialAreas: [],
                  companyType: null,
                  id: '6753ea9aa31c960031c15de9',
                },
              ],
              id: '6753ea9aa31c960031c15ddc',
            },
          ],
          publications: [
            {
              title: "100 Innovative Ideas for Florida's Future",
              abstract: null,
              link: null,
              id: '6753ea9aa31c960031c15ddd',
            },
            {
              title:
                'American Dreams: Restoring Economic Opportunity for Everyone',
              abstract: null,
              link: null,
              id: '6753ea9aa31c960031c15dde',
            },
            {
              title: 'An American Son: A Memoir',
              abstract: null,
              link: null,
              id: '6753ea9aa31c960031c15ddf',
            },
            {
              title:
                "Decades of Decadence: How Our Spoiled Elites Blew America's Inheritance of Liberty, Security, and Prosperity",
              abstract: null,
              link: null,
              id: '6753ea9aa31c960031c15de0',
            },
          ],
          links: [
            {
              type: 'twitter',
              title: '@SenRubioPress',
              link: 'https://x.com/SenRubioPress',
              id: '6753ea9aa31c960031c15de1',
            },
            {
              type: 'facebook',
              title: '@SenatorMarcoRubio',
              link: 'https://facebook.com/SenatorMarcoRubio',
              id: '6753ea9aa31c960031c15de2',
            },
            {
              type: 'youtube',
              title: '@SenatorMarcoRubio',
              link: 'https://youtube.com/channel/UCh8t7sV_DBKz4A-RkL9feyg',
              id: '6753ea9aa31c960031c15de3',
            },
          ],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 1,
          currentParty: 'republican',
          records: [],
          sponsorBills: [
            {
              id: '6753eb531e937e031b1b3508',
              title: 'Taiwan Relations Reinforcement Act of 2023',
              congress: 118,
              number: '3110',
              type: 's',
              isFeatured: false,
            },
          ],
          cosponsorBills: [
            {
              id: '67546936437319f5138be7df',
              title: 'Taiwan Fellowship Act',
              congress: 117,
              number: '811',
              type: 's',
              isFeatured: true,
            },
          ],
          votes: [],
          displayName: 'Marco Rubio',
          bio: '[Wikipedia] Marco Antonio Rubio (born May 28, 1971) is an American politician and lawyer serving as the senior United States senator from Florida, a seat he has held since 2011. A member of the Republican Party, he served as Speaker of the Florida House of Representatives from 2006 to 2008. Rubio sought the Republican nomination for president of the United States in 2016.',
          govTrackId: '412491',
        },
        party: 'republican',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-bill/3110',
      popularityRank: null,
      relatedBills: [],
      title: 'Taiwan Relations Reinforcement Act of 2023',
      summary:
        '[congress.gov] The Department of State and other United States Government agencies shall treat the democratically elected Government of Taiwan as the legitimate representative of the people of Taiwan and end the outdated practice of referring to the government in Taiwan as the “authorities”.',
      latestActionTime: '2023-10-24T00:00:00.000Z',
      updatedAt: '2024-12-23T14:01:54.212Z',
      createdAt: '2024-12-07T06:29:39.088Z',
    },
    {
      id: '6753e7131e937e031b1b33cc',
      i18n: {
        en: {
          title: 'United States-Taiwan Expedited Double-Tax Relief Act',
          summary:
            '[congress.gov] This bill establishes special rules for the taxation of residents of Taiwan with income from sources within the United States. This includes the reduction of the rate of withholding of taxes, the application of permanent establishment rules, treatment of income from employment, and the determination of the residency of citizens of Taiwan.',
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
        },
        zh: {
          title: '美台快速雙重稅收減免法案',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '5988',
      type: 'hr',
      introducedAt: {
        datetime: '2023-10-19T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: false,
      categories: [
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
      ],
      tags: [],
      statusTracker: {
        currentStep: 'introduced',
        passedSteps: ['introduced'],
        futureSteps: [
          'passedHouse',
          'passedSenate',
          'toPresident',
          'becomeLaw',
        ],
      },
      sponsor: {
        people: {
          id: '6753e68e1e937e031b1b3314',
          i18n: {
            en: {
              firstName: 'Jason',
              lastName: 'Smith',
              middleName: 'T.',
              displayName: 'Jason Smith',
              bio: "[Wikipedia] Jason Thomas Smith (born June 16, 1980) is an American businessman and politician who has been the U.S. representative for Missouri's 8th congressional district since 2013. The district comprises 30 counties, covering just under 20,000 square miles of southeastern and southern Missouri.",
              otherNames: [],
            },
            zh: {
              firstName: null,
              lastName: '史密斯',
              middleName: null,
              displayName: '史密斯',
              bio: '[Wikipedia] 傑森·T·史密斯（英語：Jason T. Smith；1980年6月16日—）是美國的一位政治人物。自2013年開始，他是密蘇里州第8選舉區選出的美國眾議院議員。他的黨籍是共和黨。他是共和黨在眾議院內第二年輕的議員。',
              otherNames: [],
            },
          },
          photo: {
            id: '67595f617e1c21b02dd70b59',
            alt: 'Jason_Smith.png',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Jason_Smith.png',
            filename: 'Jason_Smith.png',
            mimeType: 'image/png',
            width: 1024,
            height: 1280,
          },
          birthday: {
            datetime: '1980-06-16T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'S001195',
            govTrackId: 412596,
            committees: [
              {
                systemCode: 'hswm',
                name: 'House Committee on Ways and Means',
                title: 'chair',
                subcommittees: [],
                id: '6753e68ea31c960031c15dd9',
              },
              {
                systemCode: 'jstx',
                name: 'Joint Committee on Taxation',
                title: 'viceChair',
                subcommittees: [],
                id: '6753e68ea31c960031c15dda',
              },
            ],
          },
          experiences: [
            {
              company: 'United States House of Representatives',
              category: 'House Representative',
              isCurrent: true,
              positions: [
                {
                  title: 'Representative for district 8, Missouri',
                  description: null,
                  start: {
                    datetime: '2013-06-04T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: null,
                    precision: [],
                  },
                  state: 'missouri',
                  district: 8,
                  party: 'republican',
                  congresses: [113, 114, 115, 116, 117, 118],
                  officialAreas: [],
                  companyType: null,
                  id: '6753e68ea31c960031c15ddb',
                },
              ],
              id: '6753e68ea31c960031c15dd5',
            },
          ],
          publications: [],
          links: [
            {
              type: 'twitter',
              title: '@RepJasonSmith',
              link: 'https://x.com/RepJasonSmith',
              id: '6753e68ea31c960031c15dd6',
            },
            {
              type: 'facebook',
              title: '@repjasonsmith',
              link: 'https://facebook.com/repjasonsmith',
              id: '6753e68ea31c960031c15dd7',
            },
            {
              type: 'youtube',
              title: '@RepJasonSmith',
              link: 'https://youtube.com/channel/UCzj9-27Lr4gcqopmZAobXXg',
              id: '6753e68ea31c960031c15dd8',
            },
          ],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 1,
          currentParty: 'republican',
          records: [],
          sponsorBills: [
            {
              id: '6753e7131e937e031b1b33cc',
              title: 'United States-Taiwan Expedited Double-Tax Relief Act',
              congress: 118,
              number: '5988',
              type: 'hr',
              isFeatured: false,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'Jason Smith',
          bio: "[Wikipedia] Jason Thomas Smith (born June 16, 1980) is an American businessman and politician who has been the U.S. representative for Missouri's 8th congressional district since 2013. The district comprises 30 counties, covering just under 20,000 square miles of southeastern and southern Missouri.",
          govTrackId: '412596',
        },
        party: 'republican',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/5988',
      popularityRank: null,
      relatedBills: [],
      title: 'United States-Taiwan Expedited Double-Tax Relief Act',
      summary:
        '[congress.gov] This bill establishes special rules for the taxation of residents of Taiwan with income from sources within the United States. This includes the reduction of the rate of withholding of taxes, the application of permanent establishment rules, treatment of income from employment, and the determination of the residency of citizens of Taiwan.',
      latestActionTime: '2023-12-12T00:00:00.000Z',
      updatedAt: '2024-12-23T14:01:36.311Z',
      createdAt: '2024-12-07T06:11:31.358Z',
    },
    {
      id: '67545dbb437319f5138be4fd',
      i18n: {
        en: {
          title: 'Taiwan Tax Agreement Act of 2023',
          summary:
            '[congress.gov] This bill authorizes the United States to enter into a tax agreement with Taiwan.',
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
        },
        zh: {
          title: '台灣租稅協定法案',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '1457',
      type: 's',
      introducedAt: {
        datetime: '2023-05-04T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: true,
      categories: [
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
      ],
      tags: [],
      statusTracker: {
        currentStep: 'introduced',
        passedSteps: ['introduced'],
        futureSteps: [
          'passedSenate',
          'passedHouse',
          'toPresident',
          'becomeLaw',
        ],
      },
      sponsor: {
        people: {
          id: '67545c8f437319f5138be3e5',
          i18n: {
            en: {
              firstName: 'Robert',
              lastName: 'Menendez',
              middleName: null,
              displayName: 'Robert Menendez',
              bio: '[Wikipedia] Robert Menendez (born January 1, 1954) is an American lawyer and politician who served as a United States senator from New Jersey from 2006 until his resignation in 2024 following his conviction on 16 counts in a political corruption case. A member of the Democratic Party and the Cuban–American lobby, he was first appointed to the Senate by Governor Jon Corzine, and chaired the United States Senate Committee on Foreign Relations from 2013 to 2015 and from 2021 to 2023.',
              otherNames: [
                {
                  otherName: 'Bob',
                  id: '67545c8fd1d49300312fe094',
                },
              ],
            },
            zh: {
              firstName: '',
              lastName: '梅南德茲',
              middleName: null,
              displayName: '梅南德茲',
              bio: '[Wikipedia] 羅伯特·「鮑勃」·梅南德茲（英語：Robert "Bob" Menendez；1954年1月1日—），是一位美國民主黨政治人物，2006年至2024年擔任紐澤西州聯邦參議院議員，亦曾任參議院外交委員會主席。',
              otherNames: [],
            },
          },
          photo: {
            id: '67595ef47e1c21b02dd70b47',
            alt: 'Robert_Menendez.png',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Robert_Menendez.png',
            filename: 'Robert_Menendez.png',
            mimeType: 'image/png',
            width: 823,
            height: 1007,
          },
          birthday: {
            datetime: '1954-01-01T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'M000639',
            govTrackId: 400272,
            committees: [],
          },
          experiences: [
            {
              company: 'United States House of Representatives',
              category: 'House Representative',
              isCurrent: false,
              positions: [
                {
                  title: 'Representative for district 13, New Jersey',
                  description: null,
                  start: {
                    datetime: '1993-01-05T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: '2006-01-16T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  state: 'newJersey',
                  district: 13,
                  party: 'democratic',
                  congresses: [103, 104, 105, 106, 107, 108, 109],
                  officialAreas: [],
                  companyType: null,
                  id: '67545c8fd1d49300312fe092',
                },
              ],
              id: '67545c8fd1d49300312fe090',
            },
            {
              company: 'United States Senate',
              category: 'Senator',
              isCurrent: false,
              positions: [
                {
                  title: 'Senator for New Jersey',
                  description: null,
                  start: {
                    datetime: '2006-01-18T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: '2024-08-20T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  state: 'newJersey',
                  district: null,
                  party: 'democratic',
                  congresses: [
                    109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
                  ],
                  officialAreas: [],
                  companyType: null,
                  id: '67545c8fd1d49300312fe093',
                },
              ],
              id: '67545c8fd1d49300312fe091',
            },
          ],
          publications: [],
          links: [],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 2,
          currentParty: 'independent',
          records: [],
          sponsorBills: [
            {
              id: '67545dbb437319f5138be4fd',
              title: 'Taiwan Tax Agreement Act of 2023',
              congress: 118,
              number: '1457',
              type: 's',
              isFeatured: true,
            },
            {
              id: '675477ed437319f5138bef66',
              title:
                'A joint resolution relating to the approval of the proposed Agreement for Cooperation Between the American Institute in Taiwan and the Taipei Economic and Cultural Representatives Office in the United States Concerning Peaceful Uses of Nuclear Energy.',
              congress: 113,
              number: '31',
              type: 'sjres',
              isFeatured: false,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'Robert Menendez',
          bio: '[Wikipedia] Robert Menendez (born January 1, 1954) is an American lawyer and politician who served as a United States senator from New Jersey from 2006 until his resignation in 2024 following his conviction on 16 counts in a political corruption case. A member of the Democratic Party and the Cuban–American lobby, he was first appointed to the Senate by Governor Jon Corzine, and chaired the United States Senate Committee on Foreign Relations from 2013 to 2015 and from 2021 to 2023.',
          govTrackId: '400272',
        },
        party: 'democratic',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/senate-bill/1457',
      popularityRank: null,
      relatedBills: [],
      title: 'Taiwan Tax Agreement Act of 2023',
      summary:
        '[congress.gov] This bill authorizes the United States to enter into a tax agreement with Taiwan.',
      latestActionTime: '2023-07-25T00:00:00.000Z',
      updatedAt: '2024-12-23T14:02:22.976Z',
      createdAt: '2024-12-07T14:37:47.516Z',
    },
  ] as unknown as BillDto[]
  return data.map((item) => Bill.fromDTO(lang, item))
}

export const getPopularBills = (lang: Language): Bill[] => {
  // 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
  return getLatestBills(lang)
}
