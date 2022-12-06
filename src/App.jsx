import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Card
        image="katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="From $136"

      />
    </div>
  )
}

export default App
