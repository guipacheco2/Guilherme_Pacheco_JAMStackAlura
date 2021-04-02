import React from 'react'
import { render } from '../../infra'
import { GridCol } from './GridCol'

describe('<GridCol />', () => {
  describe('when size', () => {
    test('is empty', () => {
      const { baseElement } = render(<GridCol>child</GridCol>)

      expect(baseElement).toMatchSnapshot()
    })

    test('is number', () => {
      const { baseElement } = render(<GridCol size={12}>child</GridCol>)

      expect(baseElement).toMatchSnapshot()
    })

    test('is responsive', () => {
      const { baseElement } = render(<GridCol size={{ sm: 6 }}>child</GridCol>)

      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('when offset', () => {
    test('is number', () => {
      const { baseElement } = render(<GridCol offset={1}>child</GridCol>)

      expect(baseElement).toMatchSnapshot()
    })

    test('is responsive', () => {
      const { baseElement } = render(
        <GridCol offset={{ sm: 3 }}>child</GridCol>,
      )

      expect(baseElement).toMatchSnapshot()
    })
  })
})
