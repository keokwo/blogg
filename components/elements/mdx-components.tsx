"use client"
import { PlainCode } from '@/components/docs/rehype/plain-code'
import { SourceCode } from '@/components/docs/rehype/source-code'
import Image from 'next/image'

import { useMDXComponent } from '@/lib/hooks/useMdx'
import { Card } from '../ui/card'
import { Link, LinkProps } from '../ui/link'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableProps, TableRow } from '../ui/table'
import { DocComposed } from './doc-composed'
import { DocHow } from './doc-how'
import { DocNote } from './doc-note'
import { DocSnippet, DocSnippetProps } from './doc-snippet'
import { InstallCommand, InstallCommandProps } from './install-command'


interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <Component
      components={{
        InstallCommand: (props: InstallCommandProps) => <InstallCommand {...props} />,
        table: (props: TableProps) => (
          <Card className="not-prose">
            <Table {...props} />
          </Card>
        ),
        Note: DocNote,
        Composed: DocComposed,
        thead: TableHeader,
        tbody: TableBody,
        th: TableColumn,
        tr: TableRow,
        td: TableCell,
        Image,
        How: DocHow,
        a: (props: LinkProps) => (
          <Link target="_blank" {...props} className="not-prose xd2432 font-medium hover:underline" />
        ),
        SourceCode: SourceCode,
        PlainCode: PlainCode,
        Snippet: (props: DocSnippetProps) => <DocSnippet {...props} />
      }}
    />
  )
}
