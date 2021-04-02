import { render, RenderOptions, RenderResult } from '@testing-library/react'
import React from 'react'
import { CustomThemeProvider } from '../../theme'

function AllTheProviders({
  children,
  ...props
}: {
  children: React.ReactNode
}): JSX.Element {
  return <CustomThemeProvider {...props}>{children}</CustomThemeProvider>
}

export function customRender(
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> & { providerProps?: unknown } = {},
): RenderResult {
  const Provider = (props: { children: React.ReactNode }) => (
    <AllTheProviders {...props} {...options.providerProps} />
  )

  return render(ui, { wrapper: Provider, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
