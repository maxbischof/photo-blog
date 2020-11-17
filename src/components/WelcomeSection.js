import React from 'react'
import styled from 'styled-components'

export default function WelcomeSection() {
  return (
    <Section>
      <Headline>Heiliger BimBam</Headline>
      <p>Absurdity of Life and Gravel Biking</p>
    </Section>
  )
}

const Section = styled.div`
  height: 70vh;
`

const Headline = styled.h1`
  color: var(--text);
`
