import React from 'react'
import { render, screen } from '../../infra'
import { Modal } from './Modal'

describe('<Modal />', () => {
  describe('when visibility', () => {
    describe('is closed', () => {
      test('not render content', () => {
        const { baseElement } = render(
          <Modal isOpen={false} onClose={jest.fn()}>
            <div data-testid="content" />
          </Modal>,
        )

        expect(() => screen.getByTestId('content')).toThrow()

        expect(baseElement).toMatchSnapshot()
      })
    })

    describe('is open', () => {
      it('render content', async () => {
        const { baseElement } = render(
          <Modal isOpen={true} onClose={jest.fn()}>
            <div data-testid="content" />
          </Modal>,
        )

        expect(screen.getByTestId('content')).toBeVisible()

        expect(baseElement).toMatchSnapshot()
      })

      it('closes on close button click', async () => {
        const onClose = jest.fn()

        render(
          <Modal isOpen={true} onClose={onClose}>
            <div data-testid="content" />
          </Modal>,
        )

        screen.getByRole('button').click()

        expect(onClose).toBeCalledTimes(1)
      })

      it('closes on overlay element click', async () => {
        const onClose = jest.fn()

        render(
          <Modal isOpen={true} onClose={onClose}>
            <div data-testid="content" />
          </Modal>,
        )

        screen.getByTestId('modal-overlay').click()

        expect(onClose).toBeCalledTimes(1)
      })

      it('ignore close handler on inside element click', async () => {
        const onClose = jest.fn()

        render(
          <Modal isOpen={true} onClose={onClose}>
            <div data-testid="content" />
          </Modal>,
        )

        screen.getByTestId('content').click()

        expect(onClose).toBeCalledTimes(0)
      })
    })
  })
})
