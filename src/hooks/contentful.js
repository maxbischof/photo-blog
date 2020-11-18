import { useEffect, useState } from 'react'
const contentful = require('contentful')

export function usePosts() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const contentfulClient = contentful.createClient({
      accessToken: 'KUs4BdS0XI7WWHxLf2WGnTtpBur9RXdS3_LHX0QhFDE',
      space: 'hvslw0rak0dv',
    })

    contentfulClient
      .getEntries({
        content_type: 'post',
      })
      .then((entries) => {
        setPosts(entries.items)
      })
  }, [])

  return posts
}
