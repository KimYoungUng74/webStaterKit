'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Loader2, CheckCircle2, Terminal, AlertCircle, Inbox, Search, Lock } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { EmptyState } from '@/components/shared/empty-state'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <Separator className="mt-2" />
    </div>
    {children}
  </section>
)

function ToastDemo() {
  const showToast = (type: string) => {
    if (type === 'default') toast('새로운 메시지가 도착했습니다.')
    if (type === 'success') toast.success('저장 완료', { description: '변경사항이 저장되었습니다.' })
    if (type === 'error') toast.error('오류 발생', { description: '서버와 연결할 수 없습니다.' })
    if (type === 'warning') toast.warning('주의', { description: '저장 공간이 부족합니다.' })
    if (type === 'promise') {
      toast.promise(new Promise((r) => setTimeout(r, 2000)), {
        loading: '업로드 중...',
        success: '업로드 완료!',
        error: '업로드 실패',
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Toast (sonner)</CardTitle>
        <CardDescription>버튼을 클릭해 다양한 알림 유형을 확인하세요</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={() => showToast('default')}>기본</Button>
        <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950" onClick={() => showToast('success')}>성공</Button>
        <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10" onClick={() => showToast('error')}>에러</Button>
        <Button variant="outline" size="sm" className="text-orange-500 border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950" onClick={() => showToast('warning')}>경고</Button>
        <Button variant="outline" size="sm" onClick={() => showToast('promise')}>Promise (2초)</Button>
      </CardContent>
    </Card>
  )
}

function ProgressDemo() {
  const [value, setValue] = useState(30)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Progress</CardTitle>
        <CardDescription>버튼으로 진행 값을 조절합니다</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Progress value={value} className="flex-1" />
          <Badge variant="outline">{value}%</Badge>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setValue((v) => Math.max(0, v - 25))}>-25%</Button>
          <Button size="sm" variant="outline" onClick={() => setValue(0)}>초기화</Button>
          <Button size="sm" onClick={() => setValue((v) => Math.min(100, v + 25))}>+25%</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function LoadingButton() {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleClick = () => {
    setState('loading')
    setTimeout(() => setState('done'), 2000)
    setTimeout(() => setState('idle'), 4000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">로딩 버튼</CardTitle>
        <CardDescription>비동기 작업의 상태 전환 패턴</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleClick} disabled={state === 'loading'} className="min-w-32">
          {state === 'loading' && <Loader2 className="mr-2 size-4 animate-spin" />}
          {state === 'done' && <CheckCircle2 className="mr-2 size-4" />}
          {state === 'idle' && '저장하기'}
          {state === 'loading' && '저장 중...'}
          {state === 'done' && '완료!'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function FeedbackPage() {
  return (
    <div className="space-y-10">
      <PageHeader title="피드백 & 상태" description="Toast, Alert, Progress, Skeleton, Empty State 피드백 UI" />

      <Section title="Toast 알림">
        <ToastDemo />
      </Section>

      <Section title="Alert">
        <div className="space-y-3">
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>안내</AlertTitle>
            <AlertDescription>시스템 점검이 예정되어 있습니다. (2024-12-31 02:00 ~ 04:00)</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>결제 처리 중 오류가 발생했습니다. 다시 시도해주세요.</AlertDescription>
          </Alert>
        </div>
      </Section>

      <Section title="Progress & 로딩">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProgressDemo />
          <LoadingButton />
        </div>
      </Section>

      <Section title="Skeleton 로딩">
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 space-y-3">
                  <Skeleton className="h-32 rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section title="Empty State">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="py-2">
              <EmptyState
                icon={Inbox}
                title="데이터 없음"
                description="아직 등록된 데이터가 없습니다."
                action={{ label: '새로 만들기' }}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-2">
              <EmptyState
                icon={Search}
                title="검색 결과 없음"
                description="다른 검색어로 다시 시도해보세요."
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-2">
              <EmptyState
                icon={Lock}
                title="권한 없음"
                description="이 페이지에 접근할 권한이 없습니다."
              />
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
