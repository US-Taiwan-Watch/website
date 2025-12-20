import { Language } from '@/common/lib/i18n/types'
import { getMarkdownAssetFile } from '@/modules/About/utils/getMarkdownAssetFile'
import GMdxContentServer from '@/common/components/elements/UMdxContentServer'
import { CommonMdxComponents } from '@/modules/About/utils/mdxComponents'

export default async function DonationContent({ lang }: { lang: Language }) {
  const source = await getMarkdownAssetFile('Donation', lang)

  return (
    <GMdxContentServer
      source={source}
      components={CommonMdxComponents}
      lang={lang}
    />
  )
}
