import React from 'react'
import { render } from '../../infra'
import { GridContainer } from './GridContainer'

describe('<GridContainer />', () => {
  test('renders component', () => {
    const { baseElement } = render(<GridContainer>child</GridContainer>)
    expect(baseElement).toMatchSnapshot()
  })
})
