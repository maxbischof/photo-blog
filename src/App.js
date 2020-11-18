import WelcomeSection from './components/WelcomeSection'
import Post from './components/Post'
import { usePosts } from './hooks/contentful'

function App() {
  const posts = usePosts()

  return (
    <div className="App">
      <WelcomeSection />
      {posts?.map((post) => (
        <Post
          key={post.sys.id}
          title={post.fields.title}
          subtitle={post.fields.article}
          images={post.fields.images}
        />
      ))}
    </div>
  )
}

export default App
