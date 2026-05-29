'use client'

import { useState, useEffect } from 'react'
import { useDebounceValue, useWindowSize, useMediaQuery } from 'usehooks-ts'
import useLocalStorageState from 'use-local-storage-state'
import { useTheme } from 'next-themes'
import { Minus, Plus, RotateCcw, Sun, Moon, Monitor } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { ExampleCard } from '@/components/shared/example-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const sampleData = ['사과', '바나나', '체리', '딸기', '포도', '수박', '복숭아', '자두', '망고', '파인애플']

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <Separator className="mt-2" />
    </div>
    {children}
  </section>
)

function LocalStorageDemo() {
  const [count, setCount] = useLocalStorageState('demo-counter', {
    defaultValue: 0,
    defaultServerValue: 0,
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">useLocalStorageState</CardTitle>
        <CardDescription>
          카운터 값이 localStorage에 저장됩니다. 새로고침해도 값이 유지됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={() => setCount((c) => (c ?? 0) - 1)}>
            <Minus className="size-4" />
          </Button>
          <span className="text-4xl font-bold w-16 text-center tabular-nums">{count}</span>
          <Button variant="outline" size="icon" onClick={() => setCount((c) => (c ?? 0) + 1)}>
            <Plus className="size-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full"
          onClick={() => setCount(0)}
        >
          <RotateCcw className="mr-2 size-3" />
          초기화 (localStorage에서 제거)
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          새로고침 후에도 값이 유지되는지 확인해보세요.
        </p>
      </CardContent>
    </Card>
  )
}

function DebounceDemo() {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounceValue(query, 300)

  const results = sampleData.filter((item) => item.includes(debouncedQuery))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">useDebounce</CardTitle>
        <CardDescription>
          입력 후 300ms 뒤에 검색이 실행됩니다. 빠르게 타이핑해도 요청이 과도하지 않습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          placeholder="과일 검색... (300ms 디바운스)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>검색어: <code className="bg-muted px-1 rounded">{debouncedQuery || '없음'}</code></span>
            <span>{results.length}개 결과</span>
          </div>
          <div className="flex flex-wrap gap-1 min-h-8">
            {results.map((item) => (
              <Badge key={item} variant="secondary">{item}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MediaQueryDemo() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { width = 0, height = 0 } = useWindowSize()

  useEffect(() => { setMounted(true) }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">useMediaQuery & useWindowSize</CardTitle>
        <CardDescription>현재 창 크기와 미디어 쿼리 매칭 결과를 실시간으로 확인합니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {!mounted ? (
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg border border-border p-3 h-20 animate-pulse bg-muted" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className={`rounded-lg border p-3 ${isMobile ? 'border-primary bg-primary/5' : 'border-border'}`}>
              <p className="text-xs text-muted-foreground">모바일</p>
              <p className="text-xs font-mono mt-1">{'< 768px'}</p>
              <Badge variant={isMobile ? 'default' : 'outline'} className="mt-2">
                {isMobile ? '✓ 매칭' : '미매칭'}
              </Badge>
            </div>
            <div className={`rounded-lg border p-3 ${isTablet ? 'border-primary bg-primary/5' : 'border-border'}`}>
              <p className="text-xs text-muted-foreground">태블릿</p>
              <p className="text-xs font-mono mt-1">768~1023px</p>
              <Badge variant={isTablet ? 'default' : 'outline'} className="mt-2">
                {isTablet ? '✓ 매칭' : '미매칭'}
              </Badge>
            </div>
            <div className={`rounded-lg border p-3 ${isDesktop ? 'border-primary bg-primary/5' : 'border-border'}`}>
              <p className="text-xs text-muted-foreground">데스크탑</p>
              <p className="text-xs font-mono mt-1">{'≥ 1024px'}</p>
              <Badge variant={isDesktop ? 'default' : 'outline'} className="mt-2">
                {isDesktop ? '✓ 매칭' : '미매칭'}
              </Badge>
            </div>
          </div>
        )}
        <div className="rounded-lg bg-muted p-3 text-center">
          <p className="text-sm font-mono">
            {mounted ? `${width} × ${height} px` : '-- × -- px'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">창 크기를 조절해보세요</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ThemeDemo() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">next-themes useTheme</CardTitle>
        <CardDescription>현재 테마를 확인하고 프로그래밍 방식으로 전환합니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-border p-3">
          <span className="text-sm">현재 테마</span>
          <Badge>{mounted ? theme : '...'}</Badge>
        </div>
        <div className="flex gap-2">
          <Button
            variant={mounted && theme === 'light' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
            onClick={() => setTheme('light')}
          >
            <Sun className="mr-2 size-3" />라이트
          </Button>
          <Button
            variant={mounted && theme === 'dark' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
            onClick={() => setTheme('dark')}
          >
            <Moon className="mr-2 size-3" />다크
          </Button>
          <Button
            variant={mounted && theme === 'system' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
            onClick={() => setTheme('system')}
          >
            <Monitor className="mr-2 size-3" />시스템
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HooksPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="훅 & 유틸리티"
        description="usehooks-ts, use-local-storage-state, next-themes 실전 예제"
      />

      <Section title="use-local-storage-state — 영속 상태">
        <LocalStorageDemo />
      </Section>

      <Section title="useDebounce (usehooks-ts) — 검색 최적화">
        <DebounceDemo />
      </Section>

      <Section title="useMediaQuery & useWindowSize (usehooks-ts) — 반응형">
        <MediaQueryDemo />
      </Section>

      <Section title="useTheme (next-themes) — 테마 제어">
        <ThemeDemo />
      </Section>
    </div>
  )
}
