import { PropsWithChildren } from 'react'
import { Footer } from '~/components/layout/footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
