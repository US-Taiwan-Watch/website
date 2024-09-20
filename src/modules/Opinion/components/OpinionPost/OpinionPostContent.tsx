'use client'

import { styled } from '@/common/lib/mui/theme'
import ContentImage from '@/modules/Opinion/components/OpinionPost/Content/ContentImage'
import HyperLinkTooltip from '@/modules/Opinion/components/OpinionPost/Content/HyperLinkTooltip'
import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import { Stack } from '@mui/material'

const StyledContent = styled(Stack)(({ theme }) => ({
  '& h1': {
    fontSize: theme.typography.articleH2.fontSize,
    fontWeight: 700,
  },
  '& h2': {
    fontSize: theme.typography.subtitleXL.fontSize,
    fontWeight: 700,
  },
  '& h3': {
    fontSize: theme.typography.articleH3.fontSize,
    fontWeight: 700,
  },
  '& h4': {
    fontSize: theme.typography.articleH4.fontSize,
    fontWeight: 700,
  },
  '& h5': {
    fontSize: theme.typography.articleH5.fontSize,
    fontWeight: 700,
  },
  '& blockquote': {
    position: 'relative',
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)} !important`,
    marginTop: `${theme.spacing(6)} !important`,
    border: `2px solid ${theme.color.purple[300]}`,
    borderRadius: theme.shape.borderRadius * 2,
    '&::before': {
      content: '""',
      color: theme.color.purple[300],
      backgroundImage: `url(${'/assets/icon/quote.svg'})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: 0,
      left: 20,
      transform: 'translateY(-50%)',
    },
  },
  fontSize: theme.typography.body.fontSize,
  fontWeight: 400,
}))

const OpinionPostContent = function OpinionPostContent() {
  return (
    <Stack spacing={2}>
      <StyledContent
        spacing={2}
        dangerouslySetInnerHTML={{
          __html: `
      <h1>H1.台股與台積電創新高的啟示錄：小心資訊操弄</h1>
      <h2>H2.台股與台積電創新高的啟示錄：小心資訊操弄</h2>
      <h3>H3.台股與台積電創新高的啟示錄：小心資訊操弄</h3>
      <h4>H4.台股與台積電創新高的啟示錄：小心資訊操弄</h4>
      <h5>H5.台股與台積電創新高的啟示錄：小心資訊操弄</h5>
      <p>Body：
        過完農曆新年後，台股創新高，台積電也創股價新高（希望大家在開工後都開心），不過對比中國股市慘況，真的是兩個世界。看到台灣的股市熱絡狀況也不禁令人想到，大約一年前，舖天蓋地的新聞與訊息談論著台積電將被美國淘空、台積電將成為美積電，然後大肆渲染說台灣經濟要完蛋了，甚至有論述稱台灣應該要趕快靠向中國，不能再靠美國。而在社群媒體的推波助瀾下，這樣去脈絡的混淆訊息被放大，並被廣泛地傳播。
      </p>
      <p>
        我們必須要了解的是，一間在全球佈局的私人企業本來就有自己的考量，其佈局策略也要以其客戶需求為重。如果大家有機會看到任何跟台積電相關的訪談，或者是任何專家學者們的著作討論半導體業的發展，內容都會非常一致地說：企業投資佈局主要考量點就在於服務客戶需求這是一個超連結。
      </p>
      <blockquote>
        quote新聞：國防院國防戰略與資源所長蘇紫雲表示，「中國大量發射火箭，其實是為了跟美國爭奪太空的控制權…是它基於太空戰略的一個部分，但是值得我們注意的是，它在這一次（十二月初）所發射的衛星，稱為搖桿39號的系列，那它是採取一箭三星的做法，也就是一枚火箭同時投射出三枚衛星，包括合成孔徑雷達，以及可見光不可見光，或是電子感測的衛星，也就是軍事的間諜衛星。」
      </blockquote>
      `,
        }}
      />
      <HyperLinkTooltip text="超連結" />
      <ContentImage
        image={'/assets/category1.jpg'}
        caption={
          '1967年，中國共產黨主席毛澤東掀起文化大革命，當時在北京市中心展示了他的巨大畫像與標語。（攝影／JEAN VINCENT／AFP）'
        }
      />
      <EpisodeCard
        podcastId="6cdfccc6-7c47-4c35-8352-7f634b1b6f71"
        episodeId="ee208548-5c37-4b0d-91ba-7306d2572518"
      />
    </Stack>
  )
}

export default OpinionPostContent
