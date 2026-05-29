import Link from 'next/link'
import {
  Zap,
  Palette,
  Shield,
  LayoutGrid,
  Code2,
  Rocket,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: '빠른 설정',
    description: 'CLI 명령어 하나로 모든 개발 환경이 준비됩니다.',
  },
  {
    icon: Palette,
    title: '다크 모드',
    description: '시스템 설정을 자동 감지하고 언제든 전환 가능합니다.',
  },
  {
    icon: Shield,
    title: '타입 안전',
    description: 'TypeScript와 Zod로 런타임까지 타입을 보장합니다.',
  },
  {
    icon: LayoutGrid,
    title: '완성된 컴포넌트',
    description: 'shadcn/ui 기반의 20+ 컴포넌트가 바로 사용 가능합니다.',
  },
  {
    icon: Code2,
    title: '코드 품질',
    description: 'ESLint, TypeScript 엄격 모드로 버그를 사전에 방지합니다.',
  },
  {
    icon: Rocket,
    title: '배포 최적화',
    description: 'Next.js App Router와 서버 컴포넌트로 최고의 성능을 냅니다.',
  },
]

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* 상단 메인 배너 */}
      <section className="container mx-auto px-4 py-24 text-center">
        <Badge variant="secondary" className="mb-6">
          Next.js 스타터킷
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          웹 개발을 더 빠르게
          <br />
          <span className="text-primary">시작하세요</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          TypeScript, TailwindCSS, shadcn/ui로 구성된 Next.js 스타터킷.
          <br />
          설정 없이 바로 개발에 집중할 수 있습니다.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">대시보드 보기 →</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* 기능 소개 섹션 */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">모든 것이 준비되어 있습니다</h2>
          <p className="mt-4 text-muted-foreground">
            개발에만 집중할 수 있도록 필요한 모든 설정이 완료되어 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50">
              <CardHeader>
                <feature.icon className="mb-2 size-8 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="border-y border-border bg-primary/5">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
          <p className="mt-4 text-muted-foreground">
            클론 한 번으로 모든 준비가 완료됩니다.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/dashboard">무료로 시작하기</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
