
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteConfig.author + ' - ' + siteConfig.description,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export default function Page() {
  return (
    <>
      <div className="py-6 sm:py-16">

      </div>
    </>
  )
}
