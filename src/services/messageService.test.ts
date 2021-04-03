import { requestSendMessage, RequestSendMessageContext } from './messageService'

describe('messageService', () => {
  describe('requestSendMessage()', () => {
    describe('when user try to send message', () => {
      const requestData = {
        email: 'some email',
        message: 'some message',
        name: 'some name',
      }

      describe('and succeed', () => {
        test('send message', async () => {
          const ctx: RequestSendMessageContext = {
            fetchModule: (jest.fn(async function () {
              return {
                async json() {
                  return
                },
                ok: true,
              }
            }) as unknown) as RequestSendMessageContext['fetchModule'],
          }

          await requestSendMessage(requestData, ctx)

          expect(ctx.fetchModule).toBeCalledTimes(1)

          expect(ctx.fetchModule).toHaveBeenCalledWith(
            'https://contact-form-api-jamstack.herokuapp.com/message',
            {
              body: JSON.stringify(requestData),
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
            },
          )
        })
      })

      describe('and it fails', () => {
        test('throws an error', async () => {
          const statusText = 'Internal server error'

          const ctx: RequestSendMessageContext = {
            fetchModule: (jest.fn(async function () {
              return {
                async json() {
                  return
                },
                ok: false,
                statusText,
              }
            }) as unknown) as RequestSendMessageContext['fetchModule'],
          }

          await expect(requestSendMessage(requestData, ctx)).rejects.toThrow(
            statusText,
          )
        })
      })
    })
  })
})
