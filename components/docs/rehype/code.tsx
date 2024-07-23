'use client'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/components/ui/primitive'
import { CopyButton } from '@/components/ui/snippet'
import { IconCircleInfo } from '@irsyadadl/paranoid'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { copyToClipboard } from 'usemods'

interface CodeProps {
  lang?: string
  code: string
  withImportCopy?: boolean
  className?: string
}

function Code({ className, lang = 'tsx', code, withImportCopy = true }: CodeProps) {
  const [copied, setCopied] = React.useState<string>('')

  function copyImportsToClipboard(): void {
    const importRegex = /import[\s\S]+?from\s+['"][\s\S]+?['"];?\n*/g
    const _imports = code.match(importRegex) || []
    const imports = _imports.map((importStatement: string) => importStatement.trim()).join('\n')
    copyToClipboard(imports)
      .then(() => {
        setCopied('imports')
        setTimeout(() => setCopied(''), 2000)
      })
      .catch((err) => console.error('Copy failed: ', err))
  }

  return (
    <div
      className={cn(
        'dfakdpxe2941 not-prose group relative max-h-96 overflow-y-auto rounded-lg font-mono text-sm',
        className
      )}
    >
      <div className={cn('absolute z-20 bottom-auto right-3 top-3 flex gap-1.5')}>
        {withImportCopy && (
          <CopyButton
            ariaLabel="Copy imports statement"
            initialIcon={<IconCircleInfo />}
            isCopied={copied === 'imports'}
            onPress={copyImportsToClipboard}
          />
        )}
        <CopyRawButton code={code} />
      </div>
      <CodeHighlighter lang={lang} code={code} />
    </div>
  )
}

function CodeContainer({ children, isOpened }: { children: React.ReactNode; isOpened: boolean }) {
  return (
    <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened && 'h-32')}>
      <div
        className={cn(
          '[&_pre]:my-0 [&_pre]:!border-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[100px]',
          !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
        )}
      >
        {children}
      </div>
    </CollapsibleContent>
  )
}

function CodeExpandButton({ isOpened }: { isOpened: boolean }) {
  return (
    <div
      className={cn(
        'absolute flex items-center justify-center bg-gradient-to-b from-[#0e0e10]/50 to-black',
        isOpened ? 'inset-x-0 bottom-0 h-16' : 'inset-0'
      )}
    >
      <CollapsibleTrigger asChild>
        <Button intent="secondary" size="small">
          {isOpened ? 'Collapse' : 'Expand'}
        </Button>
      </CollapsibleTrigger>
    </div>
  )
}

interface CodeCollapsibleProps {
  isOpened: boolean
  onOpenChange: (open: boolean) => void
  lang?: string
  withImportCopy?: boolean
  code: string
}

function CodeCollapsible({
  children,
  isOpened,
  onOpenChange,
  lang = 'tsx',
  withImportCopy = true,
  code,
  ...props
}: React.PropsWithChildren<CodeCollapsibleProps>) {
  return (
    <Collapsible open={isOpened} onOpenChange={onOpenChange}>
      <div className={'relative overflow-hidden'} {...props}>
        <CodeContainer isOpened={isOpened}>
          <Code code={code} lang={lang} withImportCopy={withImportCopy} />
        </CodeContainer>
        <CodeExpandButton isOpened={isOpened} />
      </div>
    </Collapsible>
  )
}

export function CodeCollapsibleRoot({ children }: React.PropsWithChildren<{}>) {
  return <div className="overflow-hidden border border-zinc-800 bg-[#0e0e10] rounded-lg">{children}</div>
}

export function CopyRawButton({ code }: { className?: string; code: any }) {
  const [copied, setCopied] = React.useState<string>('')
  const copyRaw = () => {
    copyToClipboard(code)
      .then(() => {
        setCopied('raw')
        setTimeout(() => setCopied(''), 2000)
      })
      .catch((err) => {
        console.error('Copy failed: ', err)
      })
  }
  return <CopyButton ariaLabel="Copy raw code" isCopied={copied === 'raw'} onPress={copyRaw} />
}

const CodeHighlighter: React.FC<CodeProps> = ({ lang = 'tsx', code }) => {
  const [formattedCode, setFormattedCode] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const processCode = async () => {
      try {
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypePrettyCode, {
            keepBackground: false,
            theme: 'vesper',
            defaultLang: {
              block: lang,
              inline: 'plaintext'
            }
          })
          .use(rehypeStringify, { allowDangerousHtml: true })
          .process(`\`\`\`${lang}\n${code}\n\`\`\``)
        setFormattedCode(String(file))
      } catch (err) {
        setError('Failed to process code. Please check the configuration.')
        console.error(err)
      }
    }

    processCode()
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
}

export { Code, CodeCollapsible, CodeContainer, CodeExpandButton }

