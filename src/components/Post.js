import React, { useState } from 'react'
import styled from 'styled-components'

export default function Post(props) {
  const { titel, subtitel, url } = props

  const [showDescription, setShowDescription] = useState(false)

  function onTouch() {
    console.log('click')
    setShowDescription(!showDescription)
  }

  return (
    <PostContainer onTouchStart={onTouch}>
      <Description isTransperent={showDescription}>
        <h2>{titel}</h2>
        <p>{subtitel}</p>
      </Description>
      <Image src={url} alt={titel} />
    </PostContainer>
  )
}

const Description = styled.div`
  ${(props) => !props.isTransperent && 'opacity: 0%;'}
  position: absolute;
  bottom: 0%;
  color: white;
  transition: all 0.5s;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;

  p,
  h2 {
    padding: 0 0 0 15px;
  }
`

const PostContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100vw;
`
