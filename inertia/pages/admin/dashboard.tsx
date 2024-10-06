import { CreditCard, Euro, TrendingUp, Users } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui'

import LayoutAdmin from '~/layouts/admin/layout'

export default function DashboardPage({ customerCountResult }: { customerCountResult: number }) {
  return (
    <LayoutAdmin>
      <main className="flex flex-1 flex-col gap-4 p-4 sm:px-8 sm:py-8 md:gap-8">
        <div className="grid w-full gap-2">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:pb-6">
              <CardTitle className="text-lg">Total Revenue</CardTitle>
              <Euro className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:pb-6">
              <CardTitle className="text-lg">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:pb-6">
              <CardTitle className="text-lg">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:pb-6">
              <CardTitle className="text-lg">Users</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customerCountResult}</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="sm:col-span-2 md:col-span-4 lg:col-span-4">
            <CardHeader>
              <CardTitle className="text-lg">Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
          <Card className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </main>
    </LayoutAdmin>
  )
}
