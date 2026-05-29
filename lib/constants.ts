import {
  LayoutDashboard,
  BarChart3,
  FolderOpen,
  Users,
  Settings,
  Layers,
  FileText,
  Database,
  Bell,
  AppWindow,
  Navigation,
  LayoutTemplate,
  Zap,
} from 'lucide-react'
import type { NavItem, SidebarItem } from '@/types'

export const siteConfig = {
  name: 'NextStarter',
  description: '빠르게 시작하는 Next.js 스타터킷',
  url: 'http://localhost:3000',
}

export const navItems: NavItem[] = [
  { title: '홈', href: '/' },
  { title: '기능', href: '/#features' },
  { title: '예제', href: '/dashboard/examples' },
  { title: '대시보드', href: '/dashboard' },
]

export const sidebarItems: SidebarItem[] = [
  { title: '개요', href: '/dashboard', icon: LayoutDashboard },
  { title: '분석', href: '/dashboard/analytics', icon: BarChart3, badge: 'New' },
  { title: '프로젝트', href: '/dashboard/projects', icon: FolderOpen },
  { title: '사용자', href: '/dashboard/users', icon: Users },
  { title: '설정', href: '/dashboard/settings', icon: Settings },

  { type: 'separator', label: '예제' },
  { title: 'UI 컴포넌트', href: '/dashboard/examples/components', icon: Layers },
  { title: '폼 & 검증', href: '/dashboard/examples/forms', icon: FileText },
  { title: '데이터 테이블', href: '/dashboard/examples/data', icon: Database },
  { title: '피드백', href: '/dashboard/examples/feedback', icon: Bell },
  { title: '오버레이', href: '/dashboard/examples/overlays', icon: AppWindow },
  { title: '네비게이션', href: '/dashboard/examples/navigation', icon: Navigation },
  { title: '레이아웃', href: '/dashboard/examples/layouts', icon: LayoutTemplate },
  { title: '훅 & 유틸', href: '/dashboard/examples/hooks', icon: Zap },
]
