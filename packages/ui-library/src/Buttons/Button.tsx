import { Button as ChakraButton, ChakraProps } from '@chakra-ui/react'
import React from 'react'

import { ChakraProviderWrapper } from '../ChakraProviderWrapper'

interface Button extends ChakraProps {
  title: string
}
export function Button(props: Button): JSX.Element {
  return (
    <ChakraProviderWrapper>
      <ChakraButton {...props}>{props.title}</ChakraButton>
    </ChakraProviderWrapper>
  )
}
