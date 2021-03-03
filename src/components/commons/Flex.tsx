import styled, { css, CSSProperties } from 'styled-components'

interface FlexProps {
  justifyContent?: CSSProperties['justifyContent']
}

export const Flex = styled.div<FlexProps>(({ justifyContent = 'initial' }) => {
  return css`
    display: flex;
    justify-content: ${justifyContent};
  `
})
