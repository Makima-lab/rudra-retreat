import Hero from './components/Hero'
import Corridor from './components/Corridor'
import HowItWorks from './components/HowItWorks'
import Schedule from './components/Schedule'
import Place from './components/Place'
import Participation from './components/Participation'
import Footer from './components/Footer'
import { showSchedule } from './content'

function App() {
  return (
    <div className="bg-night">
      <Hero />
      <Corridor />
      <HowItWorks />
      {showSchedule && <Schedule />}
      <Place />
      <Participation />
      <Footer />
    </div>
  )
}

export default App
