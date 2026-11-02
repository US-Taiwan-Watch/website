import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Language } from '@/common/lib/i18n/types'
import { compile, run } from '@mdx-js/mdx'
import { ComponentProps } from 'react'
import * as runtime from 'react/jsx-runtime'

interface GMdxContentServerProps {
  lang: Language
  source: Parameters<typeof compile>[0]
  components: ComponentProps<
    Awaited<ReturnType<typeof run>>['default']
  >['components']
}

/**
 * 處理 RSC Markdown 渲染
 * @see {@link https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#you-might-not-need-next-mdx-remote}
 */
export default async function GMdxContentServer({
  lang,
  source,
  components,
}: GMdxContentServerProps) {
  const { t } = await getTranslationServer(lang, ['common'])
  try {
    const code = String(
      await compile(source, { outputFormat: 'function-body' })
    )
    const { default: MDXContent } = await run(code, {
      ...runtime,
      baseUrl: import.meta.url,
    })

    return <MDXContent components={components} />
  } catch (error) {
    console.error('MDX rendering failed:', error)
    return (
      <div style={{ padding: '1rem', color: '#d32f2f' }}>
        {t('msg.error.pageError.title')}
      </div>
    )
  }
}
