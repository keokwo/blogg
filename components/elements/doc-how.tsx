'use client'

import * as React from 'react'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import { Code } from '@/components/docs/rehype/code'
import { cn } from '@/lib/utils'
import { IconLoader } from '@irsyadadl/paranoid'
import { Tab, TabList, TabPanel } from 'react-aria-components'
import { Tabs } from '../ui/tabs'

interface HowProps extends React.HTMLAttributes<HTMLDivElement> {
  toUse: string
  minW72?: boolean
  align?: 'center' | 'start' | 'end'
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
}

export function DocHow({
  toUse,
  children,
  className,
  minW72 = false,
  isCenter = true,
  align = 'center',
  description,
  withNoPadding = false,
  ...props
}: HowProps) {
  const Preview = previews[toUse] ? previews[toUse].component : null

  // @ts-ignore
  const codeString = jsonPreviews[toUse].raw ?? ''
  return (
    <div className={cn('not-prose relative my-4', className)} {...props}>
      <Tabs aria-label="Packages">
        <TabList>
          <Tab id="preview">Preview</Tab>
          <Tab id="code">Code</Tab>
        </TabList>
        <TabPanel className="w-full" id="preview">
          <div
            className={cn(
              !withNoPadding && 'relative gap-4 rounded-lg border bg-popover p-6',
              isCenter && 'flex min-h-56 lg:min-h-80 items-center justify-center py-6 preview sm:py-24'
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <IconLoader className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <div className={cn(minW72 && 'min-w-72', 'not-prose', className)}>
                <Preview />
              </div>
            </React.Suspense>
          </div>
        </TabPanel>
        <TabPanel id="code">
          <Code
            className="border [&_pre_span[data-line]:last-of-type]:hidden [&_pre]:!border-0 border-zinc-800 bg-[#0e0e10] rounded-lg"
            code={codeString}
          />
        </TabPanel>
      </Tabs>
    </div>
  )
}
