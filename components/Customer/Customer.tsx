import React from 'react'
import CustomerBanner from './CustomerBanner'
import Header1 from '../common/Header/Header1'
import Header2 from '../common/Header/header2'
import CustomerCard from './CustomerCard'
import Footer from '../common/Footer/Footer'

function Customer() {
  return (
    <>
    <Header2/>
      <CustomerBanner/>
      <CustomerCard/>
      <Footer/>
    </>
  )
}

export default Customer
