import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import timg1 from '../Image/pre-pro-1.png'
import timg2 from '../Image/pre-pro-2.png'
import timg3 from '../Image/president-img.png'
import tp1 from '../Image/pre-profile.png'
import tp2 from '../Image/pre2-profile.png'
import tp3 from '../Image/pre3-profile.png'

const Testmonial = () => {
  return (
    <>
      <div className="testmonialArea">
        <div className="container">
            <div className="testWrap">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="textmonialLeft">
                        <div className="leftInner">
                            <div className="leftSlide">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                                <div className="shape-3"></div>
                                <div className="shape-4"></div>
                            </div>
                            <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} items={1}>
                                <div class='item'>
                                    <div className="testImg">
                                        <img src={timg1} alt="" className='w-100' />
                                    </div>
                                </div>
                                <div class='item'>
                                    <div className="testImg">
                                        <img src={timg2} alt="" className='w-100' />
                                    </div>
                                </div>
                                <div class='item'>
                                    <div className="testImg">
                                        <img src={timg3} alt="" className='w-100' />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={1}>
                                <div class='item'>
                                  <div className="rightSlide">
                                    <div className="slickList">
                                    <i class="fa-solid fa-quote-right"></i>
                                    <p>"Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies."</p>
                                    <div className="testProfile d-flex pt-3 ">
                                        <div className="testproImg">
                                            <img src={tp1} alt="" />
                                        </div>
                                        <div className="textprofileInfo">
                                            <h3>Robert Willum</h3>
                                            <span>President of BPT</span>
                                        </div>
                                    </div>

                                    </div>
                                  </div>
                                </div>
                                <div class='item'>
                                  <div className="rightSlide">
                                    <div className="slickList">
                                    <i class="fa-solid fa-quote-right"></i>
                                    <p>"Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies."</p>
                                    <div className="testProfile d-flex pt-3 ">
                                        <div className="testproImg">
                                            <img src={tp2} alt="" />
                                        </div>
                                        <div className="textprofileInfo">
                                            <h3>Leslie Alexander</h3>
                                            <span>President of TBP</span>
                                        </div>
                                    </div>

                                    </div>
                                  </div>
                                </div>
                                <div class='item'>
                                  <div className="rightSlide">
                                    <div className="slickList">
                                    <i class="fa-solid fa-quote-right"></i>
                                    <p>"Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies."</p>
                                    <div className="testProfile d-flex pt-3 ">
                                        <div className="testproImg">
                                            <img src={tp3} alt="" />
                                        </div>
                                        <div className="textprofileInfo">
                                            <h3>David Joy</h3>
                                            <span>President of AML</span>
                                        </div>
                                    </div>

                                    </div>
                                  </div>
                                </div>
                </OwlCarousel>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testmonial
