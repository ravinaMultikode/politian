import React from 'react'
import AboutBanner from './AboutBanner'
import DonationPageArea from './DonationPageArea'

const Donate = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <DonationPageArea/>
    </>
  )
}

export default Donate
