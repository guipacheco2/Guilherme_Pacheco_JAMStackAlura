import { Lottie } from '@crello/react-lottie'
import React from 'react'
import successAnimation from './successAnimation.json'

export function SuccessAnimation(): JSX.Element {
  return (
    <Lottie
      width="150px"
      height="150px"
      config={{ animationData: successAnimation, loop: false, autoplay: true }}
    />
  )
}
