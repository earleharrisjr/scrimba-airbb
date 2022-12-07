import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './cardData'

function App() {
  const cardElements = cardData.map(card => {
    return <Card
      image={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
    />


  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className='cards-list'>
        {cardElements}
      </section>
    </div>
  )
}

export default App
