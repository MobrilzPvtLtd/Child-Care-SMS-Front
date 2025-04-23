import React from 'react'
import ShowFeature from './ShowFeature'
import ParentForm from './ParentForm'
import ParentCard from './ParentCard'
import Header2 from '../common/Header/header2'
import Banner from './Banner'
import Footer from '../common/Footer/Footer'
// import SubHeader from '../common/SubHeader'

const Parent = () => {
  return (
    <>
        {/* <Header2/> */}
        <Banner/>
        {/* <SubHeader activeItem="invite" /> */}
      <ShowFeature/>
      <ParentForm/>
      <ParentCard/>
      <Footer/>
    </>
  )
}

export default Parent
