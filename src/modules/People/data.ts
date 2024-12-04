import { PeopleUtils } from '@/modules/People/domains/People.utils'

const people = PeopleUtils.parse({
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

export default people
