import { Users } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="사용자"
        description="팀 멤버와 권한을 관리하세요."
        badge="준비 중"
      />
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-24 text-center">
        <Users className="size-12 text-muted-foreground/30" />
        <h2 className="mt-4 text-lg font-semibold">사용자 페이지 준비 중</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          곧 사용자 관리 기능을 제공할 예정입니다.
        </p>
      </div>
    </div>
  )
}
