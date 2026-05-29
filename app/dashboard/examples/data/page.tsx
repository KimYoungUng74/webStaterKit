'use client'

import { useState, useMemo } from 'react'
import { useDebounceValue } from 'usehooks-ts'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

type Status = '활성' | '비활성' | '대기'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: Status
  date: string
}

const dummyUsers: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: ['김민수', '이지은', '박준호', '최수아', '정우진', '한예린', '임동현', '서지현', '오태양', '윤소희'][i % 10],
  email: `user${i + 1}@example.com`,
  role: ['개발자', '디자이너', 'PM', '마케터'][i % 4],
  status: (['활성', '활성', '비활성', '대기'] as Status[])[i % 4],
  date: `2024-0${(i % 9) + 1}-${String((i % 28) + 1).padStart(2, '0')}`,
}))

const statusVariant: Record<Status, 'default' | 'secondary' | 'outline'> = {
  활성: 'default',
  비활성: 'outline',
  대기: 'secondary',
}

const PAGE_SIZE = 8

export default function DataPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<number[]>([])
  const [page, setPage] = useState(1)
  const [debouncedSearch] = useDebounceValue(search, 300)

  const filtered = useMemo(
    () => dummyUsers.filter((u) =>
      u.name.includes(debouncedSearch) ||
      u.email.includes(debouncedSearch) ||
      u.role.includes(debouncedSearch)
    ),
    [debouncedSearch]
  )

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const pageIds = paginated.map((u) => u.id)
  const allChecked = pageIds.every((id) => selected.includes(id))

  const toggleAll = () => {
    if (allChecked) {
      setSelected((prev) => prev.filter((id) => !pageIds.includes(id)))
    } else {
      setSelected((prev) => [...new Set([...prev, ...pageIds])])
    }
  }

  const toggleOne = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleSearch = (v: string) => {
    setSearch(v)
    setPage(1)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="데이터 테이블"
        description="검색(디바운스) + 체크박스 선택 + 클라이언트 페이지네이션"
      />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base">사용자 목록</CardTitle>
              <CardDescription>
                {selected.length > 0 ? `${selected.length}명 선택됨` : `총 ${filtered.length}명`}
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="이름, 이메일, 직책 검색..."
                className="pl-9"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={allChecked && pageIds.length > 0}
                    onCheckedChange={toggleAll}
                    aria-label="전체 선택"
                  />
                </TableHead>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>직책</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>가입일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-12 text-center text-muted-foreground">
                    검색 결과가 없습니다.
                  </TableCell>
                </TableRow>
              ) : (
                paginated.map((user) => (
                  <TableRow
                    key={user.id}
                    className={selected.includes(user.id) ? 'bg-muted/50' : ''}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selected.includes(user.id)}
                        onCheckedChange={() => toggleOne(user.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[user.status]}>{user.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{user.date}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* 페이지네이션 */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} / {filtered.length}개
            </p>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="size-8"
                onClick={() => setPage((p) => p - 1)}
                disabled={page <= 1}
              >
                <ChevronLeft className="size-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  variant={p === page ? 'default' : 'outline'}
                  size="icon"
                  className="size-8 text-xs"
                  onClick={() => setPage(p)}
                >
                  {p}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                className="size-8"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= totalPages}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
