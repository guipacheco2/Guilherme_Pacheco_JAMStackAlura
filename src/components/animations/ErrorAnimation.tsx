import { Lottie } from '@crello/react-lottie'
import React from 'react'
import errorAnimation from './errorAnimation.json'

export function ErrorAnimation(): JSX.Element {
  return (
    <Lottie
      width="150px"
      height="150px"
      config={{ animationData: errorAnimation, autoplay: true, loop: false }}
    />
  )
}
