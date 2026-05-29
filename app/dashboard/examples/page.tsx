import Link from 'next/link'
import {
  Layers, FileText, Database, Bell, AppWindow,
  Navigation, LayoutTemplate, Zap, ArrowRight,
} from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const categories = [
  {
    title: 'UI 컴포넌트',
    description: '버튼, 배지, 카드, 입력 등 30개 shadcn/ui 컴포넌트 라이브 데모',
    href: '/dashboard/examples/components',
    icon: Layers,
  },
  {
    title: '폼 & 검증',
    description: 'react-hook-form + zod로 구현한 실전 폼과 유효성 검증 패턴',
    href: '/dashboard/examples/forms',
    icon: FileText,
  },
  {
    title: '데이터 테이블',
    description: '검색, 정렬, 선택, 페이지네이션이 포함된 인터랙티브 테이블',
    href: '/dashboard/examples/data',
    icon: Database,
  },
  {
    title: '피드백 & 상태',
    description: 'Toast, Alert, Progress, Skeleton, Empty State 등 피드백 UI',
    href: '/dashboard/examples/feedback',
    icon: Bell,
  },
  {
    title: '오버레이',
    description: 'Dialog, Sheet, Tooltip, Popover, Dropdown Menu 오버레이 패턴',
    href: '/dashboard/examples/overlays',
    icon: AppWindow,
  },
  {
    title: '네비게이션',
    description: 'Tabs, Breadcrumb, Pagination, Accordion, Command 팔레트',
    href: '/dashboard/examples/navigation',
    icon: Navigation,
  },
  {
    title: '레이아웃 패턴',
    description: '그리드, 분할, 리스트, KPI 카드 등 실전 레이아웃 패턴',
    href: '/dashboard/examples/layouts',
    icon: LayoutTemplate,
  },
  {
    title: '훅 & 유틸리티',
    description: 'usehooks-ts, use-local-storage-state, next-themes 실전 예제',
    href: '/dashboard/examples/hooks',
    icon: Zap,
  },
]

export default function ExamplesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="예제 모음"
        description="설치된 컴포넌트와 라이브러리의 실제 동작을 확인하고 코드를 복사해 사용하세요."
        badge="8개 카테고리"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link key={cat.href} href={cat.href}>
              <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs leading-relaxed">
                    {cat.description}
                  </CardDescription>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                    예제 보기 <ArrowRight className="size-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
