import { Congress } from '@/common/classes/Congress'
import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { People } from '@/modules/People/classes/People'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import { Bill } from '@/modules/Bill/classes/Bill'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
import { BillCategoryEnum } from '@/modules/Bill/components/BillFilter/enums'
import { BillTrendData } from '@/modules/Bill/components/BillLanding/TrendCard'
import {
  CONGRESS_NUMBER_MIN,
  CURRENT_CONGRESS_NUMBER,
} from '@/common/assets/constants'
import { BILL_DTO_MOCK } from '@/modules/Bill/dtoData'
import {
  CategoriesBills,
  TopCosponsorsQuery,
  TopSponsorsQuery,
  TopTagsQuery,
  TrendByCategoryQuery,
  Bill as BillDto,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'

export const BILL_TOTAL_COUNT_MOCK = 20

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

export const BILL_DATA_MOCK: Bill[] = [
  new Bill({
    id: '8281',
    title:
      'Deterring Communist Chinese Aggression Against Taiwan Through Financial Sanctions Act of 2023 and Promoting Regional Stability',
    sponsor: sponsor1,
    cosponsors: [sponsor1, sponsor2, sponsor3],
    tags: [
      'Environment',
      'Energy',
      'Security',
      'Economy',
      'Technology',
      'Privacy',
      'Housing',
      'Social Policy',
      'Veterans',
      'Healthcare',
      'Education',
      'Business',
      'Infrastructure',
      'Climate Change',
      'Data Privacy',
      'Affordable Housing',
      'Small Business',
      'Cybersecurity',
      'Healthcare Accessibility',
      'Veterans Care',
      'Infrastructure Modernization',
      'Data Privacy Protection',
      'Comprehensive Cybersecurity Enhancement',
      'National Digital Infrastructure Protection',
      'Healthcare Accessibility',
      'Veterans Care',
      'Infrastructure Modernization',
      'Data Privacy Protection',
      'Comprehensive Cybersecurity Enhancement',
      'National Digital Infrastructure Protection',
    ],
    status: BillStatusEnum.INTRODUCED,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-01-15',
        description: 'Referred to the Committee on Foreign Affairs',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-02-01',
        description: 'Hearings held by the Committee on Foreign Affairs',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-03-10',
        description:
          'Reported (amended) by the Committee on Foreign Affairs. H. Rept. 118-15.',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-04-05',
        description:
          'Passed/agreed to in House: On passage Passed by the Yeas and Nays: 289 - 137 (Roll no. 172).',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-04-06',
        description:
          'Received in the Senate and Read twice and referred to the Committee on Foreign Relations.',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-05-20',
        description: 'Committee on Foreign Relations. Hearings held.',
        chamber: ChamberEnum.HOUSE,
      },
    ],
  }),
  new Bill({
    id: 'S2345',
    title:
      'Comprehensive Cybersecurity Enhancement and National Digital Infrastructure Protection Act',
    sponsor: sponsor2,
    cosponsors: [sponsor3, sponsor1],
    tags: ['Technology', 'Security'],
    status: BillStatusEnum.PASSED_SENATE,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-02-01',
        description:
          'Read twice and referred to the Committee on Homeland Security',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-03-15',
        description: 'Passed Senate with amendments (95-5)',
        chamber: ChamberEnum.SENATE,
      },
    ],
  }),
  new Bill({
    id: 'HR3456',
    title:
      'Education Reform Act for Improving K-12 Curriculum, Teacher Training, and Student Success Rates Nationwide',
    sponsor: sponsor3,
    cosponsors: [sponsor1, sponsor2],
    tags: ['Education', 'Social Policy'],
    status: BillStatusEnum.PASSED_HOUSE,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-02-10',
        description: 'Referred to the Committee on Education and the Workforce',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-04-05',
        description: 'Passed House (285-150)',
        chamber: ChamberEnum.HOUSE,
      },
    ],
  }),
  new Bill({
    id: 'S4567',
    title:
      'Healthcare Accessibility Act to Expand Medical Coverage, Reduce Costs, and Improve Patient Outcomes Across America',
    sponsor: sponsor1,
    cosponsors: [sponsor2, sponsor3],
    tags: ['Healthcare', 'Social Policy'],
    status: BillStatusEnum.TO_PRESIDENT,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-03-01',
        description: 'Introduced in Senate',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-04-20',
        description: 'Passed Senate',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-05-15',
        description: 'Passed House',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-05-20',
        description:
          'Referred to the Committee on Commerce, Science, and Transportation',
        chamber: ChamberEnum.SENATE,
      },
    ],
  }),
  new Bill({
    id: 'HR5678',
    title:
      'Small Business Support Act for Promoting Entrepreneurship, Job Creation, and Economic Growth in Local Communities',
    sponsor: sponsor2,
    cosponsors: [sponsor3, sponsor1],
    tags: ['Economy', 'Business'],
    status: BillStatusEnum.INTRODUCED,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-04-01',
        description: 'Introduced in House',
        chamber: ChamberEnum.HOUSE,
      },
    ],
  }),
  new Bill({
    id: 'S6789',
    title:
      'Veterans Care Improvement Act to Enhance Medical Services, Mental Health Support, and Benefits for Military Veterans',
    sponsor: sponsor3,
    cosponsors: [sponsor1, sponsor2],
    tags: ['Veterans', 'Healthcare'],
    status: BillStatusEnum.PASSED_SENATE,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-03-15',
        description: 'Introduced in Senate',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-05-01',
        description:
          'Referred to the Committee on Commerce, Science, and Transportation',
        chamber: ChamberEnum.SENATE,
      },
    ],
  }),
  new Bill({
    id: 'HR7890',
    title:
      'Infrastructure Modernization Act for Upgrading Roads, Bridges, Public Transit, and Digital Networks Across the Nation',
    sponsor: sponsor1,
    cosponsors: [sponsor2, sponsor3],
    tags: ['Infrastructure', 'Economy'],
    status: BillStatusEnum.BECOME_LAW,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-02-20',
        description: 'Introduced in House',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-04-10',
        description: 'Passed House',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-05-05',
        description: 'Passed Senate',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-05-15',
        description: 'To President',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-05-30',
        description: 'Became Law',
        chamber: ChamberEnum.SENATE,
      },
    ],
  }),
  new Bill({
    id: 'S8901',
    title:
      'Climate Change Mitigation Act to Reduce Greenhouse Gas Emissions and Promote Clean Energy Technologies Nationwide',
    sponsor: sponsor2,
    cosponsors: [sponsor3, sponsor1],
    tags: ['Environment', 'Energy'],
    status: BillStatusEnum.INTRODUCED,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-05-01',
        description:
          'Referred to the Committee on Commerce, Science, and Transportation',
        chamber: ChamberEnum.SENATE,
      },
    ],
  }),
  new Bill({
    id: 'HR9012',
    title:
      'Affordable Housing Act to Increase Availability of Low-Cost Homes and Improve Rental Assistance Programs',
    sponsor: sponsor3,
    cosponsors: [sponsor1, sponsor2],
    tags: ['Housing', 'Social Policy'],
    status: BillStatusEnum.PASSED_HOUSE,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-04-15',
        description: 'Introduced in House',
        chamber: ChamberEnum.HOUSE,
      },
      {
        date: '2023-05-20',
        description:
          'Referred to the Committee on Commerce, Science, and Transportation',
        chamber: ChamberEnum.HOUSE,
      },
    ],
  }),
  new Bill({
    id: 'S0123',
    title:
      'Data Privacy Protection Act to Safeguard Personal Information, Regulate Data Collection, and Enforce Consumer Rights Online',
    sponsor: sponsor1,
    cosponsors: [sponsor2, sponsor3],
    tags: ['Technology', 'Privacy'],
    status: BillStatusEnum.PASSED_SENATE,
    congressNumber: CURRENT_CONGRESS_NUMBER,
    actions: [
      {
        date: '2023-03-30',
        description:
          'Referred to the Committee on Commerce, Science, and Transportation',
        chamber: ChamberEnum.SENATE,
      },
      {
        date: '2023-05-25',
        description: 'Passed Senate with unanimous consent',
        chamber: ChamberEnum.SENATE,
      },
    ],
  }),
]

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

export const getBillTopSponsors = (lang: Language): People[] => {
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
  return data.map((item) => People.fromDTO(lang, item.people!))
}

export const getBillTopCosponsors = (lang: Language): People[] => {
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
  return data.map((item) => People.fromDTO(lang, item.people!))
}

export const getLatestBills = (lang: Language): Bill[] => {
  const data = [
    {
      id: '67548182437319f5138bf983',
      i18n: {
        en: {
          title:
            "A resolution commending Taiwan for its history of democratic elections, and expressing support of Taiwan's democratic institutions.",
        },
        zh: {
          title: '決議案表揚台灣的民主選舉歷史及支持台灣的民主制度',
        },
      },
      congress: 118,
      type: 'sres',
      categories: [
        {
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
      statusTracker: {
        currentStep: 'agreedToInSenate',
        passedSteps: ['introduced', 'passedSenate'],
        futureSteps: [],
      },
      sponsor: {
        party: 'republican',
        people: {
          i18n: {
            en: {
              displayName: 'Dan Sullivan',
            },
            zh: {
              displayName: '蘇利文',
            },
          },
          currentParty: 'republican',
        },
      },
      tags: [],
    },
    {
      id: '67547c63437319f5138bf852',
      i18n: {
        en: {
          title:
            'Commending Taiwan for its history of democratic elections, and expressing support of Taiwan in the preservation of its democratic institutions.',
        },
        zh: {
          title: '表揚台灣的民主選舉歷史及支持台灣維護其民主制度',
        },
      },
      congress: 118,
      type: 'hres',
      categories: [
        {
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
      statusTracker: {
        currentStep: 'introduced',
        passedSteps: ['introduced'],
        futureSteps: ['passedHouse'],
      },
      sponsor: {
        party: 'democratic',
        people: {
          i18n: {
            en: {
              displayName: 'Gerald E. Connolly',
            },
            zh: {
              displayName: null,
            },
          },
          currentParty: 'democratic',
        },
      },
      tags: [],
    },
    {
      id: '6753eb531e937e031b1b3508',
      i18n: {
        en: {
          title: 'Taiwan Relations Reinforcement Act of 2023',
        },
        zh: {
          title: '台灣關係強化法案',
        },
      },
      congress: 118,
      type: 's',
      categories: [],
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
        party: 'republican',
        people: {
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
      tags: [],
    },
    {
      id: '6753e7131e937e031b1b33cc',
      i18n: {
        en: {
          title: 'United States-Taiwan Expedited Double-Tax Relief Act',
        },
        zh: {
          title: '美台快速雙重稅收減免法案',
        },
      },
      congress: 118,
      type: 'hr',
      categories: [],
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
        party: 'republican',
        people: {
          i18n: {
            en: {
              displayName: 'Jason Smith',
            },
            zh: {
              displayName: '史密斯',
            },
          },
          currentParty: 'republican',
        },
      },
      tags: [],
    },
    {
      id: '67545dbb437319f5138be4fd',
      i18n: {
        en: {
          title: 'Taiwan Tax Agreement Act of 2023',
        },
        zh: {
          title: '台灣租稅協定法案',
        },
      },
      congress: 118,
      type: 's',
      categories: [],
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
        party: 'democratic',
        people: {
          i18n: {
            en: {
              displayName: 'Robert Menendez',
            },
            zh: {
              displayName: '梅南德茲',
            },
          },
          currentParty: 'independent',
        },
      },
      tags: [],
    },
    {
      id: '6753d02c1e937e031b1b2f54',
      i18n: {
        en: {
          title: 'Taiwan International Solidarity Act',
        },
        zh: {
          title: '台灣國際團結法案',
        },
      },
      congress: 118,
      type: 'hr',
      categories: [
        {
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
      statusTracker: {
        currentStep: 'passedHouse',
        passedSteps: ['introduced', 'passedHouse'],
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
      },
      sponsor: {
        party: 'democratic',
        people: {
          i18n: {
            en: {
              displayName: 'Gerald E. Connolly',
            },
            zh: {
              displayName: null,
            },
          },
          currentParty: 'democratic',
        },
      },
      tags: [],
    },
    {
      id: '67547209437319f5138beca4',
      i18n: {
        en: {
          title: 'Taiwan Invasion Prevention Act',
        },
        zh: {
          title: '防止台灣遭侵略法案',
        },
      },
      congress: 118,
      type: 's',
      categories: [
        {
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
        party: 'republican',
        people: {
          i18n: {
            en: {
              displayName: 'Rick Scott',
            },
            zh: {
              displayName: '史考特',
            },
          },
          currentParty: 'republican',
        },
      },
      tags: [],
    },
    {
      id: '6753dbc51e937e031b1b320a',
      i18n: {
        en: {
          title:
            'Making emergency supplemental appropriations for the fiscal year ending September 30, 2024, and for other purposes.',
        },
        zh: {
          title: '2024年國安緊急補充撥款法案',
        },
      },
      congress: 118,
      type: 'hr',
      categories: [
        {
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
        party: 'republican',
        people: {
          i18n: {
            en: {
              displayName: 'Cathy McMorris Rodgers',
            },
            zh: {
              displayName: '羅傑斯',
            },
          },
          currentParty: 'republican',
        },
      },
      tags: [],
    },
    {
      id: '6752b1ca2ddcf95deb37622c',
      i18n: {
        en: {
          title: 'Taiwan Conflict Deterrence Act of 2023',
        },
        zh: {
          title: '台灣衝突嚇阻法案',
        },
      },
      congress: 118,
      type: 'hr',
      categories: [
        {
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
      statusTracker: {
        currentStep: 'passedHouse',
        passedSteps: ['introduced', 'passedHouse'],
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
      },
      sponsor: {
        party: 'republican',
        people: {
          i18n: {
            en: {
              displayName: 'French Hill',
            },
            zh: {
              displayName: '希爾',
            },
          },
          currentParty: 'republican',
        },
      },
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
    },
    {
      id: '6754822c437319f5138bfa48',
      i18n: {
        en: {
          title: 'Taiwan Non-Discrimination Act of 2023',
        },
        zh: {
          title: '不歧視台灣法案',
        },
      },
      congress: 118,
      type: 'hr',
      categories: [
        {
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
      statusTracker: {
        currentStep: 'passedHouse',
        passedSteps: ['introduced', 'passedHouse'],
        futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
      },
      sponsor: {
        party: 'republican',
        people: {
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
      tags: [],
    },
  ] as BillDto[]
  return data.map((item) => Bill.fromDTO(lang, item))
}

export const getPopularBills = (lang: Language): Bill[] => {
  // 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
  return getLatestBills(lang)
}
