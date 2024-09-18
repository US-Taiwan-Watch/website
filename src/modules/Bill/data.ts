import { Congress } from '@/common/classes/Congress'
import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { People } from '@/modules/People/classes/People'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import { Bill } from '@/modules/Bill/classes/Bill'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'

export const BILL_TOTAL_COUNT_MOCK = 20
export const CONGRESS_CURRENT_SESSION_MOCK = 118

const sponsor1 = new People({
  id: '1',
  name: 'Jeff Merkley',
  image: '/assets/category1.jpg',
  description:
    "Nunn is the representative for Iowa's 3rd congressional district(view map) and is a Nunn is the representative for Iowa's 3rd congressional district (view map) and is a Nunn is the representative for Iowa's 3rd congressional district(view map)",
  party: Party.DEMOCRATIC,
  position: PeoplePosition.SENATOR,
  congress: new Congress({
    congressNumber: CONGRESS_CURRENT_SESSION_MOCK,
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
})

const sponsor2 = new People({
  id: '2',
  name: 'Ami Bera',
  image: '/assets/category1.jpg',
  description:
    "Nunn is the representative for Iowa's 3rd congressional district(view map) and is a Nunn is the representative for Iowa's 3rd congressional district (view map) and is a Nunn is the representative for Iowa's 3rd congressional district(view map)",
  party: Party.REPUBLICAN,
  position: PeoplePosition.SENATOR,
  congress: new Congress({
    congressNumber: CONGRESS_CURRENT_SESSION_MOCK,
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
})

const sponsor3 = new People({
  id: '2',
  name: 'Jon Ossoff',
  image: '/assets/category1.jpg',
  description:
    "Nunn is the representative for Iowa's 3rd congressional district(view map) and is a Nunn is the representative for Iowa's 3rd congressional district (view map) and is a Nunn is the representative for Iowa's 3rd congressional district(view map)",
  party: Party.OTHER,
  position: PeoplePosition.SENATOR,
  congress: new Congress({
    congressNumber: CONGRESS_CURRENT_SESSION_MOCK,
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
})

export const BILL_SPONSOR_MOCK: People[] = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor1,
  sponsor2,
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
    party: Party.OTHER,
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
    party: Party.OTHER,
    count: 4,
  },
]

export const BILL_DATA_MOCK: Bill[] = [
  new Bill({
    id: 'HR1234',
    title:
      'Deterring Communist Chinese Aggression Against Taiwan Through Financial Sanctions Act of 2023 and Promoting Regional Stability',
    sponsor: sponsor1,
    tags: ['Environment', 'Energy'],
    status: BillStatusEnum.INTRODUCED,
    actions: [
      {
        date: '2023-01-15',
        description: 'Referred to the Committee on Foreign Affairs',
        chamber: ChamberEnum.HOUSE,
      },
    ],
  }),
  new Bill({
    id: 'S2345',
    title:
      'Comprehensive Cybersecurity Enhancement and National Digital Infrastructure Protection Act',
    sponsor: sponsor2,
    tags: ['Technology', 'Security'],
    status: BillStatusEnum.PASSED_SENATE,
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
    tags: ['Education', 'Social Policy'],
    status: BillStatusEnum.PASSED_HOUSE,
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
    tags: ['Healthcare', 'Social Policy'],
    status: BillStatusEnum.TO_PRESIDENT,
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
    tags: ['Economy', 'Business'],
    status: BillStatusEnum.INTRODUCED,
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
    tags: ['Veterans', 'Healthcare'],
    status: BillStatusEnum.PASSED_SENATE,
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
    tags: ['Infrastructure', 'Economy'],
    status: BillStatusEnum.BECOME_LAW,
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
    tags: ['Environment', 'Energy'],
    status: BillStatusEnum.INTRODUCED,
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
    tags: ['Housing', 'Social Policy'],
    status: BillStatusEnum.PASSED_HOUSE,
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
    tags: ['Technology', 'Privacy'],
    status: BillStatusEnum.PASSED_SENATE,
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
