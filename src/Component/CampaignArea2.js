import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import camp1 from '../Image/img-1.jpg'
import camp2 from '../Image/img-2.jpg'
import camp3 from '../Image/img-3.jpg'
import left from '../Image/shape.-1.png'

const CampaignArea2 = () => {
  return (
    <>
      <div className="campaignAreaSection">
        <div className="container">
            <div className="row">
            <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} navText={['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']}>
                <div class='item d-flex flex-wrap'>
                   <div className="col-lg-6">
                    <div className="campaignImg">
                        <img src={camp1} alt="" />
                    </div>
                   </div>
                   <div className="col-lg-6">
                    <div className="wpoContent">
                        <div className="contentTop">
                            <small>Conference</small>
                            <h2 className='mt-2'>New York: Support for Womans April 2023</h2>
                            <p><i class="fa-regular fa-clock pe-3"></i>
                                July 1, 2023 @ 15:00 - 19:00
                            </p>
                            <p><i class="fa-solid fa-location-dot pe-3"></i>
                                85 Preston Rd. Inglewood
                            </p>
                            <p className='pt-3'>The modern conservative is engaged in one of man oldest exercises in moral philosophy and that is, the search for a superior moral for justification for selfishness. If nominated, We will not run.</p>
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
                <div class='item d-flex flex-wrap'>
                   <div className="col-lg-6">
                    <div className="campaignImg">
                        <img src={camp2} alt="" />
                    </div>
                   </div>
                   <div className="col-lg-6">
                    <div className="wpoContent">
                        <div className="contentTop">
                            <small>Entertainment</small>
                            <h2 className='mt-2'>The Best Strategically Build Your Business Earning</h2>
                            <p><i class="fa-regular fa-clock pe-3"></i>
                                July 2, 2023 @ 10:00 - 15:00
                            </p>
                            <p><i class="fa-solid fa-location-dot pe-3"></i>
                                85 Preston Rd. Inglewood
                            </p>
                            <p className='pt-3'>The modern conservative is engaged in one of man oldest exercises in moral philosophy and that is, the search for a superior moral for justification for selfishness. If nominated, We will not run.</p>
                            <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"80%"}}>
                                                <div className="value">
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex justify-content-between p-0 flex-wrap'>
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
                <div class='item d-flex flex-wrap'>
                   <div className="col-lg-6">
                    <div className="campaignImg">
                        <img src={camp3} alt="" />
                    </div>
                   </div>
                   <div className="col-lg-6">
                    <div className="wpoContent">
                        <div className="contentTop">
                            <small>Conference</small>
                            <h2 className='mt-2'>Political Commitment for Your Deportation Issue</h2>
                            <p><i class="fa-regular fa-clock pe-3"></i>
                                July 5, 2023 @ 13:00 - 16:00
                            </p>
                            <p><i class="fa-solid fa-location-dot pe-3"></i>
                                85 Preston Rd. Inglewood
                            </p>
                            <p className='pt-3'>The modern conservative is engaged in one of man oldest exercises in moral philosophy and that is, the search for a superior moral for justification for selfishness. If nominated, We will not run.</p>
                            <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"95%"}}>
                                                <div className="value">
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex justify-content-between p-0 flex-wrap'>
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
            </OwlCarousel>
            </div>
        </div>
        <div className="leftSide">
            <img src={left} alt="" />
        </div>
        <div className="rightSide">
            <img src={left} alt="" />
        </div>
      </div>
    </>
  )
}

export default CampaignArea2
