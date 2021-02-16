// https://material.io/design/color/the-color-system.html

export const light = {
  // A primary color is the color displayed most frequently across your app's screens and components.
  primary: {
    light: '#5584DB',
    main: '#0A58A9',
    dark: '#003079',
    contrastText: '#FFFFFF',
  },
  // A secondary color provides more ways to accent and distinguish your product.
  // Secondary colors are best for:
  //    Floating action buttons
  //    Selection controls, like sliders and switches
  //    Highlighting selected text
  //    Progress bars
  //    Links and headlines
  secondary: {
    light: '#BF7A33',
    main: '#8A4E00',
    dark: '#592500',
    contrastText: '#FFFFFF',
  },
  // The background color appears behind scrollable content.
  background: {
    main: '#FFFFFF',
    contrastText: '#B00020',
  },
  // Surface colors affect surfaces of components, such as cards, sheets, and menus.
  surface: {
    main: '#FFFFFF',
    contrastText: '#B00020',
  },
}

export type Colors = typeof light
