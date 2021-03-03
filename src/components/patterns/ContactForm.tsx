import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ErrorAnimation } from '../animations'
import { SuccessAnimation } from '../animations/SuccessAnimation'
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
  name: string
  email: string
  message: string
}

function requestSendMessage({
  name,
  email,
  message,
}: RequestSendMessagePayload) {
  return fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
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
    name: '',
    email: '',
    message: '',
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
    handleSubmit,
    contactInfo,
    handleChange,
    submissionStatus,
    resetFormState,
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
    handleSubmit,
    contactInfo,
    handleChange,
    submissionStatus,
    resetFormState,
  } = useContactForm()

  const isFormInvalid =
    contactInfo.email.length === 0 ||
    contactInfo.message.length === 0 ||
    contactInfo.name.length === 0

  if (submissionStatus === FormStates.DONE) {
    return (
      <StyledContactForm>
        <Typography variant="headline5" onColor="surface" textAlign="center">
          Mensagem enviada com sucesso!
        </Typography>

        <Flex justifyContent="center">
          <SuccessAnimation />
        </Flex>

        <Flex justifyContent="center">
          <Button onColor="surface" type="button" onClick={onExit}>
            Fechar
          </Button>
        </Flex>
      </StyledContactForm>
    )
  }

  if (submissionStatus === FormStates.ERROR) {
    return (
      <StyledContactForm>
        <Typography variant="headline5" onColor="surface" textAlign="center">
          Falha ao enviar mensagem.
        </Typography>

        <Flex justifyContent="center">
          <ErrorAnimation />
        </Flex>

        <Flex justifyContent="center">
          <Button onColor="surface" type="button" onClick={resetFormState}>
            Voltar
          </Button>
        </Flex>
      </StyledContactForm>
    )
  }

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <Typography variant="headline5" onColor="surface" textAlign="center">
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
          onColor="surface"
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
