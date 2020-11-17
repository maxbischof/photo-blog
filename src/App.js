import WelcomeSection from './components/WelcomeSection'
import Post from './components/Post'

function App() {
  const posts = [
    {
      titel: 'Herbsttour nach Stade',
      subtitel:
        '70 km von Hamburg nach Stade und zurück. Mit der Linie 61 über die Elbe nach Waltershof. Nach Moorborg folgt einer schöner Abschnitt durch die Obsplantagen. Danach geht es immer am Deich entlang bis Stade.',
      url: 'https://source.unsplash.com/random/800',
    },
    {
      titel: 'Lunch Ride',
      url: 'https://source.unsplash.com/random/800',
    },
  ]

  return (
    <div className="App">
      <WelcomeSection />
      {posts.map((post) => (
        <Post {...post} key={post.titel} />
      ))}
    </div>
  )
}

export default App
