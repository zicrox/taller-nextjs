import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default props => {

  const [post, setPost] = useState('')

  useEffect(() => {
    fetch(`/posts/${props.fileName}.md`)
      .then(response => response.text())
      .then(text => setPost(text))
  }, [])

  return (
    <>
      <ReactMarkdown source={post} />
    </>
  )
}