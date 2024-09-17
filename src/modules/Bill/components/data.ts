import { Congress } from '@/common/classes/Congress'
import { UTimelineData } from '@/common/components/atoms/UTimeline'
import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { People } from '@/modules/People/classes/People'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'

export const BILL_TOTAL_COUNT_MOCK = 20
export const CONGRESS_CURRENT_SESSION_MOCK = 118

const sponsor1 = new People({
  id: '1',
  name: 'Jeff Merkley',
  image: '/assets/category1.jpg',
  description:
    'Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a ...',
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
    'Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a ...',
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
    'Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a ...',
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

export const BILL_TIMELINE_DATA_MOCK: UTimelineData = [
  {
    title: 'title1',
    subtitle: 'subtitle1',
  },
  {
    title: 'title2',
  },
  {
    title: 'title3',
    subtitle: 'subtitle3',
  },
  {
    title: 'title4',
  },
  {
    title: 'title5',
    subtitle: 'subtitle5',
  },
]
