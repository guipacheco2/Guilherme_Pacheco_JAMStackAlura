import React from 'react'
import { render } from '../../infra'
import { GridRow } from './GridRow'

describe('<GridRow />', () => {
  test('renders component', () => {
    const { baseElement } = render(<GridRow>child</GridRow>)
    expect(baseElement).toMatchSnapshot()
  })
})
