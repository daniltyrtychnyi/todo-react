import type { ComponentType } from 'react'

export type RouteParams = Record<string, string>

export type PageProps = {
    params: RouteParams,
}

export type Routes = Record<string, ComponentType<PageProps>>

