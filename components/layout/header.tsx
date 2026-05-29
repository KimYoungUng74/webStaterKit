import Link from 'next/link'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Button } from '@/components/ui/button'
import { navItems, siteConfig } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <MobileNav />

        <Link
          href="/"
          className="mr-6 flex items-center font-semibold"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex flex-1 items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" asChild>
            <Link href="/dashboard">대시보드</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
