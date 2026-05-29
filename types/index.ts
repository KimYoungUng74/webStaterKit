import type { ComponentType } from 'react'

export type NavItem = {
  title: string
  href: string
}

export type SidebarItem =
  | { type: 'separator'; label: string }
  | {
      type?: 'item'
      title: string
      href: string
      icon?: ComponentType<{ className?: string }>
      badge?: string
    }

export type StatsCard = {
  title: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
}
