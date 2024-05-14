import React from 'react'
import g1 from '../Image/g-7.jpg'
import g2 from '../Image/g-1.jpg'
import g3 from '../Image/g-2.jpg'
import g4 from '../Image/g-3.jpg'
import g5 from '../Image/g-4.jpg'
import g6 from '../Image/g-8.jpg'
import g7 from '../Image/g-5.jpg'
import g8 from '../Image/g-9.jpg'
import g9 from '../Image/g-6.jpg'

const GallerySection = () => {
  return (
    <>
      <div className="gallerySection">
        <div className="container">
            <div className="sortGallery">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g2} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g4} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g5} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g7} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g8} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="galleryImg">
                            <img src={g9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default GallerySection
