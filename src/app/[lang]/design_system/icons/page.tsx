'use client'

import UButton from '@/common/components/atoms/UButton'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UIconButton from '@/common/components/atoms/UIconButton'
import ULinkText from '@/common/components/atoms/ULinkText'
import UPagination from '@/common/components/atoms/UPagination'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import { styled } from '@/common/lib/mui/theme'
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
import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import IndexEpisodeCard from '@/modules/Podcast/components/IndexEpisodeCard'
import { Box, Stack, Typography } from '@mui/material'

const StyledIndexEpisodeCardList = styled(Stack)(({ theme }) => ({
  borderRadius: '30px',
  backgroundColor: theme.color.orange[900],
  padding: '20px',
}))

export default function DesignSystemIconsPage () {
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
        <UPoliticalPartyIcon variant="rounded" party="democracy" />
        <UPoliticalPartyIcon variant="rounded" party="republic" />
        <UPoliticalPartyIcon variant="rounded" party="other" />
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
      <StyledIndexEpisodeCardList direction='column' spacing={2}>
        <IndexEpisodeCard podcastId="6cdfccc6-7c47-4c35-8352-7f634b1b6f71" episodeId="ee208548-5c37-4b0d-91ba-7306d2572518" />
        <IndexEpisodeCard podcastId="6cdfccc6-7c47-4c35-8352-7f634b1b6f71" episodeId="ee208548-5c37-4b0d-91ba-7306d2572518" />
      </StyledIndexEpisodeCardList>
      <h3>Episode Card</h3>
      <Stack direction='column' spacing={2}>
        <EpisodeCard podcastId="6cdfccc6-7c47-4c35-8352-7f634b1b6f71" episodeId="ee208548-5c37-4b0d-91ba-7306d2572518" />
        <EpisodeCard podcastId="6cdfccc6-7c47-4c35-8352-7f634b1b6f71" episodeId="ee208548-5c37-4b0d-91ba-7306d2572518" />
      </Stack>
      <h2>Pagination</h2>
      <Box display="flex" p={2} gap={2}>
        <UPagination count={10} page={1} onChange={() => {}} />
      </Box>
    </div>
  )
}
