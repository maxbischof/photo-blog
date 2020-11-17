import React from 'react'
import styled from 'styled-components'

export default function WelcomeSection() {
  return (
    <>
      <Headline>Heiliger BimBam</Headline>
      <p>Absurdity of Life and Gravel Biking</p>
    </>
  )
}

const Headline = styled.h1`
  color: var(--text);
`
