'use client'

import { useState } from 'react'
import { Home, ChevronRight, Search, LayoutDashboard, Settings, Users } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator,
} from '@/components/ui/command'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <Separator className="mt-2" />
    </div>
    {children}
  </section>
)

function CommandDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Command 팔레트</CardTitle>
          <CardDescription>⌘K 패턴의 검색 팔레트. 버튼을 클릭하거나 Ctrl+K를 누르세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={() => setOpen(true)} className="w-full justify-between text-muted-foreground">
            <div className="flex items-center gap-2">
              <Search className="size-4" />
              <span>검색하기...</span>
            </div>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">⌘K</kbd>
          </Button>
        </CardContent>
      </Card>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="무엇을 찾으시나요?" />
        <CommandList>
          <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="페이지">
            <CommandItem onSelect={() => setOpen(false)}>
              <LayoutDashboard className="mr-2 size-4" />대시보드
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Users className="mr-2 size-4" />사용자 관리
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Settings className="mr-2 size-4" />설정
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="예제">
            <CommandItem onSelect={() => setOpen(false)}>UI 컴포넌트</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>폼 & 검증</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>데이터 테이블</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default function NavigationPage() {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false)
  const [tabPage, setTabPage] = useState(1)

  return (
    <div className="space-y-10">
      <PageHeader title="네비게이션" description="Tabs, Breadcrumb, Accordion, Collapsible, Command 팔레트" />

      {/* Tabs */}
      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="settings">설정</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">개요 탭의 콘텐츠입니다. 주요 지표와 활동을 확인하세요.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">분석 탭의 콘텐츠입니다. 트래픽 및 전환율 데이터를 확인하세요.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">설정 탭의 콘텐츠입니다. 알림 및 보안 설정을 변경하세요.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Breadcrumb */}
      <Section title="Breadcrumb">
        <Card>
          <CardContent className="pt-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">
                    <Home className="size-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="size-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/examples">예제</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="size-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>네비게이션</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>
      </Section>

      {/* Pagination */}
      <Section title="Pagination (수동)">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-1">
              <Button variant="outline" size="sm" disabled={tabPage <= 1} onClick={() => setTabPage((p) => p - 1)}>이전</Button>
              {[1, 2, 3, 4, 5].map((p) => (
                <Button
                  key={p}
                  variant={p === tabPage ? 'default' : 'outline'}
                  size="sm"
                  className="w-9"
                  onClick={() => setTabPage(p)}
                >
                  {p}
                </Button>
              ))}
              <Button variant="outline" size="sm" disabled={tabPage >= 5} onClick={() => setTabPage((p) => p + 1)}>다음</Button>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">현재 페이지: {tabPage}</p>
          </CardContent>
        </Card>
      </Section>

      {/* Accordion */}
      <Section title="Accordion (FAQ)">
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: 'Next.js App Router란 무엇인가요?', a: 'App Router는 Next.js 13+에서 도입된 새로운 라우팅 시스템입니다. React Server Components를 기본으로 지원합니다.' },
            { q: 'shadcn/ui는 UI 라이브러리인가요?', a: 'shadcn/ui는 라이브러리가 아닌 복사/붙여넣기 방식의 컴포넌트 컬렉션입니다. 소스 코드를 직접 소유하게 됩니다.' },
            { q: 'react-hook-form과 zod를 함께 쓰는 이유는?', a: 'react-hook-form은 폼 상태 관리를, zod는 스키마 기반 타입 검증을 담당합니다. 둘을 조합하면 타입 안전한 폼을 쉽게 만들 수 있습니다.' },
            { q: 'Tailwind CSS v4는 무엇이 달라졌나요?', a: 'v4는 CSS 변수 기반 설정, 더 빠른 빌드 속도, 새로운 유틸리티 클래스를 제공합니다. tailwind.config.js 없이도 동작합니다.' },
            { q: '다크 모드는 어떻게 구현되어 있나요?', a: 'next-themes 라이브러리와 CSS 변수를 사용합니다. html 태그의 class를 dark/light로 전환하는 방식입니다.' },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-sm">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Collapsible */}
      <Section title="Collapsible">
        <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              고급 설정
              <Badge variant="secondary">{collapsibleOpen ? '접기' : '펼치기'}</Badge>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="pt-4 space-y-3">
                <p className="text-sm text-muted-foreground">접기/펼치기 콘텐츠입니다.</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>캐시 활성화</span>
                    <Badge>활성</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>로그 레벨</span>
                    <Badge variant="secondary">INFO</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </Section>

      {/* Command */}
      <Section title="Command 팔레트">
        <CommandDemo />
      </Section>
    </div>
  )
}
