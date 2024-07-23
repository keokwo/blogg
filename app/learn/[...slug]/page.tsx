import { learn } from '#site/content'
import '@/app/code.css'
import { MDXContent } from '@/components/elements/mdx-components'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Toaster } from 'sonner'
import { DocRefs } from '../doc-refs'
import { TableOfContents } from '../table-of-contents'

export interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: DocPageProps['params']) {
  const slug = params?.slug?.join('/')
  const doc = learn.find((doc) => doc.slugAsParams === slug)

  return doc
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getPostFromParams(params)

  if (!doc) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', doc.title)

  return {
    title: `Learn: ${doc.title} / ${siteConfig.name}`,
    description: doc.description,
    applicationName: siteConfig.name,
    category: 'Learn',
    twitter: {
      card: 'summary_large_image',
      title: `Learn: ${doc.title} / ${siteConfig.name}`,
      description: doc.description
    }
  }
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return learn.map((doc) => ({ slug: doc.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: DocPageProps) {
  const doc = await getPostFromParams(params)

  if (!doc || !doc.published) {
    notFound()
  }

  return (
    <>
      {doc.title === 'Toaster' && <Toaster />}
      <div className="min-w-0 max-w-2xl flex-auto pt-16 pb-56 lg:max-w-none px-4 lg:pl-8 lg:pr-0 xl:px-16">
        <Breadcrumbs className='mb-5'>
          <Breadcrumb href="/learn">Learn</Breadcrumb>
          {doc.slugAsParams.split('/').map((slug, index) => (
            <>
              {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) != doc.title ? (
                <Breadcrumb key={slug} href="#">
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </Breadcrumb>
              ) : (
                <Breadcrumb key={slug}>
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </Breadcrumb>
              )}
            </>
          ))}

        </Breadcrumbs>
        <main className="prose prose-pre:p-0 prose-headings:mb-[0.3rem] prose-headings:scroll-mt-24 prose-blue dark:prose-invert max-w-[inherit]">
          <h1 className="mb-2">{doc.title}</h1>
          {doc.description ? <p className="text-xl mt-0 text-muted-foreground">{doc.description}</p> : null}

          <div className="not-prose">
            <div className="flex gap-2 mt-0">
              {doc.references && doc.references?.length > 0 && <DocRefs references={doc.references} />}
            </div>
            <Separator className="my-4 lg:my-10 not-prose" />
          </div>
          <TableOfContents className="mt-8 block xl:hidden" items={doc.toc} />
          <MDXContent code={doc.body} />
        </main>
      </div>
      <TableOfContents className="hidden xl:block" items={doc.toc} />
    </>
  )
}
