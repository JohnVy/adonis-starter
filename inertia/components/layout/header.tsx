import { Link, usePage } from '@inertiajs/react'
import { CircleUserRound, Menu, Search, ShoppingBag } from 'lucide-react'

import { DropdownMenuHeader } from '../common'
import { Button, Input, Sheet, SheetContent, SheetTrigger } from '../ui'
import User from '#models/user'

export function Header() {
  const { user } = usePage<{ user: User }>().props

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-8">
      <nav className="hidden flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2">
          Home
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="/shop"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              Home
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="/shop" className="text-muted-foreground hover:text-foreground">
              Shop
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <div className="flex gap-2 items-center">
          <Link
            href="/login"
            className="h-9 w-9 rounded-full hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <ShoppingBag className="h-5 w-5 stroke-[1.2]" />
            <span className="sr-only">Log In</span>
          </Link>
          {user ? (
            <DropdownMenuHeader user={user} />
          ) : (
            <Link
              href="/login"
              className="h-9 w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full hover:bg-accent hover:text-accent-foreground"
            >
              <CircleUserRound className="h-5 w-5 stroke-[1.2]" />
              <span className="sr-only">Log In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
