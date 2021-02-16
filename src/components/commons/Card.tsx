import React from 'react'

export function Card({
  children,
}: {
  featured?: boolean
  children?: React.ReactNode
}): JSX.Element {
  return <div>{children}</div>
}
