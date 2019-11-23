import PostsList from '../components/posts/PostsList'
import posts from '../components/posts/posts'

const Index = props =>
  <>
    <h1>Bienvenidos a mi blog!</h1>
    <PostsList posts={posts} />
  </>

export default Index