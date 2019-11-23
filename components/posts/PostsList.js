import Router from 'next/router'
import Link from 'next/link'

export default props =>
  <>
    {props.posts.map((post, key) => (
      <div key={key}>
        <h3>{post.name}</h3>
        <p>{post.description}</p>
        <p>Autor: {post.author}</p>
        <p>Fecha de publicación: {post.author}</p>
        <Link href={post.page}>
          <a>View</a>
        </Link>
      </div>
    ))}
  </>