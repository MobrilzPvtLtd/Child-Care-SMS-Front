import React from 'react'
import FlowysisSection from '../DetailUser/DetailUser'
import Header1 from '../common/Header/Header1'
import BrightReview from '../review/Review'
import BrightSupport from './BrightSupport'
import RoleSelection from './RoleSeclection'
import TestimonialsCarousel from './Testimonial'
import Banner from './Banner'
import Banner2 from './Banner2' 
import Footer from '../common/Footer/Footer'
import TabSection from './TabSection'

function Home() {
  return (
    <> 
    <Banner/>
     <BrightReview/>
     {/* <Banner2/> */}
     < TabSection />
      <BrightSupport/>
      <TestimonialsCarousel/>
     <FlowysisSection/> 
      {/* <RoleSelection/> */}
      <Footer/>
    </>
  )
}

export default Home
