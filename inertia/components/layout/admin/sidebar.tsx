import { Link, usePage } from '@inertiajs/react'
import {
  Home,
  Package,
  Settings,
  ShoppingCart,
  Users2,
  TicketPercent,
  Handshake,
  Shirt,
  Truck,
} from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip'
import { cn } from '~/lib/utils'

export default function SidebarAdmin() {
  const { url } = usePage()
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin"
              className={cn(
                'group flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                url === '/admin' ? 'text-foreground' : ''
              )}
            >
              <Home className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin/customers"
              className={cn(
                'group flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                url === '/admin/customers' ? 'text-foreground' : ''
              )}
            >
              <Users2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Customers</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Customers</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin/orders"
              className={cn(
                'group flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                url === '/admin/orders' ? 'text-foreground' : ''
              )}
            >
              <ShoppingCart className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Orders</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Orders</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin/products"
              className={cn(
                'group flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                url === '/admin/products' ? 'text-foreground' : ''
              )}
            >
              <Package className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Products</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Products</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin/settings"
              className={cn(
                'group flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                url === '/admin/settings' ? 'text-foreground' : ''
              )}
            >
              <Settings className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}
