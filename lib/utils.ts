import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import titlePrimitive from 'title'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

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
