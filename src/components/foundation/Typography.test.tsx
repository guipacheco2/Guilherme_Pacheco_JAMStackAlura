import React from 'react'
import { render } from '../../infra'
import { Typography } from './Typography'

describe('<Typography />', () => {
  describe('when variant', () => {
    test('is simple', () => {
      const { baseElement } = render(
        <Typography surfaceColor="primary" variant="bodyText1">
          child
        </Typography>,
      )

      expect(baseElement).toMatchSnapshot()
    })

    test('is responsive', () => {
      const { baseElement } = render(
        <Typography
          surfaceColor="primary"
          variant={{ md: 'bodyText2', xs: 'bodyText1' }}
        >
          child
        </Typography>,
      )

      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('when href', () => {
    test('is present', () => {
      const { baseElement } = render(
        <Typography surfaceColor="primary" variant="bodyText1" href="/xpto">
          child
        </Typography>,
      )

      expect(baseElement).toMatchSnapshot()
    })
  })
})
