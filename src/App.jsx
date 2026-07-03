import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SuperBox from './components/SuperBox'
import ShopSection from './components/ShopSection'
import HeadNew from './components/HeadNew'
import SmartPhoneSection from './components/SmartPhoneSection'
import MiddleHero from './components/MiddleHero'
import Campaign from './components/Campaign'
import TopFooter from './components/TopFooter'
import MidFooter from './components/MidFooter'
import BottomFooter from './components/BottomFooter'
import LeftPopUp from './components/LeftPopUp'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <SuperBox />
      <LeftPopUp />
      <ShopSection />
      <HeadNew title="AKILLI CİHAZLAR" />
      <SmartPhoneSection/>
      <MiddleHero/>
      <HeadNew title="Kampanyalar" />
      <Campaign/>
      <TopFooter/>
      <MidFooter/>
      <BottomFooter/>
      
    </>
  )
}

export default App
