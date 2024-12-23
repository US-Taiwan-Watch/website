import { Bill } from '@/common/lib/graphql/__generated__/graphql'

export const BILL_DTO_MOCK = [
  {
    id: '6754822c437319f5138bfa48',
    i18n: {
      en: {
        title: 'Taiwan Non-Discrimination Act of 2023',
        summary:
          "[congress.gov] This bill requires actions to support Taiwan's participation in the International Monetary Fund (IMF).\n\nThe U.S. Governor of the IMF must advocate for (1) Taiwan's admission into the IMF as a member, to the extent Taiwan seeks to be a member; (2) Taiwan's participation in the IMF's regular surveillance activities relating to Taiwan's economic and financial policies; (3) employment opportunities at the IMF for Taiwan nationals; and (4) Taiwan's ability to receive IMF technical assistance and training.",
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
      },
      zh: {
        title: '不歧視台灣法案',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 118,
    number: '540',
    type: 'hr',
    introducedAt: {
      datetime: '2023-01-26T00:00:00.000Z',
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
      currentStep: 'passedHouse',
      passedSteps: ['introduced', 'passedHouse'],
      futureSteps: ['passedSenate', 'toPresident', 'becomeLaw'],
    },
    sponsor: {
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
      party: 'republican',
    },
    cosponsors: [
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
          datetime: '2023-02-14T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        id: '676584836775439df5fa7f5d',
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
          datetime: '2023-03-17T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        id: '676584c46775439df5fa7f5e',
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
          datetime: '2023-06-05T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        id: '676584fc6775439df5fa7f5f',
      },
    ],
    congressGovUrl:
      'https://www.congress.gov/bill/118th-congress/house-bill/540',
    popularityRank: null,
    relatedBills: [
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
      {
        id: '675476fc437319f5138bedef',
        i18n: {
          en: {
            title:
              "Relating to Taiwan's participation in the World Health Organization.",
            summary:
              "[congress.gov] Expresses the sense of the Congress that: (1) Taiwan should be represented in the World Health Organization; and (2) it should be U.S. policy to support Taiwan's representation in the Organization.",
            actionsOverview: [
              {
                actionAt: {
                  datetime: '1998-07-22T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in House',
              },
            ],
            actionsAll: [
              {
                actionAt: {
                  datetime: '1998-07-22T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: null,
                description:
                  'Referred to the House Committee on International Relations. (Action By: House of Representatives)',
              },
              {
                actionAt: {
                  datetime: '1998-07-22T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: null,
                description:
                  'Introduced in House (Action By: House of Representatives)',
              },
            ],
          },
          zh: {
            title: '關於台灣參與世界衛生組織',
            summary: null,
            actionsOverview: null,
            actionsAll: null,
          },
        },
        congress: 105,
        number: '126',
        type: 'hjres',
        introducedAt: {
          datetime: '1998-07-22T00:00:00.000Z',
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
        ],
        tags: [],
        statusTracker: {
          currentStep: 'introduced',
          passedSteps: ['introduced'],
          futureSteps: [],
        },
        sponsor: {
          people: {
            id: '6754766f437319f5138bed1d',
            i18n: {
              en: {
                firstName: 'Sherrod',
                lastName: 'Brown',
                middleName: null,
                displayName: 'Sherrod Brown',
                bio: "[Wikipedia] Sherrod Campbell Brown (born November 9, 1952) is an American politician serving since 2007 as the senior United States senator from Ohio. A member of the Democratic Party, he was the U.S. representative for Ohio's 13th congressional district from 1993 to 2007 and the 47th secretary of state of Ohio from 1983 to 1991. He started his political career in 1975 as a state representative.",
                otherNames: [],
              },
              zh: {
                firstName: null,
                lastName: '布朗',
                middleName: null,
                displayName: '布朗',
                bio: '[Wikipedia] 謝羅德·坎貝爾·布朗（英語：Sherrod Campbell Brown；1952年11月9日—），是一位美國民主黨政治人物，自2007年成為俄亥俄州聯邦參議院議員。此前他曾是美國眾議院1993年至2007年期間俄亥俄州第十三國會選區代表議員、第47任俄亥俄州州務卿（1983年－1991年任職）及俄亥俄州眾議院1975年至1982年期間第六十一選區議員代表議員。',
                otherNames: [],
              },
            },
            photo: {
              id: '67595d427e1c21b02dd70ade',
              alt: 'Sherrod_Brown.jpg',
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Sherrod_Brown.jpg',
              filename: 'Sherrod_Brown.jpg',
              mimeType: 'image/jpeg',
              width: 5110,
              height: 6387,
            },
            birthday: {
              datetime: '1952-11-09T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            gender: 'male',
            tags: [],
            congressionalData: {
              bioGuideId: 'B000944',
              govTrackId: 400050,
              committees: [
                {
                  systemCode: 'ssaf',
                  name: 'Senate Committee on Agriculture, Nutrition, and Forestry',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'ssaf16',
                      name: 'Food and Nutrition, Specialty Crops, Organics, and Research',
                      title: null,
                      id: '6754766fd1d49300312fe0da',
                    },
                    {
                      systemCode: 'ssaf17',
                      name: 'Livestock, Dairy, Poultry, Local Food Systems, and Food Safety and Security',
                      title: null,
                      id: '6754766fd1d49300312fe0db',
                    },
                  ],
                  id: '6754766fd1d49300312fe0d4',
                },
                {
                  systemCode: 'ssbk',
                  name: 'Senate Committee on Banking, Housing, and Urban Affairs',
                  title: 'chair',
                  subcommittees: [
                    {
                      systemCode: 'ssbk04',
                      name: 'Securities, Insurance, and Investment',
                      title: 'exOfficio',
                      id: '6754766fd1d49300312fe0dc',
                    },
                    {
                      systemCode: 'ssbk05',
                      name: 'National Security and International Trade and Finance',
                      title: 'exOfficio',
                      id: '6754766fd1d49300312fe0dd',
                    },
                    {
                      systemCode: 'ssbk08',
                      name: 'Financial Institutions and Consumer Protection',
                      title: 'exOfficio',
                      id: '6754766fd1d49300312fe0de',
                    },
                    {
                      systemCode: 'ssbk09',
                      name: 'Housing, Transportation, and Community Development',
                      title: 'exOfficio',
                      id: '6754766fd1d49300312fe0df',
                    },
                    {
                      systemCode: 'ssbk12',
                      name: 'Economic Policy',
                      title: 'exOfficio',
                      id: '6754766fd1d49300312fe0e0',
                    },
                  ],
                  id: '6754766fd1d49300312fe0d5',
                },
                {
                  systemCode: 'ssfi',
                  name: 'Senate Committee on Finance',
                  title: null,
                  subcommittees: [
                    {
                      systemCode: 'ssfi02',
                      name: 'Social Security, Pensions, and Family Policy',
                      title: 'chair',
                      id: '6754766fd1d49300312fe0e1',
                    },
                    {
                      systemCode: 'ssfi13',
                      name: 'International Trade, Customs, and Global Competitiveness',
                      title: null,
                      id: '6754766fd1d49300312fe0e2',
                    },
                  ],
                  id: '6754766fd1d49300312fe0d6',
                },
                {
                  systemCode: 'ssva',
                  name: "Senate Committee on Veterans' Affairs",
                  title: null,
                  subcommittees: [],
                  id: '6754766fd1d49300312fe0d7',
                },
              ],
            },
            experiences: [
              {
                company: 'United States House of Representatives',
                category: 'House Representative',
                isCurrent: false,
                positions: [
                  {
                    title: 'Representative for district 13, Ohio',
                    description: null,
                    start: {
                      datetime: '1993-01-05T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: '2007-01-03T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    state: 'ohio',
                    district: 13,
                    party: 'democratic',
                    congresses: [103, 104, 105, 106, 107, 108, 109],
                    officialAreas: [],
                    companyType: null,
                    id: '6754766fd1d49300312fe0d8',
                  },
                ],
                id: '6754766fd1d49300312fe0cf',
              },
              {
                company: 'United States Senate',
                category: 'Senator',
                isCurrent: true,
                positions: [
                  {
                    title: 'Senator for Ohio',
                    description: null,
                    start: {
                      datetime: '2007-01-04T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    end: {
                      datetime: null,
                      precision: [],
                    },
                    state: 'ohio',
                    district: null,
                    party: 'democratic',
                    congresses: [110, 111, 112, 113, 114, 115, 116, 117, 118],
                    officialAreas: [],
                    companyType: null,
                    id: '6754766fd1d49300312fe0d9',
                  },
                ],
                id: '6754766fd1d49300312fe0d0',
              },
            ],
            publications: [],
            links: [
              {
                type: 'twitter',
                title: '@SenSherrodBrown',
                link: 'https://x.com/SenSherrodBrown',
                id: '6754766fd1d49300312fe0d1',
              },
              {
                type: 'facebook',
                title: '@SenatorSherrodBrown',
                link: 'https://facebook.com/SenatorSherrodBrown',
                id: '6754766fd1d49300312fe0d2',
              },
              {
                type: 'youtube',
                title: '@SherrodBrownOhio',
                link: 'https://youtube.com/channel/UCgy8jfERh-t_ixkKKoCmglQ',
                id: '6754766fd1d49300312fe0d3',
              },
            ],
            partyChangeRecords: [],
            viewCount: 0,
            billCount: 1,
            currentParty: 'democratic',
            records: [],
            sponsorBills: [
              {
                id: '675476fc437319f5138bedef',
                title:
                  "Relating to Taiwan's participation in the World Health Organization.",
                congress: 105,
                number: '126',
                type: 'hjres',
                isFeatured: false,
              },
            ],
            cosponsorBills: [],
            votes: [],
            displayName: 'Sherrod Brown',
            bio: "[Wikipedia] Sherrod Campbell Brown (born November 9, 1952) is an American politician serving since 2007 as the senior United States senator from Ohio. A member of the Democratic Party, he was the U.S. representative for Ohio's 13th congressional district from 1993 to 2007 and the 47th secretary of state of Ohio from 1983 to 1991. He started his political career in 1975 as a state representative.",
            govTrackId: '400050',
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
    ],
    title: 'Taiwan Non-Discrimination Act of 2023',
    summary:
      "[congress.gov] This bill requires actions to support Taiwan's participation in the International Monetary Fund (IMF).\n\nThe U.S. Governor of the IMF must advocate for (1) Taiwan's admission into the IMF as a member, to the extent Taiwan seeks to be a member; (2) Taiwan's participation in the IMF's regular surveillance activities relating to Taiwan's economic and financial policies; (3) employment opportunities at the IMF for Taiwan nationals; and (4) Taiwan's ability to receive IMF technical assistance and training.",
    latestActionTime: '2024-01-16T00:00:00.000Z',
    updatedAt: '2024-12-20T14:54:55.257Z',
    createdAt: '2024-12-07T17:13:16.607Z',
  },
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
                description: 'Referred to House Committee on Foreign Affairs.',
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
    updatedAt: '2024-12-20T12:18:37.232Z',
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
            description: 'Referred to the House Committee on Foreign Affairs.',
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
                description: 'Referred to House Committee on Foreign Affairs.',
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
    updatedAt: '2024-12-20T12:19:36.781Z',
    createdAt: '2024-12-07T16:48:35.771Z',
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
    cosponsors: [],
    congressGovUrl:
      'https://www.congress.gov/bill/118th-congress/house-concurrent-resolution/10',
    popularityRank: null,
    relatedBills: [],
    title:
      "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
    summary:
      '[congress.gov] This concurrent resolution calls on the President to abandon the One China policy in favor of one that recognizes Taiwan as an independent country that is not a part of China. The resolution also urges the President to bolster diplomatic and economic relations between the United States and Taiwan through specified means.',
    latestActionTime: '2023-01-25T00:00:00.000Z',
    updatedAt: '2024-12-07T16:41:07.540Z',
    createdAt: '2024-12-07T16:41:07.540Z',
  },
  {
    id: '675477ed437319f5138bef66',
    i18n: {
      en: {
        title:
          'A joint resolution relating to the approval of the proposed Agreement for Cooperation Between the American Institute in Taiwan and the Taipei Economic and Cultural Representatives Office in the United States Concerning Peaceful Uses of Nuclear Energy.',
        summary:
          '[congress.gov] Favors the proposed agreement for peaceful nuclear energy cooperation between the American Institute in Taiwan and the Taipei Economic and Cultural Representative Office in the United States transmitted to Congress by the President on January 7, 2014.',
        actionsOverview: [
          {
            actionAt: {
              datetime: '2014-02-10T00T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description: 'Introduced in Senate',
          },
        ],
        actionsAll: [
          {
            actionAt: {
              datetime: '2014-02-10T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Read twice and referred to the Committee on Foreign Relations. (Action By: Senate)',
          },
        ],
      },
      zh: {
        title: '關於AIT及TECRO在安全使用核能的議題上合作的聯合決議案',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 113,
    number: '31',
    type: 'sjres',
    introducedAt: {
      datetime: '2014-02-10T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    isFeatured: false,
    categories: [
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
    ],
    tags: [],
    statusTracker: {
      currentStep: 'introduced',
      passedSteps: ['introduced'],
      futureSteps: [],
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
                congresses: [109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
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
      'https://www.congress.gov/bill/113th-congress/senate-joint-resolution/31',
    popularityRank: null,
    relatedBills: [],
    title:
      'A joint resolution relating to the approval of the proposed Agreement for Cooperation Between the American Institute in Taiwan and the Taipei Economic and Cultural Representatives Office in the United States Concerning Peaceful Uses of Nuclear Energy.',
    summary:
      '[congress.gov] Favors the proposed agreement for peaceful nuclear energy cooperation between the American Institute in Taiwan and the Taipei Economic and Cultural Representative Office in the United States transmitted to Congress by the President on January 7, 2014.',
    latestActionTime: '2014-02-10T00:00:00.000Z',
    updatedAt: '2024-12-07T16:29:33.712Z',
    createdAt: '2024-12-07T16:29:33.712Z',
  },
  {
    id: '675476fc437319f5138bedef',
    i18n: {
      en: {
        title:
          "Relating to Taiwan's participation in the World Health Organization.",
        summary:
          "[congress.gov] Expresses the sense of the Congress that: (1) Taiwan should be represented in the World Health Organization; and (2) it should be U.S. policy to support Taiwan's representation in the Organization.",
        actionsOverview: [
          {
            actionAt: {
              datetime: '1998-07-22T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description: 'Introduced in House',
          },
        ],
        actionsAll: [
          {
            actionAt: {
              datetime: '1998-07-22T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Referred to the House Committee on International Relations. (Action By: House of Representatives)',
          },
          {
            actionAt: {
              datetime: '1998-07-22T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Introduced in House (Action By: House of Representatives)',
          },
        ],
      },
      zh: {
        title: '關於台灣參與世界衛生組織',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 105,
    number: '126',
    type: 'hjres',
    introducedAt: {
      datetime: '1998-07-22T00:00:00.000Z',
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
    ],
    tags: [],
    statusTracker: {
      currentStep: 'introduced',
      passedSteps: ['introduced'],
      futureSteps: [],
    },
    sponsor: {
      people: {
        id: '6754766f437319f5138bed1d',
        i18n: {
          en: {
            firstName: 'Sherrod',
            lastName: 'Brown',
            middleName: null,
            displayName: 'Sherrod Brown',
            bio: "[Wikipedia] Sherrod Campbell Brown (born November 9, 1952) is an American politician serving since 2007 as the senior United States senator from Ohio. A member of the Democratic Party, he was the U.S. representative for Ohio's 13th congressional district from 1993 to 2007 and the 47th secretary of state of Ohio from 1983 to 1991. He started his political career in 1975 as a state representative.",
            otherNames: [],
          },
          zh: {
            firstName: null,
            lastName: '布朗',
            middleName: null,
            displayName: '布朗',
            bio: '[Wikipedia] 謝羅德·坎貝爾·布朗（英語：Sherrod Campbell Brown；1952年11月9日—），是一位美國民主黨政治人物，自2007年成為俄亥俄州聯邦參議院議員。此前他曾是美國眾議院1993年至2007年期間俄亥俄州第十三國會選區代表議員、第47任俄亥俄州州務卿（1983年－1991年任職）及俄亥俄州眾議院1975年至1982年期間第六十一選區議員代表議員。',
            otherNames: [],
          },
        },
        photo: {
          id: '67595d427e1c21b02dd70ade',
          alt: 'Sherrod_Brown.jpg',
          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Sherrod_Brown.jpg',
          filename: 'Sherrod_Brown.jpg',
          mimeType: 'image/jpeg',
          width: 5110,
          height: 6387,
        },
        birthday: {
          datetime: '1952-11-09T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        gender: 'male',
        tags: [],
        congressionalData: {
          bioGuideId: 'B000944',
          govTrackId: 400050,
          committees: [
            {
              systemCode: 'ssaf',
              name: 'Senate Committee on Agriculture, Nutrition, and Forestry',
              title: null,
              subcommittees: [
                {
                  systemCode: 'ssaf16',
                  name: 'Food and Nutrition, Specialty Crops, Organics, and Research',
                  title: null,
                  id: '6754766fd1d49300312fe0da',
                },
                {
                  systemCode: 'ssaf17',
                  name: 'Livestock, Dairy, Poultry, Local Food Systems, and Food Safety and Security',
                  title: null,
                  id: '6754766fd1d49300312fe0db',
                },
              ],
              id: '6754766fd1d49300312fe0d4',
            },
            {
              systemCode: 'ssbk',
              name: 'Senate Committee on Banking, Housing, and Urban Affairs',
              title: 'chair',
              subcommittees: [
                {
                  systemCode: 'ssbk04',
                  name: 'Securities, Insurance, and Investment',
                  title: 'exOfficio',
                  id: '6754766fd1d49300312fe0dc',
                },
                {
                  systemCode: 'ssbk05',
                  name: 'National Security and International Trade and Finance',
                  title: 'exOfficio',
                  id: '6754766fd1d49300312fe0dd',
                },
                {
                  systemCode: 'ssbk08',
                  name: 'Financial Institutions and Consumer Protection',
                  title: 'exOfficio',
                  id: '6754766fd1d49300312fe0de',
                },
                {
                  systemCode: 'ssbk09',
                  name: 'Housing, Transportation, and Community Development',
                  title: 'exOfficio',
                  id: '6754766fd1d49300312fe0df',
                },
                {
                  systemCode: 'ssbk12',
                  name: 'Economic Policy',
                  title: 'exOfficio',
                  id: '6754766fd1d49300312fe0e0',
                },
              ],
              id: '6754766fd1d49300312fe0d5',
            },
            {
              systemCode: 'ssfi',
              name: 'Senate Committee on Finance',
              title: null,
              subcommittees: [
                {
                  systemCode: 'ssfi02',
                  name: 'Social Security, Pensions, and Family Policy',
                  title: 'chair',
                  id: '6754766fd1d49300312fe0e1',
                },
                {
                  systemCode: 'ssfi13',
                  name: 'International Trade, Customs, and Global Competitiveness',
                  title: null,
                  id: '6754766fd1d49300312fe0e2',
                },
              ],
              id: '6754766fd1d49300312fe0d6',
            },
            {
              systemCode: 'ssva',
              name: "Senate Committee on Veterans' Affairs",
              title: null,
              subcommittees: [],
              id: '6754766fd1d49300312fe0d7',
            },
          ],
        },
        experiences: [
          {
            company: 'United States House of Representatives',
            category: 'House Representative',
            isCurrent: false,
            positions: [
              {
                title: 'Representative for district 13, Ohio',
                description: null,
                start: {
                  datetime: '1993-01-05T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: '2007-01-03T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                state: 'ohio',
                district: 13,
                party: 'democratic',
                congresses: [103, 104, 105, 106, 107, 108, 109],
                officialAreas: [],
                companyType: null,
                id: '6754766fd1d49300312fe0d8',
              },
            ],
            id: '6754766fd1d49300312fe0cf',
          },
          {
            company: 'United States Senate',
            category: 'Senator',
            isCurrent: true,
            positions: [
              {
                title: 'Senator for Ohio',
                description: null,
                start: {
                  datetime: '2007-01-04T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: null,
                  precision: [],
                },
                state: 'ohio',
                district: null,
                party: 'democratic',
                congresses: [110, 111, 112, 113, 114, 115, 116, 117, 118],
                officialAreas: [],
                companyType: null,
                id: '6754766fd1d49300312fe0d9',
              },
            ],
            id: '6754766fd1d49300312fe0d0',
          },
        ],
        publications: [],
        links: [
          {
            type: 'twitter',
            title: '@SenSherrodBrown',
            link: 'https://x.com/SenSherrodBrown',
            id: '6754766fd1d49300312fe0d1',
          },
          {
            type: 'facebook',
            title: '@SenatorSherrodBrown',
            link: 'https://facebook.com/SenatorSherrodBrown',
            id: '6754766fd1d49300312fe0d2',
          },
          {
            type: 'youtube',
            title: '@SherrodBrownOhio',
            link: 'https://youtube.com/channel/UCgy8jfERh-t_ixkKKoCmglQ',
            id: '6754766fd1d49300312fe0d3',
          },
        ],
        partyChangeRecords: [],
        viewCount: 0,
        billCount: 1,
        currentParty: 'democratic',
        records: [],
        sponsorBills: [
          {
            id: '675476fc437319f5138bedef',
            title:
              "Relating to Taiwan's participation in the World Health Organization.",
            congress: 105,
            number: '126',
            type: 'hjres',
            isFeatured: false,
          },
        ],
        cosponsorBills: [],
        votes: [],
        displayName: 'Sherrod Brown',
        bio: "[Wikipedia] Sherrod Campbell Brown (born November 9, 1952) is an American politician serving since 2007 as the senior United States senator from Ohio. A member of the Democratic Party, he was the U.S. representative for Ohio's 13th congressional district from 1993 to 2007 and the 47th secretary of state of Ohio from 1983 to 1991. He started his political career in 1975 as a state representative.",
        govTrackId: '400050',
      },
      party: 'democratic',
    },
    cosponsors: [],
    congressGovUrl:
      'https://www.congress.gov/bill/105th-congress/house-joint-resolution/126',
    popularityRank: null,
    relatedBills: [],
    title:
      "Relating to Taiwan's participation in the World Health Organization.",
    summary:
      "[congress.gov] Expresses the sense of the Congress that: (1) Taiwan should be represented in the World Health Organization; and (2) it should be U.S. policy to support Taiwan's representation in the Organization.",
    latestActionTime: '1998-07-22T00:00:00.000Z',
    updatedAt: '2024-12-07T16:25:32.373Z',
    createdAt: '2024-12-07T16:25:32.373Z',
  },
  {
    id: '67547209437319f5138beca4',
    i18n: {
      en: {
        title: 'Taiwan Invasion Prevention Act',
        summary:
          "[congress.gov] This bill authorizes the President to use the Armed Forces to defend Taiwan against a direct attack by China's military, a taking of Taiwan's territory by China, or a threat that endangers the lives of civilians in Taiwan or members of Taiwan's military. The bill also directs the Department of Defense to convene an annual regional security dialogue with Taiwan and other partners to improve U.S. security relationships with countries in the Western Pacific.",
        actionsOverview: [
          {
            actionAt: {
              datetime: '2023-02-16T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description: 'Introduced in Senate',
          },
        ],
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
      },
      zh: {
        title: '防止台灣遭侵略法案',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 118,
    number: '477',
    type: 's',
    introducedAt: {
      datetime: '2023-02-16T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    isFeatured: true,
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
      currentStep: 'introduced',
      passedSteps: ['introduced'],
      futureSteps: ['passedSenate', 'passedHouse', 'toPresident', 'becomeLaw'],
    },
    sponsor: {
      people: {
        id: '67547188437319f5138bebdc',
        i18n: {
          en: {
            firstName: 'Richard',
            lastName: 'Scott',
            middleName: 'Lynn',
            displayName: 'Rick Scott',
            bio: '[Wikipedia] Richard Lynn Scott (born December 1, 1952) is an American attorney, businessman, and politician who has been the junior United States senator from Florida since 2019. A member of the Republican Party, he served two terms as the 45th governor of Florida from 2011 to 2019.',
            otherNames: [
              {
                otherName: 'Rick',
                id: '67547188d1d49300312fe0c9',
              },
            ],
          },
          zh: {
            firstName: null,
            lastName: '史考特',
            middleName: null,
            displayName: '史考特',
            bio: '[Wikipedia] 李察·「瑞克」·林恩·史考特（英語：Richard "Rick" Lynn Scott；1952年12月1日—）是美國一位共和黨籍的政治家和商人，現任佛羅里達州聯邦參議員。他曾於2011年當選佛羅里達州州長，2014年再次當選連任。',
            otherNames: [],
          },
        },
        photo: {
          id: '67595d397e1c21b02dd70ad4',
          alt: 'Rick_Scott.jpg',
          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Rick_Scott.jpg',
          filename: 'Rick_Scott.jpg',
          mimeType: 'image/jpeg',
          width: 2937,
          height: 3673,
        },
        birthday: {
          datetime: '1952-12-01T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        gender: 'male',
        tags: [],
        congressionalData: {
          bioGuideId: 'S001217',
          govTrackId: 412838,
          committees: [
            {
              systemCode: 'spag',
              name: 'Senate Special Committee on Aging',
              title: null,
              subcommittees: [],
              id: '67547188d1d49300312fe0c4',
            },
            {
              systemCode: 'ssas',
              name: 'Senate Committee on Armed Services',
              title: null,
              subcommittees: [
                {
                  systemCode: 'ssas13',
                  name: 'Seapower',
                  title: null,
                  id: '67547188d1d49300312fe0ca',
                },
                {
                  systemCode: 'ssas14',
                  name: 'Airland',
                  title: null,
                  id: '67547188d1d49300312fe0cb',
                },
                {
                  systemCode: 'ssas17',
                  name: 'Personnel',
                  title: 'ranking',
                  id: '67547188d1d49300312fe0cc',
                },
              ],
              id: '67547188d1d49300312fe0c5',
            },
            {
              systemCode: 'ssbu',
              name: 'Senate Committee on the Budget',
              title: null,
              subcommittees: [],
              id: '67547188d1d49300312fe0c6',
            },
            {
              systemCode: 'ssga',
              name: 'Senate Committee on Homeland Security and Governmental Affairs',
              title: null,
              subcommittees: [
                {
                  systemCode: 'ssga01',
                  name: 'Permanent Subcommittee on Investigations',
                  title: null,
                  id: '67547188d1d49300312fe0cd',
                },
                {
                  systemCode: 'ssga20',
                  name: 'Emerging Threats and Spending Oversight',
                  title: null,
                  id: '67547188d1d49300312fe0ce',
                },
              ],
              id: '67547188d1d49300312fe0c7',
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
                  datetime: '2019-01-08T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: null,
                  precision: [],
                },
                state: 'florida',
                district: null,
                party: 'republican',
                congresses: [116, 117, 118],
                officialAreas: [],
                companyType: null,
                id: '67547188d1d49300312fe0c8',
              },
            ],
            id: '67547188d1d49300312fe0c0',
          },
        ],
        publications: [],
        links: [
          {
            type: 'twitter',
            title: '@SenRickScott',
            link: 'https://x.com/SenRickScott',
            id: '67547188d1d49300312fe0c1',
          },
          {
            type: 'facebook',
            title: '@RickScottSenOffice',
            link: 'https://facebook.com/RickScottSenOffice',
            id: '67547188d1d49300312fe0c2',
          },
          {
            type: 'youtube',
            title: '@senrickscott8007',
            link: 'https://youtube.com/channel/UC-Y9pFmW4PYGZHkC8lcqSkQ',
            id: '67547188d1d49300312fe0c3',
          },
        ],
        partyChangeRecords: [],
        viewCount: 0,
        billCount: 1,
        currentParty: 'republican',
        records: [],
        sponsorBills: [
          {
            id: '67547209437319f5138beca4',
            title: 'Taiwan Invasion Prevention Act',
            congress: 118,
            number: '477',
            type: 's',
            isFeatured: true,
          },
        ],
        cosponsorBills: [],
        votes: [],
        displayName: 'Rick Scott',
        bio: '[Wikipedia] Richard Lynn Scott (born December 1, 1952) is an American attorney, businessman, and politician who has been the junior United States senator from Florida since 2019. A member of the Republican Party, he served two terms as the 45th governor of Florida from 2011 to 2019.',
        govTrackId: '412838',
      },
      party: 'republican',
    },
    cosponsors: [],
    congressGovUrl:
      'https://www.congress.gov/bill/118th-congress/senate-bill/477',
    popularityRank: null,
    relatedBills: [],
    title: 'Taiwan Invasion Prevention Act',
    summary:
      "[congress.gov] This bill authorizes the President to use the Armed Forces to defend Taiwan against a direct attack by China's military, a taking of Taiwan's territory by China, or a threat that endangers the lives of civilians in Taiwan or members of Taiwan's military. The bill also directs the Department of Defense to convene an annual regional security dialogue with Taiwan and other partners to improve U.S. security relationships with countries in the Western Pacific.",
    latestActionTime: '2023-02-16T00:00:00.000Z',
    updatedAt: '2024-12-19T07:32:35.585Z',
    createdAt: '2024-12-07T16:04:25.248Z',
  },
  {
    id: '67546eed437319f5138beb61',
    i18n: {
      en: {
        title: 'Taiwan Peace and Stability Act',
        summary:
          "[congress.gov] This bill requires various reports to Congress related to Taiwan.\n\nThe Department of State must report on (1) a strategy to advance Taiwan's meaningful participation in certain international organizations, and (2) a plan for strengthening Taiwan's community of civilian defense professionals. (China has taken actions to block Taiwan's participation in certain international organizations, such as opposing Taiwan's attendance at World Health Assembly meetings as an observer.)\n\nThe U.S. Agency for International Development must report on cooperation with Taiwan on trilateral and multilateral development initiatives.\n\nThe U.S. Trade Representative must report a legal template for establishing trade and investment agreements with Taiwan that is consistent with U.S.-Taiwan relations.\n\nThe President must report a whole-of-government strategy to enhance deterrence over a military conflict between China and Taiwan. Among other matters, the strategy must include an examination of the present and future capabilities of the United States and Taiwan to respond to potential actions by China's military, such as a naval blockade.\n\nThe Department of Defense must report on options for (1) supporting Taiwan's defense budgeting and procurement process in a way that is consistent with Taiwan's asymmetric defense strategy, and (2) strengthening Taiwan's implementation of its territorial defense force concept.",
        actionsOverview: [
          {
            actionAt: {
              datetime: '2021-06-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description: 'Introduced in House',
          },
        ],
        actionsAll: [
          {
            actionAt: {
              datetime: '2021-06-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Referred to the Subcommittee on Trade. (Action By: Committee on Ways and Means)',
          },
          {
            actionAt: {
              datetime: '2021-06-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned. (Action By: House of Representatives)',
          },
          {
            actionAt: {
              datetime: '2021-06-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Referred to the Committee on Foreign Affairs, and in addition to the Committee on Ways and Means, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned. (Action By: House of Representatives)',
          },
          {
            actionAt: {
              datetime: '2021-06-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Introduced in House (Action By: House of Representatives)',
          },
        ],
      },
      zh: {
        title: '台灣和平及穩定法案',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 117,
    number: '3972',
    type: 'hr',
    introducedAt: {
      datetime: '2021-06-17T00:00:00.000Z',
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
      currentStep: 'introduced',
      passedSteps: ['introduced'],
      futureSteps: [],
    },
    sponsor: {
      people: {
        id: '67546e46437319f5138bea95',
        i18n: {
          en: {
            firstName: 'Ami',
            lastName: 'Bera',
            middleName: null,
            displayName: 'Ami Bera',
            bio: '[Wikipedia] Amerish Babulal "Ami" Bera (born March 2, 1965) is an American physician and politician who has been serving as a member of the United States House of Representatives from California since 2013. He is a member of the Democratic Party and represents California\'s 6th congressional district, which is in Sacramento County.',
            otherNames: [],
          },
          zh: {
            firstName: null,
            lastName: '貝拉',
            middleName: null,
            displayName: '貝拉',
            bio: '[Wikipedia] 阿米·貝拉（英語：Amerish Babulal "Ami" Bera，1965年3月2日—），美國醫生，是印度裔美國人，民主黨政治家，生於加利福尼亞州洛杉磯，畢業於加利福尼亞大學爾灣分校，2013年起任美國聯邦眾議員，代表加利福尼亞州第七國會選區，現為美國眾議院外交委員會成員。',
            otherNames: [],
          },
        },
        photo: {
          id: '67595d3f7e1c21b02dd70adc',
          alt: 'Ami_Bera.jpeg',
          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ami_Bera.jpg',
          filename: 'Ami_Bera.jpg',
          mimeType: 'image/jpeg',
          width: 3360,
          height: 4200,
        },
        birthday: {
          datetime: '1965-03-02T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        gender: 'male',
        tags: [],
        congressionalData: {
          bioGuideId: 'B001287',
          govTrackId: 412512,
          committees: [
            {
              systemCode: 'hlig',
              name: 'House Permanent Select Committee on Intelligence',
              title: null,
              subcommittees: [
                {
                  systemCode: 'hlig02',
                  name: 'National Security Agency and Cyber',
                  title: null,
                  id: '67546e46d1d49300312fe0bc',
                },
                {
                  systemCode: 'hlig06',
                  name: 'National Intelligence Enterprise',
                  title: null,
                  id: '67546e46d1d49300312fe0bd',
                },
              ],
              id: '67546e46d1d49300312fe0b7',
            },
            {
              systemCode: 'hsfa',
              name: 'House Committee on Foreign Affairs',
              title: null,
              subcommittees: [
                {
                  systemCode: 'hsfa05',
                  name: 'Indo-Pacific',
                  title: 'ranking',
                  id: '67546e46d1d49300312fe0be',
                },
                {
                  systemCode: 'hsfa06',
                  name: 'Global Health, Global Human Rights, and International Organizations',
                  title: null,
                  id: '67546e46d1d49300312fe0bf',
                },
              ],
              id: '67546e46d1d49300312fe0b8',
            },
            {
              systemCode: 'hsvc',
              name: 'House Select Subcommittee on the Coronavirus Pandemic',
              title: null,
              subcommittees: [],
              id: '67546e46d1d49300312fe0b9',
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
                title: 'Representative for district 7, California',
                description: null,
                start: {
                  datetime: '2013-01-03T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: '2023-01-03T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                state: 'california',
                district: 7,
                party: 'democratic',
                congresses: [113, 114, 115, 116, 117],
                officialAreas: [],
                companyType: null,
                id: '67546e46d1d49300312fe0ba',
              },
              {
                title: 'Representative for district 6, California',
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
                district: 6,
                party: 'democratic',
                congresses: [118],
                officialAreas: [],
                companyType: null,
                id: '67546e46d1d49300312fe0bb',
              },
            ],
            id: '67546e46d1d49300312fe0b3',
          },
        ],
        publications: [],
        links: [
          {
            type: 'twitter',
            title: '@RepBera',
            link: 'https://x.com/RepBera',
            id: '67546e46d1d49300312fe0b4',
          },
          {
            type: 'facebook',
            title: '@RepAmiBera',
            link: 'https://facebook.com/RepAmiBera',
            id: '67546e46d1d49300312fe0b5',
          },
          {
            type: 'youtube',
            title: '@repamibera',
            link: 'https://youtube.com/channel/UClJCTCo53Zk6b4kUL-bbdzg',
            id: '67546e46d1d49300312fe0b6',
          },
        ],
        partyChangeRecords: [],
        viewCount: 0,
        billCount: 1,
        currentParty: 'democratic',
        records: [],
        sponsorBills: [
          {
            id: '67546eed437319f5138beb61',
            title: 'Taiwan Peace and Stability Act',
            congress: 117,
            number: '3972',
            type: 'hr',
            isFeatured: false,
          },
        ],
        cosponsorBills: [],
        votes: [],
        displayName: 'Ami Bera',
        bio: '[Wikipedia] Amerish Babulal "Ami" Bera (born March 2, 1965) is an American physician and politician who has been serving as a member of the United States House of Representatives from California since 2013. He is a member of the Democratic Party and represents California\'s 6th congressional district, which is in Sacramento County.',
        govTrackId: '412512',
      },
      party: 'democratic',
    },
    cosponsors: [],
    congressGovUrl:
      'https://www.congress.gov/bill/117th-congress/house-bill/3972',
    popularityRank: null,
    relatedBills: [],
    title: 'Taiwan Peace and Stability Act',
    summary:
      "[congress.gov] This bill requires various reports to Congress related to Taiwan.\n\nThe Department of State must report on (1) a strategy to advance Taiwan's meaningful participation in certain international organizations, and (2) a plan for strengthening Taiwan's community of civilian defense professionals. (China has taken actions to block Taiwan's participation in certain international organizations, such as opposing Taiwan's attendance at World Health Assembly meetings as an observer.)\n\nThe U.S. Agency for International Development must report on cooperation with Taiwan on trilateral and multilateral development initiatives.\n\nThe U.S. Trade Representative must report a legal template for establishing trade and investment agreements with Taiwan that is consistent with U.S.-Taiwan relations.\n\nThe President must report a whole-of-government strategy to enhance deterrence over a military conflict between China and Taiwan. Among other matters, the strategy must include an examination of the present and future capabilities of the United States and Taiwan to respond to potential actions by China's military, such as a naval blockade.\n\nThe Department of Defense must report on options for (1) supporting Taiwan's defense budgeting and procurement process in a way that is consistent with Taiwan's asymmetric defense strategy, and (2) strengthening Taiwan's implementation of its territorial defense force concept.",
    latestActionTime: '2021-06-17T00:00:00.000Z',
    updatedAt: '2024-12-07T15:51:09.665Z',
    createdAt: '2024-12-07T15:51:09.665Z',
  },
  {
    id: '67546b85437319f5138bea0c',
    i18n: {
      en: {
        title: 'Taiwan Security Enhancement Act',
        summary:
          "[congress.gov] Taiwan Security Enhancement Act - Directs the Secretary of Defense and the Secretaries of the military departments to make every effort to reserve additional positions for Taiwan military officers at the National Defense University and specified other professional military education schools, and at the U.S. Military Academy, the U.S. Naval Academy, and the Air Force Academy.\nDirects the Secretary of State, when considering foreign military sales to Taiwan, to take into account Taiwan's special status (including its defense needs in response to the military modernization and weapons procurement efforts by China) and make every effort to ensure it has full and timely access to price and availability data for defense articles and defense services.",
        actionsOverview: [
          {
            actionAt: {
              datetime: '2000-02-01T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description:
              'Passed/agreed to in House: On passage Passed by the Yeas and Nays: 341 - 70 (Roll no. 5).',
          },
          {
            actionAt: {
              datetime: '1999-10-28T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description:
              'Reported (Amended) by the Committee on International Relations. H. Rept. 106-423, Part I.',
          },
          {
            actionAt: {
              datetime: '1999-05-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description: 'Introduced in House',
          },
        ],
        actionsAll: [
          {
            actionAt: {
              datetime: '2000-04-13T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'senate',
            description:
              'Read the second time. Placed on Senate Legislative Calendar under General Orders. Calendar No. 503.',
          },
          {
            actionAt: {
              datetime: '2000-04-12T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'senate',
            description:
              'Read the first time. Placed on Senate Legislative Calendar under Read the First Time.',
          },
          {
            actionAt: {
              datetime: '2000-02-02T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'senate',
            description: 'Received in the Senate.',
          },
          {
            actionAt: {
              datetime: '2000-02-01T15:10:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'Motion to reconsider laid on the table Agreed to without objection.',
          },
          {
            actionAt: {
              datetime: '2000-02-01T15:10:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'On passage Passed by the Yeas and Nays: 341 - 70 (Roll no. 5).',
          },
          {
            actionAt: {
              datetime: '2000-02-01T15:02:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'Considered as unfinished business. (consideration: CR H127-128)',
          },
          {
            actionAt: {
              datetime: '2000-02-01T14:02:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'POSTPONED PROCEEDINGS - The Chair put the question on passage by voice vote and announced that the yeas had prevailed. The yeas and nays were demanded and the Chair announced that further proceedings were postponed until later in the legislative day.',
          },
          {
            actionAt: {
              datetime: '2000-02-01T14:02:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'The previous question was ordered pursuant to the rule.',
          },
          {
            actionAt: {
              datetime: '2000-02-01T13:00:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'DEBATE - The House proceeded with one hour of debate on H.R. 1838.',
          },
          {
            actionAt: {
              datetime: '2000-02-01T13:00:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'Rule provides for consideration of H.R. 1838 with 1 hour of general debate. Previous question shall be considered as ordered without intervening motions except motion to recommit with or without instructions. The amendment recommended by the Committee on International Relations now printed in the bill shall be considered as adopted. Measure will be considered read. A specified amendment is in order.',
          },
          {
            actionAt: {
              datetime: '2000-02-01T13:00:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'Considered under the provisions of rule H. Res. 408. (consideration: CR H110-121; text of measure as reported in House: CR H110-121)',
          },
          {
            actionAt: {
              datetime: '2000-02-01T12:58:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description: 'Rule H. Res. 408 passed House.',
          },
          {
            actionAt: {
              datetime: '2000-01-31T19:04:00.000Z',
              precision: ['year', 'month', 'day', 'time'],
            },
            chamber: 'house',
            description:
              'Rules Committee Resolution H. Res. 408 Reported to House. Rule provides for consideration of H.R. 1838 with 1 hour of general debate. Previous question shall be considered as ordered without intervening motions except motion to recommit with or without instructions. The amendment recommended by the Committee on International Relations now printed in the bill shall be considered as adopted. Measure will be considered read. A specified amendment is in order.',
          },
          {
            actionAt: {
              datetime: '1999-11-22T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Feb. 4, 2000.',
          },
          {
            actionAt: {
              datetime: '1999-11-19T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 22, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-11-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 19, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-11-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 18, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-11-11T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 17, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-11-10T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 12, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-11-05T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 10, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-10-28T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'House Committee on Armed Services Granted an extension for further consideration ending not later than Nov. 5, 1999.',
          },
          {
            actionAt: {
              datetime: '1999-10-28T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Reported (Amended) by the Committee on International Relations. H. Rept. 106-423, Part I.',
          },
          {
            actionAt: {
              datetime: '1999-10-26T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Ordered to be Reported (Amended) by the Yeas and Nays: 32 - 6. (Action By: Committee on International Relations)',
          },
          {
            actionAt: {
              datetime: '1999-10-26T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Committee Consideration and Mark-up Session Held. (Action By: Committee on International Relations)',
          },
          {
            actionAt: {
              datetime: '1999-09-09T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Referred to the Subcommittee on Asia and the Pacific. (Action By: Committee on International Relations)',
          },
          {
            actionAt: {
              datetime: '1999-06-01T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description: 'Executive Comment Requested from DOD.',
          },
          {
            actionAt: {
              datetime: '1999-05-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Referred to the Committee on International Relations, and in addition to the Committee on Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
          },
          {
            actionAt: {
              datetime: '1999-05-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Referred to the Committee on International Relations, and in addition to the Committee on Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
          },
          {
            actionAt: {
              datetime: '1999-05-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Referred to the Committee on International Relations, and in addition to the Committee on Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
          },
          {
            actionAt: {
              datetime: '1999-05-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description:
              'Sponsor introductory remarks on measure. (CR E998-999)',
          },
          {
            actionAt: {
              datetime: '1999-05-18T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: 'house',
            description: 'Introduced in House',
          },
        ],
      },
      zh: {
        title: '臺灣安全加強法',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 106,
    number: '1838',
    type: 'hr',
    introducedAt: {
      datetime: '1999-05-18T00:00:00.000Z',
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
      currentStep: 'passedHouse',
      passedSteps: ['introduced', 'passedHouse'],
      futureSteps: [],
    },
    sponsor: {
      people: {
        id: '67546b14437319f5138be959',
        i18n: {
          en: {
            firstName: 'Thomas',
            lastName: 'DeLay',
            middleName: 'Dale',
            displayName: 'Tom DeLay',
            bio: "[Wikipedia] Thomas Dale DeLay (born April 8, 1947) is an American author and retired politician who served as a member of the United States House of Representatives. A Republican, DeLay represented Texas's 22nd congressional district from 1985 until 2006. He served as House majority leader from 2003 to 2005.",
            otherNames: [
              {
                otherName: 'Tom',
                id: '67546b14d1d49300312fe0b2',
              },
            ],
          },
          zh: {
            firstName: null,
            lastName: null,
            middleName: null,
            displayName: null,
            bio: '[Wikipedia] 湯·德利（英語：Thomas Dale DeLay，1947年4月8日—）是美國一位已退休的政治家，所屬政黨是共和黨。從1985年至2006年他擔任來自德克薩斯州第二十二國會選區的聯邦眾議員。2003年至2005年，他擔任眾議院多數黨領袖。',
            otherNames: [],
          },
        },
        photo: {
          id: '67595d327e1c21b02dd70ab1',
          alt: 'Tom_DeLay.jpg',
          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tom_DeLay.jpg',
          filename: 'Tom_DeLay.jpg',
          mimeType: 'image/jpeg',
          width: 449,
          height: 548,
        },
        birthday: {
          datetime: '1947-04-08T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        gender: 'male',
        tags: [],
        congressionalData: {
          bioGuideId: 'D000217',
          govTrackId: 400104,
          committees: [],
        },
        experiences: [
          {
            company: 'United States House of Representatives',
            category: 'House Representative',
            isCurrent: false,
            positions: [
              {
                title: 'Representative for district 22, Texas',
                description: null,
                start: {
                  datetime: '1985-01-03T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: '2006-06-09T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                state: 'texas',
                district: 22,
                party: 'republican',
                congresses: [
                  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
                ],
                officialAreas: [],
                companyType: null,
                id: '67546b14d1d49300312fe0b1',
              },
            ],
            id: '67546b14d1d49300312fe0b0',
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
            id: '67546b85437319f5138bea0c',
            title: 'Taiwan Security Enhancement Act',
            congress: 106,
            number: '1838',
            type: 'hr',
            isFeatured: false,
          },
        ],
        cosponsorBills: [],
        votes: [],
        displayName: 'Tom DeLay',
        bio: "[Wikipedia] Thomas Dale DeLay (born April 8, 1947) is an American author and retired politician who served as a member of the United States House of Representatives. A Republican, DeLay represented Texas's 22nd congressional district from 1985 until 2006. He served as House majority leader from 2003 to 2005.",
        govTrackId: '400104',
      },
      party: 'republican',
    },
    cosponsors: [],
    congressGovUrl:
      'https://www.congress.gov/bill/106th-congress/house-bill/1838',
    popularityRank: null,
    relatedBills: [],
    title: 'Taiwan Security Enhancement Act',
    summary:
      "[congress.gov] Taiwan Security Enhancement Act - Directs the Secretary of Defense and the Secretaries of the military departments to make every effort to reserve additional positions for Taiwan military officers at the National Defense University and specified other professional military education schools, and at the U.S. Military Academy, the U.S. Naval Academy, and the Air Force Academy.\nDirects the Secretary of State, when considering foreign military sales to Taiwan, to take into account Taiwan's special status (including its defense needs in response to the military modernization and weapons procurement efforts by China) and make every effort to ensure it has full and timely access to price and availability data for defense articles and defense services.",
    latestActionTime: '2000-04-13T00:00:00.000Z',
    updatedAt: '2024-12-07T15:38:37.555Z',
    createdAt: '2024-12-07T15:36:37.150Z',
  },
  {
    id: '67546936437319f5138be7df',
    i18n: {
      en: {
        title: 'Taiwan Fellowship Act',
        summary:
          '[congress.gov] This bill directs the Department of State to establish a program to provide fellowships in Taiwan to qualifying U.S. government employees.',
        actionsOverview: [
          {
            actionAt: {
              datetime: '2021-03-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            description: 'Introduced in Senate',
          },
        ],
        actionsAll: [
          {
            actionAt: {
              datetime: '2021-03-17T00:00:00.000Z',
              precision: ['year', 'month', 'day'],
            },
            chamber: null,
            description:
              'Read twice and referred to the Committee on Foreign Relations. (Action By: Senate)',
          },
        ],
      },
      zh: {
        title: '台灣學人法案',
        summary: null,
        actionsOverview: null,
        actionsAll: null,
      },
    },
    congress: 117,
    number: '811',
    type: 's',
    introducedAt: {
      datetime: '2021-03-17T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    isFeatured: true,
    categories: [
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
    ],
    tags: [],
    statusTracker: {
      currentStep: 'introduced',
      passedSteps: ['introduced'],
      futureSteps: [],
    },
    sponsor: {
      people: {
        id: '6754687c437319f5138be6f1',
        i18n: {
          en: {
            firstName: 'Edward',
            lastName: 'Markey',
            middleName: 'J.',
            displayName: 'Edward J. Markey',
            bio: "[Wikipedia] Edward John Markey (born July 11, 1946) is an American politician serving as the junior United States senator from Massachusetts since 2013. A member of the Democratic Party, he served 20 terms (18 full, two partial) as the U.S. representative for Massachusetts's 7th congressional district from 1976 to 2013. Before his congressional career, he was a member of the Massachusetts House of Representatives from 1973 to 1976.",
            otherNames: [
              {
                otherName: 'Ed',
                id: '6754687cd1d49300312fe0a4',
              },
            ],
          },
          zh: {
            firstName: null,
            lastName: '馬基',
            middleName: null,
            displayName: '馬基',
            bio: '[Wikipedia] 愛德華·約翰·｢艾德｣·馬基（英語：Edward John "Ed" Markey、1946年7月11日—），是一位美國民主黨政治人物，從1976年至2013年擔任麻薩諸塞州第七國會區代表，自2005年成為麻薩諸塞州聯邦參議院議員。他在美國參議院的2013年特別選舉擊敗共和黨候選人加布里埃爾·E·戈麥斯成為繼莫·科文後新任州聯邦參議員。',
            otherNames: [],
          },
        },
        photo: {
          id: '67595e267e1c21b02dd70b14',
          alt: 'Edward_J_Markey.png',
          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Edward_J_Markey.png',
          filename: 'Edward_J_Markey.png',
          mimeType: 'image/png',
          width: 480,
          height: 600,
        },
        birthday: {
          datetime: '1946-07-11T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        gender: 'male',
        tags: [],
        congressionalData: {
          bioGuideId: 'M000133',
          govTrackId: 400253,
          committees: [
            {
              systemCode: 'sscm',
              name: 'Senate Committee on Commerce, Science, and Transportation',
              title: null,
              subcommittees: [
                {
                  systemCode: 'sscm34',
                  name: 'Communications, Media, and Broadband',
                  title: null,
                  id: '6754687cd1d49300312fe0a5',
                },
                {
                  systemCode: 'sscm35',
                  name: 'Consumer Protection, Product Safety, and Data Security',
                  title: null,
                  id: '6754687cd1d49300312fe0a6',
                },
                {
                  systemCode: 'sscm36',
                  name: 'Oceans, Fisheries, Climate Change, and Manufacturing',
                  title: null,
                  id: '6754687cd1d49300312fe0a7',
                },
                {
                  systemCode: 'sscm37',
                  name: 'Space and Science',
                  title: null,
                  id: '6754687cd1d49300312fe0a8',
                },
                {
                  systemCode: 'sscm38',
                  name: 'Surface Transportation, Maritime, Freight, and Ports',
                  title: null,
                  id: '6754687cd1d49300312fe0a9',
                },
              ],
              id: '6754687cd1d49300312fe09d',
            },
            {
              systemCode: 'ssev',
              name: 'Senate Committee on Environment and Public Works',
              title: null,
              subcommittees: [
                {
                  systemCode: 'ssev08',
                  name: 'Transportation and Infrastructure',
                  title: null,
                  id: '6754687cd1d49300312fe0aa',
                },
                {
                  systemCode: 'ssev09',
                  name: 'Chemical Safety, Waste Management, Environmental Justice, and Regulatory Oversight',
                  title: null,
                  id: '6754687cd1d49300312fe0ab',
                },
                {
                  systemCode: 'ssev10',
                  name: 'Clean Air, Climate, and Nuclear Safety',
                  title: 'chair',
                  id: '6754687cd1d49300312fe0ac',
                },
                {
                  systemCode: 'ssev15',
                  name: 'Fisheries, Water, and Wildlife',
                  title: null,
                  id: '6754687cd1d49300312fe0ad',
                },
              ],
              id: '6754687cd1d49300312fe09e',
            },
            {
              systemCode: 'sshr',
              name: 'Senate Committee on Health, Education, Labor, and Pensions',
              title: null,
              subcommittees: [
                {
                  systemCode: 'sshr11',
                  name: 'Employment and Workplace Safety',
                  title: null,
                  id: '6754687cd1d49300312fe0ae',
                },
                {
                  systemCode: 'sshr12',
                  name: 'Primary Health and Retirement Security',
                  title: 'chair',
                  id: '6754687cd1d49300312fe0af',
                },
              ],
              id: '6754687cd1d49300312fe09f',
            },
            {
              systemCode: 'sssb',
              name: 'Senate Committee on Small Business and Entrepreneurship',
              title: null,
              subcommittees: [],
              id: '6754687cd1d49300312fe0a0',
            },
          ],
        },
        experiences: [
          {
            company: 'United States House of Representatives',
            category: 'House Representative',
            isCurrent: false,
            positions: [
              {
                title: 'Representative for district 7, Massachusetts',
                description: null,
                start: {
                  datetime: '1975-01-14T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: '2013-01-03T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                state: 'massachusetts',
                district: 7,
                party: 'democratic',
                congresses: [
                  94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                  107, 108, 109, 110, 111, 112,
                ],
                officialAreas: [],
                companyType: null,
                id: '6754687cd1d49300312fe0a1',
              },
              {
                title: 'Representative for district 5, Massachusetts',
                description: null,
                start: {
                  datetime: '2013-01-03T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: '2013-07-15T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                state: 'massachusetts',
                district: 5,
                party: 'democratic',
                congresses: [113],
                officialAreas: [],
                companyType: null,
                id: '6754687cd1d49300312fe0a2',
              },
            ],
            id: '6754687cd1d49300312fe098',
          },
          {
            company: 'United States Senate',
            category: 'Senator',
            isCurrent: true,
            positions: [
              {
                title: 'Senator for Massachusetts',
                description: null,
                start: {
                  datetime: '2013-07-16T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                end: {
                  datetime: null,
                  precision: [],
                },
                state: 'massachusetts',
                district: null,
                party: 'democratic',
                congresses: [113, 114, 115, 116, 117, 118],
                officialAreas: [],
                companyType: null,
                id: '6754687cd1d49300312fe0a3',
              },
            ],
            id: '6754687cd1d49300312fe099',
          },
        ],
        publications: [],
        links: [
          {
            type: 'twitter',
            title: '@SenMarkey',
            link: 'https://x.com/SenMarkey',
            id: '6754687cd1d49300312fe09a',
          },
          {
            type: 'facebook',
            title: '@EdJMarkey',
            link: 'https://facebook.com/EdJMarkey',
            id: '6754687cd1d49300312fe09b',
          },
          {
            type: 'youtube',
            title: '@RepMarkey',
            link: 'https://youtube.com/channel/UCT1ujew5yQy2uMhGrjiKHoA',
            id: '6754687cd1d49300312fe09c',
          },
        ],
        partyChangeRecords: [],
        viewCount: 0,
        billCount: 1,
        currentParty: 'democratic',
        records: [],
        sponsorBills: [
          {
            id: '67546936437319f5138be7df',
            title: 'Taiwan Fellowship Act',
            congress: 117,
            number: '811',
            type: 's',
            isFeatured: true,
          },
        ],
        cosponsorBills: [],
        votes: [],
        displayName: 'Edward J. Markey',
        bio: "[Wikipedia] Edward John Markey (born July 11, 1946) is an American politician serving as the junior United States senator from Massachusetts since 2013. A member of the Democratic Party, he served 20 terms (18 full, two partial) as the U.S. representative for Massachusetts's 7th congressional district from 1976 to 2013. Before his congressional career, he was a member of the Massachusetts House of Representatives from 1973 to 1976.",
        govTrackId: '400253',
      },
      party: 'democratic',
    },
    cosponsors: [
      {
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
        constituency: 'florida',
        party: 'republican',
        cosponsoredAt: {
          datetime: '2021-03-17T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        id: '67546958f890059dfb0117c0',
      },
    ],
    congressGovUrl:
      'https://www.congress.gov/bill/117th-congress/senate-bill/811',
    popularityRank: null,
    relatedBills: [],
    title: 'Taiwan Fellowship Act',
    summary:
      '[congress.gov] This bill directs the Department of State to establish a program to provide fellowships in Taiwan to qualifying U.S. government employees.',
    latestActionTime: '2021-03-17T00:00:00.000Z',
    updatedAt: '2024-12-19T07:48:26.028Z',
    createdAt: '2024-12-07T15:26:46.488Z',
  },
] as unknown as Bill[]
