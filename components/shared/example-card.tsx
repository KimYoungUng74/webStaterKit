'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/shared/code-block'
import { LivePreview } from '@/components/shared/live-preview'
import { cn } from '@/lib/utils'

interface ExampleCardProps {
  title: string
  description?: string
  code: string
  language?: string
  className?: string
  previewClassName?: string
  children: React.ReactNode
  editable?: boolean
}

export function ExampleCard({
  title,
  description,
  code,
  language,
  className,
  previewClassName,
  children,
  editable = true,
}: ExampleCardProps) {
  const [currentCode, setCurrentCode] = useState(code)
  const isModified = currentCode !== code

  return (
    <div className={cn('space-y-2', className)}>
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {/* 왼쪽: 미리보기 */}
        <div
          className={cn(
            'rounded-lg border border-border bg-background p-6 flex flex-wrap items-center gap-3 min-h-24',
            previewClassName
          )}
        >
          {isModified ? (
            <LivePreview
              code={currentCode}
              className="flex flex-wrap items-center gap-3 w-full"
            />
          ) : (
            children
          )}
        </div>
        {/* 오른쪽: 코드 */}
        <CodeBlock
          code={code}
          language={language}
          editable={editable}
          value={currentCode}
          onChange={setCurrentCode}
          onReset={() => setCurrentCode(code)}
        />
      </div>
    </div>
  )
}
