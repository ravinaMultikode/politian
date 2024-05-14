import React from 'react'
import AboutBanner from './AboutBanner'
import Testmonial from './Testmonial'
import DonersArea from './DonersArea'
import IconArea from './IconArea'

const TestmonialPage = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <Testmonial/>
      <DonersArea/>
      <IconArea/>
    </>
  )
}

export default TestmonialPage
