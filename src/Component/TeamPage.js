import React from 'react'
import AboutBanner from './AboutBanner'
import TeamArea from './TeamArea'
import DonersArea from './DonersArea'
import IconArea from './IconArea'

const TeamPage = ({mainTitle}) => {
  return (
    <>
     <AboutBanner title={mainTitle}/> 
     <TeamArea/>
     <DonersArea/>
     <IconArea/>
    </>
  )
}

export default TeamPage
