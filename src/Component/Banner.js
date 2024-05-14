import React from 'react'
import { Link } from 'react-router-dom'
import bannerimg from '../Image/banner-img.png'

const Banner = () => {
  return (
    <>
      <div className="bannerArea">
        <div className="container-fluid">
           <div className="row">
                <div className="col-lg-6">
                <div className="bannerContent pt-5">
                <h4 className='title'>We Are Waiting For You</h4>
                <h2 className='subTitle pt-4 pb-4'>Lets Make The World Great Again</h2>
                <p className='text'>We can start by taking small steps and making small changes that can have a big impact on the world.</p>
                <div className="themeBtn pt-4">
                    <Link to="#">
                    <button>
                    Join The Campaign
                    </button>
                    </Link>
                </div>
            </div>
            </div>
            <div className="col-lg-6 position-relative">
            <div className="bannerImg position-relative">
                <img src={bannerimg} alt="" />
                <div className="politianShape">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                  <div className="shape-3"></div>
                  <div className="shape-4"></div>
                </div>
            </div>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Banner
