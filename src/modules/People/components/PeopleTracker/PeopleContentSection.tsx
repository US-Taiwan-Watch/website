import { People, PeopleUtils } from '@/modules/People/domains/People.utils'
import BioByAI from '@/modules/People/components/PeopleTracker/CardContent/BioByAI'
import Committee from '@/modules/People/components/PeopleTracker/CardContent/Committee'
import Experience from '@/modules/People/components/PeopleTracker/CardContent/Experience'
import IdeologyLeadershipChart from '@/modules/People/components/PeopleTracker/CardContent/IdeologyLeadershipChart'
import CoSponsored from '@/modules/People/components/PeopleTracker/CardContent/CoSponsored'
import Sponsored from '@/modules/People/components/PeopleTracker/CardContent/Sponsored'
import VotingRecord from '@/modules/People/components/PeopleTracker/CardContent/VotingRecord'
import Party from '@/modules/People/components/PeopleTracker/CardContent/Party'
import Publication from '@/modules/People/components/PeopleTracker/CardContent/Publication'
import { Grid2 as Grid, GridSize, Stack, useTheme } from '@mui/material'
import { memo, useMemo } from 'react'
import type React from 'react'
// import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'

const useSectionLayout = (people: People) => {
  // TODO: 待確認 People 有沒有 position
  const isHouseRepresentativeOrSenator = true
  // const isHouseRepresentativeOrSenator = useMemo(
  //   () =>
  //     !!people.position &&
  //     [PeoplePosition.HOUSE_REPRESENTATIVE, PeoplePosition.SENATOR].includes(
  //       people.position
  //     ),
  //   [people.position]
  // )

  /**
   * 現任眾議員或參議員才會出現政黨
   * TODO: 確認怎麼分辨『現任』
   */
  const hasParty = useMemo(
    () =>
      !!people.currentParty &&
      isHouseRepresentativeOrSenator &&
      PeopleUtils.isCurrentMember(people),
    [people, isHouseRepresentativeOrSenator]
  )

  /**
   * 眾議員或參議員才會有贊助法案
   */
  const hasSponsored = useMemo(
    () => isHouseRepresentativeOrSenator,
    [isHouseRepresentativeOrSenator]
  )

  /**
   * 眾議員或參議員才會有共同提案法案
   */
  const hasCoSponsored = useMemo(
    () => isHouseRepresentativeOrSenator,
    [isHouseRepresentativeOrSenator]
  )

  /**
   * 眾議員或參議員才會有投票紀錄
   */
  const hasVotingRecord = useMemo(
    () => isHouseRepresentativeOrSenator,
    [isHouseRepresentativeOrSenator]
  )

  /**
   * 每個人都有 AI 生成的 Bio
   */
  const hasBioByAI = useMemo(() => true, [])

  /**
   * 每個人都有經歷
   */
  const hasExperience = useMemo(() => true, [])

  /**
   * 現任眾議員或參議員才會有委員會
   * TODO: 確認怎麼分辨『現任』
   */
  const hasCommittee = useMemo(
    () => isHouseRepresentativeOrSenator && PeopleUtils.isCurrentMember(people),
    [isHouseRepresentativeOrSenator, people]
  )

  /**
   * 每個人都有出版品
   */
  const hasPublication = useMemo(() => true, [])

  /**
   * 現任眾議員或參議員才會有理念領導力圖表
   * TODO: 確認怎麼分辨『現任』
   */
  const hasIdeologyLeadershipChart = useMemo(
    () => isHouseRepresentativeOrSenator && PeopleUtils.isCurrentMember(people),
    [isHouseRepresentativeOrSenator, people]
  )

  return {
    hasParty,
    hasSponsored,
    hasCoSponsored,
    hasVotingRecord,
    hasBioByAI,
    hasExperience,
    hasCommittee,
    hasPublication,
    hasIdeologyLeadershipChart,
  }
}

interface PeopleContentSectionProps {
  people: People
}

const PeopleContentSection = memo(function PeopleContentSection({
  people,
}: PeopleContentSectionProps) {
  const theme = useTheme()
  const {
    hasParty,
    hasSponsored,
    hasCoSponsored,
    hasVotingRecord,
    hasBioByAI,
    hasExperience,
    hasCommittee,
    hasPublication,
    hasIdeologyLeadershipChart,
  } = useSectionLayout(people)

  /**
   * 內容排版 (Simulate Mansonry Layout)
   * 每個 object 代表一個 row，
   * 每個 row 可以有多個 component，
   * 每個 component 可以控制 visible 和 size，
   * 當同 Row 只有一個 component 時，component size 會設為 grow
   */
  const content: Array<{
    visible: boolean
    components: Array<{
      visible: boolean
      // 預設 size，當同 Row 只有一個 component 時，會設為 grow
      size: GridSize
      component: React.ReactNode
    }>
  }> = [
    {
      visible: hasParty || hasSponsored || hasCoSponsored || hasVotingRecord,
      components: [
        {
          visible: hasParty,
          size: 'grow',
          component: (
            <Party
              party={people.currentParty}
              changeRecords={PeopleUtils.parsePartyChangeRecords(
                people.partyChangeRecords
              )}
            />
          ),
        },
        {
          visible: hasSponsored,
          size: 2,
          component: <Sponsored />,
        },
        {
          visible: hasCoSponsored,
          size: 2,
          component: <CoSponsored />,
        },
        {
          visible: hasVotingRecord,
          size: 2,
          component: <VotingRecord />,
        },
      ],
    },
    {
      visible: hasBioByAI || hasExperience,
      components: [
        {
          visible: hasBioByAI,
          size: 7,
          component: <BioByAI bioByAI={people.bio ?? ''} />,
        },
        {
          visible: hasExperience,
          size: 5,
          component: (
            <Experience
              experiences={PeopleUtils.parseExperiences(people.experiences)}
            />
          ),
        },
      ],
    },
    {
      visible: hasCommittee || hasPublication,
      components: [
        {
          visible: hasCommittee,
          size: 'grow',
          component: <Committee />,
        },
        {
          visible: hasPublication,
          size: 'grow',
          component: <Publication />,
        },
      ],
    },
    {
      visible: hasIdeologyLeadershipChart,
      components: [
        {
          visible: hasIdeologyLeadershipChart,
          size: 12,
          component: <IdeologyLeadershipChart />,
        },
      ],
    },
  ]

  return (
    <Stack gap={2} sx={{ paddingBottom: theme.spacing(10) }}>
      {content.map(({ visible, components }, index) => {
        const filteredComponents = components.filter((comp) => comp.visible)

        return (
          visible && (
            <Grid key={index} container spacing={2}>
              {filteredComponents.map(({ size, component }, index) => (
                <Grid
                  key={index}
                  size={filteredComponents.length === 1 ? 'grow' : size}
                >
                  {component}
                </Grid>
              ))}
            </Grid>
          )
        )
      })}
    </Stack>
  )
})

export default PeopleContentSection
