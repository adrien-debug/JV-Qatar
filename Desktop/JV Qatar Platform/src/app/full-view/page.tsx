'use client'

import FullView from '@/components/FullView'
import { siteConfig } from '@/lib/siteConfig'

export default function FullViewPage() {
  return <FullView site={siteConfig} />
}
