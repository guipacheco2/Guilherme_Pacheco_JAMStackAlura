import React, { createContext, useCallback, useContext, useState } from 'react'

export type ColorSchemaTypes = 'light' | 'dark'

const ColorSchemaContext = createContext<ColorSchemaTypes>('light')

const ColorSchemaToggleContext = createContext<() => void>(() => void 0)

interface ColorSchemaContextProviderProps {
  children: React.ReactNode
}

export function useColorSchema(): ColorSchemaTypes {
  return useContext(ColorSchemaContext)
}

export function useToggleColorSchema(): () => void {
  return useContext(ColorSchemaToggleContext)
}

export function ColorSchemaContextProvider({
  children,
}: ColorSchemaContextProviderProps): JSX.Element {
  const [mode, setMode] = useState<ColorSchemaTypes>('light')

  const toggle = useCallback(() => {
    setMode((mode) => (mode === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ColorSchemaToggleContext.Provider value={toggle}>
      <ColorSchemaContext.Provider value={mode}>
        {children}
      </ColorSchemaContext.Provider>
    </ColorSchemaToggleContext.Provider>
  )
}
