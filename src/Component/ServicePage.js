import React from 'react'
import AboutBanner from './AboutBanner'
import ServiceArea from './ServiceArea'
import DonersArea from './DonersArea'
import IconArea from './IconArea'

const ServicePage = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <ServiceArea/>
      <DonersArea/>
      <IconArea/>
    </>
  )
}

export default ServicePage
