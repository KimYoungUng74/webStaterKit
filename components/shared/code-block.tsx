'use client'

import { useState } from 'react'
import { Check, Copy, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  editable?: boolean
  value?: string
  onChange?: (value: string) => void
  onReset?: () => void
}

export function CodeBlock({
  code,
  language = 'tsx',
  className,
  editable = false,
  value,
  onChange,
  onReset,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  // controlled이면 value/onChange 사용, 아니면 내부 state
  const [internalValue, setInternalValue] = useState(code)
  const current = value !== undefined ? value : internalValue
  const handleChange = onChange ?? setInternalValue
  const handleReset = onReset ?? (() => setInternalValue(code))

  const isModified = current !== code

  const handleCopy = async () => {
    await navigator.clipboard.writeText(current)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('relative rounded-lg border border-border bg-muted overflow-hidden', className)}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">{language}</span>
          {editable && (
            <span className="text-[10px] text-muted-foreground/60">직접 편집 가능</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {editable && isModified && (
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={handleReset}
              aria-label="초기화"
              title="초기화"
            >
              <RotateCcw className="size-3 text-orange-500" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={handleCopy}
            aria-label="코드 복사"
          >
            {copied ? (
              <Check className="size-3 text-green-500" />
            ) : (
              <Copy className="size-3" />
            )}
          </Button>
        </div>
      </div>
      {editable ? (
        <textarea
          value={current}
          onChange={(e) => handleChange(e.target.value)}
          spellCheck={false}
          className="w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-foreground outline-none min-h-[120px]"
          style={{ height: `${Math.max(120, current.split('\n').length * 21 + 32)}px` }}
        />
      ) : (
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="font-mono text-foreground">{current}</code>
        </pre>
      )}
    </div>
  )
}
