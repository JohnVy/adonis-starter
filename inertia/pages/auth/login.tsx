import { Link, useForm } from '@inertiajs/react'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Button } from '~/components/ui/button'
import { FormEvent, useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Layout from '~/layouts/layout'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const { data, errors, processing, post, setData } = useForm({
    email: '',
    password: '',
  })

  const submit = (event: FormEvent) => {
    event.preventDefault()

    if (processing) {
      return
    }

    post('/login')
  }

  return (
    <Layout>
      <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center py-12 min-h-screen">
          <div className="mx-auto grid sm:w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-semibold">Connexion</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form className="space-y-6" onSubmit={submit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="m@example.com"
                    required
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                  />
                  {errors.email && <small className={'text-red-500'}>{errors.email}</small>}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Button
                      className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l-none border-l"
                      type="button"
                      variant="ghost"
                      onClick={(e) => {
                        e.preventDefault()
                        setShowPassword(!showPassword)
                      }}
                      disabled={!data.password}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                      </span>
                    </Button>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={data.password}
                      onChange={(e) => setData('password', e.target.value)}
                    />
                  </div>
                  {errors.password && <small className={'text-red-500'}>{errors.password}</small>}
                  {'code' in errors && errors.code === 'E_INVALID_CREDENTIALS' && (
                    <small className={'text-red-500'}>Email et/ou mot de passe incorrect</small>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
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
