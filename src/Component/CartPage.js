import React from 'react'
import AboutBanner from './AboutBanner'
import CartArea from './CartArea'

const CartPage = ({mainTitle}) => {
  return (
    <>
      <AboutBanner title={mainTitle}/>
      <CartArea/>
    </>
  )
}

export default CartPage
