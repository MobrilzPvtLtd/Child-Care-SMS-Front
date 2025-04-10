import React from 'react'
import Header1 from '../common/Header/Header1'
import PricingBanner from './PricingBanner'
import TestimonialsCarousel from '../home/Testimonial'
import CenterFeatures from './CenterFeature'
import Footer1 from '../common/Footer/Footer'

function Pricing_New() {
  return (
    <> 
      <PricingBanner/>
      <CenterFeatures/>
      <TestimonialsCarousel/>
      <Footer1/>
    </>
  )
}

export default Pricing_New
