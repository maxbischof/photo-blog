import React, { useState } from 'react'
import styled from 'styled-components'

export default function Post({ title, images, subtitle }) {
  const [showDescription, setShowDescription] = useState(false)

  function onTouch() {
    setShowDescription(!showDescription)
  }

  return (
    <PostContainer onTouchStart={onTouch}>
      <Description isTransperent={showDescription}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Description>
      <Image src={images[0].fields.file.url} alt={images[0].fields.title} />
    </PostContainer>
  )
}

const Description = styled.div`
  ${(props) => !props.isTransperent && 'opacity: 0%;'}
  position: absolute;
  bottom: 0;
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
  display: block;
`
