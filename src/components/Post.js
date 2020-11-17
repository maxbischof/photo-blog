import React from 'react'
import styled from 'styled-components'

export default function Post(props) {
  const { titel, subtitel, url } = props
  return (
    <PostContainer>
      <Description>
        <h2>{titel}</h2>
        <p>{subtitel}</p>
      </Description>
      <Image src={url} alt={titel} />
    </PostContainer>
  )
}

const Description = styled.div`
  position: absolute;
  top: 25%;
`

const PostContainer = styled.article`
  position: relative;
`

const Image = styled.img`
  width: 100vw;
`
