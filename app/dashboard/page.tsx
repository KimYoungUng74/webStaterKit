import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  FolderOpen,
  CheckCircle,
  Plus,
} from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { EmptyState } from '@/components/shared/empty-state'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const stats = [
  {
    title: '총 사용자',
    value: '2,350',
    change: '+12.3%',
    trend: 'up' as const,
    icon: Users,
  },
  {
    title: '월간 수익',
    value: '$12,500',
    change: '+8.1%',
    trend: 'up' as const,
    icon: DollarSign,
  },
  {
    title: '활성 프로젝트',
    value: '48',
    change: '-2.4%',
    trend: 'down' as const,
    icon: FolderOpen,
  },
  {
    title: '완료율',
    value: '94.2%',
    change: '+1.2%',
    trend: 'up' as const,
    icon: CheckCircle,
  },
]

const recentActivities = [
  { user: '김철수', action: '프로젝트 생성', status: '완료', date: '2분 전' },
  { user: '이영희', action: '보고서 업로드', status: '처리중', date: '15분 전' },
  { user: '박민준', action: '설정 변경', status: '완료', date: '1시간 전' },
  { user: '최지원', action: '사용자 초대', status: '대기중', date: '3시간 전' },
  { user: '정수연', action: '데이터 내보내기', status: '완료', date: '5시간 전' },
]

type StatusKey = '완료' | '처리중' | '대기중'

const statusVariant: Record<StatusKey, 'default' | 'secondary' | 'outline'> = {
  완료: 'default',
  처리중: 'secondary',
  대기중: 'outline',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="대시보드"
        description="프로젝트 현황을 한눈에 확인하세요"
        actions={
          <Button size="sm">
            <Plus className="mr-2 size-4" />
            새로 만들기
          </Button>
        }
      />

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="size-3 text-green-500" />
                  ) : (
                    <TrendingDown className="size-3 text-red-500" />
                  )}
                  <span
                    className={
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">지난달 대비</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 최근 활동 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>팀의 최근 활동 내역입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          {recentActivities.length === 0 ? (
            <EmptyState
              title="활동 내역이 없습니다"
              description="프로젝트를 생성하면 활동 내역이 여기에 표시됩니다."
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>사용자</TableHead>
                  <TableHead>작업</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead className="text-right">날짜</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {activity.user}
                    </TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          statusVariant[activity.status as StatusKey] ??
                          'default'
                        }
                      >
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {activity.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
