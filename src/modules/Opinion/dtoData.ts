import {
  Article,
  CategoriesArticle,
} from '@/common/lib/graphql/__generated__/graphql'

export const OPINION_DTO_MOCK = [
  {
    id: '67565ba5e981ce40d9596655',
    isFeatured: true,
    excerpt:
      '美國台灣觀測站榮獲今年「北美洲台灣人教授協會」所頒發的「廖述宗教授紀念獎」。剛剛（台灣時間8/4週日午夜、美國西岸時間週日早上）在西雅圖所舉辦的年會上領獎。這個獎設立的目的是「肯定並獎勵對於台灣的人文、科技、社會或政治有卓越貢獻的個人、團隊或團體，以紀念廖述宗教授一生對台灣的熱愛與奉獻，並發揚光大廖述宗教授於1980年創立NATPA回饋台灣社會的精神。」',
    title: 'USTW團隊獲頒廖述宗教授紀念獎',
    subtitle: '同時恭賀台灣羽球麟洋配奪金！！！',
    media: {
      photo: {
        alt: '2024-08-05.png',
        url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-08-05.png',
        sizes: {
          desktop: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-08-05-1920x1139.png',
          },
          tablet: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-08-05-1024x607.png',
          },
          mobile: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-08-05-414x246.png',
          },
          thumbnail: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-08-05-300x178.png',
          },
        },
      },
    },
    tags: [
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
      },
    ],
    content: [
      {
        children: [
          {
            text: '美國台灣觀測站榮獲今年「北美洲台灣人教授協會」所頒發的「廖述宗教授紀念獎」。剛剛（台灣時間8/4週日午夜、美國西岸時間週日早上）在西雅圖所舉辦的年會上領獎。這個獎設立的目的是「肯定並獎勵對於台灣的人文、科技、社會或政治有卓越貢獻的個人、團隊或團體，以紀念廖述宗教授一生對台灣的熱愛與奉獻，並發揚光大廖述宗教授於1980年創立NATPA回饋台灣社會的精神。」\n\n領獎之前，我們還在會議舉辦的旅館大廳一起看了羽球男雙金牌戰（飯店工作人員也在旁邊一起為台灣隊加油）。真的是太精彩了！結果令人很開心啊！！！！\n\n這次在美國也遇到了不少我們podcast的聽眾朋友與讀者朋友們。我們會繼續努力地推廣台美關係相關的寫作與分析文章，用「打群架」的方式來一起創作\n當然也會繼續製作錄製podcast！也請各位',
          },
          {
            children: [
              {
                text: '舊雨新知',
              },
            ],
            doc: {
              relationTo: 'bills',
              value: {
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
                        description:
                          'Placed on the Union Calendar, Calendar No. 236.',
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
                  },
                },
                congress: 118,
                number: '554',
                type: 'hr',
                introducedAt: {
                  datetime: '2023-01-26T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
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
                    name: 'Taiwan’s Defense',
                    createdAt: '2024-11-28T15:08:14.281Z',
                    nameEn: 'Taiwan’s Defense',
                    nameZh: '台灣國防',
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
                        lastName: '希爾',
                        displayName: '希爾',
                        bio: '[Wikipedia] 弗蘭奇·希爾（英語：French Hill；1956年12月5日—）是美國的一位政治人物。自2015年開始，他是阿肯色州第2選舉區選出的美國眾議院議員。他的黨籍是共和黨。他的2014年的眾議員選舉中首次當選。希爾畢業於范德堡大學。',
                        otherNames: [],
                      },
                    },
                    birthday: {
                      datetime: '1956-12-05T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    gender: 'male',
                    congressionalData: {
                      bioGuideId: 'H001072',
                      govTrackId: 412609,
                      committees: [
                        {
                          systemCode: 'hlig',
                          name: 'House Permanent Select Committee on Intelligence',
                          subcommittees: [
                            {
                              systemCode: 'hlig06',
                              name: 'National Intelligence Enterprise',
                              id: '67529401363aa0029d97df53',
                            },
                            {
                              systemCode: 'hlig02',
                              name: 'National Security Agency and Cyber',
                              id: '67529409363aa0029d97df54',
                            },
                          ],
                          id: '675293f7363aa0029d97df52',
                        },
                        {
                          systemCode: 'hsba',
                          name: 'House Committee on Financial Services',
                          subcommittees: [
                            {
                              systemCode: 'hsba16',
                              name: 'Capital Markets',
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
                          subcommittees: [
                            {
                              systemCode: 'hsfa17',
                              name: 'Oversight and Accountability',
                              id: '67529432363aa0029d97df59',
                            },
                            {
                              systemCode: 'hsfa06',
                              name: 'Global Health, Global Human Rights, and International Organizations',
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
                            start: {
                              datetime: '2015-01-03T00:00:00.000Z',
                              precision: ['year', 'month', 'day'],
                            },
                            end: {
                              precision: [],
                            },
                            state: 'arkansas',
                            district: 2,
                            party: 'republican',
                            congresses: [114, 115, 116, 117, 118],
                            officialAreas: [],
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
                    displayName: 'French Hill',
                    bio: "[Wikipedia] James French Hill (born December 5, 1956) is an American businessman and politician serving as the U.S. representative for Arkansas's 2nd congressional district since 2015. He is a member of the Republican Party.",
                    createdAt: '2024-12-06T06:04:16.433Z',
                    updatedAt: '2024-12-06T06:05:50.815Z',
                    govTrackId: '412609',
                    votes: [],
                    photo: {
                      id: '675961047e1c21b02dd70ba1',
                      alt: 'French_Hill.png',
                      filename: 'French_Hill.png',
                      mimeType: 'image/png',
                      filesize: 2323355,
                      width: 1024,
                      height: 1280,
                      focalX: 50,
                      focalY: 50,
                      sizes: {
                        desktop: {
                          width: 1920,
                          height: 2400,
                          mimeType: 'image/png',
                          filesize: 7341184,
                          filename: 'French_Hill-1920x2400.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill-1920x2400.png',
                        },
                        tablet: {
                          width: 1024,
                          height: 1280,
                          mimeType: 'image/png',
                          filesize: 2323355,
                          filename: 'French_Hill-1024x1280.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill-1024x1280.png',
                        },
                        mobile: {
                          width: 414,
                          height: 518,
                          mimeType: 'image/png',
                          filesize: 460133,
                          filename: 'French_Hill-414x518.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill-414x518.png',
                        },
                        thumbnail: {
                          width: 300,
                          height: 375,
                          mimeType: 'image/png',
                          filesize: 250422,
                          filename: 'French_Hill-300x375.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill-300x375.png',
                        },
                      },
                      createdAt: '2024-12-11T09:53:08.648Z',
                      updatedAt: '2024-12-11T09:53:08.648Z',
                      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/French_Hill.png',
                    },
                    billCount: 1,
                    currentParty: 'republican',
                    records: [],
                    sponsorBills: ['6752b1ca2ddcf95deb37622c'],
                    cosponsorBills: [],
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
                          lastName: '薛曼',
                          displayName: '薛曼',
                          bio: '[Wikipedia] 布萊德·詹姆士·薛曼（英語：Brad James Sherman；1954年10月24日—）是美國的一位政治人物。他的黨籍是民主黨。自2013年開始，他是加利福尼亞州第三十二國會選區選出的眾議員。他從1997年起擔任聯邦眾議員，之前的選區是第24選區和第27選區。',
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1954-10-24T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      gender: 'male',
                      congressionalData: {
                        bioGuideId: 'S000344',
                        govTrackId: 400371,
                        committees: [
                          {
                            systemCode: 'hsba',
                            name: 'House Committee on Financial Services',
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
                                id: '675295d3363aa0029d97df67',
                              },
                              {
                                systemCode: 'hsba20',
                                name: 'Financial Institutions and Monetary Policy',
                                id: '675295dc363aa0029d97df68',
                              },
                            ],
                            id: '675295c1363aa0029d97df64',
                          },
                          {
                            systemCode: 'hsfa',
                            name: 'House Committee on Foreign Affairs',
                            subcommittees: [
                              {
                                systemCode: 'hsfa05',
                                name: 'Indo-Pacific',
                                id: '675295ef363aa0029d97df69',
                              },
                              {
                                systemCode: 'hsfa13',
                                name: 'Middle East, North Africa, and Central Asia',
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
                              title:
                                'Representative for district 24, California',
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
                              id: '67529509363aa0029d97df5c',
                            },
                            {
                              title:
                                'Representative for district 27, California',
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
                              id: '67529539363aa0029d97df5d',
                            },
                            {
                              title:
                                'Representative for district 30, California',
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
                      displayName: 'Brad Sherman',
                      bio: "[Wikipedia] Bradley James Sherman (born October 24, 1954) is an American accountant and politician serving as the U.S. representative for California's 32nd congressional district. A member of the Democratic Party, he first entered Congress in 1997. Sherman represented California's 24th congressional district for three terms, California's 27th congressional district for five terms, and California's 30th congressional district for five terms. His district includes parts of the San Fernando Valley in Los Angeles County and the eastern part of the Simi Hills in Ventura County.",
                      createdAt: '2024-12-06T06:07:08.308Z',
                      updatedAt: '2024-12-11T10:00:06.874Z',
                      govTrackId: '400371',
                      votes: [],
                      currentParty: 'democratic',
                      photo: {
                        id: '67595d377e1c21b02dd70ac7',
                        alt: 'Brad_Sherman.jpg',
                        filename: 'Brad_Sherman.jpg',
                        mimeType: 'image/jpeg',
                        filesize: 725869,
                        width: 1960,
                        height: 3008,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2947,
                            mimeType: 'image/jpeg',
                            filesize: 633550,
                            filename: 'Brad_Sherman-1920x2947.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman-1920x2947.jpg',
                          },
                          tablet: {
                            width: 1024,
                            height: 1572,
                            mimeType: 'image/jpeg',
                            filesize: 188674,
                            filename: 'Brad_Sherman-1024x1572.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman-1024x1572.jpg',
                          },
                          mobile: {
                            width: 414,
                            height: 635,
                            mimeType: 'image/jpeg',
                            filesize: 36361,
                            filename: 'Brad_Sherman-414x635.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman-414x635.jpg',
                          },
                          thumbnail: {
                            width: 300,
                            height: 460,
                            mimeType: 'image/jpeg',
                            filesize: 21209,
                            filename: 'Brad_Sherman-300x460.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman-300x460.jpg',
                          },
                        },
                        createdAt: '2024-12-11T09:36:55.149Z',
                        updatedAt: '2024-12-11T09:36:55.149Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Brad_Sherman.jpg',
                      },
                      billCount: 0,
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: ['6752b1ca2ddcf95deb37622c'],
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
                          lastName: '勞勒',
                          displayName: '勞勒',
                          bio: '',
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1986-09-09T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      gender: 'male',
                      congressionalData: {
                        bioGuideId: 'L000599',
                        govTrackId: 456924,
                        committees: [
                          {
                            systemCode: 'hsba',
                            name: 'House Committee on Financial Services',
                            subcommittees: [
                              {
                                systemCode: 'hsba04',
                                name: 'Housing and Insurance',
                                id: '67529bad363aa0029d97df70',
                              },
                              {
                                systemCode: 'hsba16',
                                name: 'Capital Markets',
                                id: '67529bb5363aa0029d97df71',
                              },
                            ],
                            id: '67529ba2363aa0029d97df6f',
                          },
                          {
                            systemCode: 'hsfa',
                            name: 'House Committee on Foreign Affairs',
                            subcommittees: [
                              {
                                systemCode: 'hsfa14',
                                name: 'Europe',
                                id: '67529bc7363aa0029d97df73',
                              },
                              {
                                systemCode: 'hsfa13',
                                name: 'Middle East, North Africa, and Central Asia',
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
                              start: {
                                datetime: '2023-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'newYork',
                              district: 17,
                              party: 'republican',
                              congresses: [118],
                              officialAreas: [],
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
                      displayName: 'Michael Lawler',
                      bio: "[Wikipedia] Michael Vincent Lawler (born September 9, 1986) is an American politician serving as the U.S. representative for New York's 17th congressional district since 2023. From 2021 to 2022, he was a Republican member of the New York State Assembly from the 97th district in Rockland County.",
                      createdAt: '2024-12-06T06:36:04.411Z',
                      updatedAt: '2024-12-06T07:25:30.865Z',
                      govTrackId: '456924',
                      votes: [],
                      photo: {
                        id: '675960d97e1c21b02dd70b98',
                        alt: 'Michael_Lawler.png',
                        filename: 'Michael_Lawler.png',
                        mimeType: 'image/png',
                        filesize: 1403995,
                        width: 819,
                        height: 1024,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2401,
                            mimeType: 'image/png',
                            filesize: 6334770,
                            filename: 'Michael_Lawler-1920x2401.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler-1920x2401.png',
                          },
                          tablet: {
                            width: 1024,
                            height: 1280,
                            mimeType: 'image/png',
                            filesize: 2207839,
                            filename: 'Michael_Lawler-1024x1280.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler-1024x1280.png',
                          },
                          mobile: {
                            width: 414,
                            height: 518,
                            mimeType: 'image/png',
                            filesize: 436800,
                            filename: 'Michael_Lawler-414x518.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler-414x518.png',
                          },
                          thumbnail: {
                            width: 300,
                            height: 375,
                            mimeType: 'image/png',
                            filesize: 244273,
                            filename: 'Michael_Lawler-300x375.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler-300x375.png',
                          },
                        },
                        createdAt: '2024-12-11T09:52:25.607Z',
                        updatedAt: '2024-12-11T09:52:25.607Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Michael_Lawler.png',
                      },
                      billCount: 0,
                      currentParty: 'republican',
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: [
                        '6752b1ca2ddcf95deb37622c',
                        '6754822c437319f5138bfa48',
                      ],
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
                          displayName: 'Susie Lee',
                          bio: "[Wikipedia] Suzanne Marie Lee (née Kelley; born November 7, 1966) is an American politician from the state of Nevada. As a member of the Democratic Party, she has served as the U. S. representative for Nevada's 3rd congressional district since 2019. Lee was the founding director of the Inner-City Games in Las Vegas and president of Communities In Schools of Nevada.",
                          otherNames: [],
                        },
                        zh: {
                          displayName: '',
                          bio: '',
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1966-11-07T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      gender: 'female',
                      congressionalData: {
                        bioGuideId: 'L000590',
                        govTrackId: 412802,
                        committees: [
                          {
                            systemCode: 'hsii',
                            name: 'House Committee on Natural Resources',
                            subcommittees: [
                              {
                                systemCode: 'hsii06',
                                name: 'Energy and Mineral Resources',
                                id: '67529cdaf5009a00321fea53',
                              },
                              {
                                systemCode: 'hsii15',
                                name: 'Oversight and Investigations',
                                id: '67529cdaf5009a00321fea54',
                              },
                            ],
                            id: '67529cdaf5009a00321fea50',
                          },
                          {
                            systemCode: 'hsap',
                            name: 'House Committee on Appropriations',
                            subcommittees: [
                              {
                                systemCode: 'hsap10',
                                name: 'Energy and Water Development, and Related Agencies',
                                id: '67529cdaf5009a00321fea55',
                              },
                              {
                                systemCode: 'hsap18',
                                name: 'Military Construction, Veterans Affairs, and Related Agencies',
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
                              start: {
                                datetime: '2019-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'nevada',
                              district: 3,
                              party: 'democratic',
                              congresses: [116, 117, 118],
                              officialAreas: [],
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
                      displayName: 'Susie Lee',
                      bio: "[Wikipedia] Suzanne Marie Lee (née Kelley; born November 7, 1966) is an American politician from the state of Nevada. As a member of the Democratic Party, she has served as the U. S. representative for Nevada's 3rd congressional district since 2019. Lee was the founding director of the Inner-City Games in Las Vegas and president of Communities In Schools of Nevada.",
                      govTrackId: '412802',
                      createdAt: '2024-12-06T06:42:34.905Z',
                      updatedAt: '2024-12-06T07:24:57.908Z',
                      currentParty: 'democratic',
                      votes: [],
                      photo: {
                        id: '67595d397e1c21b02dd70ad1',
                        alt: 'Susie_Lee.jpg',
                        filename: 'Susie_Lee.jpg',
                        mimeType: 'image/jpeg',
                        filesize: 1554154,
                        width: 3360,
                        height: 4200,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2400,
                            mimeType: 'image/jpeg',
                            filesize: 564732,
                            filename: 'Susie_Lee-1920x2400.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee-1920x2400.jpg',
                          },
                          tablet: {
                            width: 1024,
                            height: 1280,
                            mimeType: 'image/jpeg',
                            filesize: 150182,
                            filename: 'Susie_Lee-1024x1280.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee-1024x1280.jpg',
                          },
                          mobile: {
                            width: 414,
                            height: 518,
                            mimeType: 'image/jpeg',
                            filesize: 31463,
                            filename: 'Susie_Lee-414x518.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee-414x518.jpg',
                          },
                          thumbnail: {
                            width: 300,
                            height: 375,
                            mimeType: 'image/jpeg',
                            filesize: 19224,
                            filename: 'Susie_Lee-300x375.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee-300x375.jpg',
                          },
                        },
                        createdAt: '2024-12-11T09:36:57.006Z',
                        updatedAt: '2024-12-11T09:36:57.006Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Susie_Lee.jpg',
                      },
                      billCount: 0,
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: [
                        '6752b1ca2ddcf95deb37622c',
                        '6754822c437319f5138bfa48',
                      ],
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
                          displayName: 'Patrick Ryan',
                          bio: "[Wikipedia] Patrick Kevin Ryan (born March 28, 1982) is an American businessman, Democratic politician, and veteran serving as the U.S. representative for New York's 18th congressional district since 2023. He served as the representative for New York's 19th congressional district from 2022 to 2023 after being elected in a special election. He previously served as the county executive of Ulster County, New York.",
                          otherNames: [],
                        },
                        zh: {
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1982-03-28T00:00:00.000Z',
                        precision: [],
                      },
                      gender: 'male',
                      congressionalData: {
                        bioGuideId: 'R000579',
                        govTrackId: 456871,
                        committees: [
                          {
                            systemCode: 'hspw',
                            name: 'House Committee on Transportation and Infrastructure',
                            subcommittees: [
                              {
                                systemCode: 'hspw12',
                                name: 'Highways and Transit',
                                id: '6752a93de3d2f2003198860a',
                              },
                              {
                                systemCode: 'hspw02',
                                name: 'Water Resources and Environment',
                                id: '6752a93de3d2f2003198860b',
                              },
                            ],
                            id: '6752a93de3d2f20031988606',
                          },
                          {
                            systemCode: 'hsas',
                            name: 'House Committee on Armed Services',
                            subcommittees: [
                              {
                                systemCode: 'hsas35',
                                name: 'Cyber, Information Technologies, and Innovation',
                                id: '6752a93de3d2f2003198860c',
                              },
                              {
                                systemCode: 'hsas25',
                                name: 'Tactical Air and Land Forces',
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
                              id: '6752a93de3d2f20031988608',
                            },
                            {
                              title: 'Representative for district 18, New York',
                              start: {
                                datetime: '2023-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'newYork',
                              district: 18,
                              party: 'democratic',
                              congresses: [118],
                              officialAreas: [],
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
                      displayName: 'Patrick Ryan',
                      bio: "[Wikipedia] Patrick Kevin Ryan (born March 28, 1982) is an American businessman, Democratic politician, and veteran serving as the U.S. representative for New York's 18th congressional district since 2023. He served as the representative for New York's 19th congressional district from 2022 to 2023 after being elected in a special election. He previously served as the county executive of Ulster County, New York.",
                      govTrackId: '456871',
                      createdAt: '2024-12-06T07:35:25.201Z',
                      updatedAt: '2024-12-06T07:35:25.201Z',
                      photo: {
                        id: '675960a37e1c21b02dd70b8f',
                        alt: 'Patrick_Ryan.png',
                        filename: 'Patrick_Ryan.png',
                        mimeType: 'image/png',
                        filesize: 2426786,
                        width: 1024,
                        height: 1280,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2400,
                            mimeType: 'image/png',
                            filesize: 7892312,
                            filename: 'Patrick_Ryan-1920x2400.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan-1920x2400.png',
                          },
                          tablet: {
                            width: 1024,
                            height: 1280,
                            mimeType: 'image/png',
                            filesize: 2426786,
                            filename: 'Patrick_Ryan-1024x1280.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan-1024x1280.png',
                          },
                          mobile: {
                            width: 414,
                            height: 518,
                            mimeType: 'image/png',
                            filesize: 466218,
                            filename: 'Patrick_Ryan-414x518.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan-414x518.png',
                          },
                          thumbnail: {
                            width: 300,
                            height: 375,
                            mimeType: 'image/png',
                            filesize: 254184,
                            filename: 'Patrick_Ryan-300x375.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan-300x375.png',
                          },
                        },
                        createdAt: '2024-12-11T09:51:31.947Z',
                        updatedAt: '2024-12-11T09:51:31.947Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Patrick_Ryan.png',
                      },
                      votes: [],
                      billCount: 0,
                      currentParty: 'democratic',
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: ['6752b1ca2ddcf95deb37622c'],
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
                          displayName: 'Chris Pappas',
                          bio: "[Wikipedia] Christopher Charles Pappas (born June 4, 1980) is an American politician who has served as the U.S. representative from New Hampshire's 1st congressional district since 2019. A member of the Democratic Party, Pappas previously served on the New Hampshire Executive Council from 2013 to 2019.",
                          otherNames: [],
                        },
                        zh: {
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1980-06-04T00:00:00.000Z',
                        precision: [],
                      },
                      gender: 'male',
                      congressionalData: {
                        bioGuideId: 'P000614',
                        govTrackId: 412795,
                        committees: [
                          {
                            systemCode: 'hspw',
                            name: 'House Committee on Transportation and Infrastructure',
                            subcommittees: [
                              {
                                systemCode: 'hspw07',
                                name: 'Coast Guard and Maritime Transportation',
                                id: '6752a9fee3d2f20031988614',
                              },
                              {
                                systemCode: 'hspw12',
                                name: 'Highways and Transit',
                                id: '6752a9fee3d2f20031988615',
                              },
                              {
                                systemCode: 'hspw02',
                                name: 'Water Resources and Environment',
                                id: '6752a9fee3d2f20031988616',
                              },
                            ],
                            id: '6752a9fee3d2f20031988610',
                          },
                          {
                            systemCode: 'hsvr',
                            name: "House Committee on Veterans' Affairs",
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
                                id: '6752a9fee3d2f20031988618',
                              },
                            ],
                            id: '6752a9fee3d2f20031988611',
                          },
                          {
                            systemCode: 'hssm',
                            name: 'House Committee on Small Business',
                            subcommittees: [
                              {
                                systemCode: 'hssm22',
                                name: 'Innovation, Entrepreneurship, and Workforce Development',
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
                              title:
                                'Representative for district 1, New Hampshire',
                              start: {
                                datetime: '2019-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'newHampshire',
                              district: 1,
                              party: 'democratic',
                              congresses: [116, 117, 118],
                              officialAreas: [],
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
                      displayName: 'Chris Pappas',
                      bio: "[Wikipedia] Christopher Charles Pappas (born June 4, 1980) is an American politician who has served as the U.S. representative from New Hampshire's 1st congressional district since 2019. A member of the Democratic Party, Pappas previously served on the New Hampshire Executive Council from 2013 to 2019.",
                      govTrackId: '412795',
                      createdAt: '2024-12-06T07:38:38.247Z',
                      updatedAt: '2024-12-09T03:21:33.017Z',
                      currentParty: 'democratic',
                      photo: {
                        id: '675960447e1c21b02dd70b86',
                        alt: 'Chris_Pappas.png',
                        filename: 'Chris_Pappas.png',
                        mimeType: 'image/png',
                        filesize: 1141715,
                        width: 762,
                        height: 959,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2416,
                            mimeType: 'image/png',
                            filesize: 5470221,
                            filename: 'Chris_Pappas-1920x2416.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas-1920x2416.png',
                          },
                          tablet: {
                            width: 1024,
                            height: 1289,
                            mimeType: 'image/png',
                            filesize: 2002261,
                            filename: 'Chris_Pappas-1024x1289.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas-1024x1289.png',
                          },
                          mobile: {
                            width: 414,
                            height: 521,
                            mimeType: 'image/png',
                            filesize: 422104,
                            filename: 'Chris_Pappas-414x521.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas-414x521.png',
                          },
                          thumbnail: {
                            width: 300,
                            height: 378,
                            mimeType: 'image/png',
                            filesize: 236772,
                            filename: 'Chris_Pappas-300x378.png',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas-300x378.png',
                          },
                        },
                        createdAt: '2024-12-11T09:49:56.933Z',
                        updatedAt: '2024-12-11T09:49:56.933Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Chris_Pappas.png',
                      },
                      votes: [],
                      billCount: 0,
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: ['6752b1ca2ddcf95deb37622c'],
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
                          displayName: '金映玉',
                          bio: '[Wikipedia] 金映玉（英語：Young Oak Kim，韓語：최영옥；1962年10月18日—），本姓崔（金為夫姓），是一位韓裔美籍政治家和商人，現任加利福尼亞州第40國會選區的眾議員，此前曾於2021年至2023年任第39國會選區的眾議員。在2020年美國眾議院選舉中，金映玉、朴銀珠和瑪麗蓮·斯特里克蘭成為首批當選美國國會議員的三位韓裔女性。 她和朴銀珠也是自金昌準後第一批當選國會議員的韓裔加州人。',
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1962-10-18T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      gender: 'female',
                      congressionalData: {
                        bioGuideId: 'K000397',
                        govTrackId: 456802,
                        committees: [
                          {
                            systemCode: 'hsba',
                            name: 'House Committee on Financial Services',
                            subcommittees: [
                              {
                                systemCode: 'hsba20',
                                name: 'Financial Institutions and Monetary Policy',
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
                              title:
                                'Representative for district 39, California',
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
                              id: '6752ab3ce3d2f2003198861e',
                            },
                            {
                              title:
                                'Representative for district 40, California',
                              start: {
                                datetime: '2023-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'california',
                              district: 40,
                              party: 'republican',
                              congresses: [118],
                              officialAreas: [],
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
                      displayName: 'Young Kim',
                      bio: "[Wikipedia] Young Oak Kim (née Choe, Korean: 최영옥; born October 18, 1962) is a South Korean-born American politician and businesswoman serving as the U.S. representative for California's 40th congressional district, previously representing the 39th congressional district from 2021 to 2023. Her district includes northern parts of Orange County. In the 2020 United States House of Representatives elections, Kim, Michelle Park Steel, and Marilyn Strickland became the first three Korean-American women elected to the United States Congress. Kim and Steel are also the first Korean-Americans elected to Congress from California since Jay Kim (no relation).",
                      govTrackId: '456802',
                      createdAt: '2024-12-06T07:43:56.020Z',
                      updatedAt: '2024-12-06T07:43:56.020Z',
                      photo: {
                        id: '67595d357e1c21b02dd70abd',
                        alt: 'Young_Kim.jpg',
                        filename: 'Young_Kim.jpg',
                        mimeType: 'image/jpeg',
                        filesize: 578253,
                        width: 2497,
                        height: 3021,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2323,
                            mimeType: 'image/jpeg',
                            filesize: 331498,
                            filename: 'Young_Kim-1920x2323.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim-1920x2323.jpg',
                          },
                          tablet: {
                            width: 1024,
                            height: 1239,
                            mimeType: 'image/jpeg',
                            filesize: 112067,
                            filename: 'Young_Kim-1024x1239.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim-1024x1239.jpg',
                          },
                          mobile: {
                            width: 414,
                            height: 501,
                            mimeType: 'image/jpeg',
                            filesize: 26395,
                            filename: 'Young_Kim-414x501.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim-414x501.jpg',
                          },
                          thumbnail: {
                            width: 300,
                            height: 363,
                            mimeType: 'image/jpeg',
                            filesize: 16787,
                            filename: 'Young_Kim-300x363.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim-300x363.jpg',
                          },
                        },
                        createdAt: '2024-12-11T09:36:53.975Z',
                        updatedAt: '2024-12-11T09:36:53.975Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Young_Kim.jpg',
                      },
                      votes: [],
                      billCount: 1,
                      currentParty: 'republican',
                      records: [],
                      sponsorBills: ['6754822c437319f5138bfa48'],
                      cosponsorBills: ['6752b1ca2ddcf95deb37622c'],
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
                          displayName: 'Monica De La Cruz',
                          bio: "[Wikipedia] Monica De La Cruz (born November 11, 1974) is an American politician and insurance agent from the state of Texas. She has represented Texas's 15th congressional district in the U.S. House of Representatives since 2023.",
                          otherNames: [],
                        },
                        zh: {
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1974-11-11T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      gender: 'female',
                      congressionalData: {
                        bioGuideId: 'D000594',
                        govTrackId: 456943,
                        committees: [
                          {
                            systemCode: 'hsag',
                            name: 'House Committee on Agriculture',
                            subcommittees: [
                              {
                                systemCode: 'hsag03',
                                name: 'Nutrition, Foreign Agriculture, and Horticulture',
                                id: '6752abcee3d2f20031988629',
                              },
                              {
                                systemCode: 'hsag16',
                                name: 'General Farm Commodities, Risk Management, and Credit',
                                id: '6752abcee3d2f2003198862a',
                              },
                            ],
                            id: '6752abcee3d2f20031988626',
                          },
                          {
                            systemCode: 'hsba',
                            name: 'House Committee on Financial Services',
                            subcommittees: [
                              {
                                systemCode: 'hsba04',
                                name: 'Housing and Insurance',
                                id: '6752abcee3d2f2003198862b',
                              },
                              {
                                systemCode: 'hsba20',
                                name: 'Financial Institutions and Monetary Policy',
                                id: '6752abcee3d2f2003198862c',
                              },
                              {
                                systemCode: 'hsba10',
                                name: 'National Security, Illicit Finance, and International Financial Institutions',
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
                              start: {
                                datetime: '2023-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'texas',
                              district: 15,
                              party: 'republican',
                              congresses: [118],
                              officialAreas: [],
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
                      displayName: 'Monica De La Cruz',
                      bio: "[Wikipedia] Monica De La Cruz (born November 11, 1974) is an American politician and insurance agent from the state of Texas. She has represented Texas's 15th congressional district in the U.S. House of Representatives since 2023.",
                      govTrackId: '456943',
                      createdAt: '2024-12-06T07:46:22.064Z',
                      updatedAt: '2024-12-06T07:46:22.064Z',
                      photo: {
                        id: '67595d357e1c21b02dd70ab9',
                        alt: 'Monica_De_La_Cruz.jpg',
                        filename: 'Monica_De_La_Cruz.jpg',
                        mimeType: 'image/jpeg',
                        filesize: 291840,
                        width: 1600,
                        height: 2000,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2400,
                            mimeType: 'image/jpeg',
                            filesize: 370720,
                            filename: 'Monica_De_La_Cruz-1920x2400.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz-1920x2400.jpg',
                          },
                          tablet: {
                            width: 1024,
                            height: 1280,
                            mimeType: 'image/jpeg',
                            filesize: 131903,
                            filename: 'Monica_De_La_Cruz-1024x1280.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz-1024x1280.jpg',
                          },
                          mobile: {
                            width: 414,
                            height: 518,
                            mimeType: 'image/jpeg',
                            filesize: 31491,
                            filename: 'Monica_De_La_Cruz-414x518.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz-414x518.jpg',
                          },
                          thumbnail: {
                            width: 300,
                            height: 375,
                            mimeType: 'image/jpeg',
                            filesize: 19311,
                            filename: 'Monica_De_La_Cruz-300x375.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz-300x375.jpg',
                          },
                        },
                        createdAt: '2024-12-11T09:36:53.245Z',
                        updatedAt: '2024-12-11T09:36:53.245Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Monica_De_La_Cruz.jpg',
                      },
                      votes: [],
                      billCount: 0,
                      currentParty: 'republican',
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: [
                        '6752b1ca2ddcf95deb37622c',
                        '6754822c437319f5138bfa48',
                      ],
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
                          displayName: 'Ann Wagner',
                          bio: "[Wikipedia] Ann Louise Wagner (née Trousdale, September 13, 1962) is an American politician and former diplomat serving as the U.S. representative for Missouri's 2nd congressional district. A member of the Republican Party, she was the United States ambassador to Luxembourg from 2005 to 2009.",
                          otherNames: [],
                        },
                        zh: {
                          lastName: '華格納',
                          displayName: '華格納',
                          bio: '[Wikipedia] 安·路易斯·瓦格納（英語：Ann Louise Wagner，1962年9月13日—）是美國政治人物和前外交官，現任代表密蘇里州第二國會選區眾議院議員，曾擔任美國駐盧森堡大使。',
                          otherNames: [],
                        },
                      },
                      birthday: {
                        datetime: '1962-09-13T00:00:00.000Z',
                        precision: ['year', 'month', 'day'],
                      },
                      gender: 'female',
                      congressionalData: {
                        bioGuideId: 'W000812',
                        govTrackId: 412548,
                        committees: [
                          {
                            systemCode: 'hsba',
                            name: 'House Committee on Financial Services',
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
                                id: '6752ac8de3d2f20031988637',
                              },
                            ],
                            id: '6752ac8de3d2f20031988633',
                          },
                          {
                            systemCode: 'hsfa',
                            name: 'House Committee on Foreign Affairs',
                            subcommittees: [
                              {
                                systemCode: 'hsfa05',
                                name: 'Indo-Pacific',
                                id: '6752ac8de3d2f20031988638',
                              },
                              {
                                systemCode: 'hsfa14',
                                name: 'Europe',
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
                              start: {
                                datetime: '2013-01-03T00:00:00.000Z',
                                precision: ['year', 'month', 'day'],
                              },
                              end: {
                                precision: [],
                              },
                              state: 'missouri',
                              district: 2,
                              party: 'republican',
                              congresses: [113, 114, 115, 116, 117, 118],
                              officialAreas: [],
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
                      displayName: 'Ann Wagner',
                      bio: "[Wikipedia] Ann Louise Wagner (née Trousdale, September 13, 1962) is an American politician and former diplomat serving as the U.S. representative for Missouri's 2nd congressional district. A member of the Republican Party, she was the United States ambassador to Luxembourg from 2005 to 2009.",
                      govTrackId: '412548',
                      createdAt: '2024-12-06T07:49:33.927Z',
                      updatedAt: '2024-12-11T09:58:19.768Z',
                      currentParty: 'republican',
                      photo: {
                        id: '67595d357e1c21b02dd70ab7',
                        alt: 'Ann_Wagner.jpg',
                        filename: 'Ann_Wagner.jpg',
                        mimeType: 'image/jpeg',
                        filesize: 169760,
                        width: 1049,
                        height: 1398,
                        focalX: 50,
                        focalY: 50,
                        sizes: {
                          desktop: {
                            width: 1920,
                            height: 2559,
                            mimeType: 'image/jpeg',
                            filesize: 386401,
                            filename: 'Ann_Wagner-1920x2559.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner-1920x2559.jpg',
                          },
                          tablet: {
                            width: 1024,
                            height: 1365,
                            mimeType: 'image/jpeg',
                            filesize: 154569,
                            filename: 'Ann_Wagner-1024x1365.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner-1024x1365.jpg',
                          },
                          mobile: {
                            width: 414,
                            height: 552,
                            mimeType: 'image/jpeg',
                            filesize: 32288,
                            filename: 'Ann_Wagner-414x552.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner-414x552.jpg',
                          },
                          thumbnail: {
                            width: 300,
                            height: 400,
                            mimeType: 'image/jpeg',
                            filesize: 18116,
                            filename: 'Ann_Wagner-300x400.jpg',
                            url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner-300x400.jpg',
                          },
                        },
                        createdAt: '2024-12-11T09:36:53.098Z',
                        updatedAt: '2024-12-11T09:36:53.098Z',
                        url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Ann_Wagner.jpg',
                      },
                      votes: [],
                      billCount: 0,
                      records: [],
                      sponsorBills: [],
                      cosponsorBills: ['6752b1ca2ddcf95deb37622c'],
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
                title: 'Taiwan Conflict Deterrence Act of 2023',
                summary:
                  '[Congress.Gov] This bill, in the event of a threat to U.S. interests by China, (1) requires additional reporting on the domestic and foreign financial activity of specified Chinese officials, and (2) prohibits certain financial transactions with specified Chinese officials.',
                latestActionTime: '2024-09-10T00:00:00.000Z',
                createdAt: '2024-12-06T08:11:54.651Z',
                updatedAt: '2024-12-19T07:46:49.965Z',
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
                    createdAt: '2024-11-29T11:24:12.300Z',
                    updatedAt: '2024-12-19T07:30:36.802Z',
                    nameEn: 'Taiwan Caucus',
                    nameZh: '國會台灣連線',
                    isFeatured: true,
                  },
                ],
                isFeatured: false,
              },
            },
            linkType: 'internal',
            type: 'link',
          },
          {
            text: '們多多支持以及給我們建議和指教喔！\n\n*圖為我們團隊成員與北美洲台灣人教授協會的理事會成員合影',
          },
        ],
      },
    ],
    sources: [],
    authors: [
      {
        id: '67556b3f06a6bf46e14788e2',
        name: 'US Taiwan Watch - Commentary and Analysis',
        bio: 'Our team of editors and experts comment on the latest and most important events in the world and how they affect US-Taiwan relations. From geopolitics, security, and elections, to business, technology, and culture, this is where to find the freshest insights.',
      },
    ],
    podcast: '8f96259e-eb1b-452d-9b29-30f1d8988d46',
    categories: [
      {
        id: '67556e61b3045c861e2c7059',
        i18n: {
          zh: {
            name: '台美關係',
          },
          en: {
            name: 'U.S.-Taiwan Relations',
          },
        },
      },
    ],
    updatedAt: '2024-12-21T02:42:35.027Z',
    createdAt: '2024-12-09T02:53:25.666Z',
  },
  {
    id: '67565b42e981ce40d9596632',
    isFeatured: true,
    excerpt:
      '過完農曆新年後，台股創新高，台積電也創股價新高（希望大家在開工後都開心），不過對比中國股市慘況，真的是兩個世界。看到台灣的股市熱絡狀況也不禁令人想到，大約一年前，舖天蓋地的新聞與訊息談論著台積電將被美國淘空、台積電將成為美積電，然後大肆渲染說台灣經濟要完蛋了，甚至有論述稱台灣應該要趕快靠向中國，不能再靠美國。而在社群媒體的推波助瀾下，這樣去脈絡的混淆訊息被放大，並被廣泛地傳播。',
    title: '台股與台積電創新高的啟示錄',
    subtitle: '小心資訊操弄',
    media: {
      photo: {
        alt: '2024-02-16.png',
        url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-02-16.png',
        sizes: {
          desktop: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-02-16-1920x1319.png',
          },
          tablet: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-02-16-1024x704.png',
          },
          mobile: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-02-16-414x285.png',
          },
          thumbnail: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-02-16-300x206.png',
          },
        },
      },
    },
    tags: [
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
      },
    ],
    content: [
      {
        children: [
          {
            text: '過完農曆新年後，台股創新高，',
          },
          {
            children: [
              {
                text: '台積電',
              },
            ],
            doc: {
              relationTo: 'bills',
              value: {
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
                        description:
                          'Message on Senate action sent to the House.',
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
                        description:
                          'Message on Senate action sent to the House.',
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
                        description:
                          'Placed on the Union Calendar, Calendar No. 55.',
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
                  },
                },
                congress: 117,
                number: '4346',
                type: 'hr',
                introducedAt: {
                  datetime: '2021-07-01T00:00:00.000Z',
                  precision: ['year', 'month', 'day'],
                },
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
                    createdAt: '2024-11-28T15:09:00.431Z',
                    updatedAt: '2024-12-11T07:47:25.318Z',
                    nameEn: 'Trade/Economy',
                    nameZh: '經濟貿易',
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
                        lastName: '萊恩',
                        displayName: '萊恩',
                        bio: '[Wikipedia] 提摩西·約翰·瑞安（英語：Timothy John Ryan，1973年7月16日—）是一名美國政治人物，2003年-2023年期間擔任俄亥俄州聯邦眾議員。他是民主黨籍，自2013年起代表俄亥俄州第13國會選區，在重新劃分選區前曾代表俄亥俄州第17國會選區。瑞安的選區現在包括俄亥俄州東北部的一大片地區，從揚斯敦到亞克朗。他是2022年俄亥俄州聯邦參議員選舉中的民主黨提名人。',
                        otherNames: [],
                      },
                    },
                    birthday: {
                      datetime: '1973-07-16T00:00:00.000Z',
                      precision: ['year', 'month', 'day'],
                    },
                    gender: 'male',
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
                            id: '6753c2934b046d7ce13a5aa6',
                          },
                          {
                            title: 'Representative for district 13, Ohio',
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
                        id: '6753c2594b046d7ce13a5aa4',
                      },
                    ],
                    links: [],
                    partyChangeRecords: [],
                    viewCount: 0,
                    displayName: 'Tim Ryan',
                    bio: "[Wikipedia] Timothy John Ryan (born July 16, 1973) is an American politician who served as a U.S. representative for Ohio from 2003 to 2023. A member of the Democratic Party, he represented Ohio's 13th congressional district from 2013 to 2023, having previously represented Ohio's 17th congressional district from 2003 to 2013. Ryan's district included a large swath of northeastern Ohio, from Youngstown to Akron. He was the Democratic nominee in the 2022 United States Senate election in Ohio, which he lost to JD Vance.",
                    createdAt: '2024-12-06T10:13:33.858Z',
                    updatedAt: '2024-12-07T03:40:07.454Z',
                    currentParty: 'independent',
                    govTrackId: '400352',
                    votes: [],
                    photo: {
                      id: '67595fa67e1c21b02dd70b6b',
                      alt: 'Tim_Ryan.png',
                      filename: 'Tim_Ryan.png',
                      mimeType: 'image/png',
                      filesize: 82592,
                      width: 200,
                      height: 244,
                      focalX: 50,
                      focalY: 50,
                      sizes: {
                        desktop: {
                          width: 1920,
                          height: 2342,
                          mimeType: 'image/png',
                          filesize: 3102516,
                          filename: 'Tim_Ryan-1920x2342.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan-1920x2342.png',
                        },
                        tablet: {
                          width: 1024,
                          height: 1249,
                          mimeType: 'image/png',
                          filesize: 1270318,
                          filename: 'Tim_Ryan-1024x1249.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan-1024x1249.png',
                        },
                        mobile: {
                          width: 414,
                          height: 505,
                          mimeType: 'image/png',
                          filesize: 300784,
                          filename: 'Tim_Ryan-414x505.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan-414x505.png',
                        },
                        thumbnail: {
                          width: 300,
                          height: 366,
                          mimeType: 'image/png',
                          filesize: 176386,
                          filename: 'Tim_Ryan-300x366.png',
                          url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan-300x366.png',
                        },
                      },
                      createdAt: '2024-12-11T09:47:18.947Z',
                      updatedAt: '2024-12-11T09:47:18.947Z',
                      url: 'https://ustwcmsstorage.blob.core.windows.net/media-people/Tim_Ryan.png',
                    },
                    billCount: 1,
                    records: [],
                    sponsorBills: ['6752cf9f1e937e031b1b23d5'],
                    cosponsorBills: [],
                  },
                  party: 'democratic',
                },
                cosponsors: [],
                congressGovUrl:
                  'https://www.congress.gov/bill/117th-congress/house-bill/4346',
                title: 'CHIPS and Science Act',
                summary:
                  '[congress.gov] This act provides funds to support the domestic production of semiconductors and authorizes various programs and activities of the federal science agencies.',
                latestActionTime: '2022-08-09T00:00:00.000Z',
                createdAt: '2024-12-06T10:19:11.796Z',
                updatedAt: '2024-12-19T07:31:32.103Z',
                popularityRank: null,
                isFeatured: true,
              },
            },
            linkType: 'internal',
            type: 'link',
          },
          {
            text: '也創股價新高（希望大家在開工後都開心），不過對比中國股市慘況，真的是兩個世界。看到台灣的股市熱絡狀況也不禁令人想到，大約一年前，舖天蓋地的新聞與訊息談論著台積電將被美國淘空、台積電將成為美積電，然後大肆渲染說台灣經濟要完蛋了，甚至有論述稱台灣應該要趕快靠向中國，不能再靠美國。而在社群媒體的推波助瀾下，這樣去脈絡的混淆訊息被放大，並被廣泛地傳播。\n\n我們必須要了解的是，一間在全球佈局的私人企業本來就有自己的考量，其佈局策略也要以其客戶需求為重。如果大家有機會看到任何跟台積電相關的訪談，或者是任何專家學者們的著作討論半導體業的發展，內容都會非常一致地說：企業投資佈局主要考量點就在於服務客戶需求。\n\n我們能夠理解台灣有些人對台積電感到驕傲的同時，也會衍伸出對於「台積電出走」的擔憂，然而事實就是台積電不僅沒有「出走」，更仍舊將最先進製成留在台灣，也不只投資美國，還投資了歐洲，並在台灣擴廠（嘉義成功爭取）！\n\n若沒有確實了解事實，一昧地製造恐懼，只是在從社會信任、群體自信等各方面，侵蝕台灣社會的韌性。然而，那些言之鑿鑿散播恐懼與資訊操弄的媒體與傳播者，卻不需為自己講過的話負責，甚至也不願了解自己話語的不當之處以及作為媒體人的倫理規範，始終躲藏在「言論自由」的大旗後，以恐懼和憤怒，操弄、動員他人。\n\n坊間已經有非常多的書本作品以及podcast告訴大家，台灣的半導體為什麼可以做到世界第一。身為台灣人，我們要思考的應該是如何為當前的世界第一維持健康的成長環境，包括少子化問題、婦女就業保障、社會貧富差距等，並且如何有遠見地再造第二個世界第一。（相關參考文章與書目：林宏文《晶片島上的光芒》、Miller《晶片戰爭》、 太田泰彦《半導體地緣政治學》、黃欽勇黃逸平《矽島的危與機》等書。同時也可以參考陳添枝《美中貿易戰，戰什麼》，朱敬一等人《價值戰爭》）\n\n資訊操弄會透過大量訊息製造出一個平行世界般的偽真相，聲稱美國淘空台積電的手法，進而製造恐懼與對政府（美國及台灣）的不信任。最終這類訊息可能達到的結果是，讓人不經意地與中國做連結，述說中國如何好，台灣應要更向中國靠攏云云。\n\n類似的事件層出不窮，而我們相信最根本的解方就是提升公民的資訊判讀力，包括要具備查證與邏輯推論的能力，還要有多方驗證的習慣。當然，若可以的話還要更認識台美關係、更認識中國政治與統戰的本質，才不會被大量的操弄訊息「呼嚨」。',
          },
        ],
      },
    ],
    sources: [],
    authors: [
      {
        id: '67556b3f06a6bf46e14788e2',
        name: 'US Taiwan Watch - Commentary and Analysis',
        bio: 'Our team of editors and experts comment on the latest and most important events in the world and how they affect US-Taiwan relations. From geopolitics, security, and elections, to business, technology, and culture, this is where to find the freshest insights.',
      },
    ],
    podcast: null,
    categories: [
      {
        id: '67651449bc0742133dc7db26',
        i18n: {
          zh: {
            name: '國際經濟',
          },
          en: {
            name: 'International Economy',
          },
        },
      },
    ],
    updatedAt: '2024-12-20T06:54:47.219Z',
    createdAt: '2024-12-09T02:51:46.609Z',
  },
  {
    id: '67565af4e981ce40d959660f',
    isFeatured: true,
    excerpt:
      '近期許多人在傳一段新聞訪問片段，內容是川普說他不會說是否保衛台灣，還表示台灣拿走了美國半導體工作，因此要對台灣半導體產業課稅。這片段不只出現在台灣人社群，兩岸關係重量級學者葛來儀也對此做出評論，許多美國新聞與評論更是直接反駁川普所說的狀況。',
    title: '川普不願意承諾協防台灣，若他當選就完蛋了？',
    subtitle: '',
    media: {
      photo: {
        alt: '2024-01-28.png',
        url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-28.png',
        sizes: {
          desktop: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-28-1920x1191.png',
          },
          tablet: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-28-1024x635.png',
          },
          mobile: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-28-414x257.png',
          },
          thumbnail: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-28-300x186.png',
          },
        },
      },
    },
    tags: [],
    content: [
      {
        children: [
          {
            text: "【川普不願意承諾協防台灣，若他當選就完蛋了？】\n\n近期許多人在傳一段新聞訪問片段，內容是川普說他不會說是否保衛台灣，還表示台灣拿走了美國半導體工作，因此要對台灣半導體產業課稅。這片段不只出現在台灣人社群，兩岸關係重量級學者葛來儀也對此做出評論，許多美國新聞與評論更是直接反駁川普所說的狀況。\n\n事實上，這是個整整半年前的影片，是川普2023年7月17日接受福斯新聞主持人Maria Bartiromo訪問的片段，當時觀測站也有報導。類似的發言，川普也在9月15日接受NBC訪問時說過。當然，我們並不知道經過半年，川普想法是否有所改變（可能不會），但以下附上本站住海編的評論，供大家參考。\n\n住海編認為，川普在對外用兵問題上已經相當接近「孤立主義」，但那不代表他在重要時刻一定不出兵，只是不希望讓自己的外交政策選項缺乏彈性。這種決策模式未必有好壞之分；所謂「戰略模糊」政策正是這種邏輯。川普在接受NBC訪談時就清楚說到「戰略就是不該說出來，所以如果問我這個問題，我絕不會回答，因為等於把選項全攤出來」。拜登說要保衛台灣聽起來很令人振奮（而且他公開說過至少四次），但川普說他不願意明白講說要協防台灣也不用過於擔心，畢竟不管美國要不要說明白，保衛台灣都有相對應的嚇阻策略可以使用。美國長期以來都是採用戰略模糊的策略，不明白講說到底會不會協防台灣，但實際上是不斷在跟台灣合作、加強台灣的戰備。\n\n至於川普說台灣拿走美國工作這種話，他幾十年來也都是這麼評論日本、中國等「拿走美國工作」的製造業大國，但這不代表川普上任必然會懲罰這些國家，一切端看這些國家的執政者如何與川普尋找共同利基。例如安倍晉三就承諾要讓日本車廠到美國設廠，台積電到亞利桑那設廠也是在川普時代拍板，據傳也有蔡英文在背後牽線（郭台銘的富士康到威斯康辛投資超大一筆然後跳票又是另外的故事了）。\n\n有趣的是，目前我們看到的智庫學者或是報刊雜誌上，有超多人幫台灣的高科技業講話，認為美國製造業的衰落根本不是因為工作機會被拿走，而是其他原因（例：基礎建設不夠，長期都沒有產業政策等等）不過對川普來說，本來就有一套滿特別的世界觀，並不是我們能夠輕易改變的。\n\n還有一點很重要的是，執政者就算有個人想法，如何將想法形成「政策」一定需要「幕僚團隊」協助，個人想法也可能因為收到幕僚提供的意見而改變。當年川普內閣的國安團隊官員，許多人的確已經遠離川普，但還是有許多當年的挺台官員，其意見仍可能為川普所重視（如前國家安全顧問Robert O'Brien、前國務卿Mike Pompeo等人），未來川普的國安幕僚團隊的組成成員是我們要密切關注的。（我們的書《為什麼我們要在意美國》裡面也有幫大家整理一些最重要的職位，需要觀察由哪樣子的人接任）\n\n當然，當年的川普內閣也有Robert Lightheizer或Steven Mnuchin等對台灣沒有那麼友好的官員、或者主張不要對中或太嚴厲的官員，但我們很難想像川普對台灣的政策會完全倒向「敵對」。畢竟川普還是要重視商界利益，對台灣半導體產業鏈出重手制裁，對美國國內就業及產業發展也未必有正面效益。\n\n另外一點值得注意的是，現在國會當中對台灣的態度是相當一致、兩大黨共識，因此國會也不可能會讓美國的對台政策有太大的轉變。\n\n總而言之，美國的初選正在進行中，川普很可能會再度出線，和拜登再一次進行對決。不管如何，台灣都必須要持續強化各方面以及各層級的對美外交工作，拓展更多友好的關係。",
          },
        ],
      },
    ],
    sources: [],
    authors: [
      {
        id: '67556b3f06a6bf46e14788e2',
        name: 'US Taiwan Watch - Commentary and Analysis',
        bio: 'Our team of editors and experts comment on the latest and most important events in the world and how they affect US-Taiwan relations. From geopolitics, security, and elections, to business, technology, and culture, this is where to find the freshest insights.',
      },
    ],
    podcast: null,
    categories: [
      {
        id: '67556e61b3045c861e2c7059',
        i18n: {
          zh: {
            name: '台美關係',
          },
          en: {
            name: 'U.S.-Taiwan Relations',
          },
        },
      },
    ],
    updatedAt: '2024-12-19T10:42:20.604Z',
    createdAt: '2024-12-09T02:50:28.205Z',
  },
  {
    id: '67565a7ee981ce40d95965ec',
    isFeatured: false,
    excerpt:
      '選舉已經過去一週有餘，當選舉熱情消退，也要開始來關心新政府未來四年將如何帶領台灣。諾丁漢大學台灣研究中心的「Taiwan Insight」刊登了觀測站理事葉介庭的文章：「台灣新總統：連續性、優先事項、願景」，闡述新任總統賴清德即將面臨的挑戰。以下節錄幾個重點，歡迎到連結收看全文：https://reurl.cc/K4ldKg。',
    title: '賴清德執政新挑戰',
    subtitle: '',
    media: {
      photo: {
        alt: '2024-01-26.png',
        url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-26.png',
        sizes: {
          desktop: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-26-1920x1294.png',
          },
          tablet: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-26-1024x690.png',
          },
          mobile: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-26-414x279.png',
          },
          thumbnail: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-26-300x202.png',
          },
        },
      },
    },
    tags: [],
    content: [
      {
        children: [
          {
            text: '選舉已經過去一週有餘，當選舉熱情消退，也要開始來關心新政府未來四年將如何帶領台灣。',
          },
        ],
      },
      {
        children: [
          {
            text: '\n諾丁漢大學台灣研究中心的「Taiwan Insight」刊登了觀測站理事葉介庭的文章：「台灣新總統：連續性、優先事項、願景」，闡述新任總統賴清德即將面臨的挑戰。\n\n以下節錄幾個重點，歡迎到連結收看全文：https://reurl.cc/K4ldKg。\n',
          },
        ],
      },
      {
        children: [
          {
            text: '',
          },
        ],
      },
      {
        children: [
          {
            text: '延續性',
          },
        ],
        type: 'h5',
      },
      {
        children: [
          {
            text: '這次總統選舉結果前所未有，一個政黨獲得連續三屆執政機會，這代表了人們對過去的治理有偏好。因此，賴清德領導的新政府面臨了一個微妙的任務：確保與過去政府的延續性，同時處理先前的不足，還得為自己的政治遺產奠基。然而，面對比過去八年都還要分裂的立法院，即便賴想要延續蔡的政策，一切都會變得更加困難與棘手。賴需要找到方法，顯示他能夠改進前一任政府，才有可能得到選民的支持。',
          },
        ],
      },
      {
        children: [
          {
            text: '',
          },
        ],
      },
      {
        children: [
          {
            text: '優先事項',
          },
        ],
        type: 'h5',
      },
      {
        children: [
          {
            text: '對新政府來說，國內經濟以及福利會是需要優先解決的問題，特別是住房成本，這是離開民進黨的年輕選民最常提到的。儘管在蔡英文任內，在全球經濟不確定的情況下替台灣整體經濟做了顯著的貢獻，人民仍感到收入停滯以及財富不均，這和世代正義有很大的關係。但要如何在造福年輕一代的同時，不與年長人口利益發生衝突？這需要特別小心。\n\n在外交方面，賴將繼續面對北京的壓力和恐嚇，例如近期的諾魯斷交事件；而對美，儘管在蔡政府期間美台關係達到了新高度，但賴政府將不得不就安全合作和貿易等問題與美國進行更實質性的談判，例如〈台美21世紀貿易倡議〉中有爭議的部分。除了兩個大國外，台灣也須與日本、印度及東協國家建立更緊密的區域聯繫。此外，管理台灣半導體產業在地緣政治中的角色，將是外交政策的關鍵。',
          },
        ],
      },
      {
        children: [
          {
            text: '',
          },
        ],
      },
      {
        children: [
          {
            text: '願景',
          },
        ],
        type: 'h5',
      },
      {
        children: [
          {
            text: '這次賴清德並未以絕對多數勝出。然而做為總統，他有責任說服全體國民 —— 尤其是那些沒有投給他的人 —— 他能為國家帶來願景。回顧前任，蔡英文在她任內為台灣人的自我認同開創了新的一頁；在國際事務上，她則是一個講話沉靜，但誠信可信的國家代表。在全球局勢日益動盪的背景下，賴清德要如何鼓舞人民，並向世界證明台灣對全球穩定不是一個負擔而是資產，會是他接下來四年的挑戰。',
          },
        ],
      },
      {
        children: [
          {
            text: '',
          },
        ],
      },
      {
        children: [
          {
            text: '結語',
          },
        ],
        type: 'h5',
      },
      {
        children: [
          {
            text: '隨著全球對台灣選舉的關注逐漸消退，台灣的選民們將陸續回歸正常生活。這些人，他們不僅僅是外媒口中「用選票抗拒中國」的選民，他們是父母和孩子、經營者和照護者、管理者和員工、通勤者和學生、情侶和哀悼者 —— 日復一日，充滿激情和希望地過著充實生活的真實人物。更重要的是，他們是居住在這塊土地上的公民與社群，這些人才是新總統以及新立法院要最終服務的對象。',
          },
        ],
      },
    ],
    sources: [],
    authors: [
      {
        id: '67556b3f06a6bf46e14788e2',
        name: 'US Taiwan Watch - Commentary and Analysis',
        bio: 'Our team of editors and experts comment on the latest and most important events in the world and how they affect US-Taiwan relations. From geopolitics, security, and elections, to business, technology, and culture, this is where to find the freshest insights.',
      },
    ],
    podcast: null,
    categories: [
      {
        id: '67651455bc0742133dc7db2e',
        i18n: {
          zh: {
            name: '國際政治',
          },
          en: {
            name: 'International Politics',
          },
        },
      },
    ],
    updatedAt: '2024-12-20T06:54:54.253Z',
    createdAt: '2024-12-09T02:48:30.693Z',
  },
  {
    id: '67565a15e981ce40d95965c9',
    isFeatured: false,
    excerpt:
      '台灣大選過後，中共隨即挖走我國邦交國諾魯。值得注意的是，諾魯在宣布斷交時用的理由是「聯合國2758號決議」及「一中原則」，這是中共法律戰的典型說法。而就在選後隔天，拜登總統派出的特使團抵達台北，成員包括美國前國家安全顧問哈德利（Stephen J.Hadley，共和黨籍）及前副國務卿史坦伯格（James B.Steinberg，民主黨籍），美國在台協會（AIT）主席羅森伯格（Laura Rosenberger）隨行。',
    title: '從邦交國談2758號決議：一中原則是如何危險',
    subtitle: '',
    media: {
      photo: {
        alt: '2024-01-17.png',
        url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-17.png',
        sizes: {
          desktop: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-17-1920x1311.png',
          },
          tablet: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-17-1024x699.png',
          },
          mobile: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-17-414x283.png',
          },
          thumbnail: {
            url: 'https://ustwcmsstorage.blob.core.windows.net/media-general/2024-01-17-300x205.png',
          },
        },
      },
    },
    tags: [],
    content: [
      {
        children: [
          {
            text: '【從邦交國談2758號決議：一中原則是如何危險】\n\n台灣大選過後，中共隨即挖走我國邦交國諾魯。值得注意的是，諾魯在宣布斷交時用的理由是「聯合國2758號決議」及「一中原則」，這是中共法律戰的典型說法。\n\n而就在選後隔天，拜登總統派出的特使團抵達台北，成員包括美國前國家安全顧問哈德利（Stephen J.Hadley，共和黨籍）及前副國務卿史坦伯格（James B.Steinberg，民主黨籍），美國在台協會（AIT）主席羅森伯格（Laura Rosenberger）隨行。15日早上媒體座談中，羅森伯格表示對於諾魯的轉向決定感到失望，並特別提醒國際社會，中國在爭取建交時往往做出很多承諾，但也經常沒有落實。她說，美國將持續深化與台交往，同時「持續支持台灣有意義地參與國際社會」，並強調「2758號決議沒有決定台灣地位、沒有排除任何國家與台灣建立外交關係，也沒有排除台灣有意義參與聯合國體系空間。」\n\n羅森伯格的說法，就是拜登政府上台以來對台政策的其中一項轉變：反駁中共在國際間的錯誤論述、超譯2758號決議。近年來，美國愈來愈常注意到中共用2758號決議為由，阻止台灣參與國際社會，甚至用該決議聲稱擁有台灣主權。然而，這個決議案根本沒提到台灣，沒有對台灣國際地位做出任何約束。\n\n聯邦眾議院先前通過「台灣國際團結法案」，內容清楚表達聯合國大會第2758號決議不涉及台灣，美國將致力對抗中國試圖在國際組織當中阻礙台灣參與以及扭曲台灣地位的行為。\n\n這邊觀測站要再次強調，在這次大選中，柯文哲表示將在外交上遵循蔡英文路線，侯友宜的外交政策主張（以Foreign Affiars那篇投書參照）也和蔡英文路線非常相像。而實際上來看，蔡英文路線拒絕了中共要求我們要承認的「一中原則」，即「台灣是中國的一部份」這種宣稱。蔡英文路線強調中華民國和中華人民共和國互不隸屬，當然也會強調2758號決議不涉及台灣。美國現在已經發現中共長期利用該決議來聲稱擁有台灣主權為非常錯誤的操作，因此美國開始反制。\n\n假設台灣總統是中國國民黨人或柯文哲擔任，可以推測兩位皆不會承認ROC和PRC互不隸屬，也不拒絕一中原則，甚至可能搶著承認（九二共識）。一旦接受中共設下的交流互動前提，即九二共識、一中原則，並且不對中共法律戰加以反擊，便會默許台海事務為中國國內事務，也就是在國際法上面直接設下阻礙，讓國際社會無法幫助台灣。\n\n台灣是世界的台灣，不是中國的。望周知！',
          },
        ],
      },
    ],
    sources: [],
    authors: [
      {
        id: '67556b3f06a6bf46e14788e2',
        name: 'US Taiwan Watch - Commentary and Analysis',
        bio: 'Our team of editors and experts comment on the latest and most important events in the world and how they affect US-Taiwan relations. From geopolitics, security, and elections, to business, technology, and culture, this is where to find the freshest insights.',
      },
    ],
    podcast: null,
    categories: [
      {
        id: '67556e61b3045c861e2c7059',
        i18n: {
          zh: {
            name: '台美關係',
          },
          en: {
            name: 'U.S.-Taiwan Relations',
          },
        },
      },
    ],
    updatedAt: '2024-12-20T06:55:18.168Z',
    createdAt: '2024-12-09T02:46:45.238Z',
  },
] as unknown as Article[]

export const CATEGORIES_DTO_MOCK = [
  {
    id: '67651455bc0742133dc7db2e',
    i18n: {
      en: {
        name: 'International Politics',
      },
      zh: {
        name: '國際政治',
      },
    },
  },
  {
    id: '67651449bc0742133dc7db26',
    i18n: {
      en: {
        name: 'International Economy',
      },
      zh: {
        name: '國際經濟',
      },
    },
  },
  {
    id: '6765143ebc0742133dc7db1e',
    i18n: {
      en: {
        name: 'International News',
      },
      zh: {
        name: '國際新聞',
      },
    },
  },
  {
    id: '67651431bc0742133dc7db16',
    i18n: {
      en: {
        name: 'US Legislation',
      },
      zh: {
        name: '美國法案',
      },
    },
  },
  {
    id: '67556e61b3045c861e2c7059',
    i18n: {
      en: {
        name: 'U.S.-Taiwan Relations',
      },
      zh: {
        name: '台美關係',
      },
    },
  },
] as unknown as CategoriesArticle[]
