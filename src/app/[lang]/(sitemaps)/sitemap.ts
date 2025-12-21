import { generatePageLinks } from '@/common/utils/sitemap.utils'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [...generatePageLinks('/')]
}
