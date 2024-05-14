import React from 'react'
import shop1 from '../Image/shop-1.jpg'
import shop2 from '../Image/shop-2.jpg'
import shop3 from '../Image/shop-3.jpg'
import shop4 from '../Image/shop-4.jpg'
import shop5 from '../Image/shop-5.jpg'
import shop6 from '../Image/shop-6.jpg'
import shop7 from '../Image/shop-7.jpg'
import shop8 from '../Image/shop-8.jpg'

const ShopPageArea = () => {
  return (
    <>
     <div className="shopArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shopSection">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop1} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Audacity of Hope</h5>
                                    <del>$380.00</del>
                                    <span className='ps-3'>$340.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop2} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Communist Manifesto</h5>
                                    <del>$85.00</del>
                                    <span className='ps-3'>$65.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop3} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Federalist Papers</h5>
                                    <del>$300.00</del>
                                    <span className='ps-3'>$285.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop4} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Shock Doctrine</h5>
                                    <del>$178.00</del>
                                    <span className='ps-3'>$176.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop5} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>Disaster Capitalism</h5>
                                    <del>$130.00</del>
                                    <span className='ps-3'>$125.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop6} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Art of War</h5>
                                    <del>$600.00</del>
                                    <span className='ps-3'>$548.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop7} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Fifth Risk</h5>
                                    <del>$130.00</del>
                                    <span className='ps-3'>$125.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="shopImg">
                                    <img src={shop8} alt="" />
                                </div>
                                <div className="shopImgDetails">
                                    <h5 className='fw-bold'>The Anarchy</h5>
                                    <del>$600.00</del>
                                    <span className='ps-3'>$548.00</span>
                                    <div className='addCart mt-3'>
                                    <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li><i class="fa-solid fa-angle-left"></i></li>
                                <li className='active'>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li><i class="fa-solid fa-angle-right"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default ShopPageArea
