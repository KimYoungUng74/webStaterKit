# Next.js Web Starter Kit

Next.js 16 + shadcn/ui 기반의 풀스택 웹 스타터킷입니다.  
대시보드 레이아웃, 라이브 코드 플레이그라운드, 8종 UI 예제를 포함합니다.

## 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| UI | shadcn/ui + Tailwind CSS v4 |
| 언어 | TypeScript |
| 폼 검증 | react-hook-form + zod |
| 상태 관리 | use-local-storage-state |
| 테마 | next-themes |
| 유틸 훅 | usehooks-ts |
| 알림 | sonner |
| 아이콘 | lucide-react |
| 라이브 미리보기 | @babel/standalone |

## 주요 기능

### 레이아웃
- **마케팅 페이지** — 히어로 섹션, 기능 소개
- **대시보드** — 상단 Header + 좌측 Sidebar (접기/펼치기, localStorage 유지)
- **반응형** — 모바일 Sheet 네비게이션

### 라이브 코드 플레이그라운드
- 오른쪽 코드 영역에서 **직접 편집** → 왼쪽 미리보기에 **실시간 반영**
- **초기화 버튼** — 원본 코드로 즉시 복원
- **복사 버튼** — 현재 편집된 코드 클립보드 복사
- shadcn/ui 컴포넌트 + lucide-react 아이콘 모두 스코프에 포함

### 예제 페이지 (8종)

| 예제 | 내용 |
|------|------|
| UI 컴포넌트 | Button, Badge, Alert, Input, Select, Card, Avatar, Skeleton, Progress |
| 폼 & 검증 | react-hook-form + zod 실전 패턴 |
| 데이터 테이블 | 검색, 정렬, 페이지네이션 |
| 피드백 | Toast, Progress, Empty State, Loading 상태 |
| 오버레이 | Dialog, Sheet, Tooltip, Popover, DropdownMenu |
| 네비게이션 | Tabs, Breadcrumb, Pagination, Accordion |
| 레이아웃 | 그리드, KPI 카드, 분할 레이아웃 패턴 |
| 훅 & 유틸 | useLocalStorage, useDebounce, useMediaQuery, useTheme |

## 시작하기

```bash
# 저장소 클론
git clone https://github.com/KimYoungUng74/webStaterKit.git
cd webStaterKit

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 프로젝트 구조

```
├── app/
│   ├── (marketing)/        # 마케팅 페이지 (홈)
│   ├── dashboard/          # 대시보드
│   │   ├── examples/       # UI 예제 8종
│   │   ├── analytics/      # 분석 (준비 중)
│   │   ├── projects/       # 프로젝트 (준비 중)
│   │   ├── users/          # 사용자 (준비 중)
│   │   └── settings/       # 설정 (준비 중)
│   └── layout.tsx
├── components/
│   ├── layout/             # Header, Footer, Sidebar, MobileNav
│   ├── shared/             # ExampleCard, CodeBlock, LivePreview 등
│   └── ui/                 # shadcn/ui 컴포넌트 28종
├── lib/
│   └── constants.ts        # 네비게이션, 사이드바 메뉴 설정
└── types/
    └── index.ts            # 공통 타입 정의
```

## 라이브 플레이그라운드 사용법

1. 예제 페이지 접속 (`/dashboard/examples`)
2. 원하는 예제 선택
3. 오른쪽 코드 영역 클릭 후 수정
4. 왼쪽 미리보기에서 실시간 결과 확인
5. 초기화 버튼(↺)으로 원본 복원

> 사용 가능한 컴포넌트와 아이콘은 shadcn/ui 전체 + lucide-react 주요 아이콘이 스코프에 포함되어 있습니다.
