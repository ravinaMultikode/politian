import React from 'react'
import AboutBanner from './AboutBanner'
import About from './About'
import ServiceArea from './ServiceArea'
import Campaglan from './Campaglan'
import Testmonial from './Testmonial'
import FunFactArea from './FunFactArea'
import TeamArea from './TeamArea'
import DonersArea from './DonersArea'
import IconArea from './IconArea'

const AboutPage = ({mainTitle}) => {
  return (
    <>
      <AboutBanner  title={mainTitle}/>
      <About/>
      <ServiceArea/>
      <Campaglan/>
      <Testmonial/>
      <FunFactArea/>
      <TeamArea/>
      <DonersArea/>
      <IconArea/>
    </>
  )
}

export default AboutPage
