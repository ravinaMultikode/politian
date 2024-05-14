import React from 'react'
import pay1 from '../Image/d-1.png'
import pay2 from '../Image/d-2.png'
import pay3 from '../Image/d-3.png'
import pay4 from '../Image/d-4.png'
import { Link } from 'react-router-dom'

const DonationPageArea = () => {
  return (
    <>
      <div className="donationPageArea">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="donateTitle text-center">
                        <h2>Make A Donation</h2>
                    </div>
                    <div className="donations">
                        <form action="">
                            <div className="donatioAmount">
                            <h4 className='mb-4'>Your Donation</h4>
                            <input type="text" placeholder='Enter Donation Amount'/>
                            </div>
                            <div className="donationDetails">
                            <h4 className='mb-4'>Details</h4>
                           <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder='First Name' />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder='Last Name' />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder='Email' />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder='Address' />
                            </div>
                            <div className="col-lg-12">
                              <textarea name="" id="" placeholder='Message'></textarea>
                            </div>
                           </div>
                            </div>
                            <div className="donationPayment">
                              <h4 className='mb-4'>Choose Your Payment Method</h4>
                              <div className="wpoArea">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="paymentSelect">
                                    <ul className='d-flex'>
                                      <li>
                                      <input type="radio" />
                                      <label htmlFor="">Payment By Card</label>
                                      </li>
                                      <li className='ms-lg-3'>
                                      <input type="radio" />
                                      <label htmlFor="">Offline Donation</label>
                                      </li>
                                    </ul>
                                    </div>
                                    <div className="paymentName">
                                      <ul className='d-flex'>
                                        <li>
                                          <img src={pay1} alt="" />
                                        </li>
                                        <li>
                                        
                                          <img src={pay2} alt="" />
                                        </li>
                                        <li>
                                          <img src={pay3} alt="" />
                                        </li>
                                        <li>
                                          <img src={pay4} alt="" />
                                        </li>
                                      </ul>
                                      <div className="contactForm">
                                        <div className="row">
                                          <div className="col-lg-6 col-mg-6">
                                          <label htmlFor="">Card holder Name</label>
                                            <input type="text" />
                                          </div>
                                          <div className="col-lg-6 col-mg-6">
                                          <label htmlFor="">Card Number</label>
                                            <input type="text" />
                                          </div>
                                          <div className="col-lg-6 col-mg-6">
                                          <label htmlFor="">CVV</label>
                                            <input type="text" />
                                          </div>
                                          <div className="col-lg-6 col-mg-6">
                                          <label htmlFor="">Expire Date</label>
                                            <input type="text" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="themeBtn text-center">
                              <Link>
                                <button className='ps-4 pe-4'>DONATE NOW</button>
                              </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DonationPageArea
