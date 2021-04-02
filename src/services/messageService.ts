interface RequestSendMessagePayload {
  email: string
  message: string
  name: string
}

export interface RequestSendMessageContext {
  fetchModule?: typeof fetch
}

export function requestSendMessage(
  { email, message, name }: RequestSendMessagePayload,
  { fetchModule = fetch }: RequestSendMessageContext = {},
): Promise<unknown> {
  return fetchModule(
    'https://contact-form-api-jamstack.herokuapp.com/message',
    {
      body: JSON.stringify({ email, message, name }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  ).then((respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      return respostaDoServidor.json()
    }

    throw new Error(respostaDoServidor.statusText)
  })
}
