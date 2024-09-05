import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-full min-h-screen w-full">
      <div className="flex min-h-screen w-full flex-col">{children}</div>
    </div>
  )
}
