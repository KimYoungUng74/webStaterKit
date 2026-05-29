'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useLocalStorageState from 'use-local-storage-state'
import { cn } from '@/lib/utils'
import { sidebarItems } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useLocalStorageState('sidebar-collapsed', {
    defaultValue: false,
    defaultServerValue: false,
  })

  return (
    <aside
      className={cn(
        'hidden md:flex h-full flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center border-b border-sidebar-border px-3">
        {!isCollapsed && (
          <span className="flex-1 text-sm font-semibold text-sidebar-foreground">
            메뉴
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto size-7 text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? '사이드바 펼치기' : '사이드바 접기'}
        >
          {isCollapsed ? (
            <ChevronRight className="size-4" />
          ) : (
            <ChevronLeft className="size-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 space-y-0.5 p-2 overflow-y-auto">
        {sidebarItems.map((item, index) => {
          if (item.type === 'separator') {
            if (isCollapsed) {
              return (
                <div key={`sep-${index}`} className="my-2 mx-2 border-t border-sidebar-border/50" />
              )
            }
            return (
              <div key={`sep-${index}`} className="px-3 pt-4 pb-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/40">
                  {item.label}
                </p>
              </div>
            )
          }

          const isActive =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href))
          const Icon = item.icon

          if (isCollapsed) {
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-center rounded-lg p-2 transition-colors',
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                    )}
                  >
                    {Icon && <Icon className="size-5" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8}>
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              )}
            >
              {Icon && <Icon className="size-4 shrink-0" />}
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
