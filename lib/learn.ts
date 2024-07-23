import { type Learn } from '#site/content'
import { slug } from 'github-slugger'

export function sortLearn(learn: Array<Learn>) {
    return learn.sort((a, b) => a.order - b.order)
}

export function getAllRefs(learn: Array<Learn>) {
    const references: Record<string, number> = {}
    learn.forEach((doc) => {
        if (doc.published) {
            doc.references?.forEach((tag) => {
                references[tag] = (references[tag] ?? 0) + 1
            })
        }
    })

    return references
}

export function getLearnByTagReferences(learn: Array<Learn>, tag: string) {
    return learn.filter((doc) => {
        if (!doc.references) return false
        const slugifiedTags = doc.references.map((tag) => slug(tag))
        return slugifiedTags.includes(tag)
    })
}