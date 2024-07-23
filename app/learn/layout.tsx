import { type ReactNode } from 'react'

import { Aside } from './aside'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center lg:px-8">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-zinc-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-zinc-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-zinc-800 dark:block" />
          <div className="sticky top-[5rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72">
            <Aside />
          </div>
        </div>
        {children}

      </div>
    </div>
  )
}
