import React from 'react'
import BrightwheelSection from '../brightwheel/BrightWheel'
import Header1 from '../common/Header1/Header1'
import BrightReview from '../brightreview/BrightReview'
import BrightSupport from './BrightSupport'
import RoleSelection from './RoleSeclection'
import TestimonialsCarousel from './Testimonial'
import Banner from './Banner'
import Banner2 from './Banner2'
import Footer from '../common/Footer1/Footer1'
import Footer1 from '../common/Footer1/Footer1'

function Home() {
  return (
    <> 
    <Banner/>
     <BrightReview/>
     <Banner2/>
      <BrightSupport/>
      <TestimonialsCarousel/>
     <BrightwheelSection/> 
      {/* <RoleSelection/> */}
      <Footer1/>
    </>
  )
}

export default Home
