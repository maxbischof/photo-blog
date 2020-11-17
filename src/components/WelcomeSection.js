import React from 'react'
import styled from 'styled-components'

export default function WelcomeSection() {
  return (
    <Section>
      <TextSection>
        <h1>HEILIGER BIMBAM</h1>
        <p>Absurdity of Life and Gravel Biking</p>
      </TextSection>
    </Section>
  )
}

const Section = styled.div`
  height: 100vh;
`

const TextSection = styled.div`
  padding: 0 0 0 15px;
  position: absolute;
  bottom: 25%;
`
