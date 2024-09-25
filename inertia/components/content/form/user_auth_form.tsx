import { FormEvent, useState } from 'react'
import { useForm } from '@inertiajs/react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Button, Icons, Input, Label } from '~/components/ui'

import { cn } from '~/lib/utils'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { data, errors, processing, post, setData } = useForm({
    email: '',
    password: '',
  })

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    post('/register')
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              disabled={processing}
            />
            {errors.email && <small className={'text-red-500'}>{errors.email}</small>}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
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
                <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
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
          <Button disabled={processing}>
            {processing && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={processing}>
        {processing ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{' '}
        GitHub
      </Button>
    </div>
  )
}
