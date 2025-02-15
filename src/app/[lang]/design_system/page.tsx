'use client'

import UButton from '@/common/components/atoms/UButton'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UIconButton from '@/common/components/atoms/UIconButton'
import ULinkText from '@/common/components/atoms/ULinkText'
import UPagination from '@/common/components/atoms/UPagination'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  BookmarkIcon,
  FacebookIcon,
  InstagramIcon,
  LanguageIcon,
  LinkIcon,
  MailIcon,
  OutlinedShareIcon,
  PodcastIcon,
  ShareIcon,
  SpotifyIcon,
  ThreadsIcon,
  XIcon,
  YoutubeIcon,
} from '@/common/styles/assets/Icons'
import PeopleCard from '@/modules/People/components/PeopleCard'
import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import IndexEpisodeCard from '@/modules/Podcast/components/IndexEpisodeCard'
import {
  Box,
  Grid2 as Grid,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { findAllPeople } from '@/modules/People/data'
import UTimeline, { UTimelineData } from '@/common/components/atoms/UTimeline'
import UContentCard from '@/common/components/atoms/UContentCard'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import UHashTag from '@/common/components/atoms/UHashTag'
import USelect from '@/common/components/atoms/USelect'
import { Party } from '@/common/enums/Party'
import { People } from '@/modules/People/classes/People'
import { Episode } from '@/modules/Podcast/classes/Episode'

const StyledIndexEpisodeCardList = styled(Stack)(({ theme }) => ({
  borderRadius: '30px',
  backgroundColor: theme.color.orange[900],
  padding: '20px',
}))

const timelineData: UTimelineData = [
  {
    title: 'title1',
    subtitle: 'subtitle1',
  },
  {
    title: 'title2',
  },
  {
    title: 'title3',
    subtitle: 'subtitle3',
  },
  {
    title: 'title4',
  },
  {
    title: 'title5',
    subtitle: 'subtitle5',
  },
]

export default function DesignSystemIconsPage() {
  const theme = useTheme<USTWTheme>()

  return (
    <div>
      <h1>Design System Icons</h1>
      <h2>Typography</h2>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="h4">H4</Typography>
      <Typography variant="h5">H5</Typography>
      <Typography variant="h6">H6</Typography>
      <Typography variant="subtitleXL">Subtitle XL</Typography>
      <Typography variant="subtitleL">Subtitle L</Typography>
      <Typography variant="subtitleM">Subtitle M</Typography>
      <Typography variant="subtitleS">Subtitle S</Typography>
      <Typography variant="bodyM">Body M</Typography>
      <Typography variant="bodyS">Body S</Typography>
      <Typography variant="buttonL">Button L</Typography>
      <Typography variant="buttonM">Button M</Typography>
      <Typography variant="buttonS">Button S</Typography>
      <Typography variant="buttonXS">Button XS</Typography>
      <Typography variant="buttonXXS">Button XXS</Typography>
      <Typography variant="menu">menu</Typography>
      <Typography variant="articleH1">articleH1</Typography>
      <Typography variant="articleH2">articleH2</Typography>
      <Typography variant="articleH3">articleH3</Typography>
      <Typography variant="articleH4">articleH4</Typography>
      <Typography variant="articleH5">articleH5</Typography>
      <Typography variant="body">body</Typography>
      <h2>Black UIconButton</h2>
      <Box display="flex" p={2} gap={2}>
        <UIconButton variant="rounded" color="black">
          <LinkIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <OutlinedShareIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <ShareIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <BookmarkIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <MailIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <LanguageIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <FacebookIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <XIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <InstagramIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <PodcastIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <SpotifyIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <YoutubeIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <ThreadsIcon />
        </UIconButton>
      </Box>
      <h2>Primary UIconButton</h2>
      <Box display="flex" p={2} gap={2}>
        <UIconButton variant="rounded" color="primary">
          <LinkIcon width={24} height={24} />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <OutlinedShareIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <ShareIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <BookmarkIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <MailIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <LanguageIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <FacebookIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <XIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <InstagramIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <PodcastIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <SpotifyIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <YoutubeIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="primary">
          <ThreadsIcon />
        </UIconButton>
      </Box>
      <h2>Political Party Icon</h2>
      <Box display="flex" p={2} gap={2}>
        <UPoliticalPartyIcon party={Party.DEMOCRATIC} />
        <UPoliticalPartyIcon party={Party.REPUBLICAN} />
        <UPoliticalPartyIcon party={Party.INDEPENDENT} />
      </Box>
      <h2>Button</h2>
      <Box display="flex" p={2} gap={2}>
        <UButton variant="contained" color="info" rounded size="small">
          Load More
        </UButton>
        <UButton variant="contained" color="info" rounded disabled size="small">
          Load More
        </UButton>
      </Box>
      <Box display="flex" p={2} gap={2}>
        <UButton variant="contained" color="info" rounded size="medium">
          Load More
        </UButton>
        <UButton
          variant="contained"
          color="info"
          rounded
          disabled
          size="medium"
        >
          Load More
        </UButton>
      </Box>
      <Box display="flex" p={2} gap={2}>
        <UButton variant="contained" color="info" rounded size="large">
          Load More
        </UButton>
        <UButton variant="contained" color="info" rounded disabled size="large">
          Load More
        </UButton>
      </Box>
      <Box display="flex" p={2} gap={2}>
        <UButton variant="contained" color="primary" rounded size="medium">
          Load More
        </UButton>
        <UButton
          variant="contained"
          color="primary"
          rounded
          disabled
          size="medium"
        >
          Load More
        </UButton>
      </Box>
      <h2>Link Text</h2>
      <Box display="flex" p={2} gap={2}>
        <ULinkText link="/" text="Learn More" />
      </Box>
      <h2>Category Chip</h2>
      <Box display="flex" p={2} gap={2}>
        <UCategoryChip img="/assets/category1.jpg" label="編輯精選" />
        <UCategoryChip img="/assets/category1.jpg" label="編輯精選" active />
      </Box>
      <Box display="flex" p={2} gap={2}>
        <UCategoryChip
          img="/assets/category1.jpg"
          label="編輯精選"
          size="medium"
        />
        <UCategoryChip
          img="/assets/category1.jpg"
          label="編輯精選"
          size="medium"
          active
        />
      </Box>
      <h2>Episode Card</h2>
      <h3>Index Episode Card</h3>
      <StyledIndexEpisodeCardList direction="column" spacing={2}>
        <IndexEpisodeCard
          episode={
            new Episode({
              id: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              guid: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              hash: 'fa6b699707e8b17b6e67325fb7137dd9',
              title: '馬斯克卡預算政府險關門？中國海外警察站！',
              audioUrl:
                'https://rss.soundon.fm/rssf/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/feedurl/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8/rssFileVip.mp3?timestamp=1735102359920',
              explicit: false,
              description:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> ',
              complete: false,
              publishDate: '2024-12-25T04:21:48.000Z',
              itunesKeywords: ['美國台灣觀測站', '台美關係', '立法院'],
              audioType: 'audio/mpeg',
              duration: 3566,
              artistName: 'US Taiwan Watch',
              url: 'https://player.soundon.fm/p/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/episodes/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              cover:
                'https://files.soundon.fm/1735100633682-990587b2-4b72-4e55-9654-a11d6f5985d1.jpeg',
              season: 3,
              episode: 158,
              contentEncoded:
                '<p><br />本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n<br />  \n<br />而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n<br />  \n<br />除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n<br />  \n<br />最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n<br />  \n<br />電子書：<a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n<br />各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n<br />--<br />\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> </p>',
              podcastId: '6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
              summary:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a>',
              episodeType: 'full',
              exclusiveType: 'public',
              createdAt: '2024-12-25T04:25:35.068Z',
              updatedAt: '2024-12-25T06:14:22.623Z',
              weight: 1,
              keywords: [],
              activated: true,
            })
          }
        />
        <IndexEpisodeCard
          episode={
            new Episode({
              id: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              guid: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              hash: 'fa6b699707e8b17b6e67325fb7137dd9',
              title: '馬斯克卡預算政府險關門？中國海外警察站！',
              audioUrl:
                'https://rss.soundon.fm/rssf/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/feedurl/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8/rssFileVip.mp3?timestamp=1735102359920',
              explicit: false,
              description:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> ',
              complete: false,
              publishDate: '2024-12-25T04:21:48.000Z',
              itunesKeywords: ['美國台灣觀測站', '台美關係', '立法院'],
              audioType: 'audio/mpeg',
              duration: 3566,
              artistName: 'US Taiwan Watch',
              url: 'https://player.soundon.fm/p/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/episodes/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              cover:
                'https://files.soundon.fm/1735100633682-990587b2-4b72-4e55-9654-a11d6f5985d1.jpeg',
              season: 3,
              episode: 158,
              contentEncoded:
                '<p><br />本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n<br />  \n<br />而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n<br />  \n<br />除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n<br />  \n<br />最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n<br />  \n<br />電子書：<a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n<br />各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n<br />--<br />\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> </p>',
              podcastId: '6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
              summary:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a>',
              episodeType: 'full',
              exclusiveType: 'public',
              createdAt: '2024-12-25T04:25:35.068Z',
              updatedAt: '2024-12-25T06:14:22.623Z',
              weight: 1,
              keywords: [],
              activated: true,
            })
          }
        />
      </StyledIndexEpisodeCardList>
      <h3>Episode Card</h3>
      <Stack direction="column" spacing={2}>
        <EpisodeCard
          episode={
            new Episode({
              id: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              guid: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              hash: 'fa6b699707e8b17b6e67325fb7137dd9',
              title: '馬斯克卡預算政府險關門？中國海外警察站！',
              audioUrl:
                'https://rss.soundon.fm/rssf/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/feedurl/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8/rssFileVip.mp3?timestamp=1735102359920',
              explicit: false,
              description:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> ',
              complete: false,
              publishDate: '2024-12-25T04:21:48.000Z',
              itunesKeywords: ['美國台灣觀測站', '台美關係', '立法院'],
              audioType: 'audio/mpeg',
              duration: 3566,
              artistName: 'US Taiwan Watch',
              url: 'https://player.soundon.fm/p/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/episodes/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              cover:
                'https://files.soundon.fm/1735100633682-990587b2-4b72-4e55-9654-a11d6f5985d1.jpeg',
              season: 3,
              episode: 158,
              contentEncoded:
                '<p><br />本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n<br />  \n<br />而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n<br />  \n<br />除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n<br />  \n<br />最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n<br />  \n<br />電子書：<a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n<br />各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n<br />--<br />\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> </p>',
              podcastId: '6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
              summary:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a>',
              episodeType: 'full',
              exclusiveType: 'public',
              createdAt: '2024-12-25T04:25:35.068Z',
              updatedAt: '2024-12-25T06:14:22.623Z',
              weight: 1,
              keywords: [],
              activated: true,
            })
          }
        />
        <EpisodeCard
          episode={
            new Episode({
              id: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              guid: '49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              hash: 'fa6b699707e8b17b6e67325fb7137dd9',
              title: '馬斯克卡預算政府險關門？中國海外警察站！',
              audioUrl:
                'https://rss.soundon.fm/rssf/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/feedurl/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8/rssFileVip.mp3?timestamp=1735102359920',
              explicit: false,
              description:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> ',
              complete: false,
              publishDate: '2024-12-25T04:21:48.000Z',
              itunesKeywords: ['美國台灣觀測站', '台美關係', '立法院'],
              audioType: 'audio/mpeg',
              duration: 3566,
              artistName: 'US Taiwan Watch',
              url: 'https://player.soundon.fm/p/6cdfccc6-7c47-4c35-8352-7f634b1b6f71/episodes/49b9dbdc-34e8-4c5b-b435-5e51f45fe9e8',
              cover:
                'https://files.soundon.fm/1735100633682-990587b2-4b72-4e55-9654-a11d6f5985d1.jpeg',
              season: 3,
              episode: 158,
              contentEncoded:
                '<p><br />本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n<br />  \n<br />而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n<br />  \n<br />除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n<br />  \n<br />最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n<br />  \n<br />電子書：<a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n<br />各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n<br />--<br />\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a> </p>',
              podcastId: '6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
              summary:
                '本週podcast首先小編會來聊聊最近立法院的爭議，不過最近憲法法庭、最高法院不寧靜的不只台灣，我們也會在本集內容中補充美國、歐洲以及韓國憲法法庭的重大案件，其中美國部分我們會聊聊TikTok案的進展，周受資和川普見面會不會影響事件發展。 \n  \n而就在拜登政府任期來到尾聲之際，美國國務院週三發表了國務卿布林肯接受《外交事務》（Foreign Affairs）採訪的內容，其中布林肯表示：「中國喜歡說台灣不關別人的事，是中國內政，然而國際社會的回應是，不，這其實是我們所有人的事！」（No, it is our business!）。不只再一次將台海議題國際化，兩天後，拜登政府又接連公布一筆軍援和兩筆軍售！ \n  \n除了國務院，美國國防部18日也公布了「2024年中國軍力報告」 ，小編會為大家整理報告中的重點，包括中國持續增強核武、延續「2049民族復興」計畫，以及指稱中國戰力與管理層面缺陷等。不過中國的威脅不只在軍事，還有各層面的銳實力滲透，最近紐約一位華裔美籍男子就向布魯克林聯邦法院承認，他在曼哈頓唐人街營運的「海外警察站」實際上是代表外國政府工作，卻沒有登記為外國代理人，引發對中國滲透的關注。 \n  \n最後，上週國會山莊也上演了一齣有關預算的混亂戲碼，我們會來快速講解發生什麼事，以及為什麼經濟學人認為事件僅僅是預示了川普下月執政後，將會面臨的困境？當前的預算之爭雖然平安落幕，但可能反應什麼樣的國會山莊氣氛。 \n  \n電子書：<a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVRKam1pMkhLRURJVkFZa1loMWxjSEprX0dIQXxBQ3Jtc0tsT0t1RV9wcUt6bkNQRDdJOGZpUC1EcFktcWthUDlfWHYtUFhhbm5uTXFmM2tWb1NpeXluTWN3UTdLVTdZNndMY0V3QWhVdk5ncHpaaDZBemFrREQwdWVPVFdoYUVNS0hPUnJ6LXpjbzJlcjRzVjBjVQ&amp;q=https%3A%2F%2Fwww.linkingbooks.com.tw%2Febook%2Fbuy.aspx">https://www.linkingbooks.com.tw/ebook/buy.aspx</a> \n各平台收聽的傳送門​ ：<a href="http://linktr.ee/us.taiwan.watch">http://linktr.ee/us.taiwan.watch</a> \n--\nHosting provided by <a href="https://www.soundon.fm/">SoundOn</a>',
              episodeType: 'full',
              exclusiveType: 'public',
              createdAt: '2024-12-25T04:25:35.068Z',
              updatedAt: '2024-12-25T06:14:22.623Z',
              weight: 1,
              keywords: [],
              activated: true,
            })
          }
        />
      </Stack>
      <h2>Pagination</h2>
      <Box display="flex" p={2} gap={2}>
        <UPagination
          count={10}
          page={1}
          onChange={() => {
            console.log('changed')
          }}
        />
      </Box>
      <h2>People Card</h2>
      <Grid container spacing={2}>
        {findAllPeople().map((people, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <PeopleCard people={People.fromDTO('en-US', people)} />
          </Grid>
        ))}
      </Grid>
      <h2>Simplified People Card</h2>
      <Grid container spacing={2}>
        {findAllPeople().map((people, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <PeopleCard people={People.fromDTO('en-US', people)} simplified />
          </Grid>
        ))}
      </Grid>

      <h2>Timeline</h2>
      <UContentCard>
        <UTimeline data={timelineData} activeIndex={2} />
      </UContentCard>

      <h2>Horizontal Timeline</h2>
      <UContentCard>
        <UTimeline data={timelineData} activeIndex={2} isHorizontal />
      </UContentCard>

      <h2>Height Limited Text</h2>
      <Box width={300}>
        <UHeightLimitedText variant="body" maxLine={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </UHeightLimitedText>
      </Box>

      <h2>UCategoryTag</h2>
      <UContentCard>
        <UHStack gap="6px">
          {['Environment', 'Energy', 'Technology', 'Security'].map(
            (tag, index) => (
              <UCategoryTag
                key={index}
                value={tag}
                onClick={() => {
                  console.log('clicked')
                }}
              />
            )
          )}
        </UHStack>

        <UHStack gap="6px" my={2}>
          {['House', 'Senate'].map((tag, index) => (
            <UCategoryTag
              key={index}
              value={tag}
              containerProps={{
                sx: {
                  backgroundColor: `${theme.color.purple[100]}80`, // 50% opacity
                },
              }}
              textProps={{
                variant: 'buttonS',
              }}
            />
          ))}
        </UHStack>

        <UHStack gap="6px" my={2}>
          <UCategoryTag
            value="Official"
            containerProps={{
              sx: {
                backgroundColor: theme.color.tyrian[50],
                borderRadius: '6px',
                padding: theme.spacing(0.5, 1),
              },
            }}
          />
          <UCategoryTag
            value="Expert"
            containerProps={{
              sx: {
                backgroundColor: theme.color.green[100],
                borderRadius: '6px',
                padding: theme.spacing(0.5, 1),
              },
            }}
          />
          <UCategoryTag
            value="Other"
            containerProps={{
              sx: {
                backgroundColor: theme.color.neutral[300],
                borderRadius: '6px',
                padding: theme.spacing(0.5, 1),
              },
            }}
          />
        </UHStack>
      </UContentCard>

      <h2>UHashTag</h2>
      <UContentCard>
        <UHStack gap="6px" my={2} flexWrap="wrap">
          {['NATO', 'EU', 'Cybersecurity'].map((tag, index) => (
            <UHashTag key={index} value={tag} />
          ))}
        </UHStack>
        <UHStack gap="6px" my={2} flexWrap="wrap">
          {['Semiconductor', 'Humanitarian', 'Aid'].map((tag, index) => (
            <UHashTag
              key={index}
              value={tag}
              containerProps={{
                sx: {
                  backgroundColor: 'transparent',
                },
              }}
              onClick={() => {
                console.log('clicked')
              }}
            />
          ))}
        </UHStack>
      </UContentCard>

      <h2>USelect</h2>
      <UHStack spacing={2}>
        <USelect isFirstLevel>
          <MenuItem value="" disabled>
            First Level
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </USelect>
        <USelect>
          <MenuItem value="" disabled>
            Second Level
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </USelect>
      </UHStack>
    </div>
  )
}
