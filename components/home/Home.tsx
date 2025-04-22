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
import OnboardingForm from '../common/OnboardingForm'

function Home() {
  const customHeadings = {
    step1: "First, tell us about yourself.",
    step2: "What's your enrollment capacity?",
    step3: "How long has your program been in business?",
    step4: "What's your email address?",
    step5: "Lastly, what's your contact information?",
  };
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
      <div className="w-full flex flex-col items-center pt-6 text-center ">
        <h1 className="text-5xl font-bold text-center leading-12  max-w-4xl">
        Tour the easiest all-in-one childcare and preschool app
        </h1>
      </div>
      <OnboardingForm showPurposeStep={false} headings={customHeadings} />
      <Footer/>
    </>
  )
}

export default Home
