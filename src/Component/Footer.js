import React from 'react'
import footerlogo from  '../Image/logo.svg'

const Footer = () => {
  return (
    <>
      <div className="footerArea">
        <div className="container">
            <div className="row pb-5">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget">
                        <div className="logoBar">
                            <img src={footerlogo} alt="" />
                        </div>
                        <ul className="info mt-4 p-0">
                            <li>Phone: 111-222-333-2155</li>
                            <li>Email: contact@mail.com</li>
                            <li>Address: 22/1 Melborane city austria, human resoerch, Canada</li>
                        </ul>
                        <ul className="social d-flex p-0 pt-2">
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-pinterest-p"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="linkWidget">
                        <div className="widgetTitle mb-4">
                            <h3>Quick Links</h3>
                        </div>
                        <ul className='p-0 ps-3'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Mission & Vision</li>
                            <li>Team</li>
                            <li>Campaign</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="linkWidget">
                        <div className="widgetTitle mb-4">
                            <h3>Mission & Vision</h3>
                        </div>
                        <ul className='p-0 ps-3'>
                            <li>Economic Establishment</li>
                            <li>Jobs and Unemployment</li>
                            <li>Business and Industry</li>
                            <li>Roads and Transport Service</li>
                            <li>Jobs and Unemployment</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="newsWidget">
                    <div className="widgetTitle mb-4">
                            <h3>Subscribe Newsletter</h3>
                        </div>
                        <p>Get timely updates ! We only send interesting and relevant emails.</p>
                        <form action="" className='pt-3'>
                            <input type="text"  placeholder='Your Email Address...' className='formControl'/>
                            <div className='themeBtn pt-4'>
                                <button>Subscribe now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="lowerFooter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <span>© 2023 Politian. All rights reserved.</span>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ul className='d-flex justify-content-end p-0' style={{gap:"20px"}}>
                            <li>Privace & Policy</li>
                            <li>Terms</li>
                            <li>About us</li>
                            <li>FAQ</li>
                            <li>Volunteer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
