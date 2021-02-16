import React from 'react'

export function Section({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element {
  return <div>{children}</div>
}
