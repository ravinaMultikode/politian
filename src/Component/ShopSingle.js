import React from 'react'
import AboutBanner from './AboutBanner'
import ShopSingleArea from './ShopSingleArea'

const ShopSingle = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <ShopSingleArea/>
    </>
  )
}

export default ShopSingle
