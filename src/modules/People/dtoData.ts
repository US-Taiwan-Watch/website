/* eslint-disable */

import { People } from '@/common/lib/graphql/__generated__/graphql'

export const POPULAR_PEOPLE_DTO_MOCK = [
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
    birthday: {
      datetime: '1946-06-14T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-03T17:20:04.922Z',
    currentParty: 'independent',
    displayName: 'Donald Trump',
    experiences: [
      {
        isCurrent: false,
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
            congresses: [],
          },
        ],
      },
      {
        isCurrent: false,
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
            congresses: [],
          },
        ],
      },
    ],
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
      {
        id: '67528397363aa0029d97df00',
        link: 'https://x.com/realdonaldtrump',
        title: '@realDonaldTrump',
      },
      {
        id: '675283a8363aa0029d97df01',
        link: 'https://www.instagram.com/realdonaldtrump',
        title: '@realdonaldtrump',
      },
      {
        id: '675283b5363aa0029d97df02',
        link: 'https://www.facebook.com/DonaldTrump',
        title: '@DonaldTrump',
      },
      {
        id: '675283c2363aa0029d97df03',
        link: 'https://www.youtube.com/channel/UCAql2DyGU2un1Ei2nMYsqOA',
        title: '@DonaldJTrumpforPresident',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Donald_Trump.jpg',
    },
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
    records: [
      {
        id: '6755339e264bccd385d21f3c',
        title: '川普拒絕承諾協防台灣',
        author: {
          id: '67498661beb8fe8bfa145cda',
          fullName: 'USTW Admin',
        },
        createdAt: '2024-12-08T05:50:22.055Z',
        updatedAt: '2024-12-11T02:16:58.567Z',
        description:
          '美國總統當選人川普在 12/08/2024 播出的NBC專訪節目中，再度被問及「若中國入侵台灣，是否會承諾保衛台灣？」對此，川普回應：「我永遠不會說」（I never say）。當被主持人維爾克（Kristen Welker）追問時，川普表示：「我不會說，因為我總得進行談判，對吧？」主持人繼續追問，川普也說，他更希望中國不會入侵台灣，強調「我跟習主席的關係很好，我們一直保持溝通。 」',
        photos: [
          {
            id: '6758f61a73b2270032e31f8c',
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-taiwan-record/image.png',
            },
          },
        ],
        sources: [
          {
            id: '6758f61a73b2270032e31f8b',
            link: 'https://www.dw.com/zh-hant/%E5%B7%9D%E6%99%AE%E6%8B%92%E7%B5%95%E6%89%BF%E8%AB%BE%E5%8D%94%E9%98%B2%E5%8F%B0%E7%81%A3/a-71010556',
          },
        ],
        status: 'approved',
        versions: [
          {
            approvedAt: '2024-12-11T02:16:58.494Z',
            data: {
              title: '川普拒絕承諾協防台灣',
              description:
                '美國總統當選人川普在 12/08/2024 播出的NBC專訪節目中，再度被問及「若中國入侵台灣，是否會承諾保衛台灣？」對此，川普回應：「我永遠不會說」（I never say）。當被主持人維爾克（Kristen Welker）追問時，川普表示：「我不會說，因為我總得進行談判，對吧？」主持人繼續追問，川普也說，他更希望中國不會入侵台灣，強調「我跟習主席的關係很好，我們一直保持溝通。 」',
              people: '674f3dc4c2061b5227b8f1b0',
              author: '67498661beb8fe8bfa145cda',
              sources: [
                {
                  link: 'https://www.dw.com/zh-hant/%E5%B7%9D%E6%99%AE%E6%8B%92%E7%B5%95%E6%89%BF%E8%AB%BE%E5%8D%94%E9%98%B2%E5%8F%B0%E7%81%A3/a-71010556',
                },
              ],
              photos: [
                {
                  photo: '6758e6cbe981ce40d9597d50',
                },
              ],
            },
            id: '6758f61a73b2270032e31f8d',
            version: 1,
          },
        ],
      },
      {
        id: '6758e7c1e981ce40d9597db8',
        title: '川普稱台灣偷走美國晶片產業',
        author: {
          id: '67498661beb8fe8bfa145cda',
          fullName: 'USTW Admin',
        },
        createdAt: '2024-12-11T01:15:45.743Z',
        updatedAt: '2024-12-11T05:05:10.173Z',
        description:
          '川普在「彭博商業周刊」（Bloomberg Businessweek）專訪中重申他2023年首次提出的主張，即台灣已從美國搶走「幾乎100%」晶片產業，還說「我們根本不該讓這種情況發生」。',
        photos: [],
        sources: [
          {
            id: '6758e7cd73b2270032e31f89',
            link: 'https://www.cna.com.tw/news/aipl/202407240167.aspx',
          },
        ],
        status: 'approved',
        versions: [
          {
            approvedAt: '2024-12-11T01:15:57.377Z',
            data: {
              title: '川普稱台灣偷走美國晶片產業',
              description:
                '川普在「彭博商業周刊」（Bloomberg Businessweek）專訪中重申他2023年首次提出的主張，即台灣已從美國搶走「幾乎100%」晶片產業，還說「我們根本不該讓這種情況發生」。',
              people: '674f3dc4c2061b5227b8f1b0',
              author: '67498661beb8fe8bfa145cda',
              sources: [
                {
                  link: 'https://www.cna.com.tw/news/aipl/202407240167.aspx',
                },
              ],
              photos: [],
            },
            id: '6758e7cd73b2270032e31f8a',
            version: 1,
          },
        ],
      },
    ],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T04:56:13.332Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] James David Vance (born James Donald Bowman; August 2, 1984) is an American politician, author, and Marine veteran who has served since 2023 as the junior United States senator from Ohio. He is the Republican vice-presidential nominee in the 2024 United States presidential election.',
    birthday: {
      datetime: '1983-08-02T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'V000137',
      govTrackId: 456876,
      committees: [
        {
          id: '67528675f5009a00321fea0a',
          name: 'Joint Economic Committee',
          title: null,
          subcommittees: [],
        },
        {
          id: '67528675f5009a00321fea0b',
          name: 'Senate Committee on Banking, Housing, and Urban Affairs',
          title: null,
          subcommittees: [
            {
              id: '67528675f5009a00321fea11',
              name: 'Financial Institutions and Consumer Protection',
              title: null,
            },
            {
              id: '67528675f5009a00321fea12',
              name: 'Housing, Transportation, and Community Development',
              title: null,
            },
            {
              id: '67528675f5009a00321fea13',
              name: 'Securities, Insurance, and Investment',
              title: null,
            },
          ],
        },
        {
          id: '67528675f5009a00321fea0c',
          name: 'Senate Committee on Commerce, Science, and Transportation',
          title: null,
          subcommittees: [
            {
              id: '67528675f5009a00321fea14',
              name: 'Communications, Media, and Broadband',
              title: null,
            },
            {
              id: '67528675f5009a00321fea15',
              name: 'Oceans, Fisheries, Climate Change, and Manufacturing',
              title: null,
            },
            {
              id: '67528675f5009a00321fea16',
              name: 'Space and Science',
              title: null,
            },
          ],
        },
        {
          id: '67528675f5009a00321fea0d',
          name: 'Senate Special Committee on Aging',
          title: null,
          subcommittees: [],
        },
      ],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:07:01.473Z',
    currentParty: 'republican',
    displayName: 'JD Vance',
    experiences: [
      {
        isCurrent: true,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for Ohio',
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
    govTrackId: '456876',
    i18n: {
      en: {
        displayName: 'JD Vance',
        bio: '[Wikipedia] James David Vance (born James Donald Bowman; August 2, 1984) is an American politician, author, and Marine veteran who has served since 2023 as the junior United States senator from Ohio. He is the Republican vice-presidential nominee in the 2024 United States presidential election.',
      },
      zh: {
        displayName: '范斯',
        bio: '[Wikipedia] 詹姆士·大衛·范斯（1984年8月2日—），簡稱J·D·范斯或JD·范斯，美國作家、創業投資人及共和黨政治人物，現任俄亥俄州聯邦參議員。在2024年共和黨全國代表大會上，他被提名為同年總統大選唐納·川普的副總統競選夥伴，這使他成為第一位獲得美國主要政黨總統候選人提名的千禧世代。',
      },
    },
    id: '675286754040f8e6920dea21',
    links: [
      {
        id: '67528675f5009a00321fea02',
        link: 'https://www.vance.senate.gov',
        title: 'Official Website',
      },
      {
        id: '67528675f5009a00321fea03',
        link: 'https://www.facebook.com/senatorvance',
        title: '@senatorvance',
      },
      {
        id: '67528675f5009a00321fea04',
        link: 'https://www.instagram.com/senatorvance',
        title: '@senatorvance',
      },
      {
        id: '67528675f5009a00321fea05',
        link: 'https://www.youtube.com/channel/UCOu1i1eeT8unVAc678Q6LQA',
        title: '@senatorjdvance',
      },
      {
        id: '67528675f5009a00321fea06',
        link: 'https://x.com/SenVancePress',
        title: '@SenVancePress',
      },
      {
        id: '67528675f5009a00321fea07',
        link: 'https://www.facebook.com/p/JD-Vance-100070055152736',
        title: 'JD Vance',
      },
      {
        id: '67528675f5009a00321fea08',
        link: 'https://www.instagram.com/jdvance',
        title: '@jdvance',
      },
      {
        id: '67528675f5009a00321fea09',
        link: 'https://x.com/jdvance',
        title: '@JDVance',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/JD_Vance.jpg',
    },
    publications: [
      {
        id: '67528675f5009a00321fea01',
        title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
        link: null,
      },
    ],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:07:01.473Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: "[Wikipedia] Kamala Devi Harris (born October 20, 1964) is an American politician and attorney who has been the 49th and current vice president of the United States since 2021, serving under President Joe Biden. Harris is the Democratic Party's nominee for president in the 2024 election. She is the first female vice president of the United States, making her the highest-ranking female official in U.S. history. She is also the first African American and first Asian American vice president. From 2017 to 2021, she represented California in the United States Senate. Before that, she was the attorney general of California.",
    birthday: {
      datetime: '1964-10-20T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:13:56.388Z',
    currentParty: 'independent',
    displayName: 'Kamala Harris',
    experiences: [
      {
        isCurrent: false,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for California',
            start: {
              datetime: '2017-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2021-01-18T00:00:00.000Z',
            },
            congresses: [115, 116, 117],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Official',
        company: 'United States',
        positions: [
          {
            title: 'Vice President',
            start: {
              datetime: '2021-01-20T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'female',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Kamala Harris',
        bio: "[Wikipedia] Kamala Devi Harris (born October 20, 1964) is an American politician and attorney who has been the 49th and current vice president of the United States since 2021, serving under President Joe Biden. Harris is the Democratic Party's nominee for president in the 2024 election. She is the first female vice president of the United States, making her the highest-ranking female official in U.S. history. She is also the first African American and first Asian American vice president. From 2017 to 2021, she represented California in the United States Senate. Before that, she was the attorney general of California.",
      },
      zh: {
        displayName: '賀錦麗',
        bio: '[Wikipedia] 卡瑪拉·黛維·哈里斯（1964年10月20日—），漢名賀錦麗，美國民主黨籍政治人物、律師，現任（第49任）美國副總統、參議院議長。她是美國歷史上級別最高的女性官員，也是第一位女性副總統、第一位非裔副總統和第一位亞裔副總統。此前她曾擔任加利福尼亞州州檢察長和加利福尼亞州聯邦參議員等職務。在喬·拜登退出總統競選後，賀錦麗成為民主黨在2024年總統選舉中的總統候選人。',
      },
    },
    id: '675288144040f8e6920deaac',
    links: [
      {
        id: '67528814f5009a00321fea1b',
        link: 'https://kamalaharris.com',
        title: 'Official Website',
      },
      {
        id: '67528814f5009a00321fea1c',
        link: 'https://x.com/kamalaharris',
        title: '@kamalaharris',
      },
      {
        id: '67528814f5009a00321fea1d',
        link: 'https://www.facebook.com/KamalaHarris',
        title: '@KamalaHarris',
      },
      {
        id: '67528814f5009a00321fea1e',
        link: 'https://www.instagram.com/kamalaharris',
        title: '@kamalaharris',
      },
      {
        id: '67528814f5009a00321fea1f',
        link: 'https://www.youtube.com/kamalaharris',
        title: '@kamalaharris',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Kamala_Harris.jpg',
    },
    publications: [
      {
        id: '67528814f5009a00321fea19',
        title: "Smart on Crime: A Career Prosecutor's Plan to Make Us Safer",
        link: null,
      },
      {
        id: '67528814f5009a00321fea1a',
        title: 'The Truths We Hold: An American Journey',
        link: null,
      },
    ],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:13:56.388Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Timothy James Walz (born April 6, 1964) is an American politician, former educator, and retired United States Army non-commissioned officer who has served since 2019 as the 41st governor of Minnesota. He was a member of the U.S. House of Representatives from 2007 to 2019, and the ranking member of the House Veterans Affairs Committee from 2017 to 2019. Walz was the Democratic nominee for vice president in the 2024 U.S. presidential election.',
    birthday: {
      datetime: '1964-04-06T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:21:48.553Z',
    currentParty: 'independent',
    displayName: 'Tim Walz',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 1, Minnesota',
            start: {
              datetime: '2007-01-04T00:00:00.000Z',
            },
            end: {
              datetime: '2019-01-03T00:00:00.000Z',
            },
            congresses: [110, 111, 112, 113, 114, 115],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Official',
        company: 'State of Minnesota',
        positions: [
          {
            title: 'Governor',
            start: {
              datetime: '2019-01-07T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Tim Walz',
        bio: '[Wikipedia] Timothy James Walz (born April 6, 1964) is an American politician, former educator, and retired United States Army non-commissioned officer who has served since 2019 as the 41st governor of Minnesota. He was a member of the U.S. House of Representatives from 2007 to 2019, and the ranking member of the House Veterans Affairs Committee from 2017 to 2019. Walz was the Democratic nominee for vice president in the 2024 U.S. presidential election.',
      },
      zh: {
        displayName: '華茲',
        bio: '[Wikipedia] 提摩西·詹姆士·華茲（英語：Timothy James Walz；1964年4月6日），美國民主黨籍政治人物、前美國陸軍士官長和教師，現任明尼蘇達州州長。華茲曾經在美國國民警衛隊服役24年。曾於2007年至2019年擔任明尼蘇達州第一國會選區聯邦眾議員。',
      },
    },
    id: '675289ec4040f8e6920deaef',
    links: [
      {
        id: '675289ecf5009a00321fea25',
        link: 'https://x.com/tim_walz',
        title: '@tim_walz',
      },
      {
        id: '675289ecf5009a00321fea26',
        link: 'https://www.facebook.com/govwalz',
        title: '@govwalz',
      },
      {
        id: '675289ecf5009a00321fea27',
        link: 'https://www.youtube.com/channel/UCOOyPFRNz-_VWX6r_2jHW6g',
        title: 'Tim Walz',
      },
      {
        id: '675289ecf5009a00321fea28',
        link: 'https://www.facebook.com/GovTimWalz',
        title: '@GovTimWalz',
      },
      {
        id: '675289ecf5009a00321fea29',
        link: 'https://www.instagram.com/mngovernor',
        title: '@mngovernor',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Walz.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:21:48.553Z',
    viewCount: 0,
    votes: [],
  },
] as unknown as People[]

export const PEOPLE_DTO_MOCK = [
  {
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
        type: 'twitter',
      },
      {
        id: '675480c7d1d49300312fe0ee',
        link: 'https://instagram.com/sen_dansullivan',
        title: '@sen_dansullivan',
        type: 'instagram',
      },
      {
        id: '675480c7d1d49300312fe0ef',
        link: 'https://facebook.com/SenDanSullivan',
        title: '@SenDanSullivan',
        type: 'facebook',
      },
      {
        id: '675480c7d1d49300312fe0f0',
        link: 'https://youtube.com/channel/UC7tXCm8gKlAhTFo2kuf5ylw',
        title: '@SenatorDanSullivan',
        type: 'youtube',
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
    ],
    tags: [],
    updatedAt: '2024-12-07T17:07:19.641Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Thomas P. Tiffany (born December 30, 1957) is an American businessman and politician serving as the U.S. representative for Wisconsin's 7th congressional district since winning a special election in 2020. A member of the Republican Party, he previously served seven years in the Wisconsin Senate and two years in the State Assembly, representing the northeast region of the state.",
    birthday: {
      datetime: '1957-12-30T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'T000165',
      govTrackId: 456791,
      committees: [
        {
          id: '6754799fd1d49300312fe0e5',
          name: 'House Committee on Natural Resources',
          title: null,
          subcommittees: [
            {
              id: '6754799fd1d49300312fe0e8',
              name: 'Energy and Mineral Resources',
              title: null,
            },
            {
              id: '6754799fd1d49300312fe0e9',
              name: 'Federal Lands',
              title: 'chair',
            },
          ],
        },
        {
          id: '6754799fd1d49300312fe0e6',
          name: 'House Committee on the Judiciary',
          title: null,
          subcommittees: [
            {
              id: '6754799fd1d49300312fe0ea',
              name: 'Immigration Integrity, Security, and Enforcement',
              title: null,
            },
            {
              id: '6754799fd1d49300312fe0eb',
              name: 'Crime and Federal Government Surveillance',
              title: null,
            },
          ],
        },
      ],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T16:36:47.277Z',
    currentParty: 'republican',
    displayName: 'Thomas P. Tiffany',
    experiences: [
      {
        isCurrent: true,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 7, Wisconsin',
            start: {
              datetime: '2020-05-19T00:00:00.000Z',
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
    govTrackId: '456791',
    i18n: {
      en: {
        displayName: 'Thomas P. Tiffany',
        bio: "[Wikipedia] Thomas P. Tiffany (born December 30, 1957) is an American businessman and politician serving as the U.S. representative for Wisconsin's 7th congressional district since winning a special election in 2020. A member of the Republican Party, he previously served seven years in the Wisconsin Senate and two years in the State Assembly, representing the northeast region of the state.",
      },
      zh: {
        displayName: '帝芬尼',
        bio: '[Wikipedia] 湯瑪斯·P·蒂芬尼（英語：Thomas P. Tiffany，1957年12月30日—），美國商人、政治家，2020年起接替尚恩·達菲，當選威斯康辛州第七國會選區聯邦眾議院議員，共和黨員。此前曾當選威斯康辛州眾議院議員和威斯康辛州參議院議員。2021年2月，與賓夕法尼亞州聯邦眾議員史考特·佩里提出共同決議案，呼籲拜登政府終結「一個中國政策」並與台灣建立外交關係。',
      },
    },
    id: '6754799f437319f5138bf65a',
    links: [
      {
        id: '6754799fd1d49300312fe0e4',
        link: 'https://x.com/RepTiffany',
        title: '@RepTiffany',
        type: 'twitter',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Thomas_P_Tiffany.png',
    },
    publications: [],
    records: [],
    sponsorBills: [
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
        congress: 118,
        congressGovUrl:
          'https://www.congress.gov/bill/118th-congress/house-concurrent-resolution/10',
        createdAt: '2024-12-07T16:41:07.540Z',
        i18n: {
          en: {
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
            actionsOverview: [
              {
                actionAt: {
                  datetime: '2023-01-25T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in House',
              },
            ],
            summary:
              '[congress.gov] This concurrent resolution calls on the President to abandon the One China policy in favor of one that recognizes Taiwan as an independent country that is not a part of China. The resolution also urges the President to bolster diplomatic and economic relations between the United States and Taiwan through specified means.',
            title:
              "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title:
              '表達國會認為美國應與台灣恢復正常的外交關係、協調雙邊自由貿易協定及支持台灣加入國際組織',
          },
        },
        id: '67547aa3437319f5138bf725',
        introducedAt: {
          datetime: '2023-01-25T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '10',
        popularityRank: null,
        statusTracker: {
          currentStep: 'introduced',
          futureSteps: ['agreedToInHouse', 'agreedToInSenate'],
          passedSteps: ['introduced'],
        },
        summary:
          '[congress.gov] This concurrent resolution calls on the President to abandon the One China policy in favor of one that recognizes Taiwan as an independent country that is not a part of China. The resolution also urges the President to bolster diplomatic and economic relations between the United States and Taiwan through specified means.',
        tags: [],
        title:
          "Expressing the sense of Congress that the United States should resume normal diplomatic relations with Taiwan, negotiate a bilateral free trade agreement with Taiwan, and support Taiwan's membership in international organizations.",
        type: 'hconres',
        updatedAt: '2024-12-07T16:41:07.540Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T16:36:47.277Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Sherrod Campbell Brown (born November 9, 1952) is an American politician serving since 2007 as the senior United States senator from Ohio. A member of the Democratic Party, he was the U.S. representative for Ohio's 13th congressional district from 1993 to 2007 and the 47th secretary of state of Ohio from 1983 to 1991. He started his political career in 1975 as a state representative.",
    birthday: {
      datetime: '1952-11-09T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'B000944',
      govTrackId: 400050,
      committees: [
        {
          id: '6754766fd1d49300312fe0d4',
          name: 'Senate Committee on Agriculture, Nutrition, and Forestry',
          title: null,
          subcommittees: [
            {
              id: '6754766fd1d49300312fe0da',
              name: 'Food and Nutrition, Specialty Crops, Organics, and Research',
              title: null,
            },
            {
              id: '6754766fd1d49300312fe0db',
              name: 'Livestock, Dairy, Poultry, Local Food Systems, and Food Safety and Security',
              title: null,
            },
          ],
        },
        {
          id: '6754766fd1d49300312fe0d5',
          name: 'Senate Committee on Banking, Housing, and Urban Affairs',
          title: 'chair',
          subcommittees: [
            {
              id: '6754766fd1d49300312fe0dc',
              name: 'Securities, Insurance, and Investment',
              title: 'exOfficio',
            },
            {
              id: '6754766fd1d49300312fe0dd',
              name: 'National Security and International Trade and Finance',
              title: 'exOfficio',
            },
            {
              id: '6754766fd1d49300312fe0de',
              name: 'Financial Institutions and Consumer Protection',
              title: 'exOfficio',
            },
            {
              id: '6754766fd1d49300312fe0df',
              name: 'Housing, Transportation, and Community Development',
              title: 'exOfficio',
            },
            {
              id: '6754766fd1d49300312fe0e0',
              name: 'Economic Policy',
              title: 'exOfficio',
            },
          ],
        },
        {
          id: '6754766fd1d49300312fe0d6',
          name: 'Senate Committee on Finance',
          title: null,
          subcommittees: [
            {
              id: '6754766fd1d49300312fe0e1',
              name: 'Social Security, Pensions, and Family Policy',
              title: 'chair',
            },
            {
              id: '6754766fd1d49300312fe0e2',
              name: 'International Trade, Customs, and Global Competitiveness',
              title: null,
            },
          ],
        },
        {
          id: '6754766fd1d49300312fe0d7',
          name: "Senate Committee on Veterans' Affairs",
          title: null,
          subcommittees: [],
        },
      ],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T16:23:11.776Z',
    currentParty: 'democratic',
    displayName: 'Sherrod Brown',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 13, Ohio',
            start: {
              datetime: '1993-01-05T00:00:00.000Z',
            },
            end: {
              datetime: '2007-01-03T00:00:00.000Z',
            },
            congresses: [103, 104, 105, 106, 107, 108, 109],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for Ohio',
            start: {
              datetime: '2007-01-04T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [110, 111, 112, 113, 114, 115, 116, 117, 118],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: '400050',
    i18n: {
      en: {
        displayName: 'Sherrod Brown',
        bio: "[Wikipedia] Sherrod Campbell Brown (born November 9, 1952) is an American politician serving since 2007 as the senior United States senator from Ohio. A member of the Democratic Party, he was the U.S. representative for Ohio's 13th congressional district from 1993 to 2007 and the 47th secretary of state of Ohio from 1983 to 1991. He started his political career in 1975 as a state representative.",
      },
      zh: {
        displayName: '布朗',
        bio: '[Wikipedia] 謝羅德·坎貝爾·布朗（英語：Sherrod Campbell Brown；1952年11月9日—），是一位美國民主黨政治人物，自2007年成為俄亥俄州聯邦參議院議員。此前他曾是美國眾議院1993年至2007年期間俄亥俄州第十三國會選區代表議員、第47任俄亥俄州州務卿（1983年－1991年任職）及俄亥俄州眾議院1975年至1982年期間第六十一選區議員代表議員。',
      },
    },
    id: '6754766f437319f5138bed1d',
    links: [
      {
        id: '6754766fd1d49300312fe0d1',
        link: 'https://x.com/SenSherrodBrown',
        title: '@SenSherrodBrown',
        type: 'twitter',
      },
      {
        id: '6754766fd1d49300312fe0d2',
        link: 'https://facebook.com/SenatorSherrodBrown',
        title: '@SenatorSherrodBrown',
        type: 'facebook',
      },
      {
        id: '6754766fd1d49300312fe0d3',
        link: 'https://youtube.com/channel/UCgy8jfERh-t_ixkKKoCmglQ',
        title: '@SherrodBrownOhio',
        type: 'youtube',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Sherrod_Brown.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [
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
        congress: 105,
        congressGovUrl:
          'https://www.congress.gov/bill/105th-congress/house-joint-resolution/126',
        createdAt: '2024-12-07T16:25:32.373Z',
        i18n: {
          en: {
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
            actionsOverview: [
              {
                actionAt: {
                  datetime: '1998-07-22T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in House',
              },
            ],
            summary:
              "[congress.gov] Expresses the sense of the Congress that: (1) Taiwan should be represented in the World Health Organization; and (2) it should be U.S. policy to support Taiwan's representation in the Organization.",
            title:
              "Relating to Taiwan's participation in the World Health Organization.",
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '關於台灣參與世界衛生組織',
          },
        },
        id: '675476fc437319f5138bedef',
        introducedAt: {
          datetime: '1998-07-22T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '126',
        popularityRank: null,
        statusTracker: {
          currentStep: 'introduced',
          futureSteps: [],
          passedSteps: ['introduced'],
        },
        summary:
          "[congress.gov] Expresses the sense of the Congress that: (1) Taiwan should be represented in the World Health Organization; and (2) it should be U.S. policy to support Taiwan's representation in the Organization.",
        tags: [],
        title:
          "Relating to Taiwan's participation in the World Health Organization.",
        type: 'hjres',
        updatedAt: '2024-12-07T16:25:32.373Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T16:23:11.776Z',
    viewCount: 0,
    votes: [],
  },
  {
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
        type: 'twitter',
      },
      {
        id: '67547188d1d49300312fe0c2',
        link: 'https://facebook.com/RickScottSenOffice',
        title: '@RickScottSenOffice',
        type: 'facebook',
      },
      {
        id: '67547188d1d49300312fe0c3',
        link: 'https://youtube.com/channel/UC-Y9pFmW4PYGZHkC8lcqSkQ',
        title: '@senrickscott8007',
        type: 'youtube',
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
        updatedAt: '2024-12-19T07:32:35.585Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T16:02:16.172Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: '[Wikipedia] Amerish Babulal "Ami" Bera (born March 2, 1965) is an American physician and politician who has been serving as a member of the United States House of Representatives from California since 2013. He is a member of the Democratic Party and represents California\'s 6th congressional district, which is in Sacramento County.',
    birthday: {
      datetime: '1965-03-02T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'B001287',
      govTrackId: 412512,
      committees: [
        {
          id: '67546e46d1d49300312fe0b7',
          name: 'House Permanent Select Committee on Intelligence',
          title: null,
          subcommittees: [
            {
              id: '67546e46d1d49300312fe0bc',
              name: 'National Security Agency and Cyber',
              title: null,
            },
            {
              id: '67546e46d1d49300312fe0bd',
              name: 'National Intelligence Enterprise',
              title: null,
            },
          ],
        },
        {
          id: '67546e46d1d49300312fe0b8',
          name: 'House Committee on Foreign Affairs',
          title: null,
          subcommittees: [
            {
              id: '67546e46d1d49300312fe0be',
              name: 'Indo-Pacific',
              title: 'ranking',
            },
            {
              id: '67546e46d1d49300312fe0bf',
              name: 'Global Health, Global Human Rights, and International Organizations',
              title: null,
            },
          ],
        },
        {
          id: '67546e46d1d49300312fe0b9',
          name: 'House Select Subcommittee on the Coronavirus Pandemic',
          title: null,
          subcommittees: [],
        },
      ],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T15:48:22.568Z',
    currentParty: 'democratic',
    displayName: 'Ami Bera',
    experiences: [
      {
        isCurrent: true,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 7, California',
            start: {
              datetime: '2013-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2023-01-03T00:00:00.000Z',
            },
            congresses: [113, 114, 115, 116, 117],
          },
          {
            title: 'Representative for district 6, California',
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
    govTrackId: '412512',
    i18n: {
      en: {
        displayName: 'Ami Bera',
        bio: '[Wikipedia] Amerish Babulal "Ami" Bera (born March 2, 1965) is an American physician and politician who has been serving as a member of the United States House of Representatives from California since 2013. He is a member of the Democratic Party and represents California\'s 6th congressional district, which is in Sacramento County.',
      },
      zh: {
        displayName: '貝拉',
        bio: '[Wikipedia] 阿米·貝拉（英語：Amerish Babulal "Ami" Bera，1965年3月2日—），美國醫生，是印度裔美國人，民主黨政治家，生於加利福尼亞州洛杉磯，畢業於加利福尼亞大學爾灣分校，2013年起任美國聯邦眾議員，代表加利福尼亞州第七國會選區，現為美國眾議院外交委員會成員。',
      },
    },
    id: '67546e46437319f5138bea95',
    links: [
      {
        id: '67546e46d1d49300312fe0b4',
        link: 'https://x.com/RepBera',
        title: '@RepBera',
        type: 'twitter',
      },
      {
        id: '67546e46d1d49300312fe0b5',
        link: 'https://facebook.com/RepAmiBera',
        title: '@RepAmiBera',
        type: 'facebook',
      },
      {
        id: '67546e46d1d49300312fe0b6',
        link: 'https://youtube.com/channel/UClJCTCo53Zk6b4kUL-bbdzg',
        title: '@repamibera',
        type: 'youtube',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ami_Bera.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [
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
        congress: 117,
        congressGovUrl:
          'https://www.congress.gov/bill/117th-congress/house-bill/3972',
        createdAt: '2024-12-07T15:51:09.665Z',
        i18n: {
          en: {
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
            actionsOverview: [
              {
                actionAt: {
                  datetime: '2021-06-17T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in House',
              },
            ],
            summary:
              "[congress.gov] This bill requires various reports to Congress related to Taiwan.\n\nThe Department of State must report on (1) a strategy to advance Taiwan's meaningful participation in certain international organizations, and (2) a plan for strengthening Taiwan's community of civilian defense professionals. (China has taken actions to block Taiwan's participation in certain international organizations, such as opposing Taiwan's attendance at World Health Assembly meetings as an observer.)\n\nThe U.S. Agency for International Development must report on cooperation with Taiwan on trilateral and multilateral development initiatives.\n\nThe U.S. Trade Representative must report a legal template for establishing trade and investment agreements with Taiwan that is consistent with U.S.-Taiwan relations.\n\nThe President must report a whole-of-government strategy to enhance deterrence over a military conflict between China and Taiwan. Among other matters, the strategy must include an examination of the present and future capabilities of the United States and Taiwan to respond to potential actions by China's military, such as a naval blockade.\n\nThe Department of Defense must report on options for (1) supporting Taiwan's defense budgeting and procurement process in a way that is consistent with Taiwan's asymmetric defense strategy, and (2) strengthening Taiwan's implementation of its territorial defense force concept.",
            title: 'Taiwan Peace and Stability Act',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '台灣和平及穩定法案',
          },
        },
        id: '67546eed437319f5138beb61',
        introducedAt: {
          datetime: '2021-06-17T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '3972',
        popularityRank: null,
        statusTracker: {
          currentStep: 'introduced',
          futureSteps: [],
          passedSteps: ['introduced'],
        },
        summary:
          "[congress.gov] This bill requires various reports to Congress related to Taiwan.\n\nThe Department of State must report on (1) a strategy to advance Taiwan's meaningful participation in certain international organizations, and (2) a plan for strengthening Taiwan's community of civilian defense professionals. (China has taken actions to block Taiwan's participation in certain international organizations, such as opposing Taiwan's attendance at World Health Assembly meetings as an observer.)\n\nThe U.S. Agency for International Development must report on cooperation with Taiwan on trilateral and multilateral development initiatives.\n\nThe U.S. Trade Representative must report a legal template for establishing trade and investment agreements with Taiwan that is consistent with U.S.-Taiwan relations.\n\nThe President must report a whole-of-government strategy to enhance deterrence over a military conflict between China and Taiwan. Among other matters, the strategy must include an examination of the present and future capabilities of the United States and Taiwan to respond to potential actions by China's military, such as a naval blockade.\n\nThe Department of Defense must report on options for (1) supporting Taiwan's defense budgeting and procurement process in a way that is consistent with Taiwan's asymmetric defense strategy, and (2) strengthening Taiwan's implementation of its territorial defense force concept.",
        tags: [],
        title: 'Taiwan Peace and Stability Act',
        type: 'hr',
        updatedAt: '2024-12-07T15:51:09.665Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-11T13:32:29.592Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Thomas Dale DeLay (born April 8, 1947) is an American author and retired politician who served as a member of the United States House of Representatives. A Republican, DeLay represented Texas's 22nd congressional district from 1985 until 2006. He served as House majority leader from 2003 to 2005.",
    birthday: {
      datetime: '1947-04-08T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'D000217',
      govTrackId: 400104,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T15:34:44.526Z',
    currentParty: 'independent',
    displayName: 'Tom DeLay',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 22, Texas',
            start: {
              datetime: '1985-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2006-06-09T00:00:00.000Z',
            },
            congresses: [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: '400104',
    i18n: {
      en: {
        displayName: 'Tom DeLay',
        bio: "[Wikipedia] Thomas Dale DeLay (born April 8, 1947) is an American author and retired politician who served as a member of the United States House of Representatives. A Republican, DeLay represented Texas's 22nd congressional district from 1985 until 2006. He served as House majority leader from 2003 to 2005.",
      },
      zh: {
        displayName: null,
        bio: '[Wikipedia] 湯·德利（英語：Thomas Dale DeLay，1947年4月8日—）是美國一位已退休的政治家，所屬政黨是共和黨。從1985年至2006年他擔任來自德克薩斯州第二十二國會選區的聯邦眾議員。2003年至2005年，他擔任眾議院多數黨領袖。',
      },
    },
    id: '67546b14437319f5138be959',
    links: [],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tom_DeLay.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [
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
        congress: 106,
        congressGovUrl:
          'https://www.congress.gov/bill/106th-congress/house-bill/1838',
        createdAt: '2024-12-07T15:36:37.150Z',
        i18n: {
          en: {
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
            summary:
              "[congress.gov] Taiwan Security Enhancement Act - Directs the Secretary of Defense and the Secretaries of the military departments to make every effort to reserve additional positions for Taiwan military officers at the National Defense University and specified other professional military education schools, and at the U.S. Military Academy, the U.S. Naval Academy, and the Air Force Academy.\nDirects the Secretary of State, when considering foreign military sales to Taiwan, to take into account Taiwan's special status (including its defense needs in response to the military modernization and weapons procurement efforts by China) and make every effort to ensure it has full and timely access to price and availability data for defense articles and defense services.",
            title: 'Taiwan Security Enhancement Act',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '臺灣安全加強法',
          },
        },
        id: '67546b85437319f5138bea0c',
        introducedAt: {
          datetime: '1999-05-18T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '1838',
        popularityRank: null,
        statusTracker: {
          currentStep: 'passedHouse',
          futureSteps: [],
          passedSteps: ['introduced', 'passedHouse'],
        },
        summary:
          "[congress.gov] Taiwan Security Enhancement Act - Directs the Secretary of Defense and the Secretaries of the military departments to make every effort to reserve additional positions for Taiwan military officers at the National Defense University and specified other professional military education schools, and at the U.S. Military Academy, the U.S. Naval Academy, and the Air Force Academy.\nDirects the Secretary of State, when considering foreign military sales to Taiwan, to take into account Taiwan's special status (including its defense needs in response to the military modernization and weapons procurement efforts by China) and make every effort to ensure it has full and timely access to price and availability data for defense articles and defense services.",
        tags: [],
        title: 'Taiwan Security Enhancement Act',
        type: 'hr',
        updatedAt: '2024-12-07T15:38:37.555Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T15:34:44.526Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Edward John Markey (born July 11, 1946) is an American politician serving as the junior United States senator from Massachusetts since 2013. A member of the Democratic Party, he served 20 terms (18 full, two partial) as the U.S. representative for Massachusetts's 7th congressional district from 1976 to 2013. Before his congressional career, he was a member of the Massachusetts House of Representatives from 1973 to 1976.",
    birthday: {
      datetime: '1946-07-11T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'M000133',
      govTrackId: 400253,
      committees: [
        {
          id: '6754687cd1d49300312fe09d',
          name: 'Senate Committee on Commerce, Science, and Transportation',
          title: null,
          subcommittees: [
            {
              id: '6754687cd1d49300312fe0a5',
              name: 'Communications, Media, and Broadband',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0a6',
              name: 'Consumer Protection, Product Safety, and Data Security',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0a7',
              name: 'Oceans, Fisheries, Climate Change, and Manufacturing',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0a8',
              name: 'Space and Science',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0a9',
              name: 'Surface Transportation, Maritime, Freight, and Ports',
              title: null,
            },
          ],
        },
        {
          id: '6754687cd1d49300312fe09e',
          name: 'Senate Committee on Environment and Public Works',
          title: null,
          subcommittees: [
            {
              id: '6754687cd1d49300312fe0aa',
              name: 'Transportation and Infrastructure',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0ab',
              name: 'Chemical Safety, Waste Management, Environmental Justice, and Regulatory Oversight',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0ac',
              name: 'Clean Air, Climate, and Nuclear Safety',
              title: 'chair',
            },
            {
              id: '6754687cd1d49300312fe0ad',
              name: 'Fisheries, Water, and Wildlife',
              title: null,
            },
          ],
        },
        {
          id: '6754687cd1d49300312fe09f',
          name: 'Senate Committee on Health, Education, Labor, and Pensions',
          title: null,
          subcommittees: [
            {
              id: '6754687cd1d49300312fe0ae',
              name: 'Employment and Workplace Safety',
              title: null,
            },
            {
              id: '6754687cd1d49300312fe0af',
              name: 'Primary Health and Retirement Security',
              title: 'chair',
            },
          ],
        },
        {
          id: '6754687cd1d49300312fe0a0',
          name: 'Senate Committee on Small Business and Entrepreneurship',
          title: null,
          subcommittees: [],
        },
      ],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T15:23:40.825Z',
    currentParty: 'democratic',
    displayName: 'Edward J. Markey',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 7, Massachusetts',
            start: {
              datetime: '1975-01-14T00:00:00.000Z',
            },
            end: {
              datetime: '2013-01-03T00:00:00.000Z',
            },
            congresses: [
              94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
              108, 109, 110, 111, 112,
            ],
          },
          {
            title: 'Representative for district 5, Massachusetts',
            start: {
              datetime: '2013-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2013-07-15T00:00:00.000Z',
            },
            congresses: [113],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for Massachusetts',
            start: {
              datetime: '2013-07-16T00:00:00.000Z',
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
    govTrackId: '400253',
    i18n: {
      en: {
        displayName: 'Edward J. Markey',
        bio: "[Wikipedia] Edward John Markey (born July 11, 1946) is an American politician serving as the junior United States senator from Massachusetts since 2013. A member of the Democratic Party, he served 20 terms (18 full, two partial) as the U.S. representative for Massachusetts's 7th congressional district from 1976 to 2013. Before his congressional career, he was a member of the Massachusetts House of Representatives from 1973 to 1976.",
      },
      zh: {
        displayName: '馬基',
        bio: '[Wikipedia] 愛德華·約翰·｢艾德｣·馬基（英語：Edward John "Ed" Markey、1946年7月11日—），是一位美國民主黨政治人物，從1976年至2013年擔任麻薩諸塞州第七國會區代表，自2005年成為麻薩諸塞州聯邦參議院議員。他在美國參議院的2013年特別選舉擊敗共和黨候選人加布里埃爾·E·戈麥斯成為繼莫·科文後新任州聯邦參議員。',
      },
    },
    id: '6754687c437319f5138be6f1',
    links: [
      {
        id: '6754687cd1d49300312fe09a',
        link: 'https://x.com/SenMarkey',
        title: '@SenMarkey',
        type: 'twitter',
      },
      {
        id: '6754687cd1d49300312fe09b',
        link: 'https://facebook.com/EdJMarkey',
        title: '@EdJMarkey',
        type: 'facebook',
      },
      {
        id: '6754687cd1d49300312fe09c',
        link: 'https://youtube.com/channel/UCT1ujew5yQy2uMhGrjiKHoA',
        title: '@RepMarkey',
        type: 'youtube',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Edward_J_Markey.png',
    },
    publications: [],
    records: [],
    sponsorBills: [
      {
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
        congress: 117,
        congressGovUrl:
          'https://www.congress.gov/bill/117th-congress/senate-bill/811',
        createdAt: '2024-12-07T15:26:46.488Z',
        i18n: {
          en: {
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
            actionsOverview: [
              {
                actionAt: {
                  datetime: '2021-03-17T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in Senate',
              },
            ],
            summary:
              '[congress.gov] This bill directs the Department of State to establish a program to provide fellowships in Taiwan to qualifying U.S. government employees.',
            title: 'Taiwan Fellowship Act',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '台灣學人法案',
          },
        },
        id: '67546936437319f5138be7df',
        introducedAt: {
          datetime: '2021-03-17T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '811',
        popularityRank: null,
        statusTracker: {
          currentStep: 'introduced',
          futureSteps: [],
          passedSteps: ['introduced'],
        },
        summary:
          '[congress.gov] This bill directs the Department of State to establish a program to provide fellowships in Taiwan to qualifying U.S. government employees.',
        tags: [],
        title: 'Taiwan Fellowship Act',
        type: 's',
        updatedAt: '2024-12-19T07:48:26.028Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T15:23:40.825Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Steven Joseph Chabot (born January 22, 1953) is an American politician and lawyer who represented Ohio's 1st congressional district in the United States House of Representatives from 1995 to 2009 and again from 2011 to 2023. A member of the Republican Party, he lost his 2022 reelection bid to Democrat Greg Landsman. Until his election loss, he was the dean of Ohio's GOP delegation to the House of Representatives, after the retirement of former Speaker John Boehner.",
    birthday: {
      datetime: '1953-01-22T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'C000266',
      govTrackId: 400071,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T14:45:43.076Z',
    currentParty: 'independent',
    displayName: 'Steve Chabot',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 1, Ohio',
            start: {
              datetime: '1995-01-04T00:00:00.000Z',
            },
            end: {
              datetime: '2009-01-03T00:00:00.000Z',
            },
            congresses: [104, 105, 106, 107, 108, 109, 110],
          },
          {
            title: 'Representative for district 1, Ohio',
            start: {
              datetime: '2011-01-05T00:00:00.000Z',
            },
            end: {
              datetime: '2023-01-03T00:00:00.000Z',
            },
            congresses: [112, 113, 114, 115, 116, 117],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: '400071',
    i18n: {
      en: {
        displayName: 'Steve Chabot',
        bio: "[Wikipedia] Steven Joseph Chabot (born January 22, 1953) is an American politician and lawyer who represented Ohio's 1st congressional district in the United States House of Representatives from 1995 to 2009 and again from 2011 to 2023. A member of the Republican Party, he lost his 2022 reelection bid to Democrat Greg Landsman. Until his election loss, he was the dean of Ohio's GOP delegation to the House of Representatives, after the retirement of former Speaker John Boehner.",
      },
      zh: {
        displayName: '夏波',
        bio: '[Wikipedia] 史蒂芬·約瑟夫·夏波（英語：Steven Joseph Chabot；1953年1月22日—）是一名共和黨籍的美國政治家和律師，曾擔任聯邦眾議員。',
      },
    },
    id: '67545f97437319f5138be567',
    links: [],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Steve_Chabot.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [
      {
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
        congress: 115,
        congressGovUrl:
          'https://www.congress.gov/bill/115th-congress/house-bill/535',
        createdAt: '2024-12-07T14:49:05.882Z',
        i18n: {
          en: {
            actionsAll: [
              {
                actionAt: {
                  datetime: '2018-03-16T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: null,
                description: 'Became Public Law No: 115-135.',
              },
              {
                actionAt: {
                  datetime: '2018-03-16T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: null,
                description: 'Signed by President.',
              },
              {
                actionAt: {
                  datetime: '2018-03-05T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description: 'Presented to President.',
              },
              {
                actionAt: {
                  datetime: '2018-03-01T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'senate',
                description: 'Message on Senate action sent to the House.',
              },
              {
                actionAt: {
                  datetime: '2018-02-28T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'senate',
                description:
                  'Passed Senate without amendment by Unanimous Consent. (consideration: CR S1290-1291)',
              },
              {
                actionAt: {
                  datetime: '2018-02-12T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'senate',
                description:
                  'Placed on Senate Legislative Calendar under General Orders. Calendar No. 310.',
              },
              {
                actionAt: {
                  datetime: '2018-02-12T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'senate',
                description:
                  'Committee on Foreign Relations. Reported by Senator Corker without amendment. Without written report.',
              },
              {
                actionAt: {
                  datetime: '2018-02-07T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'senate',
                description:
                  'Committee on Foreign Relations. Ordered to be reported without amendment favorably.',
              },
              {
                actionAt: {
                  datetime: '2018-01-10T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'senate',
                description:
                  'Received in the Senate and Read twice and referred to the Committee on Foreign Relations.',
              },
              {
                actionAt: {
                  datetime: '2018-01-09T15:32:00.000Z',
                  precision: ['year', 'month', 'day', 'time'],
                },
                chamber: 'house',
                description:
                  'Motion to reconsider laid on the table Agreed to without objection.',
              },
              {
                actionAt: {
                  datetime: '2018-01-09T15:32:00.000Z',
                  precision: ['year', 'month', 'day', 'time'],
                },
                chamber: 'house',
                description:
                  'On motion to suspend the rules and pass the bill Agreed to by voice vote. (text: CR H57)',
              },
              {
                actionAt: {
                  datetime: '2018-01-09T15:12:00.000Z',
                  precision: ['year', 'month', 'day', 'time'],
                },
                chamber: 'house',
                description:
                  'DEBATE - The House proceeded with forty minutes of debate on H.R. 535.',
              },
              {
                actionAt: {
                  datetime: '2018-01-09T15:12:00.000Z',
                  precision: ['year', 'month', 'day', 'time'],
                },
                chamber: 'house',
                description:
                  'Considered under suspension of the rules. (consideration: CR H57-59)',
              },
              {
                actionAt: {
                  datetime: '2018-01-09T15:12:00.000Z',
                  precision: ['year', 'month', 'day', 'time'],
                },
                chamber: 'house',
                description:
                  'Mr. Royce (CA) moved to suspend the rules and pass the bill.',
              },
              {
                actionAt: {
                  datetime: '2017-10-12T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description:
                  'Ordered to be Reported by Voice Vote. (Action By: Committee on Foreign Affairs)',
              },
              {
                actionAt: {
                  datetime: '2017-10-12T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description:
                  'Committee Consideration and Mark-up Session Held. (Action By: Committee on Foreign Affairs)',
              },
              {
                actionAt: {
                  datetime: '2017-06-15T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description:
                  'Forwarded by Subcommittee to Full Committee by Voice Vote . (Action By: House Foreign Affairs Subcommittee on Asia and the Pacific)',
              },
              {
                actionAt: {
                  datetime: '2017-06-15T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description:
                  'Subcommittee Consideration and Mark-up Session Held. (Action By: House Foreign Affairs Subcommittee on Asia and the Pacific)',
              },
              {
                actionAt: {
                  datetime: '2017-02-16T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description:
                  'Referred to the Subcommittee on Asia and the Pacific. (Action By: Committee on Foreign Affairs)',
              },
              {
                actionAt: {
                  datetime: '2017-01-13T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description:
                  'Referred to the House Committee on Foreign Affairs.',
              },
              {
                actionAt: {
                  datetime: '2017-01-13T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                chamber: 'house',
                description: 'Introduced in House',
              },
            ],
            actionsOverview: [
              {
                actionAt: {
                  datetime: '2018-03-16T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Became Public Law No: 115-135.',
              },
              {
                actionAt: {
                  datetime: '2018-03-16T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Signed by President.',
              },
              {
                actionAt: {
                  datetime: '2018-03-05T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Presented to President.',
              },
              {
                actionAt: {
                  datetime: '2018-02-28T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description:
                  'Passed/agreed to in Senate: Passed Senate without amendment by Unanimous Consent.(consideration: CR S1290-1291)',
              },
              {
                actionAt: {
                  datetime: '2018-02-12T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description:
                  'Committee on Foreign Relations. Reported by Senator Corker without amendment. Without written report.',
              },
              {
                actionAt: {
                  datetime: '2018-01-09T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description:
                  'Passed/agreed to in House: On motion to suspend the rules and pass the bill Agreed to by voice vote.(text: CR H57)',
              },
              {
                actionAt: {
                  datetime: '2017-01-13T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in House',
              },
            ],
            summary:
              '[congress.gov] This bill expresses the sense of Congress that the U.S. government should encourage visits between U.S. and Taiwanese officials at all levels.',
            title:
              'An act to encourage visits between the United States and Taiwan at all levels, and for other purposes',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '台灣旅行法',
          },
        },
        id: '67546061437319f5138be67c',
        introducedAt: {
          datetime: '2017-01-13T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '535',
        popularityRank: null,
        statusTracker: {
          currentStep: 'becomeLaw',
          futureSteps: [],
          passedSteps: [
            'introduced',
            'passedHouse',
            'passedSenate',
            'toPresident',
            'becomeLaw',
          ],
        },
        summary:
          '[congress.gov] This bill expresses the sense of Congress that the U.S. government should encourage visits between U.S. and Taiwanese officials at all levels.',
        tags: [],
        title:
          'An act to encourage visits between the United States and Taiwan at all levels, and for other purposes',
        type: 'hr',
        updatedAt: '2024-12-07T14:49:05.882Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T14:45:43.076Z',
    viewCount: 0,
    votes: [],
  },
  {
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
            congresses: [109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
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
        categories: [],
        congress: 118,
        congressGovUrl:
          'https://www.congress.gov/bill/118th-congress/senate-bill/1457',
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
        updatedAt: '2024-12-19T07:32:54.329Z',
      },
      {
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
        congress: 113,
        congressGovUrl:
          'https://www.congress.gov/bill/113th-congress/senate-joint-resolution/31',
        createdAt: '2024-12-07T16:29:33.712Z',
        i18n: {
          en: {
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
            actionsOverview: [
              {
                actionAt: {
                  datetime: '2014-02-10T00T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in Senate',
              },
            ],
            summary:
              '[congress.gov] Favors the proposed agreement for peaceful nuclear energy cooperation between the American Institute in Taiwan and the Taipei Economic and Cultural Representative Office in the United States transmitted to Congress by the President on January 7, 2014.',
            title:
              'A joint resolution relating to the approval of the proposed Agreement for Cooperation Between the American Institute in Taiwan and the Taipei Economic and Cultural Representatives Office in the United States Concerning Peaceful Uses of Nuclear Energy.',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '關於AIT及TECRO在安全使用核能的議題上合作的聯合決議案',
          },
        },
        id: '675477ed437319f5138bef66',
        introducedAt: {
          datetime: '2014-02-10T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '31',
        popularityRank: null,
        statusTracker: {
          currentStep: 'introduced',
          futureSteps: [],
          passedSteps: ['introduced'],
        },
        summary:
          '[congress.gov] Favors the proposed agreement for peaceful nuclear energy cooperation between the American Institute in Taiwan and the Taipei Economic and Cultural Representative Office in the United States transmitted to Congress by the President on January 7, 2014.',
        tags: [],
        title:
          'A joint resolution relating to the approval of the proposed Agreement for Cooperation Between the American Institute in Taiwan and the Taipei Economic and Cultural Representatives Office in the United States Concerning Peaceful Uses of Nuclear Energy.',
        type: 'sjres',
        updatedAt: '2024-12-07T16:29:33.712Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T16:27:28.282Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Clement John Zablocki (November 18, 1912 – December 3, 1983) was a Polish American politician from Milwaukee, Wisconsin. He was one of Wisconsin's longest-serving members of the U.S. House of Representatives, representing Wisconsin's 4th congressional district for 18 terms, from 1949 until his death in 1983.",
    birthday: {
      datetime: '1912-11-18T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'Z000001',
      govTrackId: 411994,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T14:19:42.419Z',
    currentParty: 'independent',
    displayName: 'Clement J. Zablocki',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 4, Wisconsin',
            start: {
              datetime: '1949-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '1983-12-03T00:00:00.000Z',
            },
            congresses: [
              81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
              97,
            ],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: '411994',
    i18n: {
      en: {
        displayName: 'Clement J. Zablocki',
        bio: "[Wikipedia] Clement John Zablocki (November 18, 1912 – December 3, 1983) was a Polish American politician from Milwaukee, Wisconsin. He was one of Wisconsin's longest-serving members of the U.S. House of Representatives, representing Wisconsin's 4th congressional district for 18 terms, from 1949 until his death in 1983.",
      },
      zh: {
        displayName: null,
        bio: '[Wikipedia] 克萊門特·約翰·扎布洛基（英語：Clement John Zablocki；1912年11月18日—1983年12月3日），是一名美國民主黨籍政治家。曾任美國眾議院外交委員會主席、美國聯邦眾議員。',
      },
    },
    id: '6754597e437319f5138be2be',
    links: [],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Clement_J_Zablocki.png',
    },
    publications: [],
    records: [],
    sponsorBills: [
      {
        categories: [],
        congress: 96,
        congressGovUrl:
          'https://www.congress.gov/bill/96th-congress/house-bill/2479',
        createdAt: '2024-12-07T14:23:04.726Z',
        i18n: {
          en: {
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
            summary:
              "[congress.gov] Taiwan Relations Act - Declares it to be the policy of the United States to preserve and promote extensive, close, and friendly commercial, cultural, and other relations between the people of the United States and the people on Taiwan, as well as the people on the China mainland and all other people of the Western Pacific area. Declares that peace and stability in the area are in the political, security, and economic interests of the United States, and are matters of international concern. States that the United States decision to establish diplomatic relations with the People's Republic of China rests upon the expectation that the future of Taiwan will be determined by peaceful means and that any effort to determine the future of Taiwan by other than peaceful means, including by boycotts or embargoes is considered a threat to the peace and security of the Western Pacific area and of grave concern to the United States. States that the United States shall provide Taiwan with arms of a defensive character and shall maintain the capacity of the United States to resist any resort to force or other forms of coercion that would jeopardize the security, or social or economic system, of the people of Taiwan.",
            title: 'Taiwan Relations Act',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '台灣關係法',
          },
        },
        id: '67545a48437319f5138be376',
        introducedAt: {
          datetime: '1979-02-28T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '2479',
        popularityRank: null,
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
          "[congress.gov] Taiwan Relations Act - Declares it to be the policy of the United States to preserve and promote extensive, close, and friendly commercial, cultural, and other relations between the people of the United States and the people on Taiwan, as well as the people on the China mainland and all other people of the Western Pacific area. Declares that peace and stability in the area are in the political, security, and economic interests of the United States, and are matters of international concern. States that the United States decision to establish diplomatic relations with the People's Republic of China rests upon the expectation that the future of Taiwan will be determined by peaceful means and that any effort to determine the future of Taiwan by other than peaceful means, including by boycotts or embargoes is considered a threat to the peace and security of the Western Pacific area and of grave concern to the United States. States that the United States shall provide Taiwan with arms of a defensive character and shall maintain the capacity of the United States to resist any resort to force or other forms of coercion that would jeopardize the security, or social or economic system, of the people of Taiwan.",
        tags: [],
        title: 'Taiwan Relations Act',
        type: 'hr',
        updatedAt: '2024-12-07T14:23:04.726Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T14:19:42.419Z',
    viewCount: 0,
    votes: [],
  },
  {
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
        congress: 117,
        congressGovUrl:
          'https://www.congress.gov/bill/117th-congress/senate-bill/811',
        createdAt: '2024-12-07T15:26:46.488Z',
        i18n: {
          en: {
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
            actionsOverview: [
              {
                actionAt: {
                  datetime: '2021-03-17T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
                description: 'Introduced in Senate',
              },
            ],
            summary:
              '[congress.gov] This bill directs the Department of State to establish a program to provide fellowships in Taiwan to qualifying U.S. government employees.',
            title: 'Taiwan Fellowship Act',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '台灣學人法案',
          },
        },
        id: '67546936437319f5138be7df',
        introducedAt: {
          datetime: '2021-03-17T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '811',
        popularityRank: null,
        statusTracker: {
          currentStep: 'introduced',
          futureSteps: [],
          passedSteps: ['introduced'],
        },
        summary:
          '[congress.gov] This bill directs the Department of State to establish a program to provide fellowships in Taiwan to qualifying U.S. government employees.',
        tags: [],
        title: 'Taiwan Fellowship Act',
        type: 's',
        updatedAt: '2024-12-19T07:48:26.028Z',
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
        type: 'twitter',
      },
      {
        id: '6753ea9aa31c960031c15de2',
        link: 'https://facebook.com/SenatorMarcoRubio',
        title: '@SenatorMarcoRubio',
        type: 'facebook',
      },
      {
        id: '6753ea9aa31c960031c15de3',
        link: 'https://youtube.com/channel/UCh8t7sV_DBKz4A-RkL9feyg',
        title: '@SenatorMarcoRubio',
        type: 'youtube',
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
        title: 'American Dreams: Restoring Economic Opportunity for Everyone',
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
        categories: [],
        congress: 118,
        congressGovUrl:
          'https://www.congress.gov/bill/118th-congress/senate-bill/3110',
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
    ],
    tags: [],
    updatedAt: '2024-12-07T06:26:34.406Z',
    viewCount: 0,
    votes: [],
  },
  {
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
        type: 'twitter',
      },
      {
        id: '6753e68ea31c960031c15dd7',
        link: 'https://facebook.com/repjasonsmith',
        title: '@repjasonsmith',
        type: 'facebook',
      },
      {
        id: '6753e68ea31c960031c15dd8',
        link: 'https://youtube.com/channel/UCzj9-27Lr4gcqopmZAobXXg',
        title: '@RepJasonSmith',
        type: 'youtube',
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
        categories: [],
        congress: 118,
        congressGovUrl:
          'https://www.congress.gov/bill/118th-congress/house-bill/5988',
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
    ],
    tags: [],
    updatedAt: '2024-12-07T06:09:18.796Z',
    viewCount: 0,
    votes: [],
  },
  {
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
            congresses: [109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
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
        type: 'twitter',
      },
      {
        id: '6753dafca31c960031c15dd0',
        link: 'https://www.facebook.com/mcmorrisrodgers',
        title: '@mcmorrisrodgers',
        type: 'facebook',
      },
      {
        id: '6753dafca31c960031c15dd1',
        link: 'https://www.youtube.com/channel/UCRp0lwIxAhq2Ia9_YgRWUkg',
        title: 'mcmorrisrodgers',
        type: 'youtube',
      },
      {
        id: '6753dafca31c960031c15dd2',
        link: 'https://instagram.com/cathymcmorris',
        title: '@cathymcmorris',
        type: 'instagram',
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
                description:
                  'S.Amdt.1578 SA 1578 fell when SA 1577 was tabled.',
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
                description:
                  'S.Amdt.1580 SA 1580 fell when SA 1579 was tabled.',
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
                description:
                  'Considered by Senate. (consideration: CR S859-953)',
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
                description:
                  'Considered by Senate. (consideration: CR S838-856)',
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
                description:
                  'Considered by Senate. (consideration: CR S805-831)',
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
    ],
    tags: [],
    updatedAt: '2024-12-09T03:07:33.284Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Cory Scott Gardner (born August 22, 1974) is an American attorney and politician who served as a United States senator from Colorado from 2015 to 2021. A Republican, he was the U.S. representative for Colorado's 4th congressional district from 2011 to 2015 and a member of the Colorado House of Representatives from 2005 to 2011.",
    birthday: {
      datetime: '1974-08-22T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'G000562',
      govTrackId: 412406,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-07T04:44:25.885Z',
    currentParty: 'independent',
    displayName: 'Cory Gardner',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 4, Colorado',
            start: {
              datetime: '2011-01-05T00:00:00.000Z',
            },
            end: {
              datetime: '2015-01-03T00:00:00.000Z',
            },
            congresses: [112, 113],
          },
        ],
      },
      {
        isCurrent: false,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for Colorado',
            start: {
              datetime: '2015-01-06T00:00:00.000Z',
            },
            end: {
              datetime: '2021-01-03T00:00:00.000Z',
            },
            congresses: [114, 115, 116],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: '412406',
    i18n: {
      en: {
        displayName: 'Cory Gardner',
        bio: "[Wikipedia] Cory Scott Gardner (born August 22, 1974) is an American attorney and politician who served as a United States senator from Colorado from 2015 to 2021. A Republican, he was the U.S. representative for Colorado's 4th congressional district from 2011 to 2015 and a member of the Colorado House of Representatives from 2005 to 2011.",
      },
      zh: {
        displayName: '賈德納',
        bio: '[Wikipedia] 柯瑞·史考特·賈德納（英語：Cory Scott Gardner；1974年8月22日—），是美國一位共和黨籍的政治人物，曾任科羅拉多州聯邦參議員和聯邦眾議員，以及科羅拉多州眾議院議員。',
      },
    },
    id: '6753d2a91e937e031b1b2fcf',
    links: [],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Cory_Gardner.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [
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
        congress: 116,
        congressGovUrl:
          'https://www.congress.gov/bill/116th-congress/senate-bill/1678',
        createdAt: '2024-12-07T04:48:21.319Z',
        i18n: {
          en: {
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
            summary:
              "[congress.gov] This bill requires the Department of State to annually report to Congress on steps the State Department has taken to help strengthen Taiwan's diplomatic relationships and partnerships around the world. (Taiwan is self-governing, but China considers it a renegade province and has taken actions to encourage countries and international organizations to limit or cut off relations with Taiwan.)",
            title:
              'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '2019年台灣盟邦國際保障與強化倡議法 (台北法)',
          },
        },
        id: '6753d3951e937e031b1b3091',
        introducedAt: {
          datetime: '2019-05-23T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '1678',
        popularityRank: null,
        statusTracker: {
          currentStep: 'becomeLaw',
          futureSteps: [],
          passedSteps: [
            'introduced',
            'passedSenate',
            'passedHouse',
            'resolvingDifferences',
            'toPresident',
            'becomeLaw',
          ],
        },
        summary:
          "[congress.gov] This bill requires the Department of State to annually report to Congress on steps the State Department has taken to help strengthen Taiwan's diplomatic relationships and partnerships around the world. (Taiwan is self-governing, but China considers it a renegade province and has taken actions to encourage countries and international organizations to limit or cut off relations with Taiwan.)",
        tags: [],
        title:
          'Taiwan Allies International Protection and Enhancement Initiative (TAIPEI) Act of 2019',
        type: 's',
        updatedAt: '2024-12-07T04:48:21.319Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T04:44:25.885Z',
    viewCount: 0,
    votes: [],
  },
  {
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
        type: 'other',
      },
      {
        id: '6753cf37a31c960031c15dbe',
        link: 'https://x.com/GerryConnolly',
        title: '@GerryConnolly',
        type: 'twitter',
      },
      {
        id: '6753cf37a31c960031c15dbf',
        link: 'https://www.facebook.com/CongressmanGerryConnolly',
        title: '@CongressmanGerryConnolly',
        type: 'facebook',
      },
      {
        id: '6753cf37a31c960031c15dc0',
        link: 'https://www.youtube.com/channel/UC4WG9PlmoOeSLIuyVjs-RSA',
        title: 'repconnolly',
        type: 'youtube',
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
        updatedAt: '2024-12-19T07:32:44.649Z',
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
    ],
    tags: [],
    updatedAt: '2024-12-07T04:29:43.363Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 1,
    bio: "[Wikipedia] Timothy John Ryan (born July 16, 1973) is an American politician who served as a U.S. representative for Ohio from 2003 to 2023. A member of the Democratic Party, he represented Ohio's 13th congressional district from 2013 to 2023, having previously represented Ohio's 17th congressional district from 2003 to 2013. Ryan's district included a large swath of northeastern Ohio, from Youngstown to Akron. He was the Democratic nominee in the 2022 United States Senate election in Ohio, which he lost to JD Vance.",
    birthday: {
      datetime: '1973-07-16T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'R000577',
      govTrackId: 400352,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T10:13:33.858Z',
    currentParty: 'independent',
    displayName: 'Tim Ryan',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 17, Ohio',
            start: {
              datetime: '2003-01-07T00:00:00.000Z',
            },
            end: {
              datetime: '2013-01-03T00:00:00.000Z',
            },
            congresses: [108, 109, 110, 111, 112],
          },
          {
            title: 'Representative for district 13, Ohio',
            start: {
              datetime: '2013-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2023-01-03T00:00:00.000Z',
            },
            congresses: [113, 114, 115, 116, 117],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: '400352',
    i18n: {
      en: {
        displayName: 'Tim Ryan',
        bio: "[Wikipedia] Timothy John Ryan (born July 16, 1973) is an American politician who served as a U.S. representative for Ohio from 2003 to 2023. A member of the Democratic Party, he represented Ohio's 13th congressional district from 2013 to 2023, having previously represented Ohio's 17th congressional district from 2003 to 2013. Ryan's district included a large swath of northeastern Ohio, from Youngstown to Akron. He was the Democratic nominee in the 2022 United States Senate election in Ohio, which he lost to JD Vance.",
      },
      zh: {
        displayName: '萊恩',
        bio: '[Wikipedia] 提摩西·約翰·瑞安（英語：Timothy John Ryan，1973年7月16日—）是一名美國政治人物，2003年-2023年期間擔任俄亥俄州聯邦眾議員。他是民主黨籍，自2013年起代表俄亥俄州第13國會選區，在重新劃分選區前曾代表俄亥俄州第17國會選區。瑞安的選區現在包括俄亥俄州東北部的一大片地區，從揚斯敦到亞克朗。他是2022年俄亥俄州聯邦參議員選舉中的民主黨提名人。',
      },
    },
    id: '6752ce4d1e937e031b1b2222',
    links: [],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan.png',
    },
    publications: [
      {
        id: '6753c2594b046d7ce13a5aa4',
        title:
          'A Mindful Nation: How a Simple Practice Can Help Us Reduce Stress, Improve Performance, and Recapture the American Spirit. Carlsbad',
        link: null,
      },
    ],
    records: [],
    sponsorBills: [
      {
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
        congress: 117,
        congressGovUrl:
          'https://www.congress.gov/bill/117th-congress/house-bill/4346',
        createdAt: '2024-12-06T10:19:11.796Z',
        i18n: {
          en: {
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
            summary:
              '[congress.gov] This act provides funds to support the domestic production of semiconductors and authorizes various programs and activities of the federal science agencies.',
            title: 'CHIPS and Science Act',
          },
          zh: {
            actionsAll: null,
            actionsOverview: null,
            summary: null,
            title: '晶片法案',
          },
        },
        id: '6752cf9f1e937e031b1b23d5',
        introducedAt: {
          datetime: '2021-07-01T00:00:00.000Z',
          precision: ['year', 'month', 'day'],
        },
        latestActionTime: null,
        number: '4346',
        popularityRank: null,
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
          '[congress.gov] This act provides funds to support the domestic production of semiconductors and authorizes various programs and activities of the federal science agencies.',
        tags: [],
        title: 'CHIPS and Science Act',
        type: 'hr',
        updatedAt: '2024-12-19T07:31:32.103Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-07T03:40:07.454Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: "[Wikipedia] Ian M. Easton is an American security policy analyst currently serving as an associate professor at the U.S. Naval War College's China Maritime Studies Institute. He formerly was a senior director and research fellow at the Project 2049 Institute.",
    birthday: {
      datetime: null,
      precision: [],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T07:57:05.436Z',
    currentParty: 'independent',
    displayName: 'Ian Easton',
    experiences: [
      {
        isCurrent: true,
        category: 'Expert',
        company:
          'China Maritime Studies Institute (CMSI), U.S. Naval War College',
        positions: [
          {
            title: 'Associate Professor',
            start: {
              datetime: '2023-01-01T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: false,
        category: 'Expert',
        company: 'Project 2049 Institute',
        positions: [
          {
            title: 'Senior Director',
            start: {
              datetime: '2018-01-01T00:00:00.000Z',
            },
            end: {
              datetime: '2023-01-01T00:00:00.000Z',
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Ian Easton',
        bio: "[Wikipedia] Ian M. Easton is an American security policy analyst currently serving as an associate professor at the U.S. Naval War College's China Maritime Studies Institute. He formerly was a senior director and research fellow at the Project 2049 Institute.",
      },
      zh: {
        displayName: '易思安',
        bio: '[Wikipedia] 易思安（英語：Ian M. Easton），美國國際政治學者，2049計畫研究所高級研究主任，著有《中共攻台大解密》等書。',
      },
    },
    id: '6752ae512ddcf95deb375bcb',
    links: [
      {
        id: '6752ae51e3d2f20031988647',
        link: 'https://x.com/Ian_M_Easton',
        title: '@Ian_M_Easton',
        type: 'twitter',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ian_Easton.png',
    },
    publications: [
      {
        id: '6752ae51e3d2f20031988645',
        title:
          "The Chinese Invasion Threat: Taiwan's Defense and American Strategy in Asia",
        link: null,
      },
      {
        id: '6752ae51e3d2f20031988646',
        title:
          "The Final Struggle: Inside China's Global Strategy. Eastbridge Books",
        link: null,
      },
    ],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T07:57:05.436Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Kurt Michael Campbell (born August 27, 1957) is an American diplomat and businessman serving as the United States deputy secretary of state since 2024. He previously served as National Security Council coordinator for the Indo-Pacific from 2021 to 2024. In this capacity, Campbell had been referred to as the Biden administration\'s \\"Asia coordinator\\" or \\"Asia czar\\"—chief architect of Joe Biden\'s Asia strategy.',
    birthday: {
      datetime: '1957-08-27T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T07:54:54.087Z',
    currentParty: 'independent',
    displayName: 'Kurt Campbell',
    experiences: [
      {
        isCurrent: true,
        category: 'Official',
        company: 'Department of State',
        positions: [
          {
            title: 'Deputy Secretary',
            start: {
              datetime: '2024-02-12T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
          {
            title:
              'Assistant Secretary of State for East Asian and Pacific Affairs',
            start: {
              datetime: '2009-06-29T00:00:00.000Z',
            },
            end: {
              datetime: '2013-02-08T00:00:00.000Z',
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: false,
        category: 'Official',
        company: 'National Security Council',
        positions: [
          {
            title: 'Coordinator for the Indo-Pacific',
            start: {
              datetime: '2021-01-20T00:00:00.000Z',
            },
            end: {
              datetime: '2024-02-12T00:00:00.000Z',
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Kurt Campbell',
        bio: '[Wikipedia] Kurt Michael Campbell (born August 27, 1957) is an American diplomat and businessman serving as the United States deputy secretary of state since 2024. He previously served as National Security Council coordinator for the Indo-Pacific from 2021 to 2024. In this capacity, Campbell had been referred to as the Biden administration\'s \\"Asia coordinator\\" or \\"Asia czar\\"—chief architect of Joe Biden\'s Asia strategy.',
      },
      zh: {
        displayName: '康貝爾',
        bio: '[Wikipedia] 庫爾特·康貝爾（英語：Kurt Michael Campbell, 1957年8月27日—）是一位美國的外交官和企業家，現任美國副國務卿、曾任白宮國安會印太事務協調官，媒體將他稱為印太沙皇、亞洲沙皇。',
      },
    },
    id: '6752adce2ddcf95deb375935',
    links: [
      {
        id: '6752adcee3d2f2003198863f',
        link: 'https://x.com/deputysecstate',
        title: '@deputysecstate',
        type: 'twitter',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Kurt_Campbell.png',
    },
    publications: [],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T07:54:54.087Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Laura Rosenberger (born in 1979) is an American diplomat currently serving as Chair of the American Institute in Taiwan (AIT). She formerly served as Special Assistant to the President and Senior Director for China and Taiwan at the National Security Council in the Biden administration.',
    birthday: {
      datetime: '1979-01-01T00:00:00.000Z',
      precision: ['year'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T07:52:31.687Z',
    currentParty: 'independent',
    displayName: 'Laura Rosenberger',
    experiences: [
      {
        isCurrent: true,
        category: 'Official',
        company: 'American Institute in Taiwan',
        positions: [
          {
            title: 'Chair',
            start: {
              datetime: '2023-03-01T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'female',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Laura Rosenberger',
        bio: '[Wikipedia] Laura Rosenberger (born in 1979) is an American diplomat currently serving as Chair of the American Institute in Taiwan (AIT). She formerly served as Special Assistant to the President and Senior Director for China and Taiwan at the National Security Council in the Biden administration.',
      },
      zh: {
        displayName: '羅森伯格',
        bio: '[Wikipedia] 蘿拉·羅森伯格（英語：Laura Rosenberger，1979年—），是美國資深外交官、前國安會官員，曾擔任2016年希拉蕊團隊的外交政策顧問、美國副國務卿安東尼·布林肯的幕僚長、美國國務院中國辦公室雙邊政治組長、美國國安會中國與韓國事務主任、國安會中國及台灣事務資深主任。',
      },
    },
    id: '6752ad3f2ddcf95deb3756bb',
    links: [
      {
        id: '6752ad3fe3d2f2003198863b',
        link: 'https://x.com/boardchairait',
        title: '@boardchairait',
        type: 'twitter',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Laura_Rosenberger.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T07:52:31.687Z',
    viewCount: 0,
    votes: [],
  },
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
      },
      {
        id: '6752ac8de3d2f20031988630',
        link: 'https://facebook.com/RepAnnWagner',
        title: '@RepAnnWagner',
        type: 'facebook',
      },
      {
        id: '6752ac8de3d2f20031988631',
        link: 'https://youtube.com/channel/UCy2v2DXXvQnbRc8Zx77Dnsg',
        title: '@annwagner160',
        type: 'youtube',
      },
      {
        id: '6752ac8de3d2f20031988632',
        link: 'https://instagram.com/repannwagner',
        title: '@repannwagner',
        type: 'instagram',
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
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
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
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
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
    ],
    tags: [],
    updatedAt: '2024-12-06T07:43:56.020Z',
    viewCount: 0,
    votes: [],
  },
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
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
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
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
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
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
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
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
  {
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
        updatedAt: '2024-12-19T07:46:49.965Z',
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
        type: 'twitter',
      },
      {
        id: '6752959f363aa0029d97df62',
        link: 'https://www.facebook.com/CongressmanBradSherman',
        title: '@CongressmanBradSherman',
        type: 'facebook',
      },
      {
        id: '675295a9363aa0029d97df63',
        link: 'https://www.youtube.com/channel/UCPisrz6-SLwVy2l9Mcy8kug',
        title: 'Congressman Brad Sherman',
        type: 'youtube',
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
  {
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
        type: 'twitter',
      },
      {
        id: '675293e0f5009a00321fea46',
        link: 'https://www.facebook.com/RepFrenchHill',
        title: '@RepFrenchHill',
        type: 'facebook',
      },
      {
        id: '675293e0f5009a00321fea47',
        link: 'https://www.instagram.com/repfrenchhill',
        title: '@repfrenchhill',
        type: 'instagram',
      },
      {
        id: '675293e0f5009a00321fea48',
        link: 'https://www.youtube.com/channel/UCT8uWroJtkwSsCJlVg0IKvQ',
        title: '@RepFrenchHill',
        type: 'youtube',
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
        updatedAt: '2024-12-19T07:46:49.965Z',
      },
    ],
    tags: [],
    updatedAt: '2024-12-06T06:05:50.815Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Joseph Robinette Biden Jr. (born November 20, 1942) is an American politician who has been the 46th and current president of the United States since 2021. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under President Barack Obama and represented Delaware in the U.S. Senate from 1973 to 2009.',
    birthday: {
      datetime: '1942-11-20T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:59:43.883Z',
    currentParty: 'independent',
    displayName: 'Joe Biden',
    experiences: [
      {
        isCurrent: true,
        category: 'Official',
        company: 'United States',
        positions: [
          {
            title: 'President',
            start: {
              datetime: '2021-01-20T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
          {
            title: 'Vice President',
            start: {
              datetime: '2009-01-20T00:00:00.000Z',
            },
            end: {
              datetime: '2017-01-20T00:00:00.000Z',
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: false,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for Delaware',
            start: {
              datetime: '1973-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2009-01-15T00:00:00.000Z',
            },
            congresses: [
              93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
              107, 108, 109, 110, 111,
            ],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Joe Biden',
        bio: '[Wikipedia] Joseph Robinette Biden Jr. (born November 20, 1942) is an American politician who has been the 46th and current president of the United States since 2021. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under President Barack Obama and represented Delaware in the U.S. Senate from 1973 to 2009.',
      },
      zh: {
        displayName: '拜登',
        bio: '[Wikipedia] 小約瑟夫·羅賓內特·拜登（英語：Joseph Robinette Biden Jr.；1942年11月20日—），通稱喬·拜登（Joe Biden），現任美國總統（第46任），曾於2009年至2017年擔任第47任美國副總統，1973年至2009年間擔任德拉瓦州聯邦參議員，是美國政壇資深政治人物，亦是美國政治史上最年長的在任總統。',
      },
    },
    id: '675292cf4040f8e6920debb1',
    links: [
      {
        id: '675292cff5009a00321fea3a',
        link: 'https://x.com/joebiden',
        title: '@joebiden',
        type: 'twitter',
      },
      {
        id: '675292cff5009a00321fea3b',
        link: 'https://www.instagram.com/joebiden',
        title: '@joebiden',
        type: 'instagram',
      },
      {
        id: '675292cff5009a00321fea3c',
        link: 'https://www.facebook.com/joebiden',
        title: '@joebiden',
        type: 'facebook',
      },
      {
        id: '675292cff5009a00321fea3d',
        link: 'https://www.youtube.com/channel/UCWNpXitY8eJ-ku6M-v25MKw',
        title: '@JoeBiden',
        type: 'youtube',
      },
      {
        id: '675292cff5009a00321fea3e',
        link: 'https://x.com/potus',
        title: '@potus',
        type: 'twitter',
      },
      {
        id: '675292cff5009a00321fea3f',
        link: 'https://www.instagram.com/potus',
        title: '@potus',
        type: 'instagram',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Joe_Biden.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:59:43.883Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Elon Reeve Musk (born June 28, 1971) is a businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. His other involvements include ownership of X Corp., the company that operates the social media platform X (formerly Twitter), and his role in the founding of the Boring Company, xAI, Neuralink, and OpenAI. In November 2024, United States president-elect Donald Trump appointed Musk as the co-chair of the proposed Department of Government Efficiency (DOGE) in the second Trump administration. Musk is the wealthiest individual in the world; as of November 2024, Forbes estimates his net worth to be US$304 billion.',
    birthday: {
      datetime: '1971-06-28T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:25:12.753Z',
    currentParty: 'independent',
    displayName: 'Elon Musk',
    experiences: [
      {
        isCurrent: true,
        category: 'Other',
        company: 'SpaceX',
        positions: [
          {
            title: 'Founder',
            start: {
              datetime: '2002-03-14T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Other',
        company: 'Tesla',
        positions: [
          {
            title: 'Chief Executive Officer',
            start: {
              datetime: '2008-01-01T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Other',
        company: 'X Corp.',
        positions: [
          {
            title: 'Founder',
            start: {
              datetime: '2023-03-09T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Other',
        company: 'Neuralink',
        positions: [
          {
            title: 'Founder',
            start: {
              datetime: '2016-06-21T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
      {
        isCurrent: false,
        category: 'Other',
        company: 'OpenAI',
        positions: [
          {
            title: 'Co-Founder',
            start: {
              datetime: '2015-12-11T00:00:00.000Z',
            },
            end: {
              datetime: '2018-01-01T00:00:00.000Z',
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Elon Musk',
        bio: '[Wikipedia] Elon Reeve Musk (born June 28, 1971) is a businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. His other involvements include ownership of X Corp., the company that operates the social media platform X (formerly Twitter), and his role in the founding of the Boring Company, xAI, Neuralink, and OpenAI. In November 2024, United States president-elect Donald Trump appointed Musk as the co-chair of the proposed Department of Government Efficiency (DOGE) in the second Trump administration. Musk is the wealthiest individual in the world; as of November 2024, Forbes estimates his net worth to be US$304 billion.',
      },
      zh: {
        displayName: '馬斯克',
        bio: '[Wikipedia] 伊隆·里夫·馬斯克（英語：Elon Reeve Musk，1971年6月28日—），是一名企業家、商業大亨、英國皇家學會會士、美國工程院院士。他是SpaceX的創始人、董事長、執行長、首席工程師，特斯拉投資人、執行長、產品設計師、前董事長，無聊公司創始人，Neuralink、OpenAI聯合創始人，同時也是X公司的技術長、董事長。2022年馬斯克以2190億美元財富成為世界首富。',
      },
    },
    id: '67528ab84040f8e6920deb4e',
    links: [
      {
        id: '67528ab8f5009a00321fea32',
        link: 'https://x.com/elonmusk',
        title: '@elonmusk',
        type: 'twitter',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Elon_Musk.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-11T10:14:52.125Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Timothy James Walz (born April 6, 1964) is an American politician, former educator, and retired United States Army non-commissioned officer who has served since 2019 as the 41st governor of Minnesota. He was a member of the U.S. House of Representatives from 2007 to 2019, and the ranking member of the House Veterans Affairs Committee from 2017 to 2019. Walz was the Democratic nominee for vice president in the 2024 U.S. presidential election.',
    birthday: {
      datetime: '1964-04-06T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:21:48.553Z',
    currentParty: 'independent',
    displayName: 'Tim Walz',
    experiences: [
      {
        isCurrent: false,
        category: 'House Representative',
        company: 'United States House of Representatives',
        positions: [
          {
            title: 'Representative for district 1, Minnesota',
            start: {
              datetime: '2007-01-04T00:00:00.000Z',
            },
            end: {
              datetime: '2019-01-03T00:00:00.000Z',
            },
            congresses: [110, 111, 112, 113, 114, 115],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Official',
        company: 'State of Minnesota',
        positions: [
          {
            title: 'Governor',
            start: {
              datetime: '2019-01-07T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'male',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Tim Walz',
        bio: '[Wikipedia] Timothy James Walz (born April 6, 1964) is an American politician, former educator, and retired United States Army non-commissioned officer who has served since 2019 as the 41st governor of Minnesota. He was a member of the U.S. House of Representatives from 2007 to 2019, and the ranking member of the House Veterans Affairs Committee from 2017 to 2019. Walz was the Democratic nominee for vice president in the 2024 U.S. presidential election.',
      },
      zh: {
        displayName: '華茲',
        bio: '[Wikipedia] 提摩西·詹姆士·華茲（英語：Timothy James Walz；1964年4月6日），美國民主黨籍政治人物、前美國陸軍士官長和教師，現任明尼蘇達州州長。華茲曾經在美國國民警衛隊服役24年。曾於2007年至2019年擔任明尼蘇達州第一國會選區聯邦眾議員。',
      },
    },
    id: '675289ec4040f8e6920deaef',
    links: [
      {
        id: '675289ecf5009a00321fea25',
        link: 'https://x.com/tim_walz',
        title: '@tim_walz',
        type: 'twitter',
      },
      {
        id: '675289ecf5009a00321fea26',
        link: 'https://www.facebook.com/govwalz',
        title: '@govwalz',
        type: 'facebook',
      },
      {
        id: '675289ecf5009a00321fea27',
        link: 'https://www.youtube.com/channel/UCOOyPFRNz-_VWX6r_2jHW6g',
        title: 'Tim Walz',
        type: 'youtube',
      },
      {
        id: '675289ecf5009a00321fea28',
        link: 'https://www.facebook.com/GovTimWalz',
        title: '@GovTimWalz',
        type: 'facebook',
      },
      {
        id: '675289ecf5009a00321fea29',
        link: 'https://www.instagram.com/mngovernor',
        title: '@mngovernor',
        type: 'instagram',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Walz.jpg',
    },
    publications: [],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:21:48.553Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: "[Wikipedia] Kamala Devi Harris (born October 20, 1964) is an American politician and attorney who has been the 49th and current vice president of the United States since 2021, serving under President Joe Biden. Harris is the Democratic Party's nominee for president in the 2024 election. She is the first female vice president of the United States, making her the highest-ranking female official in U.S. history. She is also the first African American and first Asian American vice president. From 2017 to 2021, she represented California in the United States Senate. Before that, she was the attorney general of California.",
    birthday: {
      datetime: '1964-10-20T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:13:56.388Z',
    currentParty: 'independent',
    displayName: 'Kamala Harris',
    experiences: [
      {
        isCurrent: false,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for California',
            start: {
              datetime: '2017-01-03T00:00:00.000Z',
            },
            end: {
              datetime: '2021-01-18T00:00:00.000Z',
            },
            congresses: [115, 116, 117],
          },
        ],
      },
      {
        isCurrent: true,
        category: 'Official',
        company: 'United States',
        positions: [
          {
            title: 'Vice President',
            start: {
              datetime: '2021-01-20T00:00:00.000Z',
            },
            end: {
              datetime: null,
            },
            congresses: [],
          },
        ],
      },
    ],
    gender: 'female',
    govTrackId: null,
    i18n: {
      en: {
        displayName: 'Kamala Harris',
        bio: "[Wikipedia] Kamala Devi Harris (born October 20, 1964) is an American politician and attorney who has been the 49th and current vice president of the United States since 2021, serving under President Joe Biden. Harris is the Democratic Party's nominee for president in the 2024 election. She is the first female vice president of the United States, making her the highest-ranking female official in U.S. history. She is also the first African American and first Asian American vice president. From 2017 to 2021, she represented California in the United States Senate. Before that, she was the attorney general of California.",
      },
      zh: {
        displayName: '賀錦麗',
        bio: '[Wikipedia] 卡瑪拉·黛維·哈里斯（1964年10月20日—），漢名賀錦麗，美國民主黨籍政治人物、律師，現任（第49任）美國副總統、參議院議長。她是美國歷史上級別最高的女性官員，也是第一位女性副總統、第一位非裔副總統和第一位亞裔副總統。此前她曾擔任加利福尼亞州州檢察長和加利福尼亞州聯邦參議員等職務。在喬·拜登退出總統競選後，賀錦麗成為民主黨在2024年總統選舉中的總統候選人。',
      },
    },
    id: '675288144040f8e6920deaac',
    links: [
      {
        id: '67528814f5009a00321fea1b',
        link: 'https://kamalaharris.com',
        title: 'Official Website',
        type: 'other',
      },
      {
        id: '67528814f5009a00321fea1c',
        link: 'https://x.com/kamalaharris',
        title: '@kamalaharris',
        type: 'twitter',
      },
      {
        id: '67528814f5009a00321fea1d',
        link: 'https://www.facebook.com/KamalaHarris',
        title: '@KamalaHarris',
        type: 'facebook',
      },
      {
        id: '67528814f5009a00321fea1e',
        link: 'https://www.instagram.com/kamalaharris',
        title: '@kamalaharris',
        type: 'instagram',
      },
      {
        id: '67528814f5009a00321fea1f',
        link: 'https://www.youtube.com/kamalaharris',
        title: '@kamalaharris',
        type: 'youtube',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Kamala_Harris.jpg',
    },
    publications: [
      {
        id: '67528814f5009a00321fea19',
        title: "Smart on Crime: A Career Prosecutor's Plan to Make Us Safer",
        link: null,
      },
      {
        id: '67528814f5009a00321fea1a',
        title: 'The Truths We Hold: An American Journey',
        link: null,
      },
    ],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:13:56.388Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] James David Vance (born James Donald Bowman; August 2, 1984) is an American politician, author, and Marine veteran who has served since 2023 as the junior United States senator from Ohio. He is the Republican vice-presidential nominee in the 2024 United States presidential election.',
    birthday: {
      datetime: '1983-08-02T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: 'V000137',
      govTrackId: 456876,
      committees: [
        {
          id: '67528675f5009a00321fea0a',
          name: 'Joint Economic Committee',
          title: null,
          subcommittees: [],
        },
        {
          id: '67528675f5009a00321fea0b',
          name: 'Senate Committee on Banking, Housing, and Urban Affairs',
          title: null,
          subcommittees: [
            {
              id: '67528675f5009a00321fea11',
              name: 'Financial Institutions and Consumer Protection',
              title: null,
            },
            {
              id: '67528675f5009a00321fea12',
              name: 'Housing, Transportation, and Community Development',
              title: null,
            },
            {
              id: '67528675f5009a00321fea13',
              name: 'Securities, Insurance, and Investment',
              title: null,
            },
          ],
        },
        {
          id: '67528675f5009a00321fea0c',
          name: 'Senate Committee on Commerce, Science, and Transportation',
          title: null,
          subcommittees: [
            {
              id: '67528675f5009a00321fea14',
              name: 'Communications, Media, and Broadband',
              title: null,
            },
            {
              id: '67528675f5009a00321fea15',
              name: 'Oceans, Fisheries, Climate Change, and Manufacturing',
              title: null,
            },
            {
              id: '67528675f5009a00321fea16',
              name: 'Space and Science',
              title: null,
            },
          ],
        },
        {
          id: '67528675f5009a00321fea0d',
          name: 'Senate Special Committee on Aging',
          title: null,
          subcommittees: [],
        },
      ],
    },
    cosponsorBills: [],
    createdAt: '2024-12-06T05:07:01.473Z',
    currentParty: 'republican',
    displayName: 'JD Vance',
    experiences: [
      {
        isCurrent: true,
        category: 'Senator',
        company: 'United States Senate',
        positions: [
          {
            title: 'Senator for Ohio',
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
    govTrackId: '456876',
    i18n: {
      en: {
        displayName: 'JD Vance',
        bio: '[Wikipedia] James David Vance (born James Donald Bowman; August 2, 1984) is an American politician, author, and Marine veteran who has served since 2023 as the junior United States senator from Ohio. He is the Republican vice-presidential nominee in the 2024 United States presidential election.',
      },
      zh: {
        displayName: '范斯',
        bio: '[Wikipedia] 詹姆士·大衛·范斯（1984年8月2日—），簡稱J·D·范斯或JD·范斯，美國作家、創業投資人及共和黨政治人物，現任俄亥俄州聯邦參議員。在2024年共和黨全國代表大會上，他被提名為同年總統大選唐納·川普的副總統競選夥伴，這使他成為第一位獲得美國主要政黨總統候選人提名的千禧世代。',
      },
    },
    id: '675286754040f8e6920dea21',
    links: [
      {
        id: '67528675f5009a00321fea02',
        link: 'https://www.vance.senate.gov',
        title: 'Official Website',
        type: 'other',
      },
      {
        id: '67528675f5009a00321fea03',
        link: 'https://www.facebook.com/senatorvance',
        title: '@senatorvance',
        type: 'facebook',
      },
      {
        id: '67528675f5009a00321fea04',
        link: 'https://www.instagram.com/senatorvance',
        title: '@senatorvance',
        type: 'instagram',
      },
      {
        id: '67528675f5009a00321fea05',
        link: 'https://www.youtube.com/channel/UCOu1i1eeT8unVAc678Q6LQA',
        title: '@senatorjdvance',
        type: 'youtube',
      },
      {
        id: '67528675f5009a00321fea06',
        link: 'https://x.com/SenVancePress',
        title: '@SenVancePress',
        type: 'twitter',
      },
      {
        id: '67528675f5009a00321fea07',
        link: 'https://www.facebook.com/p/JD-Vance-100070055152736',
        title: 'JD Vance',
        type: 'facebook',
      },
      {
        id: '67528675f5009a00321fea08',
        link: 'https://www.instagram.com/jdvance',
        title: '@jdvance',
        type: 'instagram',
      },
      {
        id: '67528675f5009a00321fea09',
        link: 'https://x.com/jdvance',
        title: '@JDVance',
        type: 'twitter',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/JD_Vance.jpg',
    },
    publications: [
      {
        id: '67528675f5009a00321fea01',
        title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
        link: null,
      },
    ],
    records: [],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T05:07:01.473Z',
    viewCount: 0,
    votes: [],
  },
  {
    __typename: 'People',
    billCount: 0,
    bio: '[Wikipedia] Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
    birthday: {
      datetime: '1946-06-14T00:00:00.000Z',
      precision: ['year', 'month', 'day'],
    },
    congressionalData: {
      bioGuideId: null,
      govTrackId: null,
      committees: [],
    },
    cosponsorBills: [],
    createdAt: '2024-12-03T17:20:04.922Z',
    currentParty: 'independent',
    displayName: 'Donald Trump',
    experiences: [
      {
        isCurrent: false,
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
            congresses: [],
          },
        ],
      },
      {
        isCurrent: false,
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
            congresses: [],
          },
        ],
      },
    ],
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
        type: 'other',
      },
      {
        id: '674f3dc49ed90400318f042e',
        link: 'https://truthsocial.com/@realDonaldTrump',
        title: 'Truth Social',
        type: 'other',
      },
      {
        id: '674f3dc49ed90400318f042f',
        link: 'https://x.com/TrumpWarRoom',
        title: '@TrumpWarRoom',
        type: 'twitter',
      },
      {
        id: '67528397363aa0029d97df00',
        link: 'https://x.com/realdonaldtrump',
        title: '@realDonaldTrump',
        type: 'twitter',
      },
      {
        id: '675283a8363aa0029d97df01',
        link: 'https://www.instagram.com/realdonaldtrump',
        title: '@realdonaldtrump',
        type: 'instagram',
      },
      {
        id: '675283b5363aa0029d97df02',
        link: 'https://www.facebook.com/DonaldTrump',
        title: '@DonaldTrump',
        type: 'facebook',
      },
      {
        id: '675283c2363aa0029d97df03',
        link: 'https://www.youtube.com/channel/UCAql2DyGU2un1Ei2nMYsqOA',
        title: '@DonaldJTrumpforPresident',
        type: 'youtube',
      },
    ],
    partyChangeRecords: [],
    photo: {
      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Donald_Trump.jpg',
    },
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
    records: [
      {
        id: '6755339e264bccd385d21f3c',
        title: '川普拒絕承諾協防台灣',
        author: {
          id: '67498661beb8fe8bfa145cda',
          fullName: 'USTW Admin',
        },
        createdAt: '2024-12-08T05:50:22.055Z',
        updatedAt: '2024-12-11T02:16:58.567Z',
        description:
          '美國總統當選人川普在 12/08/2024 播出的NBC專訪節目中，再度被問及「若中國入侵台灣，是否會承諾保衛台灣？」對此，川普回應：「我永遠不會說」（I never say）。當被主持人維爾克（Kristen Welker）追問時，川普表示：「我不會說，因為我總得進行談判，對吧？」主持人繼續追問，川普也說，他更希望中國不會入侵台灣，強調「我跟習主席的關係很好，我們一直保持溝通。 」',
        photos: [
          {
            id: '6758f61a73b2270032e31f8c',
            photo: {
              url: 'https://ustwcmsstorage.blob.core.windows.net/media-taiwan-record/image.png',
            },
          },
        ],
        sources: [
          {
            id: '6758f61a73b2270032e31f8b',
            link: 'https://www.dw.com/zh-hant/%E5%B7%9D%E6%99%AE%E6%8B%92%E7%B5%95%E6%89%BF%E8%AB%BE%E5%8D%94%E9%98%B2%E5%8F%B0%E7%81%A3/a-71010556',
          },
        ],
        status: 'approved',
        versions: [
          {
            approvedAt: '2024-12-11T02:16:58.494Z',
            data: {
              title: '川普拒絕承諾協防台灣',
              description:
                '美國總統當選人川普在 12/08/2024 播出的NBC專訪節目中，再度被問及「若中國入侵台灣，是否會承諾保衛台灣？」對此，川普回應：「我永遠不會說」（I never say）。當被主持人維爾克（Kristen Welker）追問時，川普表示：「我不會說，因為我總得進行談判，對吧？」主持人繼續追問，川普也說，他更希望中國不會入侵台灣，強調「我跟習主席的關係很好，我們一直保持溝通。 」',
              people: '674f3dc4c2061b5227b8f1b0',
              author: '67498661beb8fe8bfa145cda',
              sources: [
                {
                  link: 'https://www.dw.com/zh-hant/%E5%B7%9D%E6%99%AE%E6%8B%92%E7%B5%95%E6%89%BF%E8%AB%BE%E5%8D%94%E9%98%B2%E5%8F%B0%E7%81%A3/a-71010556',
                },
              ],
              photos: [
                {
                  photo: '6758e6cbe981ce40d9597d50',
                },
              ],
            },
            id: '6758f61a73b2270032e31f8d',
            version: 1,
          },
        ],
      },
      {
        id: '6758e7c1e981ce40d9597db8',
        title: '川普稱台灣偷走美國晶片產業',
        author: {
          id: '67498661beb8fe8bfa145cda',
          fullName: 'USTW Admin',
        },
        createdAt: '2024-12-11T01:15:45.743Z',
        updatedAt: '2024-12-11T05:05:10.173Z',
        description:
          '川普在「彭博商業周刊」（Bloomberg Businessweek）專訪中重申他2023年首次提出的主張，即台灣已從美國搶走「幾乎100%」晶片產業，還說「我們根本不該讓這種情況發生」。',
        photos: [],
        sources: [
          {
            id: '6758e7cd73b2270032e31f89',
            link: 'https://www.cna.com.tw/news/aipl/202407240167.aspx',
          },
        ],
        status: 'approved',
        versions: [
          {
            approvedAt: '2024-12-11T01:15:57.377Z',
            data: {
              title: '川普稱台灣偷走美國晶片產業',
              description:
                '川普在「彭博商業周刊」（Bloomberg Businessweek）專訪中重申他2023年首次提出的主張，即台灣已從美國搶走「幾乎100%」晶片產業，還說「我們根本不該讓這種情況發生」。',
              people: '674f3dc4c2061b5227b8f1b0',
              author: '67498661beb8fe8bfa145cda',
              sources: [
                {
                  link: 'https://www.cna.com.tw/news/aipl/202407240167.aspx',
                },
              ],
              photos: [],
            },
            id: '6758e7cd73b2270032e31f8a',
            version: 1,
          },
        ],
      },
    ],
    sponsorBills: [],
    tags: [],
    updatedAt: '2024-12-06T04:56:13.332Z',
    viewCount: 0,
    votes: [],
  },
] as unknown as People[]
