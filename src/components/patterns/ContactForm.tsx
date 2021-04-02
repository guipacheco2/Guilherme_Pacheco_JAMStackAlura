import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ErrorAnimation, SuccessAnimation } from '../animations'
import { Button, Flex } from '../commons'
import { TextField } from '../forms'
import { Typography } from '../foundation'
import { SendIcon } from '../icons'

enum FormStates {
  IDLE,
  LOADING,
  DONE,
  ERROR,
}

interface RequestSendMessagePayload {
  email: string
  message: string
  name: string
}

function requestSendMessage({
  email,
  message,
  name,
}: RequestSendMessagePayload) {
  return fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
    body: JSON.stringify({ email, message, name }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      return respostaDoServidor.json()
    }

    throw new Error(respostaDoServidor.statusText)
  })
}

function useContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<FormStates>(
    FormStates.IDLE,
  )

  const [contactInfo, setContactInfo] = useState({
    email: '',
    message: '',
    name: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')

    setContactInfo({ ...contactInfo, [fieldName]: event.target.value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmissionStatus(FormStates.LOADING)

    requestSendMessage(contactInfo)
      .then(() => {
        setSubmissionStatus(FormStates.DONE)
      })
      .catch(() => {
        setSubmissionStatus(FormStates.ERROR)
      })
  }

  function resetFormState() {
    setSubmissionStatus(FormStates.IDLE)
  }

  return {
    contactInfo,
    handleChange,
    handleSubmit,
    resetFormState,
    submissionStatus,
  }
}

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
}

export function ContactForm({ onExit }: ContactFormProps): JSX.Element {
  const {
    contactInfo,
    handleChange,
    handleSubmit,
    resetFormState,
    submissionStatus,
  } = useContactForm()

  const isFormInvalid =
    contactInfo.email.length === 0 ||
    contactInfo.message.length === 0 ||
    contactInfo.name.length === 0

  if (submissionStatus === FormStates.DONE) {
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

  if (submissionStatus === FormStates.ERROR) {
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
        value={contactInfo.name}
      />
      <TextField
        id="contactFormEmailInput"
        onChange={handleChange}
        label="Seu email"
        placeholder="Seu email"
        name="email"
        type="email"
        value={contactInfo.email}
      />
      <TextField
        id="contactFormMessageInput"
        label="Sua mensagem"
        placeholder="Sua mensagem"
        name="message"
        multiline
        value={contactInfo.message}
        onChange={handleChange}
      />
      <Flex justifyContent="center">
        <Button
          surfaceColor="surface"
          type="submit"
          endIcon={<SendIcon />}
          disabled={isFormInvalid || submissionStatus === FormStates.LOADING}
        >
          Enviar
        </Button>
      </Flex>
    </StyledContactForm>
  )
}
