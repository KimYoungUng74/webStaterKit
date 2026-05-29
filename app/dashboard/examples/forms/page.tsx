'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { PageHeader } from '@/components/shared/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const signupSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다'),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
  password: z
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다')
    .regex(/[^a-zA-Z0-9]/, '특수문자를 포함해야 합니다'),
  role: z.string().min(1, '직책을 선택해주세요'),
  bio: z.string().max(200, '200자 이하로 입력해주세요').optional(),
  marketing: z.boolean(),
  notifications: z.boolean(),
})

type SignupValues = z.infer<typeof signupSchema>

function SignupForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { marketing: false, notifications: true },
  })

  const onSubmit = async (data: SignupValues) => {
    await new Promise((r) => setTimeout(r, 1500))
    toast.success('가입이 완료되었습니다!', {
      description: `${data.name}님, 환영합니다.`,
    })
    reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입 폼</CardTitle>
        <CardDescription>react-hook-form + zod 유효성 검증 예제</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 이름 */}
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Input id="name" placeholder="홍길동" {...register('name')} />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* 이메일 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일 *</Label>
            <Input id="email" type="email" placeholder="example@email.com" {...register('email')} />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* 비밀번호 */}
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호 *</Label>
            <Input id="password" type="password" placeholder="8자 이상, 특수문자 포함" {...register('password')} />
            {errors.password && (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          {/* 직책 */}
          <div className="space-y-2">
            <Label>직책 *</Label>
            <Select onValueChange={(v) => setValue('role', v)}>
              <SelectTrigger>
                <SelectValue placeholder="직책을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">개발자</SelectItem>
                <SelectItem value="designer">디자이너</SelectItem>
                <SelectItem value="pm">PM</SelectItem>
                <SelectItem value="other">기타</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-xs text-destructive">{errors.role.message}</p>
            )}
          </div>

          {/* 자기소개 */}
          <div className="space-y-2">
            <Label htmlFor="bio">자기소개 (선택)</Label>
            <Textarea
              id="bio"
              placeholder="간단한 자기소개를 입력하세요 (최대 200자)"
              rows={3}
              {...register('bio')}
            />
            <p className="text-xs text-muted-foreground text-right">
              {(watch('bio') ?? '').length} / 200
            </p>
            {errors.bio && (
              <p className="text-xs text-destructive">{errors.bio.message}</p>
            )}
          </div>

          <Separator />

          {/* 체크박스 / 스위치 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="marketing"
                checked={watch('marketing')}
                onCheckedChange={(v) => setValue('marketing', !!v)}
              />
              <Label htmlFor="marketing" className="font-normal cursor-pointer">
                마케팅 정보 수신에 동의합니다
              </Label>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="font-normal cursor-pointer">
                이메일 알림 활성화
              </Label>
              <Switch
                id="notifications"
                checked={watch('notifications')}
                onCheckedChange={(v) => setValue('notifications', v)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            {isSubmitting ? '처리 중...' : '가입하기'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function LoginForm() {
  const [loginError, setLoginError] = useState(false)
  const loginSchema = z.object({
    email: z.string().email('올바른 이메일 형식이 아닙니다'),
    password: z.string().min(1, '비밀번호를 입력해주세요'),
  })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000))
    setLoginError(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인 폼</CardTitle>
        <CardDescription>에러 상태 Alert 표시 예제</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {loginError && (
            <Alert variant="destructive">
              <AlertDescription>이메일 또는 비밀번호가 올바르지 않습니다.</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="login-email">이메일</Label>
            <Input id="login-email" type="email" placeholder="example@email.com" {...register('email')} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">비밀번호</Label>
            <Input id="login-password" type="password" placeholder="••••••••" {...register('password')} />
            {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            {isSubmitting ? '로그인 중...' : '로그인'}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            잘못된 자격증명으로 에러를 확인해보세요.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="폼 & 검증"
        description="react-hook-form + zod를 활용한 실전 폼 패턴"
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SignupForm />
        <LoginForm />
      </div>
    </div>
  )
}
