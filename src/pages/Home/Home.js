import React from 'react'
import HeroSlider from './Heroslider/HeroSlider'
import AboutSection from './AboutSection/AboutSection'
import SecviceSection from './ServiceSection/SecviceSection'
import WorksSection from './WorksSection/WorksSection'
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'
import GetTouchSection from './GetTouchSection/GetTouchSection'
import MapSection from './MapSection/MapSection'

function Home({ServiceLists, OurWorksData}) {
  return (
     <>
     <HeroSlider />
     <AboutSection />
     <SecviceSection serviceSectionLists={ServiceLists} />
     <WorksSection  ourWorkSectionList={OurWorksData}/>
     <TestimonialsSection />
     <GetTouchSection />
     <MapSection />
     
    {
      
    }
    </>
  )
}

export default Home