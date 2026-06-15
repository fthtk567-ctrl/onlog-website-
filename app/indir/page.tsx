import type { Metadata } from 'next'
import DownloadRedirectClient from './DownloadRedirectClient'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: "On'la Gelsin - Uygulamayı İndir",
  description: "On'la Gelsin yemek uygulamasını App Store veya Google Play üzerinden indirin.",
  path: '/indir',
})

export default function IndirPage() {
  return <DownloadRedirectClient />
}
