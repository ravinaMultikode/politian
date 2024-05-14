import React from 'react'
import AboutBanner from './AboutBanner'
import CampaignSingleArea from './CampaignSingleArea'

const CampaignSinglePage = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <CampaignSingleArea/>
    </>
  )
}

export default CampaignSinglePage
