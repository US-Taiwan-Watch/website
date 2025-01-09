import { KetagalanMedia } from '@/modules/KetagalanMedia/classes/KetagalanMedia'

// TODO: 移除 mock data 時，須一併移除 /assets/ketagalan/x.webp
const ketagalanMediaMockData1 = new KetagalanMedia({
  id: '1',
  title:
    'US-Taiwan Economic Relations in Trump 2.0: Opportunities and Challenges',
  image: '/assets/ketagalan/1.webp',
  description:
    'Under a second Trump administration, U.S.-Taiwan economic ties face challenges from proposed 10–20% import tariffs and a widening trade deficit driven by AI hardware exports. However, investments like TSMC’s Arizona plant and ongoing economic dialogues offer opportunities for collaboration in technology, energy security, and supply chain resilience.',
  tags: ['Tariffs', 'Trade', 'Semiconductor', 'Foreign Investment', 'Economic'],
})

const ketagalanMediaMockData2 = new KetagalanMedia({
  id: '2',
  title:
    'Parallel Paths, Divergent Stories: Taiwan and South Korea’s Democratic Experiment',
  image: '/assets/ketagalan/2.webp',
  description:
    'Taiwan and South Korea share histories of colonization and authoritarian rule but followed distinct paths to democracy. Taiwan’s orderly civilian transition contrasts with South Korea’s civil resistance against military regimes. Their semi-presidential and presidential systems, alongside differing economic structures, shaped unique democratic identities amid shared challenges like polarization and security pressures.',
  tags: [
    'Democratic Transition',
    'Authoritarian Legacy',
    'Political Polarization',
    'Constitutional Governance',
  ],
})

const ketagalanMediaMockData3 = new KetagalanMedia({
  id: '3',
  title:
    'Brothers in the mirror: Taiwan & Korea’s road to democracy and future Partnership – Part II',
  image: '/assets/ketagalan/3.webp',
  description:
    'Taiwan and South Korea, shaped by shared histories, diverge in political identities. Taiwan’s parties split over China relations but align on pro-U.S. policies, while South Korea’s politics reflect historical conservative-progressive divides. Strengthening mutual trust is key to advancing regional security and stability in the Indo-Pacific.',
  tags: ['South Korea', 'Regional Security', 'Indo-Pacific'],
})

export const KETAGALAN_MEDIA_MOCK_DATA = [
  ketagalanMediaMockData1,
  ketagalanMediaMockData2,
  ketagalanMediaMockData3,
]
