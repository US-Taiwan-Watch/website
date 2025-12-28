import UHStack from '@/common/components/atoms/UHStack'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import { BillCosponsor } from '@/modules/Bill/business/BillCosponsor'
import { Divider } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { memo, useCallback, Fragment } from 'react'

type CosponsorListProps = {
  cosponsors: BillCosponsor[]
}

const CosponsorList = memo(function CosponsorList({
  cosponsors,
}: CosponsorListProps) {
  const getCurrentExperienceTitle = useCallback((cosponsor: BillCosponsor) => {
    // 取得現在的職位
    const currentExperience = cosponsor.people.experience.find(
      (item) => item.isCurrent
    )
    if (!currentExperience) return ''
    /**
     * 先查看目前的經驗是否有掛 `subtitle`
     * (有則是職位，沒有則是在該單位有許多職位變換)，
     * 如果沒有則查看 `experience` array (排序為: 最新到最舊) 裡的第一個 item 的 `title`
     */
    const title =
      currentExperience.subtitle ??
      currentExperience.experience?.[0]?.title ??
      ''
    return title
  }, [])
  return (
    <Stack gap={1.75} mt={1.75}>
      {cosponsors.map((cosponsor, index) => (
        <Fragment key={cosponsor.people.id}>
          <Stack alignItems="flex-start" gap={0.75}>
            <Stack gap={0.25}>
              <Typography variant="subtitleL">
                {cosponsor.people.name}
              </Typography>
              <Typography variant="bodyM">
                {getCurrentExperienceTitle(cosponsor)}
              </Typography>
            </Stack>
            <UHStack gap={0.5} alignItems="center">
              {cosponsor?.people?.party && (
                <UPoliticalPartyIcon party={cosponsor.people.party} size="xs" />
              )}
              <Typography
                variant="bodyS"
                sx={{
                  fontWeight: `700 !important`,
                  textTransform: 'capitalize',
                }}
              >
                {cosponsor.people.party}
              </Typography>
            </UHStack>
          </Stack>
          {index !== cosponsors.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Stack>
  )
})

export default CosponsorList
