import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { PeopleUtils, type People } from '@/modules/People/domains/People.utils'
import { Bill } from '@/modules/Bill/classes/Bill'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
import { BillCategoryEnum } from '@/modules/Bill/components/BillFilter/enums'
import { BillTrendData } from '@/modules/Bill/components/BillLanding/TrendCard'
import {
  CONGRESS_NUMBER_MIN,
  CURRENT_CONGRESS_NUMBER,
} from '@/common/assets/constants'

export const BILL_TOTAL_COUNT_MOCK = 20

const sponsor1 = PeopleUtils.parse({
  __typename: 'People',
  billCount: 0,
  bio: '[Wikipedia] Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
  birthday: {
    datetime: '1946-06-14T00:00:00.000Z',
    // @ts-expect-error demo api response
    precision: ['year', 'month', 'day'],
  },
  congressionalData: {
    bioGuideId: null,
    committees: [],
  },
  cosponsorBills: [],
  createdAt: '2024-12-03T17:20:04.922Z',
  currentParty: 'independent',
  displayName: 'Donald Trump',
  experiences: [
    {
      category: 'Official',
      company: 'United States',
      positions: [
        {
          title: 'President',
          start: {
            datetime: '2017-01-20T00:00:00.000Z',
          },
          end: {
            datetime: '2021-01-20T00:00:00.000Z',
          },
        },
      ],
    },
    {
      category: 'Other',
      company: 'Trump Organization',
      positions: [
        {
          title: 'President',
          start: {
            datetime: '1973-01-01T00:00:00.000Z',
          },
          end: {
            datetime: '2017-01-20T00:00:00.000Z',
          },
        },
      ],
    },
  ],
  // @ts-expect-error demo api response
  gender: 'male',
  govTrackId: null,
  i18n: {
    en: {
      displayName: 'Donald Trump',
      bio: '[Wikipedia] Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
    },
    zh: {
      displayName: '川普',
      bio: '[Wikipedia] 唐納·約翰·川普（1946年6月14日—），美國政治人物，目前為2024年美國總統選舉候選人，曾任職第45任美國總統。從政前為企業家、媒體名人。',
    },
  },
  id: '674f3dc4c2061b5227b8f1b0',
  links: [
    {
      id: '674f3dc49ed90400318f042d',
      link: 'https://www.donaldtrump.com',
      title: 'Official Website',
    },
    {
      id: '674f3dc49ed90400318f042e',
      link: 'https://truthsocial.com/@realDonaldTrump',
      title: 'Truth Social',
    },
    {
      id: '674f3dc49ed90400318f042f',
      link: 'https://x.com/TrumpWarRoom',
      title: '@TrumpWarRoom',
    },
  ],
  partyChangeRecords: [],
  photo: null,
  publications: [
    {
      id: '674f3dc49ed90400318f042a',
      title: 'Save America',
      link: null,
    },
    {
      id: '674f3dc49ed90400318f042b',
      title:
        'Trumped: Donald Trump Wisdom for Business and Life. Self help book. MAGA 2024',
      link: null,
    },
    {
      id: '674f3dc49ed90400318f042c',
      title: 'Time to Get Tough: Make America Great Again',
      link: null,
    },
  ],
  records: [],
  sponsorBills: [],
  tags: [],
  updatedAt: '2024-12-04T14:07:04.401Z',
  viewCount: 0,
})

export const BILL_SPONSOR_MOCK: People[] = Array.from(
  { length: 5 },
  () => sponsor1
)

export const PARLIAMENT_CHART_DATA_MOCK_1: ParliamentChartData[] = [
  {
    party: Party.DEMOCRAT,
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
    party: Party.DEMOCRAT,
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
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    sponsor: sponsor1,
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    sponsor: sponsor1,
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    sponsor: sponsor1,
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    sponsor: sponsor1,
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    sponsor: sponsor1,
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    sponsor: sponsor1,
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
    cosponsors: Array.from({ length: 3 }, () => sponsor1),
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
