import React from 'react'
import cimg1 from '../Image/img-1.jpg'
import cimg2 from '../Image/img-2.jpg'
import cimg3 from '../Image/img-3.jpg'

const Campaglan = () => {
  return (
    <>
      <div className="campagianArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="aboutSectionTitle text-center">
                    <span>CAMPAIGN</span>
                    <h2>Our Upcoming Campaign</h2>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="campagianSingle">
                            <div className="singleImg">
                                <img src={cimg1} alt="" />
                            </div>
                            <div className="campagianContent">
                                <div className="textPop">
                                    <small>Conference</small>
                                    <h2>New York: Support for Womans April 2023</h2>
                                    <p>
                                    <i class="fa-regular fa-clock me-3"></i>
                                    July 1, 2023 @ 15:00 - 19:00
                                    </p>
                                    <p>
                                    <i class="fa-solid fa-location-dot me-3"></i>
                                    85 Preston Rd. Inglewood
                                    </p>
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"90%"}}>
                                                <div className="value">
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex justify-content-between p-0 flex-wrap'>
                                        <li>
                                            <span>Raised:</span>
                                            $2000.00
                                        </li>
                                        <li>
                                            <span>Goal:</span>
                                            $3000.00
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="campagianSingle">
                            <div className="singleImg">
                                <img src={cimg2} alt="" />
                            </div>
                            <div className="campagianContent">
                                <div className="textPop">
                                    <small>Entertainment</small>
                                    <h2>The Best Strategically Build Your Business Earning</h2>
                                    <p>
                                    <i class="fa-regular fa-clock me-3"></i>
                                    July 2, 2023 @ 10:00 - 15:00
                                    </p>
                                    <p>
                                    <i class="fa-solid fa-location-dot me-3"></i>
                                    85 Preston Rd. Inglewood
                                    </p>
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"80%"}}>
                                                <div className="value">
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex justify-content-between p-0  flex-wrap'>
                                        <li>
                                            <span>Raised:</span>
                                            $3000.00
                                        </li>
                                        <li>
                                            <span>Goal:</span>
                                            $4000.00
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="campagianSingle">
                            <div className="singleImg">
                                <img src={cimg3} alt="" />
                            </div>
                            <div className="campagianContent">
                                <div className="textPop">
                                    <small>Conference</small>
                                    <h2>Political Commitment for Your Deportation Issue</h2>
                                    <p>
                                    <i class="fa-regular fa-clock me-3"></i>
                                    July 5, 2023 @ 13:00 - 16:00
                                    </p>
                                    <p>
                                    <i class="fa-solid fa-location-dot me-3"></i>
                                    85 Preston Rd. Inglewood
                                    </p>
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"95%"}}>
                                                <div className="value">
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex justify-content-between p-0  flex-wrap'>
                                        <li>
                                            <span>Raised:</span>
                                            $4000.00
                                        </li>
                                        <li>
                                            <span>Goal:</span>
                                            $5000.00
                                        </li>
                                    </ul>
                                </div>
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

export default Campaglan
