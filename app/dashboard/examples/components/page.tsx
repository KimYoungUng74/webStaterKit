'use client'

import { PageHeader } from '@/components/shared/page-header'
import { ExampleCard } from '@/components/shared/example-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { AlertCircle, Terminal } from 'lucide-react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-6">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <Separator className="mt-2" />
    </div>
    {children}
  </section>
)

export default function ComponentsPage() {
  return (
    <div className="space-y-10">
      <PageHeader title="UI 컴포넌트" description="shadcn/ui 기반 모든 컴포넌트의 라이브 데모와 코드 예제" />

      {/* 버튼 */}
      <Section title="버튼 (Button)">
        <ExampleCard
          title="Variants"
          description="6가지 버튼 스타일"
          code={`<Button variant="default">기본</Button>
<Button variant="secondary">보조</Button>
<Button variant="outline">외곽선</Button>
<Button variant="ghost">고스트</Button>
<Button variant="destructive">위험</Button>
<Button variant="link">링크</Button>`}
        >
          <Button>기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">외곽선</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="destructive">위험</Button>
          <Button variant="link">링크</Button>
        </ExampleCard>

        <ExampleCard
          title="Sizes"
          description="4가지 버튼 크기"
          code={`<Button size="lg">크게</Button>
<Button size="default">기본</Button>
<Button size="sm">작게</Button>
<Button disabled>비활성</Button>`}
        >
          <Button size="lg">크게</Button>
          <Button size="default">기본</Button>
          <Button size="sm">작게</Button>
          <Button disabled>비활성</Button>
        </ExampleCard>
      </Section>

      {/* 배지 */}
      <Section title="배지 (Badge)">
        <ExampleCard
          title="Variants"
          code={`<Badge>기본</Badge>
<Badge variant="secondary">보조</Badge>
<Badge variant="outline">외곽선</Badge>
<Badge variant="destructive">위험</Badge>`}
        >
          <Badge>기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="outline">외곽선</Badge>
          <Badge variant="destructive">위험</Badge>
        </ExampleCard>
      </Section>

      {/* 알림 */}
      <Section title="알림 (Alert)">
        <ExampleCard
          title="기본 알림"
          code={`<Alert>
  <Terminal className="size-4" />
  <AlertTitle>안내</AlertTitle>
  <AlertDescription>작업이 완료되었습니다.</AlertDescription>
</Alert>`}
          previewClassName="block"
        >
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>안내</AlertTitle>
            <AlertDescription>작업이 완료되었습니다.</AlertDescription>
          </Alert>
        </ExampleCard>

        <ExampleCard
          title="에러 알림"
          code={`<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>오류</AlertTitle>
  <AlertDescription>처리 중 오류가 발생했습니다.</AlertDescription>
</Alert>`}
          previewClassName="block"
        >
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>처리 중 오류가 발생했습니다.</AlertDescription>
          </Alert>
        </ExampleCard>
      </Section>

      {/* 입력 */}
      <Section title="입력 (Input / Textarea)">
        <ExampleCard
          title="Input"
          code={`<div className="w-full max-w-sm space-y-2">
  <Label htmlFor="email">이메일</Label>
  <Input id="email" type="email" placeholder="example@email.com" />
</div>`}
          previewClassName="block"
        >
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="demo-email">이메일</Label>
            <Input id="demo-email" type="email" placeholder="example@email.com" />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Textarea"
          code={`<Textarea
  className="w-full max-w-sm"
  placeholder="내용을 입력하세요..."
  rows={3}
/>`}
          previewClassName="block"
        >
          <Textarea className="w-full max-w-sm" placeholder="내용을 입력하세요..." rows={3} />
        </ExampleCard>
      </Section>

      {/* 선택 요소 */}
      <Section title="선택 요소">
        <ExampleCard
          title="Select"
          code={`<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="dev">개발자</SelectItem>
    <SelectItem value="design">디자이너</SelectItem>
    <SelectItem value="pm">PM</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dev">개발자</SelectItem>
              <SelectItem value="design">디자이너</SelectItem>
              <SelectItem value="pm">PM</SelectItem>
            </SelectContent>
          </Select>
        </ExampleCard>

        <ExampleCard
          title="Checkbox & Switch"
          code={`<div className="flex items-center gap-2">
  <Checkbox id="agree" />
  <Label htmlFor="agree">동의합니다</Label>
</div>
<div className="flex items-center gap-2">
  <Switch id="notify" />
  <Label htmlFor="notify">알림 활성화</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="demo-agree" />
            <Label htmlFor="demo-agree">동의합니다</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="demo-notify" />
            <Label htmlFor="demo-notify">알림 활성화</Label>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Radio Group"
          code={`<RadioGroup defaultValue="개발자">
  {['개발자', '디자이너', 'PM'].map((v) => (
    <div key={v} className="flex items-center gap-2">
      <RadioGroupItem value={v} id={v} />
      <Label htmlFor={v}>{v}</Label>
    </div>
  ))}
</RadioGroup>`}
        >
          <RadioGroup defaultValue="dev">
            {['개발자', '디자이너', 'PM'].map((v) => (
              <div key={v} className="flex items-center gap-2">
                <RadioGroupItem value={v} id={`radio-${v}`} />
                <Label htmlFor={`radio-${v}`}>{v}</Label>
              </div>
            ))}
          </RadioGroup>
        </ExampleCard>
      </Section>

      {/* 카드 */}
      <Section title="카드 (Card)">
        <ExampleCard
          title="기본 카드"
          code={`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드에 대한 간단한 설명입니다.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">카드 콘텐츠 영역입니다.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button size="sm">확인</Button>
    <Button size="sm" variant="outline">취소</Button>
  </CardFooter>
</Card>`}
          previewClassName="block"
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드에 대한 간단한 설명입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">카드 콘텐츠 영역입니다.</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">확인</Button>
              <Button size="sm" variant="outline">취소</Button>
            </CardFooter>
          </Card>
        </ExampleCard>
      </Section>

      {/* 아바타 */}
      <Section title="아바타 (Avatar)">
        <ExampleCard
          title="Sizes & Fallback"
          code={`<Avatar className="size-12">
  <AvatarFallback>김</AvatarFallback>
</Avatar>
<Avatar className="size-10">
  <AvatarFallback>이</AvatarFallback>
</Avatar>
<Avatar className="size-8">
  <AvatarFallback>박</AvatarFallback>
</Avatar>
<Avatar className="size-8">
  <AvatarFallback>최</AvatarFallback>
</Avatar>`}
        >
          {['김', '이', '박', '최'].map((name, i) => (
            <Avatar key={i} className={i === 0 ? 'size-12' : i === 1 ? 'size-10' : 'size-8'}>
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          ))}
        </ExampleCard>
      </Section>

      {/* 스켈레톤 */}
      <Section title="스켈레톤 (Skeleton)">
        <ExampleCard
          title="카드 로딩 패턴"
          code={`<div className="flex gap-4 w-full">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex-1 space-y-3">
      <Skeleton className="h-32 w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ))}
</div>`}
          previewClassName="block"
        >
          <div className="flex gap-4 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 space-y-3">
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </ExampleCard>
      </Section>

      {/* 진행 바 */}
      <Section title="진행 바 (Progress)">
        <ExampleCard
          title="다양한 값"
          code={`<div className="w-full space-y-3">
  {[25, 50, 75, 100].map((v) => (
    <div key={v} className="flex items-center gap-3">
      <span className="w-8 text-xs text-right text-muted-foreground">{v}%</span>
      <Progress value={v} className="flex-1" />
    </div>
  ))}
</div>`}
          previewClassName="block"
        >
          <div className="w-full space-y-3">
            {[25, 50, 75, 100].map((v) => (
              <div key={v} className="flex items-center gap-3">
                <span className="w-8 text-xs text-right text-muted-foreground">{v}%</span>
                <Progress value={v} className="flex-1" />
              </div>
            ))}
          </div>
        </ExampleCard>
      </Section>
    </div>
  )
}
