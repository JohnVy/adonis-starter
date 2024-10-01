import { PropsWithChildren } from 'react'

import Layout from '../layout'
import SidebarAdmin from '~/components/layout/admin/sidebar'
import { Footer } from '~/components/layout/footer'
import { Header } from '~/components/layout/header'

export default function LayoutAdmin({ children }: PropsWithChildren) {
  return (
    <Layout>
      <SidebarAdmin />
      <div className="pl-14 min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </Layout>
  )
}
