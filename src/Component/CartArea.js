import React from 'react'
import { Link } from 'react-router-dom'

const CartArea = () => {
  return (
    <>
      <div className="cartArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="singlePageTitle">
                        <h3>Your Cart</h3>
                        <p>There are 0 products in this list</p>
                    </div>
                </div>
            </div>
           <div className="cartWrap">
           <div className="row">
                <div className="col-lg-8">
                    <form action="">
                        <div className="cartItem">
                            <table>
                                <tr>
                                    <th className='w-50'>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>SubTotal</th>
                                    <th>Remove</th>
                                </tr>
                            </table>
                        </div>
                        <div className="cartAction mt-4 d-flex justify-content-between flex-wrap">
                            <div className="applyArea d-flex">
                                <input type="text" placeholder='Enter your coupon' />
                                <div className="themeBtn ms-4">
                                    <Link><button className='ps-5 pe-5'>APPLY</button></Link>
                                </div>
                            </div>
                            <div className="themeBtn ms-4">
                                    <Link><button className='ps-5 pe-5'> Update Cart</button></Link>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="cartTotalWrap">
                        <h4>Cart Totals</h4>
                        <div className="subTotal d-flex justify-content-between">
                            <h5>Subtotal</h5>
                            <span className='fw-bold fs-5'>$0</span>
                        </div>
                        <div className="shippingOption mt-4 d-flex">
                            <span>Shipping</span>
                            <ul className='mt-2'>
                                <li>
                                    <input type="radio" name='color' value={30} checked />
                                    <label htmlFor="">Free Shipping</label>
                                </li>
                                <li>
                                    <input type="radio" name='color' value={30}  />
                                    <label htmlFor="">Local Pickup: $10.00</label>
                                </li>
                                <li>
                                    <span>Shipping options will be updated during checkout.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="total d-flex justify-content-between">
                            <h5>Total</h5>
                            <span className='fw-bold fs-5'>$0</span>
                        </div>
                        <div className="themeBtn mt-4">
                            <Link><button className='ps-5 pe-5'>Proceed To CheckOut</button></Link>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default CartArea
