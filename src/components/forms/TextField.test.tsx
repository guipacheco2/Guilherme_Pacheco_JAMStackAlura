import user from '@testing-library/user-event'
import React from 'react'
import { render, screen } from '../../infra'
import { TextField } from './TextField'

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
        onChange={() => false}
        name="nome"
        id="nome"
        label="Nome"
      />,
    )

    const textField = screen.getByPlaceholderText(/nome/i)
    expect(textField).toMatchSnapshot()
  })

  describe('and user is typing', () => {
    test('the value must be updated', () => {
      const onChangeMock = jest.fn()

      render(
        <TextField
          placeholder="Nome"
          value=""
          onChange={onChangeMock}
          name="nome"
          id="nome"
          label="Nome"
        />,
      )

      const inputNome = screen.getByPlaceholderText(/nome/i)
      const typedName = 'someusername'
      user.type(inputNome, typedName)
      expect(onChangeMock).toHaveBeenCalledTimes(typedName.length)
    })
  })
})
