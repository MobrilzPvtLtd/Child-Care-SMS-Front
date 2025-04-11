import React from 'react'
import ResourcesBanner from './ResourceBanner'
import Header1 from '../common/Header/Header1'
import Footer1 from '../common/Footer/Footer'
import ContactForm from './ContactForm'
import TrendingContent from './TrendingContent'
import ResourceExplorer from './ResourceExplorer'

 function Resource() {
  return (
    <>
    
     
    <ResourcesBanner/>
    <TrendingContent/>
    < ResourceExplorer />
    <ContactForm/>
    <Footer1/>
    </>
  )
}
export default Resource