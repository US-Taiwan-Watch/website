import { People } from '@/modules/People/classes/People'
import BioByAI from '@/modules/People/components/PeopleTracker/CardContent/BioByAI'
import Committee from '@/modules/People/components/PeopleTracker/CardContent/Committee'
import Experience from '@/modules/People/components/PeopleTracker/CardContent/Experience'
import IdeologyLeadershipChart from '@/modules/People/components/PeopleTracker/CardContent/IdeologyLeadershipChart'
import NumberLink from '@/modules/People/components/PeopleTracker/CardContent/NumberLink'
import Party from '@/modules/People/components/PeopleTracker/CardContent/Party'
import Publication from '@/modules/People/components/PeopleTracker/CardContent/Publication'
import { Grid2 as Grid, GridSize, Stack, useTheme } from '@mui/material'
import { memo } from 'react'
import type React from 'react'

interface PeopleContentSectionProps {
  people: People
}

const PeopleContentSection = memo(function PeopleContentSection({
  people,
}: PeopleContentSectionProps) {
  const theme = useTheme()

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
      visible:
        !!people.party ||
        people.experience.length > 0 ||
        people.sponsoredBills.length > 0 ||
        people.coSponsoredBills.length > 0 ||
        people.votingRecord.length > 0,
      components: [
        {
          visible: !!people.party,
          size: 'grow',
          component: (
            <Party
              party={people.party!}
              partyExperiences={people.partyExperience}
            />
          ),
        },
        {
          visible: people.sponsoredBills.length > 0,
          size: 2,
          component: <NumberLink title="Sponsored" number={2} />,
        },
        {
          visible: people.coSponsoredBills.length > 0,
          size: 2,
          component: <NumberLink title="co-sponsored" number={3} />,
        },
        {
          visible: people.votingRecord.length > 0,
          size: 2,
          component: <NumberLink title="Voting Record" number={0} />,
        },
      ],
    },
    {
      visible: !!people.bioByAI?.length || people.experience.length > 0,
      components: [
        {
          visible: !!people.bioByAI?.length,
          size: 7,
          component: <BioByAI bioByAI={people.bioByAI} />,
        },
        {
          visible: people.experience.length > 0,
          size: 5,
          component: <Experience experience={people.experience} />,
        },
      ],
    },
    {
      visible: people.committees.length > 0 || people.publications.length > 0,
      components: [
        {
          visible: people.committees.length > 0,
          size: 'grow',
          component: <Committee />,
        },
        {
          visible: people.publications.length > 0,
          size: 'grow',
          component: <Publication />,
        },
      ],
    },
    {
      visible: true,
      components: [
        {
          visible: true,
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
