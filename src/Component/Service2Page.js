import React from 'react'
import AboutBanner from './AboutBanner'
import ServiceSingleArea from './ServiceSingleArea'

const Service2Page = ({mainTitle}) => {
  return (
    <>
      <AboutBanner  title={mainTitle}/>
      <ServiceSingleArea/>
    </>
  )
}

export default Service2Page
