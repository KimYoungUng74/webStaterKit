'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { previewScope } from './preview-scope'

interface LivePreviewProps {
  code: string
  className?: string
}

export function LivePreview({ code, className }: LivePreviewProps) {
  const [result, setResult] = useState<React.ReactNode>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!code.trim()) return

    async function compile() {
      try {
        const Babel = await import('@babel/standalone')
        const wrapped = `<React.Fragment>${code}</React.Fragment>`
        const { code: compiled } = Babel.transform(wrapped, {
          presets: ['react'],
          filename: 'preview.tsx',
        })

        const scopeKeys = ['React', ...Object.keys(previewScope)]
        const scopeValues = [React, ...Object.values(previewScope)]
        // eslint-disable-next-line no-new-func
        const fn = new Function(...scopeKeys, `return ${compiled}`)
        setResult(fn(...scopeValues))
        setError(null)
      } catch (e) {
        setError((e as Error).message)
        setResult(null)
      }
    }

    compile()
  }, [code])

  if (error) {
    return (
      <p className="font-mono text-xs text-destructive whitespace-pre-wrap">{error}</p>
    )
  }

  return <div className={className}>{result}</div>
}
