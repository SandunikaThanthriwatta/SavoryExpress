
import About from '../components/About'
import HeroSection from '../components/HeroSection'
import Menu from '../components/Menu'
import { Qualities } from '../components/Qualities'
import Reservation from '../components/Reservation'
import Team from '../components/Team'
import WhoAreWe from '../components/WhoAreWe'

const Home = () => {
  return (
    <>
    
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    </>
  )
}

export default Home