import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { GridContainer } from '../foundation'
import { CloseIcon } from '../icons'
import { Flex } from './Flex'
import { IconButton } from './IconButton'

const StyledModalInner = styled.div(({ theme }) => {
  return css`
    box-shadow: 0px 1px 25px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    padding: 16px 16px 48px 16px;
    background-color: ${theme.schema === 'light'
      ? theme.colors.surface.main
      : theme.colors.primary.dark};
  `
})

const StyledMotion = styled(motion.div)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`

interface StyledModalProps {
  isOpen: boolean
}

const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.5);
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
  children: React.ReactNode
  onClose: () => void
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

export function Modal({ children, isOpen, onClose }: ModalProps): JSX.Element {
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
      <StyledMotion
        onClick={handleClickOutsideInnerElement}
        variants={{ closed: { y: '100%' }, open: { y: 0 } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
      >
        <GridContainer maxWidth="sm">
          <StyledModalInner ref={innerElementRef}>
            <Flex justifyContent="flex-end">
              <IconButton onColor="surface" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Flex>

            {isOpen && children}
          </StyledModalInner>
        </GridContainer>
      </StyledMotion>
    </StyledModal>
  )
}
