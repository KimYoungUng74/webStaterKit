import { Settings } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="설정"
        description="계정 및 애플리케이션 설정을 관리하세요."
        badge="준비 중"
      />
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-24 text-center">
        <Settings className="size-12 text-muted-foreground/30" />
        <h2 className="mt-4 text-lg font-semibold">설정 페이지 준비 중</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          곧 다양한 설정 옵션을 제공할 예정입니다.
        </p>
      </div>
    </div>
  )
}
