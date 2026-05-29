import { FolderOpen } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="프로젝트"
        description="진행 중인 프로젝트를 관리하세요."
        badge="준비 중"
      />
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-24 text-center">
        <FolderOpen className="size-12 text-muted-foreground/30" />
        <h2 className="mt-4 text-lg font-semibold">프로젝트 페이지 준비 중</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          곧 프로젝트 관리 기능을 제공할 예정입니다.
        </p>
      </div>
    </div>
  )
}
