import React from 'react'
import simg1 from '../Image/shop-1.jpg'
import { Link } from 'react-router-dom'

const ShopSingleArea = () => {
  return (
    <>
      <div className="shopSingleArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="singleImg">
                        <img src={simg1} alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="productsDetails">
                        <h2 className='fw-bold'>The Audacity of Hope</h2>
                        <div className="productRate mt-3 d-flex">
                            <div className="rating me-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            </div>
                            <span>(25 customer reviews)</span>
                        </div>
                        <div className="price mt-3 mb-3">
                        <span>$340.00</span>
                        <del>$380.00</del>
                    </div>
                    <p>There are many or randomised words which don't look even slightly believable.</p>
                    <ul className='p-0'>
                        <li>Going through the cites of the word in classNameical.</li>
                        <li>There are many variations of passages.</li>
                    </ul>
                    <div className="themeBtn mt-5">
                        <Link>
                            <button className='p-2'>ADD TO CART</button>
                        </Link>
                    </div>
                    <div className="tgCategory mt-4 fw-bold">
                        <p>Categories: Book</p>
                        <p>Tags:Vote, Election, Political</p>
                    </div>
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="productInfo">
                        <ul className='navTabs d-flex'>
                            <li className='active'>Description</li>
                            <li className='ms-3'>Review</li>
                        </ul>
                        <div className="tabContent fs-5">
                            <p>Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.</p>
                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of himSamsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ShopSingleArea
