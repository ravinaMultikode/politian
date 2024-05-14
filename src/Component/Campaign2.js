import React from 'react'
import AboutBanner from './AboutBanner'
import CampaignArea2 from './CampaignArea2'
import DonersArea from './DonersArea'
import IconArea from './IconArea'

const Campaign2 = ({mainTitle}) => {  
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <CampaignArea2/>
      <DonersArea/>
      <IconArea/>
    </>
  )
}

export default Campaign2
