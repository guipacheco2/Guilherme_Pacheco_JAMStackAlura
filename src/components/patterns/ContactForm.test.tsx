import user from '@testing-library/user-event'
import React from 'react'
import { render, screen, waitFor } from '../../infra'
import { ContactForm } from './ContactForm'

describe('<ContactForm />', () => {
  describe('when on submission succeeded', () => {
    test('display the success message', async () => {
      const onSubmit = jest.fn()
      render(<ContactForm onSubmit={onSubmit} />)

      const buttonEl = screen.getByRole('button')
      expect(buttonEl).toBeDisabled()

      const inputNameEl = screen.getByRole('textbox', { name: /seu nome/i })
      const typedName = 'some name'
      user.type(inputNameEl, typedName)
      await waitFor(() => expect(inputNameEl).toHaveValue(typedName))

      const inputEmailEl = screen.getByRole('textbox', { name: /seu email/i })
      const typedEmail = 'email@example.com'
      user.type(inputEmailEl, typedEmail)
      await waitFor(() => expect(inputEmailEl).toHaveValue(typedEmail))

      const inputMessageEl = screen.getByRole('textbox', {
        name: /sua mensagem/i,
      })
      const typedMessage = 'some message'
      user.type(inputMessageEl, typedMessage)
      await waitFor(() => expect(inputMessageEl).toHaveValue(typedMessage))

      expect(buttonEl).not.toBeDisabled()

      user.click(buttonEl)

      expect(onSubmit).toHaveBeenCalledTimes(1)

      expect(onSubmit).toBeCalledWith({
        email: typedEmail,
        message: typedMessage,
        name: typedName,
      })

      await waitFor(() =>
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Mensagem enviada com sucesso!',
        ),
      )
    })
  })

  describe('when on submission fails', () => {
    test('display the error message', async () => {
      const onSubmit = jest.fn().mockRejectedValue(new Error('Error'))
      render(<ContactForm onSubmit={onSubmit} />)

      const buttonEl = screen.getByRole('button')
      expect(buttonEl).toBeDisabled()

      const inputNameEl = screen.getByRole('textbox', { name: /seu nome/i })
      const typedName = 'some name'
      user.type(inputNameEl, typedName)
      await waitFor(() => expect(inputNameEl).toHaveValue(typedName))

      const inputEmailEl = screen.getByRole('textbox', { name: /seu email/i })
      const typedEmail = 'email@example.com'
      user.type(inputEmailEl, typedEmail)
      await waitFor(() => expect(inputEmailEl).toHaveValue(typedEmail))

      const inputMessageEl = screen.getByRole('textbox', {
        name: /sua mensagem/i,
      })
      const typedMessage = 'some message'
      user.type(inputMessageEl, typedMessage)
      await waitFor(() => expect(inputMessageEl).toHaveValue(typedMessage))

      expect(buttonEl).not.toBeDisabled()

      user.click(buttonEl)

      expect(onSubmit).toHaveBeenCalledTimes(1)

      expect(onSubmit).toBeCalledWith({
        email: typedEmail,
        message: typedMessage,
        name: typedName,
      })

      await waitFor(() =>
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Falha ao enviar mensagem.',
        ),
      )
    })
  })
})
