'use client'

import { useState } from 'react'
import { Trash2, Settings, Plus, Edit, Copy, LogOut, User, ChevronDown } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import {
  Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <Separator className="mt-2" />
    </div>
    {children}
  </section>
)

export default function OverlaysPage() {
  const [deleteOpen, setDeleteOpen] = useState(false)

  return (
    <div className="space-y-10">
      <PageHeader title="오버레이" description="Dialog, Sheet, Tooltip, Popover, Dropdown 패턴" />

      {/* Dialog */}
      <Section title="Dialog (모달)">
        <div className="flex flex-wrap gap-3">
          {/* 기본 다이얼로그 */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">기본 모달</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>알림</DialogTitle>
                <DialogDescription>작업이 완료되었습니다. 확인을 눌러 닫으세요.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>확인</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* 삭제 확인 */}
          <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 size-4" />
                삭제 확인
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
                <DialogDescription>
                  이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={() => setDeleteOpen(false)}>취소</Button>
                <Button variant="destructive" onClick={() => setDeleteOpen(false)}>삭제</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* 폼 포함 다이얼로그 */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 size-4" />
                폼 모달
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>새 프로젝트 추가</DialogTitle>
                <DialogDescription>프로젝트 정보를 입력하세요.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label>프로젝트명</Label>
                  <Input placeholder="프로젝트명을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label>설명</Label>
                  <Input placeholder="간단한 설명" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">취소</Button>
                <Button>추가</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Section>

      {/* Sheet */}
      <Section title="Sheet (드로어)">
        <div className="flex flex-wrap gap-3">
          {(['right', 'left', 'bottom'] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 size-4" />
                  {side === 'right' ? '오른쪽' : side === 'left' ? '왼쪽' : '하단'} 드로어
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>설정 패널</SheetTitle>
                  <SheetDescription>
                    {side} 방향에서 슬라이드되는 드로어입니다.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div className="space-y-2">
                    <Label>표시 이름</Label>
                    <Input placeholder="이름을 입력하세요" />
                  </div>
                  <div className="space-y-2">
                    <Label>이메일</Label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                </div>
                <SheetFooter>
                  <Button className="w-full">저장</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Section>

      {/* Tooltip */}
      <Section title="Tooltip">
        <Card>
          <CardContent className="pt-6 flex flex-wrap gap-4 justify-center">
            {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
              <Tooltip key={side} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">{side}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>
                  {side} 방향 툴팁
                </TooltipContent>
              </Tooltip>
            ))}
          </CardContent>
        </Card>
      </Section>

      {/* Popover */}
      <Section title="Popover">
        <div className="flex flex-wrap gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">정보 팝오버</Button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">팝오버 제목</h4>
                <p className="text-xs text-muted-foreground">
                  팝오버는 트리거 요소 근처에 표시되는 작은 오버레이입니다.
                  툴팁과 달리 복잡한 콘텐츠를 담을 수 있습니다.
                </p>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">필터 팝오버</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">필터</h4>
                <div className="space-y-2">
                  <Label className="text-xs">검색</Label>
                  <Input placeholder="검색어 입력..." className="h-8" />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">적용</Button>
                  <Button size="sm" variant="outline" className="flex-1">초기화</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Section>

      {/* Dropdown Menu */}
      <Section title="Dropdown Menu">
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                액션 메뉴 <ChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>내 계정</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="mr-2 size-4" />프로필</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 size-4" />설정</DropdownMenuItem>
              <DropdownMenuItem><Edit className="mr-2 size-4" />편집</DropdownMenuItem>
              <DropdownMenuItem><Copy className="mr-2 size-4" />복사</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className="mr-2 size-4" />로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Section>
    </div>
  )
}
