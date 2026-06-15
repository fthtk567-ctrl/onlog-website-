import type { Metadata } from 'next'

export const siteUrl = 'https://onlagelsin.com'
export const siteName = "On'la Gelsin"
export const defaultOgImage = `${siteUrl}/og-image.png`

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString()

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteName} - Yerli Yemek Sipariş Platformu`,
        },
      ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImage],
      creator: '@onlagelsin',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
