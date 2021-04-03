import { propsToStyle } from './propsToStyle'

describe('propsToStyle()', () => {
  describe('when receives nothing', () => {
    test('throws an error', () => {
      expect(() => propsToStyle({})).toThrow('Utilize com pelo menos uma prop')
    })
  })

  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const propsToStyleResult = propsToStyle({ textAlign: 'center' })
      expect(propsToStyleResult).toEqual([['text-align: center;']])
    })

    test('and it is a number', () => {
      const propsToStyleResult = propsToStyle({ flex: 1 })
      expect(propsToStyleResult).toEqual([['flex: 1;']])
    })
  })

  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propsToStyleResult = propsToStyle({ textAlign: { xs: 'center' } })

      expect(propsToStyleResult).toMatchSnapshot()
    })

    test('renders two or more breakpoint resolutions', () => {
      const propsToStyleResult = propsToStyle({
        textAlign: { md: 'right', xs: 'center' },
      })

      expect(propsToStyleResult).toMatchSnapshot()
    })
  })
})
