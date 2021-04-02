import { act, renderHook } from '@testing-library/react-hooks'
import { useContactForm } from './useContactForm'

describe('useContactForm()', () => {
  describe('when user types', () => {
    test('change the value', async () => {
      const initialValues = { nome: 'Alice' }

      const validateSchema = jest.fn().mockResolvedValue(true)

      const { result, waitForNextUpdate } = renderHook(() =>
        useContactForm({
          initialValues,
          onSubmit: () => Promise.resolve(),
          validateSchema,
        }),
      )

      expect(result.current.values).toEqual(initialValues)

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Bob',
        },
      }

      act(() => {
        result.current.handleChange(
          (event as unknown) as React.ChangeEvent<HTMLInputElement>,
        )
      })

      await waitForNextUpdate()

      expect(result.current.values).toEqual({
        [event.target.getAttribute()]: event.target.value,
      })
    })
  })
})
