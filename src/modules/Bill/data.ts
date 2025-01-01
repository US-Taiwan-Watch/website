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
      id: '6752b1ca2ddcf95deb37622c',
      i18n: {
        en: {
          title: 'Taiwan Conflict Deterrence Act of 2023',
          summary:
            '[Congress.Gov] This bill, in the event of a threat to U.S. interests by China, (1) requires additional reporting on the domestic and foreign financial activity of specified Chinese officials, and (2) prohibits certain financial transactions with specified Chinese officials.',
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
        },
        zh: {
          title: '台灣衝突嚇阻法案',
          summary: '',
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '554',
      type: 'hr',
      introducedAt: {
        datetime: '2023-01-26T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: false,
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
          isFeatured: true,
        },
      ],
      statusTracker: {
        currentStep: 'passedHouse',
        passedSteps: ['introduced', 'passedHouse'],
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
      },
      sponsor: {
        people: {
          id: '675293e04040f8e6920dec77',
          i18n: {
            en: {
              firstName: 'J.',
              lastName: 'Hill',
              middleName: 'French',
              displayName: 'French Hill',
              bio: "[Wikipedia] James French Hill (born December 5, 1956) is an American businessman and politician serving as the U.S. representative for Arkansas's 2nd congressional district since 2015. He is a member of the Republican Party.",
              otherNames: [],
            },
            zh: {
              firstName: null,
              lastName: '希爾',
              middleName: null,
              displayName: '希爾',
              bio: '[Wikipedia] 弗蘭奇·希爾（英語：French Hill；1956年12月5日—）是美國的一位政治人物。自2015年開始，他是阿肯色州第2選舉區選出的美國眾議院議員。他的黨籍是共和黨。他的2014年的眾議員選舉中首次當選。希爾畢業於范德堡大學。',
              otherNames: [],
            },
          },
          photo: {
            id: '675961047e1c21b02dd70ba1',
            alt: 'French_Hill.png',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill.png',
            filename: 'French_Hill.png',
            mimeType: 'image/png',
            width: 1024,
            height: 1280,
          },
          birthday: {
            datetime: '1956-12-05T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'H001072',
            govTrackId: 412609,
            committees: [
              {
                systemCode: 'hlig',
                name: 'House Permanent Select Committee on Intelligence',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'hlig06',
                    name: 'National Intelligence Enterprise',
                    title: null,
                    id: '67529401363aa0029d97df53',
                  },
                  {
                    systemCode: 'hlig02',
                    name: 'National Security Agency and Cyber',
                    title: null,
                    id: '67529409363aa0029d97df54',
                  },
                ],
                id: '675293f7363aa0029d97df52',
              },
              {
                systemCode: 'hsba',
                name: 'House Committee on Financial Services',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'hsba16',
                    name: 'Capital Markets',
                    title: null,
                    id: '67529418363aa0029d97df56',
                  },
                  {
                    systemCode: 'hsba21',
                    name: 'Digital Assets, Financial Technology and Inclusion',
                    title: 'chair',
                    id: '67529421363aa0029d97df57',
                  },
                ],
                id: '67529413363aa0029d97df55',
              },
              {
                systemCode: 'hsfa',
                name: 'House Committee on Foreign Affairs',
                title: null,
                subcommittees: [
                  {
                    systemCode: 'hsfa17',
                    name: 'Oversight and Accountability',
                    title: null,
                    id: '67529432363aa0029d97df59',
                  },
                  {
                    systemCode: 'hsfa06',
                    name: 'Global Health, Global Human Rights, and International Organizations',
                    title: null,
                    id: '67529439363aa0029d97df5a',
                  },
                ],
                id: '6752942d363aa0029d97df58',
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
                  title: 'Representative for district 2, Arkansas',
                  description: null,
                  start: {
                    datetime: '2015-01-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: null,
                    precision: [],
                  },
                  state: 'arkansas',
                  district: 2,
                  party: 'republican',
                  congresses: [114, 115, 116, 117, 118],
                  officialAreas: [],
                  companyType: null,
                  id: '675293e0f5009a00321fea49',
                },
              ],
              id: '675293e0f5009a00321fea44',
            },
          ],
          publications: [],
          links: [
            {
              type: 'twitter',
              title: '@RepFrenchHill',
              link: 'https://x.com/RepFrenchHill',
              id: '675293e0f5009a00321fea45',
            },
            {
              type: 'facebook',
              title: '@RepFrenchHill',
              link: 'https://www.facebook.com/RepFrenchHill',
              id: '675293e0f5009a00321fea46',
            },
            {
              type: 'instagram',
              title: '@repfrenchhill',
              link: 'https://www.instagram.com/repfrenchhill',
              id: '675293e0f5009a00321fea47',
            },
            {
              type: 'youtube',
              title: '@RepFrenchHill',
              link: 'https://www.youtube.com/channel/UCT8uWroJtkwSsCJlVg0IKvQ',
              id: '675293e0f5009a00321fea48',
            },
          ],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 1,
          currentParty: 'republican',
          records: [],
          sponsorBills: [
            {
              id: '6752b1ca2ddcf95deb37622c',
              title: 'Taiwan Conflict Deterrence Act of 2023',
              congress: 118,
              number: '554',
              type: 'hr',
              isFeatured: false,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'French Hill',
          bio: "[Wikipedia] James French Hill (born December 5, 1956) is an American businessman and politician serving as the U.S. representative for Arkansas's 2nd congressional district since 2015. He is a member of the Republican Party.",
          govTrackId: '412609',
        },
        party: 'republican',
      },
      cosponsors: [
        {
          people: {
            id: '6752948c4040f8e6920dece8',
            i18n: {
              en: {
                firstName: 'Brad',
                lastName: 'Sherman',
                middleName: 'J.',
                displayName: 'Brad Sherman',
                bio: "[Wikipedia] Bradley James Sherman (born October 24, 1954) is an American accountant and politician serving as the U.S. representative for California's 32nd congressional district. A member of the Democratic Party, he first entered Congress in 1997. Sherman represented California's 24th congressional district for three terms, California's 27th congressional district for five terms, and California's 30th congressional district for five terms. His district includes parts of the San Fernando Valley in Los Angeles County and the eastern part of the Simi Hills in Ventura County.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: '薛曼',
                middleName: null,
                displayName: '薛曼',
                bio: '[Wikipedia] 布萊德·詹姆士·薛曼（英語：Brad James Sherman；1954年10月24日—）是美國的一位政治人物。他的黨籍是民主黨。自2013年開始，他是加利福尼亞州第三十二國會選區選出的眾議員。他從1997年起擔任聯邦眾議員，之前的選區是第24選區和第27選區。',
                otherNames: [],
              },
            },
            photo: {
              id: '67595d377e1c21b02dd70ac7',
              alt: 'Brad_Sherman.jpg',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman.jpg',
              filename: 'Brad_Sherman.jpg',
              mimeType: 'image/jpeg',
              width: 1960,
              height: 3008,
            },
            birthday: {
              datetime: '1954-10-24T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'male',
            tags: [],
            congressionalData: {
              bioGuideId: 'S000344',
              govTrackId: 400371,
              committees: [
                {
                  systemCode: 'hsba',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsba16',
                      name: 'Capital Markets',
                      title: 'ranking',
                      id: '675295c9363aa0029d97df66',
                    },
                    {
                      systemCode: 'hsba21',
                      name: 'Digital Assets, Financial Technology and Inclusion',
                      title: null,
                      id: '675295d3363aa0029d97df67',
                    },
                    {
                      systemCode: 'hsba20',
                      name: 'Financial Institutions and Monetary Policy',
                      title: null,
                      id: '675295dc363aa0029d97df68',
                    },
                  ],
                  id: '675295c1363aa0029d97df64',
                },
                {
                  systemCode: 'hsfa',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsfa05',
                      name: 'Indo-Pacific',
                      title: null,
                      id: '675295ef363aa0029d97df69',
                    },
                    {
                      systemCode: 'hsfa13',
                      name: 'Middle East, North Africa, and Central Asia',
                      title: null,
                      id: '675295f5363aa0029d97df6a',
                    },
                  ],
                  id: '675295c7363aa0029d97df65',
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
                    title: 'Representative for district 24, California',
                    description: null,
                    start: {
                      datetime: '1997-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: '2003-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    state: 'california',
                    district: 24,
                    party: 'democratic',
                    congresses: [105, 106, 107],
                    officialAreas: [],
                    companyType: null,
                    id: '67529509363aa0029d97df5c',
                  },
                  {
                    title: 'Representative for district 27, California',
                    description: null,
                    start: {
                      datetime: '2003-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: '2013-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    state: 'california',
                    district: 27,
                    party: 'democratic',
                    congresses: [108, 109, 110, 111, 112],
                    officialAreas: [],
                    companyType: null,
                    id: '67529539363aa0029d97df5d',
                  },
                  {
                    title: 'Representative for district 30, California',
                    description: null,
                    start: {
                      datetime: '2013-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: ['year', 'month', 'day'],
                    },
                    state: 'california',
                    district: 30,
                    party: 'democratic',
                    congresses: [118],
                    officialAreas: [],
                    companyType: null,
                    id: '67529566363aa0029d97df5f',
                  },
                ],
                id: '6752948cf5009a00321fea4a',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@BradSherman',
                link: 'https://x.com/BradSherman',
                id: '67529598363aa0029d97df61',
              },
              {
                type: 'facebook',
                title: '@CongressmanBradSherman',
                link: 'https://www.facebook.com/CongressmanBradSherman',
                id: '6752959f363aa0029d97df62',
              },
              {
                type: 'youtube',
                title: 'Congressman Brad Sherman',
                link: 'https://www.youtube.com/channel/UCPisrz6-SLwVy2l9Mcy8kug',
                id: '675295a9363aa0029d97df63',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'democratic',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Brad Sherman',
            bio: "[Wikipedia] Bradley James Sherman (born October 24, 1954) is an American accountant and politician serving as the U.S. representative for California's 32nd congressional district. A member of the Democratic Party, he first entered Congress in 1997. Sherman represented California's 24th congressional district for three terms, California's 27th congressional district for five terms, and California's 30th congressional district for five terms. His district includes parts of the San Fernando Valley in Los Angeles County and the eastern part of the Simi Hills in Ventura County.",
            govTrackId: '400371',
          },
          constituency: 'california',
          party: 'democratic',
          cosponsoredAt: {
            datetime: '2023-01-26T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f2003198864b',
        },
        {
          people: {
            id: '67529b544040f8e6920df153',
            i18n: {
              en: {
                firstName: 'Michael',
                lastName: 'Lawler',
                middleName: 'Vincent',
                displayName: 'Michael Lawler',
                bio: "[Wikipedia] Michael Vincent Lawler (born September 9, 1986) is an American politician serving as the U.S. representative for New York's 17th congressional district since 2023. From 2021 to 2022, he was a Republican member of the New York State Assembly from the 97th district in Rockland County.",
                otherNames: [
                  {
                    otherName: 'Mike',
                    id: '67529b54f5009a00321fea4d',
                  },
                ],
              },
              zh: {
                firstName: null,
                lastName: '勞勒',
                middleName: null,
                displayName: '勞勒',
                bio: '',
                otherNames: [],
              },
            },
            photo: {
              id: '675960d97e1c21b02dd70b98',
              alt: 'Michael_Lawler.png',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler.png',
              filename: 'Michael_Lawler.png',
              mimeType: 'image/png',
              width: 819,
              height: 1024,
            },
            birthday: {
              datetime: '1986-09-09T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'male',
            tags: [],
            congressionalData: {
              bioGuideId: 'L000599',
              govTrackId: 456924,
              committees: [
                {
                  systemCode: 'hsba',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsba04',
                      name: 'Housing and Insurance',
                      title: null,
                      id: '67529bad363aa0029d97df70',
                    },
                    {
                      systemCode: 'hsba16',
                      name: 'Capital Markets',
                      title: null,
                      id: '67529bb5363aa0029d97df71',
                    },
                  ],
                  id: '67529ba2363aa0029d97df6f',
                },
                {
                  systemCode: 'hsfa',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsfa14',
                      name: 'Europe',
                      title: null,
                      id: '67529bc7363aa0029d97df73',
                    },
                    {
                      systemCode: 'hsfa13',
                      name: 'Middle East, North Africa, and Central Asia',
                      title: null,
                      id: '67529bd0363aa0029d97df74',
                    },
                  ],
                  id: '67529bbd363aa0029d97df72',
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
                    title: 'Representative for district 17, New York',
                    description: null,
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'newYork',
                    district: 17,
                    party: 'republican',
                    congresses: [118],
                    officialAreas: [],
                    companyType: null,
                    id: '67529b54f5009a00321fea4c',
                  },
                ],
                id: '67529b54f5009a00321fea4b',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@RepMikeLawler',
                link: 'https://x.com/RepMikeLawler',
                id: '67529b8d363aa0029d97df6e',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'republican',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
              {
                id: '6754822c437319f5138bfa48',
                title: 'Taiwan Non-Discrimination Act of 2023',
                congress: 118,
                number: '540',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Michael Lawler',
            bio: "[Wikipedia] Michael Vincent Lawler (born September 9, 1986) is an American politician serving as the U.S. representative for New York's 17th congressional district since 2023. From 2021 to 2022, he was a Republican member of the New York State Assembly from the 97th district in Rockland County.",
            govTrackId: '456924',
          },
          constituency: 'newYork',
          party: 'republican',
          cosponsoredAt: {
            datetime: '2023-02-27T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f2003198864c',
        },
        {
          people: {
            id: '67529cda4040f8e6920df1d0',
            i18n: {
              en: {
                firstName: 'Susie',
                lastName: 'Lee',
                middleName: null,
                displayName: 'Susie Lee',
                bio: "[Wikipedia] Suzanne Marie Lee (née Kelley; born November 7, 1966) is an American politician from the state of Nevada. As a member of the Democratic Party, she has served as the U. S. representative for Nevada's 3rd congressional district since 2019. Lee was the founding director of the Inner-City Games in Las Vegas and president of Communities In Schools of Nevada.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: null,
                middleName: null,
                displayName: '',
                bio: '',
                otherNames: [],
              },
            },
            photo: {
              id: '67595d397e1c21b02dd70ad1',
              alt: 'Susie_Lee.jpg',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee.jpg',
              filename: 'Susie_Lee.jpg',
              mimeType: 'image/jpeg',
              width: 3360,
              height: 4200,
            },
            birthday: {
              datetime: '1966-11-07T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'female',
            tags: [],
            congressionalData: {
              bioGuideId: 'L000590',
              govTrackId: 412802,
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
                      id: '67529cdaf5009a00321fea53',
                    },
                    {
                      systemCode: 'hsii15',
                      name: 'Oversight and Investigations',
                      title: null,
                      id: '67529cdaf5009a00321fea54',
                    },
                  ],
                  id: '67529cdaf5009a00321fea50',
                },
                {
                  systemCode: 'hsap',
                  name: 'House Committee on Appropriations',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsap10',
                      name: 'Energy and Water Development, and Related Agencies',
                      title: null,
                      id: '67529cdaf5009a00321fea55',
                    },
                    {
                      systemCode: 'hsap18',
                      name: 'Military Construction, Veterans Affairs, and Related Agencies',
                      title: null,
                      id: '67529cdaf5009a00321fea56',
                    },
                  ],
                  id: '67529cdaf5009a00321fea51',
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
                    title: 'Representative for district 3, Nevada',
                    description: null,
                    start: {
                      datetime: '2019-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'nevada',
                    district: 3,
                    party: 'democratic',
                    congresses: [116, 117, 118],
                    officialAreas: [],
                    companyType: null,
                    id: '67529cdaf5009a00321fea52',
                  },
                ],
                id: '67529cdaf5009a00321fea4e',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@RepSusieLee',
                link: 'https://x.com/RepSusieLee',
                id: '67529cdaf5009a00321fea4f',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'democratic',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
              {
                id: '6754822c437319f5138bfa48',
                title: 'Taiwan Non-Discrimination Act of 2023',
                congress: 118,
                number: '540',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Susie Lee',
            bio: "[Wikipedia] Suzanne Marie Lee (née Kelley; born November 7, 1966) is an American politician from the state of Nevada. As a member of the Democratic Party, she has served as the U. S. representative for Nevada's 3rd congressional district since 2019. Lee was the founding director of the Inner-City Games in Las Vegas and president of Communities In Schools of Nevada.",
            govTrackId: '412802',
          },
          constituency: 'nevada',
          party: 'democratic',
          cosponsoredAt: {
            datetime: '2023-03-09T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f2003198864d',
        },
        {
          people: {
            id: '6752a93d2ddcf95deb375352',
            i18n: {
              en: {
                firstName: 'Patrick',
                lastName: 'Ryan',
                middleName: null,
                displayName: 'Patrick Ryan',
                bio: "[Wikipedia] Patrick Kevin Ryan (born March 28, 1982) is an American businessman, Democratic politician, and veteran serving as the U.S. representative for New York's 18th congressional district since 2023. He served as the representative for New York's 19th congressional district from 2022 to 2023 after being elected in a special election. He previously served as the county executive of Ulster County, New York.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: null,
                middleName: null,
                displayName: null,
                bio: null,
                otherNames: [],
              },
            },
            photo: {
              id: '675960a37e1c21b02dd70b8f',
              alt: 'Patrick_Ryan.png',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan.png',
              filename: 'Patrick_Ryan.png',
              mimeType: 'image/png',
              width: 1024,
              height: 1280,
            },
            birthday: {
              datetime: '1982-03-28T00:00:00.000Z',
              precision: [],
            },
            gender: 'male',
            tags: [],
            congressionalData: {
              bioGuideId: 'R000579',
              govTrackId: 456871,
              committees: [
                {
                  systemCode: 'hspw',
                  name: 'House Committee on Transportation and Infrastructure',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hspw12',
                      name: 'Highways and Transit',
                      title: null,
                      id: '6752a93de3d2f2003198860a',
                    },
                    {
                      systemCode: 'hspw02',
                      name: 'Water Resources and Environment',
                      title: null,
                      id: '6752a93de3d2f2003198860b',
                    },
                  ],
                  id: '6752a93de3d2f20031988606',
                },
                {
                  systemCode: 'hsas',
                  name: 'House Committee on Armed Services',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsas35',
                      name: 'Cyber, Information Technologies, and Innovation',
                      title: null,
                      id: '6752a93de3d2f2003198860c',
                    },
                    {
                      systemCode: 'hsas25',
                      name: 'Tactical Air and Land Forces',
                      title: null,
                      id: '6752a93de3d2f2003198860d',
                    },
                  ],
                  id: '6752a93de3d2f20031988607',
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
                    title: 'Representative for district 19, New York',
                    description: null,
                    start: {
                      datetime: '2022-09-13T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: '2023-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    state: 'newYork',
                    district: 19,
                    party: 'democratic',
                    congresses: [117],
                    officialAreas: [],
                    companyType: null,
                    id: '6752a93de3d2f20031988608',
                  },
                  {
                    title: 'Representative for district 18, New York',
                    description: null,
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'newYork',
                    district: 18,
                    party: 'democratic',
                    congresses: [118],
                    officialAreas: [],
                    companyType: null,
                    id: '6752a93de3d2f20031988609',
                  },
                ],
                id: '6752a93de3d2f20031988604',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@RepPatRyanNY',
                link: 'https://x.com/RepPatRyanNY',
                id: '6752a93de3d2f20031988605',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'democratic',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Patrick Ryan',
            bio: "[Wikipedia] Patrick Kevin Ryan (born March 28, 1982) is an American businessman, Democratic politician, and veteran serving as the U.S. representative for New York's 18th congressional district since 2023. He served as the representative for New York's 19th congressional district from 2022 to 2023 after being elected in a special election. He previously served as the county executive of Ulster County, New York.",
            govTrackId: '456871',
          },
          constituency: 'newYork',
          party: 'democratic',
          cosponsoredAt: {
            datetime: '2023-03-10T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f2003198864e',
        },
        {
          people: {
            id: '6752a9fe2ddcf95deb375520',
            i18n: {
              en: {
                firstName: 'Chris',
                lastName: 'Pappas',
                middleName: null,
                displayName: 'Chris Pappas',
                bio: "[Wikipedia] Christopher Charles Pappas (born June 4, 1980) is an American politician who has served as the U.S. representative from New Hampshire's 1st congressional district since 2019. A member of the Democratic Party, Pappas previously served on the New Hampshire Executive Council from 2013 to 2019.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: null,
                middleName: null,
                displayName: null,
                bio: null,
                otherNames: [],
              },
            },
            photo: {
              id: '675960447e1c21b02dd70b86',
              alt: 'Chris_Pappas.png',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas.png',
              filename: 'Chris_Pappas.png',
              mimeType: 'image/png',
              width: 762,
              height: 959,
            },
            birthday: {
              datetime: '1980-06-04T00:00:00.000Z',
              precision: [],
            },
            gender: 'male',
            tags: [],
            congressionalData: {
              bioGuideId: 'P000614',
              govTrackId: 412795,
              committees: [
                {
                  systemCode: 'hspw',
                  name: 'House Committee on Transportation and Infrastructure',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hspw07',
                      name: 'Coast Guard and Maritime Transportation',
                      title: null,
                      id: '6752a9fee3d2f20031988614',
                    },
                    {
                      systemCode: 'hspw12',
                      name: 'Highways and Transit',
                      title: null,
                      id: '6752a9fee3d2f20031988615',
                    },
                    {
                      systemCode: 'hspw02',
                      name: 'Water Resources and Environment',
                      title: null,
                      id: '6752a9fee3d2f20031988616',
                    },
                  ],
                  id: '6752a9fee3d2f20031988610',
                },
                {
                  systemCode: 'hsvr',
                  name: "House Committee on Veterans' Affairs",
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsvr09',
                      name: 'Disability Assistance and Memorial Affairs',
                      title: 'ranking',
                      id: '6752a9fee3d2f20031988617',
                    },
                    {
                      systemCode: 'hsvr08',
                      name: 'Oversight and Investigations',
                      title: null,
                      id: '6752a9fee3d2f20031988618',
                    },
                  ],
                  id: '6752a9fee3d2f20031988611',
                },
                {
                  systemCode: 'hssm',
                  name: 'House Committee on Small Business',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hssm22',
                      name: 'Innovation, Entrepreneurship, and Workforce Development',
                      title: null,
                      id: '6752a9fee3d2f20031988619',
                    },
                  ],
                  id: '6752a9fee3d2f20031988612',
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
                    title: 'Representative for district 1, New Hampshire',
                    description: null,
                    start: {
                      datetime: '2019-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'newHampshire',
                    district: 1,
                    party: 'democratic',
                    congresses: [116, 117, 118],
                    officialAreas: [],
                    companyType: null,
                    id: '6752a9fee3d2f20031988613',
                  },
                ],
                id: '6752a9fee3d2f2003198860e',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@RepChrisPappas',
                link: 'https://x.com/RepChrisPappas',
                id: '6752a9fee3d2f2003198860f',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'democratic',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Chris Pappas',
            bio: "[Wikipedia] Christopher Charles Pappas (born June 4, 1980) is an American politician who has served as the U.S. representative from New Hampshire's 1st congressional district since 2019. A member of the Democratic Party, Pappas previously served on the New Hampshire Executive Council from 2013 to 2019.",
            govTrackId: '412795',
          },
          constituency: 'newHampshire',
          party: 'democratic',
          cosponsoredAt: {
            datetime: '2023-05-25T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f2003198864f',
        },
        {
          people: {
            id: '6752ab3c2ddcf95deb375586',
            i18n: {
              en: {
                firstName: 'Young',
                lastName: 'Kim',
                middleName: 'Oak',
                displayName: 'Young Kim',
                bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
                otherNames: [],
              },
              zh: {
                firstName: '映玉',
                lastName: '金',
                middleName: null,
                displayName: '金映玉',
                bio: '[Wikipedia] 金映玉（英語：Young Oak Kim，韓語：최영옥；1962年10月18日—），本姓崔（金為夫姓），是一位韓裔美籍政治家和商人，現任加利福尼亞州第40國會選區的眾議員，此前曾於2021年至2023年任第39國會選區的眾議員。在2020年美國眾議院選舉中，金映玉、朴銀珠和瑪麗蓮·斯特里克蘭成為首批當選美國國會議員的三位韓裔女性。 她和朴銀珠也是自金昌準後第一批當選國會議員的韓裔加州人。',
                otherNames: [],
              },
            },
            photo: {
              id: '67595d357e1c21b02dd70abd',
              alt: 'Young_Kim.jpg',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim.jpg',
              filename: 'Young_Kim.jpg',
              mimeType: 'image/jpeg',
              width: 2497,
              height: 3021,
            },
            birthday: {
              datetime: '1962-10-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'female',
            tags: [],
            congressionalData: {
              bioGuideId: 'K000397',
              govTrackId: 456802,
              committees: [
                {
                  systemCode: 'hsba',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsba20',
                      name: 'Financial Institutions and Monetary Policy',
                      title: null,
                      id: '6752ab3ce3d2f20031988620',
                    },
                    {
                      systemCode: 'hsba10',
                      name: 'National Security, Illicit Finance, and International Financial Institutions',
                      title: 'viceChair',
                      id: '6752ab3ce3d2f20031988621',
                    },
                  ],
                  id: '6752ab3ce3d2f2003198861c',
                },
                {
                  systemCode: 'hsfa',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsfa05',
                      name: 'Indo-Pacific',
                      title: 'chair',
                      id: '6752ab3ce3d2f20031988622',
                    },
                    {
                      systemCode: 'hsfa16',
                      name: 'Africa',
                      title: null,
                      id: '6752ab3ce3d2f20031988623',
                    },
                  ],
                  id: '6752ab3ce3d2f2003198861d',
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
                    title: 'Representative for district 39, California',
                    description: null,
                    start: {
                      datetime: '2021-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: '2023-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    state: 'california',
                    district: 39,
                    party: 'republican',
                    congresses: [117],
                    officialAreas: [],
                    companyType: null,
                    id: '6752ab3ce3d2f2003198861e',
                  },
                  {
                    title: 'Representative for district 40, California',
                    description: null,
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'california',
                    district: 40,
                    party: 'republican',
                    congresses: [118],
                    officialAreas: [],
                    companyType: null,
                    id: '6752ab3ce3d2f2003198861f',
                  },
                ],
                id: '6752ab3ce3d2f2003198861a',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@RepYoungKim',
                link: 'https://x.com/RepYoungKim',
                id: '6752ab3ce3d2f2003198861b',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 1,
            currentParty: 'republican',
            records: [],
            sponsorBills: [
              {
                id: '6754822c437319f5138bfa48',
                title: 'Taiwan Non-Discrimination Act of 2023',
                congress: 118,
                number: '540',
                type: 'hr',
                isFeatured: false,
              },
            ],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Young Kim',
            bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
            govTrackId: '456802',
          },
          constituency: 'california',
          party: 'republican',
          cosponsoredAt: {
            datetime: '2023-06-20T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f20031988650',
        },
        {
          people: {
            id: '6752abce2ddcf95deb3755ec',
            i18n: {
              en: {
                firstName: 'Monica',
                lastName: 'De La Cruz',
                middleName: null,
                displayName: 'Monica De La Cruz',
                bio: "[Wikipedia] Monica De La Cruz (born November 11, 1974) is an American politician and insurance agent from the state of Texas. She has represented Texas's 15th congressional district in the U.S. House of Representatives since 2023.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: null,
                middleName: null,
                displayName: null,
                bio: null,
                otherNames: [],
              },
            },
            photo: {
              id: '67595d357e1c21b02dd70ab9',
              alt: 'Monica_De_La_Cruz.jpg',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz.jpg',
              filename: 'Monica_De_La_Cruz.jpg',
              mimeType: 'image/jpeg',
              width: 1600,
              height: 2000,
            },
            birthday: {
              datetime: '1974-11-11T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'female',
            tags: [],
            congressionalData: {
              bioGuideId: 'D000594',
              govTrackId: 456943,
              committees: [
                {
                  systemCode: 'hsag',
                  name: 'House Committee on Agriculture',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsag03',
                      name: 'Nutrition, Foreign Agriculture, and Horticulture',
                      title: null,
                      id: '6752abcee3d2f20031988629',
                    },
                    {
                      systemCode: 'hsag16',
                      name: 'General Farm Commodities, Risk Management, and Credit',
                      title: null,
                      id: '6752abcee3d2f2003198862a',
                    },
                  ],
                  id: '6752abcee3d2f20031988626',
                },
                {
                  systemCode: 'hsba',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsba04',
                      name: 'Housing and Insurance',
                      title: null,
                      id: '6752abcee3d2f2003198862b',
                    },
                    {
                      systemCode: 'hsba20',
                      name: 'Financial Institutions and Monetary Policy',
                      title: null,
                      id: '6752abcee3d2f2003198862c',
                    },
                    {
                      systemCode: 'hsba10',
                      name: 'National Security, Illicit Finance, and International Financial Institutions',
                      title: null,
                      id: '6752abcee3d2f2003198862d',
                    },
                  ],
                  id: '6752abcee3d2f20031988627',
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
                    title: 'Representative for district 15, Texas',
                    description: null,
                    start: {
                      datetime: '2023-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'texas',
                    district: 15,
                    party: 'republican',
                    congresses: [118],
                    officialAreas: [],
                    companyType: null,
                    id: '6752abcee3d2f20031988628',
                  },
                ],
                id: '6752abcee3d2f20031988624',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@monica4congress',
                link: 'https://x.com/monica4congress',
                id: '6752abcee3d2f20031988625',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'republican',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
              {
                id: '6754822c437319f5138bfa48',
                title: 'Taiwan Non-Discrimination Act of 2023',
                congress: 118,
                number: '540',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Monica De La Cruz',
            bio: "[Wikipedia] Monica De La Cruz (born November 11, 1974) is an American politician and insurance agent from the state of Texas. She has represented Texas's 15th congressional district in the U.S. House of Representatives since 2023.",
            govTrackId: '456943',
          },
          constituency: 'texas',
          party: 'republican',
          cosponsoredAt: {
            datetime: '2023-07-03T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f20031988651',
        },
        {
          people: {
            id: '6752ac8d2ddcf95deb375652',
            i18n: {
              en: {
                firstName: 'Ann',
                lastName: 'Wagner',
                middleName: null,
                displayName: 'Ann Wagner',
                bio: "[Wikipedia] Ann Louise Wagner (née Trousdale, September 13, 1962) is an American politician and former diplomat serving as the U.S. representative for Missouri's 2nd congressional district. A member of the Republican Party, she was the United States ambassador to Luxembourg from 2005 to 2009.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: '華格納',
                middleName: null,
                displayName: '華格納',
                bio: '[Wikipedia] 安·路易斯·瓦格納（英語：Ann Louise Wagner，1962年9月13日—）是美國政治人物和前外交官，現任代表密蘇里州第二國會選區眾議院議員，曾擔任美國駐盧森堡大使。',
                otherNames: [],
              },
            },
            photo: {
              id: '67595d357e1c21b02dd70ab7',
              alt: 'Ann_Wagner.jpg',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner.jpg',
              filename: 'Ann_Wagner.jpg',
              mimeType: 'image/jpeg',
              width: 1049,
              height: 1398,
            },
            birthday: {
              datetime: '1962-09-13T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'female',
            tags: [],
            congressionalData: {
              bioGuideId: 'W000812',
              govTrackId: 412548,
              committees: [
                {
                  systemCode: 'hsba',
                  name: 'House Committee on Financial Services',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsba16',
                      name: 'Capital Markets',
                      title: 'chair',
                      id: '6752ac8de3d2f20031988636',
                    },
                    {
                      systemCode: 'hsba09',
                      name: 'Oversight and Investigations',
                      title: null,
                      id: '6752ac8de3d2f20031988637',
                    },
                  ],
                  id: '6752ac8de3d2f20031988633',
                },
                {
                  systemCode: 'hsfa',
                  name: 'House Committee on Foreign Affairs',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'hsfa05',
                      name: 'Indo-Pacific',
                      title: null,
                      id: '6752ac8de3d2f20031988638',
                    },
                    {
                      systemCode: 'hsfa14',
                      name: 'Europe',
                      title: null,
                      id: '6752ac8de3d2f20031988639',
                    },
                  ],
                  id: '6752ac8de3d2f20031988634',
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
                    title: 'Representative for district 2, Missouri',
                    description: null,
                    start: {
                      datetime: '2013-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'missouri',
                    district: 2,
                    party: 'republican',
                    congresses: [113, 114, 115, 116, 117, 118],
                    officialAreas: [],
                    companyType: null,
                    id: '6752ac8de3d2f20031988635',
                  },
                ],
                id: '6752ac8de3d2f2003198862e',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@RepAnnWagner',
                link: 'https://x.com/RepAnnWagner',
                id: '6752ac8de3d2f2003198862f',
              },
              {
                type: 'facebook',
                title: '@RepAnnWagner',
                link: 'https://facebook.com/RepAnnWagner',
                id: '6752ac8de3d2f20031988630',
              },
              {
                type: 'youtube',
                title: '@annwagner160',
                link: 'https://youtube.com/channel/UCy2v2DXXvQnbRc8Zx77Dnsg',
                id: '6752ac8de3d2f20031988631',
              },
              {
                type: 'instagram',
                title: '@repannwagner',
                link: 'https://instagram.com/repannwagner',
                id: '6752ac8de3d2f20031988632',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 0,
            currentParty: 'republican',
            records: [],
            sponsorBills: [],
            cosponsorBills: [
              {
                id: '6752b1ca2ddcf95deb37622c',
                title: 'Taiwan Conflict Deterrence Act of 2023',
                congress: 118,
                number: '554',
                type: 'hr',
                isFeatured: false,
              },
            ],
            votes: [],
            displayName: 'Ann Wagner',
            bio: "[Wikipedia] Ann Louise Wagner (née Trousdale, September 13, 1962) is an American politician and former diplomat serving as the U.S. representative for Missouri's 2nd congressional district. A member of the Republican Party, she was the United States ambassador to Luxembourg from 2005 to 2009.",
            govTrackId: '412548',
          },
          constituency: 'missouri',
          party: 'republican',
          cosponsoredAt: {
            datetime: '2023-07-11T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          id: '6752b1cae3d2f20031988652',
        },
      ],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/554',
      popularityRank: null,
      relatedBills: [],
      title: 'Taiwan Conflict Deterrence Act of 2023',
      summary:
        '[Congress.Gov] This bill, in the event of a threat to U.S. interests by China, (1) requires additional reporting on the domestic and foreign financial activity of specified Chinese officials, and (2) prohibits certain financial transactions with specified Chinese officials.',
      latestActionTime: '2024-09-10T00:00:00.000Z',
      updatedAt: '2024-12-19T07:46:49.965Z',
      createdAt: '2024-12-06T08:11:54.651Z',
    },
    {
      id: '6752cf9f1e937e031b1b23d5',
      i18n: {
        en: {
          title: 'CHIPS and Science Act',
          summary:
            '[congress.gov] This act provides funds to support the domestic production of semiconductors and authorizes various programs and activities of the federal science agencies.',
          actionsOverview: [
            {
              actionAt: {
                datetime: '2022-08-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Became Public Law No: 117-167.',
            },
            {
              actionAt: {
                datetime: '2022-08-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Signed by President.',
            },
            {
              actionAt: {
                datetime: '2022-08-02T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Presented to President.',
            },
            {
              actionAt: {
                datetime: '2022-07-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Resolving differences -- House actions: On motion that the House agree to the Senate amendment to the House amendment to the Senate amendment Agreed to by the Yeas and Nays: 243 - 187, 1 Present (Roll no. 404).',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Resolving differences -- Senate actions: Senate concurred in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135) by Yea-Nay Vote. 64 - 33. Record Vote Number: 271.',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in Senate: Passed Senate with an amendment by Unanimous Consent.',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Senate Committee on Appropriations discharged by Unanimous Consent.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'Passed/agreed to in House: On passage Passed by the Yeas and Nays: 215 - 207 (Roll no. 239).',
            },
            {
              actionAt: {
                datetime: '2021-07-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description:
                'The House Committee on Appropriations reported an original measure, H. Rept. 117-80, by Mr. Ryan.',
            },
            {
              actionAt: {
                datetime: '2021-07-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              description: 'Introduced in House',
            },
          ],
          actionsAll: [
            {
              actionAt: {
                datetime: '2022-08-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description: 'Became Public Law No: 117-167.',
            },
            {
              actionAt: {
                datetime: '2022-08-09T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: null,
              description: 'Signed by President.',
            },
            {
              actionAt: {
                datetime: '2022-08-02T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Presented to President.',
            },
            {
              actionAt: {
                datetime: '2022-07-28T15:10:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2022-07-28T15:10:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion that the House agree to the Senate amendment to the House amendment to the Senate amendment Agreed to by the Yeas and Nays: 243 - 187, 1 Present (Roll no. 404). (text: CR H7273-7374)',
            },
            {
              actionAt: {
                datetime: '2022-07-28T14:21:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'The previous question was ordered pursuant to the rule.',
            },
            {
              actionAt: {
                datetime: '2022-07-28T12:59:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - The House proceeded with one hour of debate on the Johnson (TX) motion to concur in the Senate amendment to the House amendment to the Senate amendment to H.R. 4346.',
            },
            {
              actionAt: {
                datetime: '2022-07-28T12:58:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Pursuant to the provisions of H.Res. 1289, Ms. Johnson (TX) moved that the House concur in the Senate amendment to the House amendment to the Senate amendment to H.R. 4346. (consideration: CR H7273-7387)',
            },
            {
              actionAt: {
                datetime: '2022-07-28T12:58:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Ms. Johnson (TX) moved that the House agree to the Senate amendment to the House amendment to the Senate amendment.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Message on Senate action sent to the House.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Amendment SA 5135 agreed to in Senate by Yea-Nay Vote. 64 - 33. Record Vote Number: 271.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Senate concurred in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135) by Yea-Nay Vote. 64 - 33. Record Vote Number: 271.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Motion to waive all applicable budgetary discipline with respect to amendment SA 5135 agreed to in Senate by Yea-Nay Vote. 64 - 33. Record Vote Number: 270.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5136 Proposed amendment SA 5136 withdrawn in Senate.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Point of order that the amendment violates section 4106 of H. Con. Res. 71, 115th Congress, raised in Senate with respect to amendment SA 5135.',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Considered by Senate (Message from the House considered). (consideration: S3707¿3715)',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5136 Considered by Senate (Message from the House considered). (consideration: CR S3707)',
            },
            {
              actionAt: {
                datetime: '2022-07-27T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Considered by Senate (Message from the House considered). (consideration: CR S3707)',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Motion to waive section 404(a) of S. Con. Res. 13, 111th Congress, as amended by S. Con. Res. 11, 114th Congress, with respect to amendment SA 5135 agreed to in Senate by Yea-Nay Vote. 63 - 32. Record Vote Number: 269.',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Point of order that the amendment violates section 404(a) of S. Con. Res. 13, 111th Congress, as amended by S. Con. Res. 11, 114th Congress, raised in Senate with respect to amendment SA 5135.',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5138 SA 5138 (the instructions of the motion to refer) fell when SA 5137 fell.',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5137 SA 5137 fell when cloture invoked on the motion to concur in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135).',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to refer to Senate Committee on Commerce, Science, and Transportation with instructions to report back forthwith with the following amendment (SA 5137) fell when cloture was invoked on the motion to concur in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135) in Senate.',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Considered by Senate (Message from the House considered).',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5136 Considered by Senate (Message from the House considered). (consideration: CR S3665)',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Considered by Senate (Message from the House considered). (consideration: CR S3665)',
            },
            {
              actionAt: {
                datetime: '2022-07-26T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture on the motion to concur in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135) invoked in Senate by Yea-Nay Vote. 64 - 32. Record Vote Number: 268. (CR S3665)',
            },
            {
              actionAt: {
                datetime: '2022-07-21T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Considered by Senate (Message from the House considered). (consideration: CR S3582)',
            },
            {
              actionAt: {
                datetime: '2022-07-21T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5138 Considered by Senate (Message from the House considered). (consideration: CR S3582)',
            },
            {
              actionAt: {
                datetime: '2022-07-21T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5137 Considered by Senate (Message from the House considered). (consideration: CR S3582)',
            },
            {
              actionAt: {
                datetime: '2022-07-21T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5136 Considered by Senate (Message from the House considered). (consideration: CR S3582)',
            },
            {
              actionAt: {
                datetime: '2022-07-21T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Considered by Senate (Message from the House considered). (consideration: CR S3582)',
            },
            {
              actionAt: {
                datetime: '2022-07-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5138 Considered by Senate (Message from the House considered). (consideration: CR S3527)',
            },
            {
              actionAt: {
                datetime: '2022-07-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5137 Considered by Senate (Message from the House considered). (consideration: CR S3527)',
            },
            {
              actionAt: {
                datetime: '2022-07-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5136 Considered by Senate (Message from the House considered). (consideration: CR S3527)',
            },
            {
              actionAt: {
                datetime: '2022-07-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Considered by Senate (Message from the House considered). (consideration: CR S3527)',
            },
            {
              actionAt: {
                datetime: '2022-07-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Cloture motion on the motion to concur in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135) presented in Senate. (CR S3527)',
            },
            {
              actionAt: {
                datetime: '2022-07-20T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Considered by Senate (Message from the House considered). (consideration: CR S3527)',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5138 Amendment SA 5138 proposed by Senator Schumer to Amendment SA 5137 (the instructions of the motion to refer). (consideration: CR S3362; text: CR S3496) To modify the effective date.',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5137 Amendment SA 5137 proposed by Senator Schumer. (consideration: CR S3362; text: CR S3496) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to refer to Senate Committee on Commerce, Science, and Transportation the House message to accompany H.R. 4346 with instructions to report back forthwith with the following amendment (SA 5137) made in Senate. (CR S3362)',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5136 Amendment SA 5136 proposed by Senator Schumer to Amendment SA 5135. (consideration: CR S3362; text: CR S3496) To add an effective date.',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5135 Amendment SA 5135 proposed by Senator Schumer. (consideration: CR S3362; text: CR S3387-3496) To improve the bill.',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion by Senator Schumer to concur in the House amendment to the Senate amendment to H.R. 4346 with an amendment (SA 5135) made in Senate. (CR S3362)',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Measure laid before Senate by motion. (consideration: CR S3362)',
            },
            {
              actionAt: {
                datetime: '2022-07-19T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Motion to proceed to consideration of the House message to accompany H.R. 4346 agreed to in Senate by Yea-Nay Vote. 64 - 34. Record Vote Number: 261.',
            },
            {
              actionAt: {
                datetime: '2022-07-11T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Message on House action received in Senate and at desk: House amendment to Senate amendment.',
            },
            {
              actionAt: {
                datetime: '2022-06-24T11:19:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Pursuant to the provisions of H.Res. 1204, the House agreed to the Senate amendment with amendment. (consideration: CR H5891; text: CR H5891-5892)',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description: 'Message on Senate action sent to the House.',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Passed Senate with an amendment by Unanimous Consent. (text of amendment in the nature of a substitute: CR S3096-3097)',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5120 Amendment SA 5120 agreed to in Senate by Unanimous Consent.',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'S.Amdt.5120 Amendment SA 5120 proposed by Senator Whitehouse for Senator Hagerty. (consideration: CR S3096-3097; text: S3096-3097) In the nature of a substitute.',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Measure laid before Senate by unanimous consent. (consideration: CR S3096-3097)',
            },
            {
              actionAt: {
                datetime: '2022-06-22T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Senate Committee on Appropriations discharged by Unanimous Consent.',
            },
            {
              actionAt: {
                datetime: '2021-07-29T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'senate',
              description:
                'Received in the Senate and Read twice and referred to the Committee on Appropriations.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:56:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'The Clerk was authorized to correct section numbers, punctuation, and cross references, and to make other necessary technical and conforming corrections in the engrossment of H.R. 4346.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:56:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:56:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On passage Passed by the Yeas and Nays: 215 - 207 (Roll no. 239).',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:35:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'On motion to recommit Failed by the Yeas and Nays: 202 - 218 (Roll no. 238).',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:14:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'The previous question on the motion to recommit was ordered pursuant to clause 2(b) of rule XIX.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:14:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Mr. Womack moved to recommit to the Committee on Appropriations. (text: CR H4169-4171)',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:13:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'The previous question was ordered pursuant to the rule.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:13:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table. Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T18:13:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.95 On agreeing to the Ryan amendments (A004) Failed by the Yeas and Nays: 180 - 243 (Roll no. 237).',
            },
            {
              actionAt: {
                datetime: '2021-07-28T17:52:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table. Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T17:52:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.93 On agreeing to the Ryan amendments (A002) Agreed to by the Yeas and Nays: 220 - 207 (Roll no. 236).',
            },
            {
              actionAt: {
                datetime: '2021-07-28T17:09:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'UNFINISHED BUSINESS - The Chair announced that the unfinished business was on agreeing to amendments which had been debated earlier and on which further proceedings had been postponed.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T17:09:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'POSTPONED PROCEEDINGS - At the conclusion of debate on the Ryan amendment en bloc No. 3, the Chair put the question on adoption of the amendment and by voice vote, announced that the ayes had prevailed. Mr. Ryan demanded the yeas and nays and the Chair postponed further proceedings until a time to be announced.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T17:08:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.95 The previous question was ordered on the amendment (A004) pursuant to the rule.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:59:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - Pursuant to the provisions of H. Res 567, the House proceeded with 20 minutes of debate on the Ryan amendment en bloc No. 3.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:59:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.95 Amendments en bloc (A004) offered by Mr. Ryan. (consideration: CR H4167-4168, H4169; text: CR H4167)',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:58:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Motion to reconsider laid on the table. Agreed to without objection.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:58:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.94 On agreeing to the Ryan amendments (A003) Agreed to by voice vote.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:58:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'The previous question was ordered on the amendment (A003) pursuant to the rule.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:56:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - Pursuant to the provisions of H. Res 567, the House proceeded with 20 minutes of debate on the Ryan amendment en bloc No. 2.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:56:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.94 Amendments en bloc (A003) offered by Mr. Ryan. (consideration: CR H4166-4167; text: CR H4166)',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:55:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'POSTPONED PROCEEDINGS - At the conclusion of debate on the Ryan amendment en bloc No. 1, the Chair put the question on adoption of the amendment and by voice vote, announced that the ayes had prevailed. Ms. Herrera Beutler demanded the yeas and nays and the Chair postponed further proceedings until a time to be announced.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:54:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.93 The previous question was ordered on the amendment (A002) pursuant to the rule.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:35:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - Pursuant to the provisions of H. Res 567, the House proceeded with 20 minutes of debate on the Ryan amendment en bloc No. 1.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T16:34:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'H.Amdt.93 Amendments en bloc (A002) offered by Mr. Ryan. (consideration: CR H4164-4166, H4168; text: CR H4164)',
            },
            {
              actionAt: {
                datetime: '2021-07-28T15:36:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'DEBATE - The House proceeded with one hour of debate on H.R. 4346.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T15:35:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Rule provides for consideration of H.R. 4346, H.R. 4373 and H.R. 4505. Provides for consideration of H.R. 4346, H.R. 4373, and H.R. 4505 under a structured rule with one hour of general debate for each bill.',
            },
            {
              actionAt: {
                datetime: '2021-07-28T15:35:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Considered under the provisions of rule H. Res. 567. (consideration: CR H4151-4172; text: CR H4152-4158)',
            },
            {
              actionAt: {
                datetime: '2021-07-28T10:22:00.000Z',
                precision: ['year', 'month', 'day', 'time'],
              },
              chamber: 'house',
              description:
                'Rules Committee Resolution H. Res. 567 Reported to House. Rule provides for consideration of H.R. 4346, H.R. 4373 and H.R. 4505. Provides for consideration of H.R. 4346, H.R. 4373, and H.R. 4505 under a structured rule with one hour of general debate for each bill.',
            },
            {
              actionAt: {
                datetime: '2021-07-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description: 'Placed on the Union Calendar, Calendar No. 55.',
            },
            {
              actionAt: {
                datetime: '2021-07-01T00:00:00.000Z',
                precision: ['year', 'month', 'day'],
              },
              chamber: 'house',
              description:
                'The House Committee on Appropriations reported an original measure, H. Rept. 117-80, by Mr. Ryan.',
            },
          ],
        },
        zh: {
          title: '晶片法案',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 117,
      number: '4346',
      type: 'hr',
      introducedAt: {
        datetime: '2021-07-01T00:00:00.000Z',
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
          id: '6752ce4d1e937e031b1b2222',
          i18n: {
            en: {
              firstName: 'Timothy',
              lastName: 'Ryan',
              middleName: 'J.',
              displayName: 'Tim Ryan',
              bio: "[Wikipedia] Timothy John Ryan (born July 16, 1973) is an American politician who served as a U.S. representative for Ohio from 2003 to 2023. A member of the Democratic Party, he represented Ohio's 13th congressional district from 2013 to 2023, having previously represented Ohio's 17th congressional district from 2003 to 2013. Ryan's district included a large swath of northeastern Ohio, from Youngstown to Akron. He was the Democratic nominee in the 2022 United States Senate election in Ohio, which he lost to JD Vance.",
              otherNames: [
                {
                  otherName: 'Tim',
                  id: '6752ce4da31c960031c15db9',
                },
              ],
            },
            zh: {
              firstName: null,
              lastName: '萊恩',
              middleName: null,
              displayName: '萊恩',
              bio: '[Wikipedia] 提摩西·約翰·瑞安（英語：Timothy John Ryan，1973年7月16日—）是一名美國政治人物，2003年-2023年期間擔任俄亥俄州聯邦眾議員。他是民主黨籍，自2013年起代表俄亥俄州第13國會選區，在重新劃分選區前曾代表俄亥俄州第17國會選區。瑞安的選區現在包括俄亥俄州東北部的一大片地區，從揚斯敦到亞克朗。他是2022年俄亥俄州聯邦參議員選舉中的民主黨提名人。',
              otherNames: [],
            },
          },
          photo: {
            id: '67595fa67e1c21b02dd70b6b',
            alt: 'Tim_Ryan.png',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan.png',
            filename: 'Tim_Ryan.png',
            mimeType: 'image/png',
            width: 200,
            height: 244,
          },
          birthday: {
            datetime: '1973-07-16T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'male',
          tags: [],
          congressionalData: {
            bioGuideId: 'R000577',
            govTrackId: 400352,
            committees: [],
          },
          experiences: [
            {
              company: 'United States House of Representatives',
              category: 'House Representative',
              isCurrent: false,
              positions: [
                {
                  title: 'Representative for district 17, Ohio',
                  description: null,
                  start: {
                    datetime: '2003-01-07T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: '2013-01-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  state: 'ohio',
                  district: 17,
                  party: 'democratic',
                  congresses: [108, 109, 110, 111, 112],
                  officialAreas: [],
                  companyType: null,
                  id: '6753c2934b046d7ce13a5aa6',
                },
                {
                  title: 'Representative for district 13, Ohio',
                  description: null,
                  start: {
                    datetime: '2013-01-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: '2023-01-03T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  state: 'ohio',
                  district: 13,
                  party: 'democratic',
                  congresses: [113, 114, 115, 116, 117],
                  officialAreas: [],
                  companyType: null,
                  id: '6753c30c4b046d7ce13a5aa7',
                },
              ],
              id: '6753c26a4b046d7ce13a5aa5',
            },
          ],
          publications: [
            {
              title:
                'A Mindful Nation: How a Simple Practice Can Help Us Reduce Stress, Improve Performance, and Recapture the American Spirit. Carlsbad',
              abstract: null,
              link: null,
              id: '6753c2594b046d7ce13a5aa4',
            },
          ],
          links: [],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 1,
          currentParty: 'independent',
          records: [],
          sponsorBills: [
            {
              id: '6752cf9f1e937e031b1b23d5',
              title: 'CHIPS and Science Act',
              congress: 117,
              number: '4346',
              type: 'hr',
              isFeatured: true,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'Tim Ryan',
          bio: "[Wikipedia] Timothy John Ryan (born July 16, 1973) is an American politician who served as a U.S. representative for Ohio from 2003 to 2023. A member of the Democratic Party, he represented Ohio's 13th congressional district from 2013 to 2023, having previously represented Ohio's 17th congressional district from 2003 to 2013. Ryan's district included a large swath of northeastern Ohio, from Youngstown to Akron. He was the Democratic nominee in the 2022 United States Senate election in Ohio, which he lost to JD Vance.",
          govTrackId: '400352',
        },
        party: 'democratic',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/117th-congress/house-bill/4346',
      popularityRank: null,
      relatedBills: [],
      title: 'CHIPS and Science Act',
      summary:
        '[congress.gov] This act provides funds to support the domestic production of semiconductors and authorizes various programs and activities of the federal science agencies.',
      latestActionTime: '2022-08-09T00:00:00.000Z',
      updatedAt: '2024-12-19T07:31:32.103Z',
      createdAt: '2024-12-06T10:19:11.796Z',
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
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/1176',
      popularityRank: 1,
      relatedBills: [],
      title: 'Taiwan International Solidarity Act',
      summary:
        "[congress.gov] This bill requires the Department of State to annually report to Congress on efforts by China to undermine Taiwan's participation in international organizations or Taiwan's relationships with other countries.",
      latestActionTime: '2023-07-26T00:00:00.000Z',
      updatedAt: '2024-12-19T07:32:44.649Z',
      createdAt: '2024-12-07T04:33:48.684Z',
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
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/116th-congress/senate-bill/1678',
      popularityRank: null,
      relatedBills: [],
      title:
        'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
      summary:
        "[congress.gov] This bill requires the Department of State to annually report to Congress on steps the State Department has taken to help strengthen Taiwan's diplomatic relationships and partnerships around the world. (Taiwan is self-governing, but China considers it a renegade province and has taken actions to encourage countries and international organizations to limit or cut off relations with Taiwan.)",
      latestActionTime: '2020-03-26T00:00:00.000Z',
      updatedAt: '2024-12-07T04:48:21.319Z',
      createdAt: '2024-12-07T04:48:21.319Z',
    },
    {
      id: '6753dbc51e937e031b1b320a',
      i18n: {
        en: {
          title:
            'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
          summary:
            '[congress.gov] This act provides FY2024 supplemental appropriations to several federal agencies for assistance to Ukraine, Israel, and U.S. allies in the Indo-Pacific region. The act also addresses various foreign policy issues.',
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
        },
        zh: {
          title: '2024年國安緊急補充撥款法案',
          summary: null,
          actionsOverview: null,
          actionsAll: null,
        },
      },
      congress: 118,
      number: '815',
      type: 'hr',
      introducedAt: {
        datetime: '2023-02-02T00:00:00.000Z',
        precision: ['year', 'month', 'day'],
      },
      isFeatured: false,
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
          id: '6753dafc1e937e031b1b3107',
          i18n: {
            en: {
              firstName: 'Cathy',
              lastName: 'McMorris Rodgers',
              middleName: 'Anne',
              displayName: 'Cathy McMorris Rodgers',
              bio: "[Wikipedia] Cathy Anne McMorris Rodgers (born May 22, 1969) is an American politician who is the United States representative for Washington's 5th congressional district, which encompasses the eastern third of the state and includes Spokane, the state's second-largest city. A Republican, McMorris Rodgers previously served in the Washington House of Representatives. From 2013 to 2019, she chaired the House Republican Conference.",
              otherNames: [],
            },
            zh: {
              firstName: null,
              lastName: '羅傑斯',
              middleName: null,
              displayName: '羅傑斯',
              bio: '[Wikipedia] 凱西·安妮·麥克莫里斯·羅傑斯（英語：Cathy Anne McMorris Rodgers，1969年5月22日—），是美國政治人物，現任代表華盛頓州第五國會選區聯邦眾議員，該選區涵蓋該州東部三分之一的面積，包括該州第二大城市斯波坎。曾在華盛頓眾議院任職。2013年至2019年擔任眾議院共和黨會議主席，2023年成為美國眾議院能源和商業委員會主席。',
              otherNames: [],
            },
          },
          photo: {
            id: '67595d367e1c21b02dd70ac1',
            alt: 'Cathy_McMorris_Rodgers.jpg',
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Cathy_McMorris_Rodgers.jpg',
            filename: 'Cathy_McMorris_Rodgers.jpg',
            mimeType: 'image/jpeg',
            width: 1003,
            height: 1365,
          },
          birthday: {
            datetime: '1969-05-22T00:00:00.000Z',
            precision: ['year', 'month', 'day'],
          },
          gender: 'female',
          tags: [],
          congressionalData: {
            bioGuideId: 'M001159',
            govTrackId: 400659,
            committees: [
              {
                systemCode: 'hsif',
                name: 'House Committee on Energy and Commerce',
                title: 'chair',
                subcommittees: [],
                id: '6753dafca31c960031c15dd3',
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
                  title: 'Representative for district 5, Washington',
                  description: null,
                  start: {
                    datetime: '2005-01-04T00:00:00.000Z',
                    precision: ['year', 'month', 'day'],
                  },
                  end: {
                    datetime: null,
                    precision: [],
                  },
                  state: 'washington',
                  district: 5,
                  party: 'republican',
                  congresses: [
                    109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
                  ],
                  officialAreas: [],
                  companyType: null,
                  id: '6753dafca31c960031c15dd4',
                },
              ],
              id: '6753dafca31c960031c15dce',
            },
          ],
          publications: [],
          links: [
            {
              type: 'twitter',
              title: '@CathyMcMorris',
              link: 'https://x.com/CathyMcMorris',
              id: '6753dafca31c960031c15dcf',
            },
            {
              type: 'facebook',
              title: '@mcmorrisrodgers',
              link: 'https://www.facebook.com/mcmorrisrodgers',
              id: '6753dafca31c960031c15dd0',
            },
            {
              type: 'youtube',
              title: 'mcmorrisrodgers',
              link: 'https://www.youtube.com/channel/UCRp0lwIxAhq2Ia9_YgRWUkg',
              id: '6753dafca31c960031c15dd1',
            },
            {
              type: 'instagram',
              title: '@cathymcmorris',
              link: 'https://instagram.com/cathymcmorris',
              id: '6753dafca31c960031c15dd2',
            },
          ],
          partyChangeRecords: [],
          viewCount: 0,
          billCount: 1,
          currentParty: 'republican',
          records: [],
          sponsorBills: [
            {
              id: '6753dbc51e937e031b1b320a',
              title:
                'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
              congress: 118,
              number: '815',
              type: 'hr',
              isFeatured: false,
            },
          ],
          cosponsorBills: [],
          votes: [],
          displayName: 'Cathy McMorris Rodgers',
          bio: "[Wikipedia] Cathy Anne McMorris Rodgers (born May 22, 1969) is an American politician who is the United States representative for Washington's 5th congressional district, which encompasses the eastern third of the state and includes Spokane, the state's second-largest city. A Republican, McMorris Rodgers previously served in the Washington House of Representatives. From 2013 to 2019, she chaired the House Republican Conference.",
          govTrackId: '400659',
        },
        party: 'republican',
      },
      cosponsors: [],
      congressGovUrl:
        'https://www.congress.gov/bill/118th-congress/house-bill/815',
      popularityRank: null,
      relatedBills: [],
      title:
        'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
      summary:
        '[congress.gov] This act provides FY2024 supplemental appropriations to several federal agencies for assistance to Ukraine, Israel, and U.S. allies in the Indo-Pacific region. The act also addresses various foreign policy issues.',
      latestActionTime: '2024-04-24T00:00:00.000Z',
      updatedAt: '2024-12-07T05:23:17.629Z',
      createdAt: '2024-12-07T05:23:17.629Z',
    },
  ] as unknown as BillDto[]
  return data.map((item) => Bill.fromDTO(lang, item)).slice(0, 5)
}

export const getPopularBills = (lang: Language): Bill[] => {
  // 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
  return getLatestBills(lang)
}
