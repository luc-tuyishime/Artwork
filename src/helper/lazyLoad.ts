import { lazy } from 'react'

export interface LoadableProps {
  path: string
  namedExport: string
}

export const lazyLoad = ({ path, namedExport }: LoadableProps) => {
  return lazy(() => {
    const promise = import(path)
    if (namedExport === null) {
      return promise
    } else {
      return promise.then((module) => ({ default: module[namedExport] }))
    }
  })
}
