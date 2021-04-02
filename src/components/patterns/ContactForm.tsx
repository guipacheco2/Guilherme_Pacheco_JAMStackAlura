import React from 'react'
import styled, { css } from 'styled-components'
import { useContactForm } from '../../infra'
import { requestSendMessage } from '../../services'
import { ErrorAnimation, SuccessAnimation } from '../animations'
import { Button, Flex } from '../commons'
import { TextField } from '../forms'
import { Typography } from '../foundation'
import { SendIcon } from '../icons'

const StyledContactForm = styled.form(() => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  `
})

interface ContactFormProps {
  onExit?: () => void
  onSubmit?: (values: Record<string, string>) => void
}

export function ContactForm({
  onExit,
  onSubmit,
}: ContactFormProps): JSX.Element {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    resetFormState,
    submissionStatus,
    values,
  } = useContactForm({
    initialValues: {
      email: '',
      message: '',
      name: '',
    },
    async onSubmit(values) {
      if (onSubmit) {
        return onSubmit(values)
      }

      return requestSendMessage({
        email: values.email,
        message: values.message,
        name: values.name,
      })
    },
  })

  const isFormInvalid =
    values.email.length === 0 ||
    values.message.length === 0 ||
    values.name.length === 0

  if (submissionStatus === 'DONE') {
    return (
      <StyledContactForm>
        <Typography
          variant="headline5"
          surfaceColor="surface"
          textAlign="center"
        >
          Mensagem enviada com sucesso!
        </Typography>

        <Flex justifyContent="center">
          <SuccessAnimation />
        </Flex>

        <Flex justifyContent="center">
          <Button surfaceColor="surface" type="button" onClick={onExit}>
            Fechar
          </Button>
        </Flex>
      </StyledContactForm>
    )
  }

  if (submissionStatus === 'ERROR') {
    return (
      <StyledContactForm>
        <Typography
          variant="headline5"
          surfaceColor="surface"
          textAlign="center"
        >
          Falha ao enviar mensagem.
        </Typography>

        <Flex justifyContent="center">
          <ErrorAnimation />
        </Flex>

        <Flex justifyContent="center">
          <Button surfaceColor="surface" type="button" onClick={resetFormState}>
            Voltar
          </Button>
        </Flex>
      </StyledContactForm>
    )
  }

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <Typography variant="headline5" surfaceColor="surface" textAlign="center">
        Envie sua mensagem
      </Typography>
      <TextField
        id="contactFormNameInput"
        label="Seu nome"
        placeholder="Seu nome"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      <TextField
        id="contactFormEmailInput"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Seu email"
        placeholder="Seu email"
        name="email"
        type="email"
        value={values.email}
      />
      <TextField
        id="contactFormMessageInput"
        label="Sua mensagem"
        placeholder="Sua mensagem"
        name="message"
        multiline
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Flex justifyContent="center">
        <Button
          surfaceColor="surface"
          type="submit"
          endIcon={<SendIcon />}
          disabled={isFormInvalid || submissionStatus === 'LOADING'}
        >
          Enviar
        </Button>
      </Flex>
    </StyledContactForm>
  )
}
