// https://material.io/design/color/the-color-system.html

type Color = {
  light?: string
  main: string
  dark?: string
  contrastText: string
}

export type ColorKeys = 'primary' | 'secondary' | 'background' | 'surface'

export type Colors = Record<ColorKeys, Color>

export const light: Colors = {
  // A primary color is the color displayed most frequently across your app's screens and components.
  primary: {
    light: '#8EACBB',
    main: '#607D8B',
    dark: '#34515E',
    contrastText: '#FAFAFA',
  },
  // A secondary color provides more ways to accent and distinguish your product.
  // Secondary colors are best for:
  //    Floating action buttons
  //    Selection controls, like sliders and switches
  //    Highlighting selected text
  //    Progress bars
  //    Links and headlines
  secondary: {
    light: '#FFBC45',
    main: '#F98B00',
    dark: '#C05D00',
    contrastText: '#FAFAFA',
  },
  // The background color appears behind scrollable content.
  background: {
    main: '#FAFAFA',
    contrastText: '#34515E',
  },
  // Surface colors affect surfaces of components, such as cards, sheets, and menus.
  surface: {
    main: '#FAFAFA',
    contrastText: '#34515E',
  },
}

// TODO: Use semi-transparent overlay
// https://material.io/design/color/dark-theme.html#properties
export const dark: Colors = {
  primary: {
    light: '#282130',
    main: '#1e1a23',
    dark: '#2b2234',
    contrastText: '#DBDBDC',
  },
  secondary: {
    light: '#03DAC6',
    main: '#03DAC6',
    dark: '#03DAC6',
    contrastText: '#DBDBDC',
  },
  background: {
    main: '#121212',
    contrastText: '#DBDBDC',
  },
  surface: {
    main: '#121212',
    contrastText: '#DBDBDC',
  },
}
