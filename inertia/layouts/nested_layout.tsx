import { PropsWithChildren } from 'react'

import { Footer } from '~/components/layout/footer'
import { Header } from '~/components/layout/header'

export default function NestedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
