import { Link } from '@inertiajs/react'
import { UserLogForm } from '~/components/common/form/user_log_form'

import Layout from '~/layouts/layout'

export default function LoginPage() {
  return (
    <Layout>
      <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center py-12 min-h-screen">
          <div className="mx-auto grid sm:w-[350px] gap-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl font-semibold">Login to your account</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <UserLogForm />
            <div className="px-8 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block lg:min-h-screen">
          <img
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </Layout>
  )
}
