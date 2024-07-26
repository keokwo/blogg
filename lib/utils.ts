'use client'

import { type ClassValue, clsx } from 'clsx'
import React from 'react'
import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import titlePrimitive from 'title'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}


export function sortReferencesByCount(references: Record<string, number>) {
  return Object.keys(references).sort((a, b) => references[b] - references[a])
}

export function goodTitle(str: string) {
  return titlePrimitive(str.replaceAll('-', ' '))
}

export function toTitleCase(input: string): string {
  return input
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
    .replace(/^[a-z]/, (group) => group.toUpperCase())
}

export function wait(number: number) {
  return new Promise((resolve) => setTimeout(resolve, number))
}

export function extractAndFormat(url: string): string {
  const match = url.match(/\/([^/]+)\.html/)
  if (match) {
    return match[1].replace(/([a-z])([A-Z])/g, '$1 $2')
  }
  return ''
}


function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}

const focusRing = tv({
  base: 'outline-none focus:outline-none forced-colors:outline-[Highlight]',
  variants: {
    isFocused: { false: 'ring-0', true: 'ring-4 ring-primary/20' },
    isInvalid: { true: 'ring-4 ring-danger/20' }
  }
})

const focusStyles = tv({
  extend: focusRing,
  variants: {
    isFocused: { true: 'border-primary' },
    isInvalid: { true: 'border-danger' }
  }
})

function pickBy<T extends object>(
  object: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean = (value) => value !== undefined && value !== ''
): Partial<T> {
  return Object.keys(object).reduce((acc: Partial<T>, key: string) => {
    const typedKey = key as keyof T
    if (predicate(object[typedKey], typedKey)) {
      acc[typedKey] = object[typedKey]
    }
    return acc
  }, {})
}

function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}

const ctr = composeTailwindRenderProps
const tm = twMerge
const cr = composeRenderProps

export { cn, composeTailwindRenderProps, cr, ctr, focusRing, focusStyles, pickBy, tm, twMerge, useMediaQuery }
