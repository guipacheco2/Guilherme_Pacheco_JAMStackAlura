// https://material.io/design/color/the-color-system.html

export const light = {
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

export type Colors = typeof light

export type ColorKeys = keyof Colors
