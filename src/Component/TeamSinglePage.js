import React from 'react'
import AboutBanner from './AboutBanner'
import TeamProfileArea from './TeamProfileArea'

const TeamSinglePage = ({mainTitle}) => {
  return (
    <>
    <AboutBanner title={mainTitle}/>
    <TeamProfileArea/>
      
    </>
  )
}

export default TeamSinglePage
