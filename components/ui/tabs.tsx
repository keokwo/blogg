'use client'

import { useId } from 'react'

import { cn } from '@/lib/utils'
import { LayoutGroup, motion } from 'framer-motion'
import {
  composeRenderProps,
  TabList as TabListPrimitive,
  type TabListProps,
  TabPanel as TabPanelPrimitive,
  type TabPanelProps,
  Tab as TabPrimitive,
  type TabProps,
  Tabs as TabsPrimitive,
  type TabsProps
} from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'


const tabsStyles = tv({
  base: 'group flex gap-4',
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'w-[800px] flex-row'
    }
  }
})

function Tabs(props: TabsProps) {
  return (
    <TabsPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({
          ...renderProps,
          className
        })
      )}
    />
  )
}

const tabListStyles = tv({
  base: 'flex',
  variants: {
    orientation: {
      horizontal: 'flex-row gap-x-5 border-b',
      vertical: 'flex-col items-start gap-y-4 border-l'
    }
  }
})

function TabList<T extends object>(props: TabListProps<T>) {
  const id = useId()
  return (
    <LayoutGroup id={id}>
      <TabListPrimitive
        {...props}
        className={composeRenderProps(props.className, (className, renderProps) =>
          tabListStyles({ ...renderProps, className })
        )}
      />
    </LayoutGroup>
  )
}

const tabStyles = tv({
  base: [
    'relative flex cursor-default items-center rounded-full text-sm font-medium outline-none transition forced-color-adjust-none hover:text-foreground [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:mr-2',
    // hor
    'group-orientation-vertical:w-full group-orientation-vertical:py-0',
    // ver
    'group-orientation-horizontal:pb-3 group-orientation-vertical:pl-4 group-orientation-vertical:pr-2'
  ],
  variants: {
    isSelected: {
      false: 'text-mute-foreground',
      true: 'text-foreground forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]'
    },
    isFocused: { false: 'ring-0', true: 'text-foreground' },
    isDisabled: {
      true: 'text-muted-foreground/50 forced-colors:text-[GrayText] forced-colors:selected:bg-[GrayText] forced-colors:selected:text-[HighlightText]'
    }
  }
})

function Tab({ children, ...props }: TabProps) {
  return (
    <TabPrimitive
      {...props}
      className={composeRenderProps(props.className, (_className, renderProps) =>
        tabStyles({
          ...renderProps,
          className: twJoin('href' in props && 'cursor-pointer', _className)
        })
      )}
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && (
            <motion.span
              className={cn(
                'absolute rounded bg-foreground',
                // horizontal
                'group-orientation-horizontal:inset-x-0 group-orientation-horizontal:-bottom-px group-orientation-horizontal:h-0.5 group-orientation-horizontal:w-full',
                // vertical
                'group-orientation-vertical:left-0 group-orientation-vertical:h-[calc(100%-10%)] group-orientation-vertical:w-0.5 group-orientation-vertical:transform'
              )}
              layoutId="current-selected"
              transition={{ type: 'spring', stiffness: 500, damping: 40 }}
            />
          )}
        </>
      )}
    </TabPrimitive>
  )
}

const tabPanelStyles = tv({
  base: 'flex-1 text-sm text-foreground'
})

function TabPanel(props: TabPanelProps) {
  return (
    <TabPanelPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className })
      )}
    />
  )
}

export { Tab, TabList, TabPanel, Tabs }
