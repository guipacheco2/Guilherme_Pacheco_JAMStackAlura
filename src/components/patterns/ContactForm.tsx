import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../commons'
import { TextField } from '../forms'
import { Typography } from '../foundation'
import { SendIcon } from '../icons'

const StyledContactForm = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  `
})

export function ContactForm(): JSX.Element {
  return (
    <StyledContactForm>
      <Typography variant="headline5" onColor="surface" textAlign="center">
        Envie sua mensagem
      </Typography>
      <TextField
        id="contactFormNameInput"
        label="Seu nome"
        placeholder="Seu nome"
        name="name"
        value={'userInfo.name'}
        onChange={() => false}
      />
      <TextField
        id="contactFormEmailInput"
        label="Seu email"
        placeholder="Seu email"
        name="email"
        value={'userInfo.name'}
        onChange={() => false}
      />
      <TextField
        id="contactFormMessageInput"
        label="Sua mensagem"
        placeholder="Sua mensagem"
        name="message"
        multiline
        value={'userInfo.name'}
        onChange={() => false}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onColor="surface" onClick={console.log} endIcon={<SendIcon />}>
          Enviar
        </Button>
      </div>
    </StyledContactForm>
  )
}
