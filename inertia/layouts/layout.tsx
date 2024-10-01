import { PropsWithChildren } from 'react'

import { TooltipProvider } from '~/components/ui/tooltip'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <TooltipProvider>
      <div className="relative flex min-h-screen flex-col bg-background">{children}</div>
    </TooltipProvider>
  )
}
