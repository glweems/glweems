import React, { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { GhostSVG } from './Icons'

type LoadingSpinnerProps = {}

const LoadingSpinner: FC<LoadingSpinnerProps> = (props) => {
  return (
    <Wrapper>
      <GhostSVG />
    </Wrapper>
  )
}

const slide = keyframes`
 0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-180deg);
  }
`

const Wrapper = styled.div`
  animation: ${slide} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
`

LoadingSpinner.displayName = 'LoadingSpinner'
export default LoadingSpinner
