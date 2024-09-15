import { Congress } from '@/common/classes/Congress'
import { Party } from '@/common/enums/Party'
import { People } from '@/modules/People/classes/People'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'

const people = new People({
  id: '1',
  name: 'Ami Bera',
  image: '/assets/category1.jpg',
  description:
    'Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a ...',
  tags: ['tag', 'tag2', 'tag3', 'tag4'],
  party: Party.DEMOCRATIC,
  position: PeoplePosition.SENATOR,
  congress: new Congress({
    congressNumber: 118,
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
  // Descending
  partyExperience: [
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
    {
      party: Party.DEMOCRATIC,
      start: '2023-01-01',
    },
    {
      party: Party.REPUBLICAN,
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      party: Party.INDEPENDENT,
      start: '2019-01-01',
      end: '2021-01-01',
    },
  ],
  experience: [
    {
      title: '2016 Presidential Candidate',
      subtitle: 'Marco Rubio for President',
      start: '2019-01-01',
    },
    {
      title: 'United States Senator (R-FL)',
      subtitle: 'United States Senate',
      start: '2021-01-01',
      descriptions: ['Washington D.C. Metro Area'],
    },
    {
      title: 'United States Senator (R-FL)',
      start: '2021-01-01',
      end: '2023-01-01',
      experience: [
        {
          title: 'United States Senator (R-FL)',
          start: '2022-12-01',
        },
        {
          title: 'Representative for 111th House District',
          start: '2022-06-01',
          end: '2022-12-01',
        },
        {
          title: 'House Majority Leader',
          start: '2021-01-01',
          end: '2022-06-01',
        },
      ],
    },
    {
      title: 'City Commissioner',
      subtitle: 'West Miami',
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      title: '2016 Presidential Candidate',
      subtitle: 'Marco Rubio for President',
      start: '2019-01-01',
    },
    {
      title: 'United States Senator (R-FL)',
      subtitle: 'United States Senate',
      start: '2021-01-01',
      descriptions: ['Washington D.C. Metro Area'],
    },
    {
      title: 'United States Senator (R-FL)',
      start: '2021-01-01',
      end: '2023-01-01',
      experience: [
        {
          title: 'United States Senator (R-FL)',
          start: '2022-12-01',
        },
        {
          title: 'Representative for 111th House District',
          start: '2022-06-01',
          end: '2022-12-01',
        },
        {
          title: 'House Majority Leader',
          start: '2021-01-01',
          end: '2022-06-01',
        },
      ],
    },
    {
      title: 'City Commissioner',
      subtitle: 'West Miami',
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      title: '2016 Presidential Candidate',
      subtitle: 'Marco Rubio for President',
      start: '2019-01-01',
    },
    {
      title: 'United States Senator (R-FL)',
      subtitle: 'United States Senate',
      start: '2021-01-01',
      descriptions: ['Washington D.C. Metro Area'],
    },
    {
      title: 'United States Senator (R-FL)',
      start: '2021-01-01',
      end: '2023-01-01',
      experience: [
        {
          title: 'United States Senator (R-FL)',
          start: '2022-12-01',
        },
        {
          title: 'Representative for 111th House District',
          start: '2022-06-01',
          end: '2022-12-01',
        },
        {
          title: 'House Majority Leader',
          start: '2021-01-01',
          end: '2022-06-01',
        },
      ],
    },
    {
      title: 'City Commissioner',
      subtitle: 'West Miami',
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      title: '2016 Presidential Candidate',
      subtitle: 'Marco Rubio for President',
      start: '2019-01-01',
    },
    {
      title: 'United States Senator (R-FL)',
      subtitle: 'United States Senate',
      start: '2021-01-01',
      descriptions: ['Washington D.C. Metro Area'],
    },
    {
      title: 'United States Senator (R-FL)',
      start: '2021-01-01',
      end: '2023-01-01',
      experience: [
        {
          title: 'United States Senator (R-FL)',
          start: '2022-12-01',
        },
        {
          title: 'Representative for 111th House District',
          start: '2022-06-01',
          end: '2022-12-01',
        },
        {
          title: 'House Majority Leader',
          start: '2021-01-01',
          end: '2022-06-01',
        },
      ],
    },
    {
      title: 'City Commissioner',
      subtitle: 'West Miami',
      start: '2021-01-01',
      end: '2023-01-01',
    },
    {
      title: '2016 Presidential Candidate',
      subtitle: 'Marco Rubio for President',
      start: '2019-01-01',
    },
    {
      title: 'United States Senator (R-FL)',
      subtitle: 'United States Senate',
      start: '2021-01-01',
      descriptions: ['Washington D.C. Metro Area'],
    },
    {
      title: 'United States Senator (R-FL)',
      start: '2021-01-01',
      end: '2023-01-01',
      experience: [
        {
          title: 'United States Senator (R-FL)',
          start: '2022-12-01',
        },
        {
          title: 'Representative for 111th House District',
          start: '2022-06-01',
          end: '2022-12-01',
        },
        {
          title: 'House Majority Leader',
          start: '2021-01-01',
          end: '2022-06-01',
        },
      ],
    },
    {
      title: 'City Commissioner',
      subtitle: 'West Miami',
      start: '2021-01-01',
      end: '2023-01-01',
    },
  ],
})

export default people
