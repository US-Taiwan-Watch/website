import { People } from '@/modules/People/classes/People'
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

const useSectionLayout = (people: People) => {
  /**
   * 現任眾議員或參議員才會出現政黨
   */
  const hasParty = useMemo(
    () => !!people.party && people.isCurrentCongressMember,
    [people]
  )

  /**
   * 眾議員或參議員才會有贊助法案
   */
  const hasSponsored = useMemo(() => people.isCurrentCongressMember, [people])

  /**
   * 眾議員或參議員才會有共同提案法案
   */
  const hasCoSponsored = useMemo(() => people.isCurrentCongressMember, [people])

  /**
   * 眾議員或參議員才會有投票紀錄
   */
  const hasVotingRecord = useMemo(
    () => people.isCurrentCongressMember,
    [people]
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
   */
  const hasCommittee = useMemo(() => people.isCurrentCongressMember, [people])

  /**
   * 每個人都有出版品
   */
  const hasPublication = useMemo(() => true, [])

  /**
   * 現任眾議員或參議員才會有理念領導力圖表
   */
  const hasIdeologyLeadershipChart = useMemo(
    () => people.isCurrentCongressMember,
    [people]
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
          component: <Party party={people.party!} />,
        },
        {
          visible: hasSponsored,
          size: 2,
          component: <Sponsored people={people} />,
        },
        {
          visible: hasCoSponsored,
          size: 2,
          component: <CoSponsored people={people} />,
        },
        {
          visible: hasVotingRecord,
          size: 2,
          component: <VotingRecord people={people} />,
        },
      ],
    },
    {
      visible: hasBioByAI || hasExperience,
      components: [
        {
          visible: hasBioByAI,
          size: 7,
          component: <BioByAI bioByAI={people.bioByAI} />,
        },
        {
          visible: hasExperience,
          size: 5,
          component: <Experience experience={people.experience} />,
        },
      ],
    },
    {
      visible: hasCommittee || hasPublication,
      components: [
        {
          visible: hasCommittee,
          size: 'grow',
          component: <Committee committees={people.committees} />,
        },
        {
          visible: hasPublication,
          size: 'grow',
          component: <Publication publications={people.publications} />,
        },
      ],
    },
    {
      visible: hasIdeologyLeadershipChart,
      components: [
        {
          visible: hasIdeologyLeadershipChart,
          size: 12,
          component: (
            <IdeologyLeadershipChart
              isCurrentCongressMember={people.isCurrentCongressMember}
              govTrackId={people.govTrackId}
            />
          ),
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
