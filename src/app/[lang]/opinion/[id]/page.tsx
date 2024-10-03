import { Metadata, ResolvingMetadata } from 'next'
import { getOpinion } from '@/modules/Opinion/api/opinion'
import OpinionPost from '@/modules/Opinion/components/OpinionPost'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log('params', params)
  console.log('parent', parent)

  // fetch data
  const opinion = await getOpinion()

  return {
    title: opinion.title,
    description: opinion.description,
  }
}

export default async function OpinionPage() {
  const opinion = await getOpinion()

  return <OpinionPost opinionData={opinion} />
}
