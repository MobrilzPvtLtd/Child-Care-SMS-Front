import React from 'react'
import ShowFeature from './ShowFeature'
import ParentForm from './ParentForm'
import ParentCard from './ParentCard'
import Header2 from '../common/Header/header2'
import Banner from '../home/Banner'
import Footer from '../common/Footer/Footer'

const Parent = () => {
  return (
    <div>
        {/* <Header2/> */}
        
      <ShowFeature/>
      <ParentForm/>
      <ParentCard/>
      <Footer/>
    </div>
  )
}

export default Parent
