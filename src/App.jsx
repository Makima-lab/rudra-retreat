import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Corridor from './components/Corridor'
import HowItWorks from './components/HowItWorks'
import RetreatDays from './components/RetreatDays'
import Schedule from './components/Schedule'
import Place from './components/Place'
import Stay from './components/Stay'
import Participation from './components/Participation'
import Footer from './components/Footer'
import { showSchedule } from './content'

function App() {
  return (
    <div className="bg-night">
      <ScrollProgress />
      <Hero />
      <Corridor />
      <HowItWorks />
      <RetreatDays />
      {showSchedule && <Schedule />}
      <Place />
      <Stay />
      <Participation />
      <Footer />
    </div>
  )
}

export default App
