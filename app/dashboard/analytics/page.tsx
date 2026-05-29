import { BarChart3 } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="분석"
        description="트래픽, 전환율, 사용자 행동 데이터를 확인하세요."
        badge="준비 중"
      />
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-24 text-center">
        <BarChart3 className="size-12 text-muted-foreground/30" />
        <h2 className="mt-4 text-lg font-semibold">분석 페이지 준비 중</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          곧 다양한 분석 기능을 제공할 예정입니다.
        </p>
      </div>
    </div>
  )
}
