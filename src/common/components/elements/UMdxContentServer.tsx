import { compile, run } from '@mdx-js/mdx'
import { ComponentProps } from 'react'
import * as runtime from 'react/jsx-runtime'

interface GMdxContentServerProps {
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
  source,
  components,
}: GMdxContentServerProps) {
  const code = String(await compile(source, { outputFormat: 'function-body' }))
  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  })

  return <MDXContent components={components} />
}
