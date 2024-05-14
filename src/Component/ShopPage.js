import React from 'react'
import AboutBanner from './AboutBanner'
import ShopPageArea from './ShopPageArea'

const ShopPage = ({mainTitle}) => {
  return (
    <>
     <AboutBanner title={mainTitle}/> 
     <ShopPageArea/>
    </>
  )
}

export default ShopPage
