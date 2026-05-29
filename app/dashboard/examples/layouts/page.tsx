import { TrendingUp, TrendingDown, Users, DollarSign, Star, Package } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { EmptyState } from '@/components/shared/empty-state'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

const Section = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <Separator className="mt-2" />
    </div>
    {children}
  </section>
)

const kpis = [
  { title: '총 사용자', value: '12,350', change: '+15.2%', trend: 'up' as const, icon: Users },
  { title: '월 매출', value: '$48,290', change: '+8.7%', trend: 'up' as const, icon: DollarSign },
  { title: '평점', value: '4.8 / 5', change: '+0.2', trend: 'up' as const, icon: Star },
  { title: '재고', value: '1,204개', change: '-42개', trend: 'down' as const, icon: Package },
]

const listItems = [
  { name: '김민수', email: 'minsoo@example.com', role: '개발자', status: '활성' as const },
  { name: '이지은', email: 'jieun@example.com', role: '디자이너', status: '대기' as const },
  { name: '박준호', email: 'junho@example.com', role: 'PM', status: '활성' as const },
  { name: '최수아', email: 'sua@example.com', role: '마케터', status: '비활성' as const },
]

const statusColor: Record<'활성' | '대기' | '비활성', 'default' | 'secondary' | 'outline'> = {
  활성: 'default',
  대기: 'secondary',
  비활성: 'outline',
}

export default function LayoutsPage() {
  return (
    <div className="space-y-10">
      <PageHeader title="레이아웃 패턴" description="그리드, 분할, KPI, 리스트 등 실전 레이아웃 패턴" />

      {/* 그리드 레이아웃 */}
      <Section title="그리드 레이아웃" description="1열 → 4열 반응형 카드 그리드">
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground font-mono">grid-cols-1 sm:grid-cols-2 lg:grid-cols-4</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['카드 1', '카드 2', '카드 3', '카드 4'].map((t) => (
              <Card key={t}>
                <CardContent className="pt-6 text-center text-sm text-muted-foreground">{t}</CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground font-mono">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['카드 A', '카드 B', '카드 C'].map((t) => (
              <Card key={t}>
                <CardContent className="pt-6 text-center text-sm text-muted-foreground">{t}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* KPI 카드 */}
      <Section title="KPI 카드" description="아이콘 + 숫자 + 변화율 배지">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon
            return (
              <Card key={kpi.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                  <Icon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs">
                    {kpi.trend === 'up'
                      ? <TrendingUp className="size-3 text-green-500" />
                      : <TrendingDown className="size-3 text-red-500" />
                    }
                    <span className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}>{kpi.change}</span>
                    <span className="text-muted-foreground">전월 대비</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* 분할 레이아웃 */}
      <Section title="분할 레이아웃 (2:1)" description="좌 메인 콘텐츠 + 우 사이드 패널">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">메인 콘텐츠 (2/3)</CardTitle>
                <CardDescription>주요 정보나 에디터 영역에 활용합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
                      <div className="size-8 rounded-full bg-muted" />
                      <div className="flex-1 space-y-1">
                        <div className="h-3 w-1/2 rounded bg-muted" />
                        <div className="h-2 w-3/4 rounded bg-muted/60" />
                      </div>
                      <Badge variant="outline">항목 {i}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">사이드 패널 (1/3)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['요약', '태그', '담당자'].map((label) => (
                  <div key={label}>
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    <div className="mt-1 h-6 rounded bg-muted" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* 리스트 레이아웃 */}
      <Section title="리스트 레이아웃" description="Avatar + 텍스트 + 배지 + 액션 버튼">
        <Card>
          <CardContent className="pt-0 divide-y divide-border">
            {listItems.map((item) => (
              <div key={item.email} className="flex items-center gap-4 py-4">
                <Avatar className="size-9">
                  <AvatarFallback className="text-sm">{item.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{item.email}</p>
                </div>
                <Badge variant="secondary" className="hidden sm:flex">{item.role}</Badge>
                <Badge variant={statusColor[item.status]}>{item.status}</Badge>
                <Button size="sm" variant="ghost">편집</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      {/* 빈 상태 레이아웃 */}
      <Section title="빈 상태 레이아웃" description="데이터가 없을 때의 레이아웃 패턴">
        <Card>
          <CardContent className="py-0">
            <EmptyState
              icon={Package}
              title="등록된 상품이 없습니다"
              description="새 상품을 추가하면 여기에 표시됩니다."
              action={{ label: '상품 추가하기' }}
            />
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
