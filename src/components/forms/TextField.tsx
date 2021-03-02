import React from 'react'
import styled from 'styled-components'
import { Typography, TypographyPropsGeneric } from '../foundation'

const StyledTextField = styled.div`
  margin: 8px 0;
`

const StyledInput = styled(Typography)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  padding: 12px 16px;
  margin: 4px 0;
  outline: 0;
` as React.ComponentType<TypographyPropsGeneric<'input'>>

const StyledTextArea = styled(Typography)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  padding: 12px 16px;
  margin: 4px 0;
  outline: 0;
  resize: none;
` as React.ComponentType<TypographyPropsGeneric<'textarea'>>

interface TextFieldProps {
  id: string
  label: string
  placeholder: string
  name: string
  multiline?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  value: string
}

export function TextField({
  id,
  label,
  placeholder,
  name,
  multiline,
  onChange,
  value,
}: TextFieldProps): JSX.Element {
  return (
    <StyledTextField>
      <Typography
        as="label"
        htmlFor={id}
        variant="bodyText1"
        onColor="background"
      >
        {label}
      </Typography>

      {multiline ? (
        <StyledTextArea
          as="textarea"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          variant="bodyText1"
          id={id}
          onColor="primary"
          rows={3}
        />
      ) : (
        <StyledInput
          as="input"
          type="text"
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          variant="bodyText1"
          onColor="primary"
        />
      )}
    </StyledTextField>
  )
}
