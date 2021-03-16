import { Lottie } from '@crello/react-lottie'
import React from 'react'
import notFoundAnimation from './notFoundAnimation.json'

export function NotFoundAnimation(): JSX.Element {
  return (
    <Lottie
      width="300px"
      height="300px"
      config={{ animationData: notFoundAnimation, loop: true, autoplay: true }}
    />
  )
}
