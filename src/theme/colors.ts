// https://material.io/design/color/the-color-system.html

type Color = {
  contrastText: string
  dark?: string
  light?: string
  main: string
}

export type ColorKeys = 'primary' | 'secondary' | 'background' | 'surface'

export type Colors = Record<ColorKeys, Color>

export const light: Colors = {
  // The background color appears behind scrollable content.
  background: {
    contrastText: '#34515E',
    main: '#FAFAFA',
  },

  // A primary color is the color displayed most frequently across your app's screens and components.
  primary: {
    contrastText: '#FAFAFA',
    dark: '#34515E',
    light: '#8EACBB',
    main: '#607D8B',
  },

  // A secondary color provides more ways to accent and distinguish your product.
  // Secondary colors are best for:
  //    Floating action buttons
  //    Selection controls, like sliders and switches
  //    Highlighting selected text
  //    Progress bars
  //    Links and headlines
  secondary: {
    contrastText: '#FAFAFA',
    dark: '#C05D00',
    light: '#FFBC45',
    main: '#F98B00',
  },
  // Surface colors affect surfaces of components, such as cards, sheets, and menus.
  surface: {
    contrastText: '#34515E',
    main: '#FAFAFA',
  },
}

// TODO: Use semi-transparent overlay
// https://material.io/design/color/dark-theme.html#properties
export const dark: Colors = {
  background: {
    contrastText: '#DBDBDC',
    main: '#121212',
  },
  primary: {
    contrastText: '#DBDBDC',
    dark: '#2b2234',
    light: '#282130',
    main: '#1e1a23',
  },
  secondary: {
    contrastText: '#DBDBDC',
    dark: '#03DAC6',
    light: '#03DAC6',
    main: '#03DAC6',
  },
  surface: {
    contrastText: '#DBDBDC',
    main: '#121212',
  },
}
