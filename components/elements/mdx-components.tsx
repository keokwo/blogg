import { PlainCode } from '@/components/docs/rehype/plain-code'
import { SourceCode } from '@/components/docs/rehype/source-code'
import { DocComposed } from '@/components/elements/doc-composed'
import { DocNote } from '@/components/elements/doc-note'
import type { DocSnippetProps } from '@/components/elements/doc-snippet'
import { DocSnippet } from '@/components/elements/doc-snippet'
import type { InstallCommandProps } from '@/components/elements/install-command'
import { InstallCommand } from '@/components/elements/install-command'
import Image from 'next/image'

import { useMDXComponent } from '@/lib/hooks/useMdx'
import { Card } from '../ui/card'
import { Link, LinkProps } from '../ui/link'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableProps, TableRow } from '../ui/table'
import { DocHow } from './doc-how'

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
          <Link target="_blank" intent="primary" {...props} className="not-prose xd2432 font-medium hover:underline" />
        ),
        SourceCode: SourceCode,
        PlainCode: PlainCode,
        Snippet: (props: DocSnippetProps) => <DocSnippet {...props} />
      }}
    />
  )
}
