import React from 'react'
import AboutBanner from './AboutBanner'
import Campaglan from './Campaglan'
import DonersArea from './DonersArea'
import IconArea from './IconArea'


const CampaignPage = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <Campaglan/>
      <DonersArea/>
      <IconArea/>
    </>
  )
}

export default CampaignPage
