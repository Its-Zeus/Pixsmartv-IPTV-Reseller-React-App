import { useState } from 'react'
import './App.css'
import Navbar  from './components/Navbar/Navbar'
import MainArea from './components/MainArea/MainArea'
import LogoCarousel from './components/LogoCarousel/LogoCarousel'
import MoviesCarousel from './components/MoviesCrousel/MoviesCarousel'
import OurServices from './components/OurServices/OurServices'
import Plans from './components/Plans/Plans'
import DontMiss from './components/DontMiss/DontMiss'
import Reviews from './components/Reviews/Reviews'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Channelspopup from './components/Channels/Channelspopup'
import Guide from './components/Guide/Guide'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainArea />
      <LogoCarousel/>
      <MoviesCarousel/>
      <OurServices/>
      <Plans/>
      <DontMiss/>
      <Reviews/>
      <FAQ/>
      <Footer/>
      <Channelspopup/>
      <Guide/>

    </>
  )
}

export default App
