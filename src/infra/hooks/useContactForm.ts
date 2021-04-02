import React, { useEffect, useState } from 'react'

interface UseContactFormOptions {
  initialValues: Record<string, string>
  onSubmit: (values: Record<string, string>) => Promise<unknown>
  validateSchema?: (values: Record<string, string>) => Promise<unknown>
}

interface UseContactFormReturn {
  errors: Record<string, string>
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isValid: boolean
  resetFormState: () => void
  submissionStatus: 'IDLE' | 'LOADING' | 'DONE' | 'ERROR'
  touchedFields: Record<string, true>
  values: Record<string, string>
}

export function useContactForm({
  initialValues,
  onSubmit,
  validateSchema,
}: UseContactFormOptions): UseContactFormReturn {
  const [submissionStatus, setSubmissionStatus] = useState<
    UseContactFormReturn['submissionStatus']
  >('IDLE')
  const [values, setValues] = useState<Record<string, string>>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touchedFields, setTouchedFields] = useState<Record<string, true>>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmissionStatus('LOADING')

    onSubmit(values)
      .then(() => {
        setSubmissionStatus('DONE')
      })
      .catch(() => {
        setSubmissionStatus('ERROR')
      })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')
    const { value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')

    setTouchedFields((currentValues) => ({
      ...currentValues,
      [fieldName]: true,
    }))
  }

  function resetFormState() {
    setSubmissionStatus('IDLE')
  }

  useEffect(() => {
    let isStale = false

    if (validateSchema) {
      validateSchema(values)
        .then(() => {
          if (isStale) return

          setErrors({})
        })
        .catch((error: { inner: { message: string; path: string }[] }) => {
          if (isStale) return

          const formattedErrors = error.inner.reduce<Record<string, string>>(
            (acc, currentError) => {
              const fieldName = currentError.path
              const errorMessage = currentError.message

              acc[fieldName] = errorMessage

              return acc
            },
            {},
          )

          setErrors(formattedErrors)
        })
    }

    return () => {
      isStale = true
    }
  }, [validateSchema, values])

  const isValid =
    Object.keys(touchedFields).length > 0 && Object.keys(errors).length === 0

  return {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    resetFormState,
    submissionStatus,
    touchedFields,
    values,
  }
}
