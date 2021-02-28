import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { IconButton } from './IconButton'

interface StyledModalProps {
  isOpen: boolean
}

const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  transition: 0.3s;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `
  }}
`

interface ModalProps extends StyledModalProps {
  onClose: () => void
  children: React.ReactNode
}

const StyledLockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

type UseModalOpenHandler = () => void
type UseModalCloseHandler = () => void

export function useModal(
  initialIsOpen = false,
): [boolean, UseModalOpenHandler, UseModalCloseHandler] {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)

  return [isOpen, () => setIsOpen(true), () => setIsOpen(false)]
}

export function Modal({ isOpen, onClose, children }: ModalProps): JSX.Element {
  const innerElementRef = useRef<HTMLDivElement>(null)

  function handleClickOutsideInnerElement(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    if (!innerElementRef.current) throw new Error('Unable to use ref.')

    const isSafeArea = innerElementRef.current.contains(
      event.target as HTMLElement,
    )

    if (!isSafeArea) {
      onClose()
    }
  }

  return (
    <StyledModal isOpen={isOpen}>
      {isOpen && <StyledLockScroll />}
      <motion.div
        onClick={handleClickOutsideInnerElement}
        variants={{ open: { x: 0 }, closed: { x: '100%' } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flex: 1 }}
      >
        <div ref={innerElementRef}>
          <div
            style={{
              boxShadow: '-10px 0px 24px rgba(7, 12, 14, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: 'primary',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={onClose}>x</IconButton>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                padding: '16px', // md: 85px
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </StyledModal>
  )
}
