import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const ServiceArea = () => {
  const responsive={
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    
    1000: {
      items: 4,
    },
    1200:{
        items:4,
    }
  }
  return (
    <>
      <div className="serviceArea">
        <div className="container">         
            <div className="row">
                <div className="col-lg-12">
                    <div className="aboutSectionTitle text-center">
                    <span>MISSION AND VISION</span>
                    <h2>How we can build a better country together!</h2>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
            <div className="col-lg-12">
            <OwlCarousel className='owl-theme' loop margin={10} nav={true} dots={false} items={4} navText={['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']} responsive={responsive}>
                <div className="item">
                <div class='serviceItem'>
                    <div className="serviceText">
                        <div className="serviceIcon">
                        <i class="fa-solid fa-house-chimney-crack"></i>
                        </div>
                        <h2>Economic Establishment</h2>
                        <p>It is enough that the people know there was an election. The people who cast the votes decide nothing.</p>
                    </div>
                </div>
                </div>
                <div className="item">
                <div class='serviceItem'>
                    <div className="serviceText">
                        <div className="serviceIcon">
                        <i class="fa-solid fa-flask-vial"></i>
                        </div>
                        <h2>Jobs and Unemployment</h2>
                        <p>It is enough that the people know there was an election. The people who cast the votes decide nothing.</p>
                    </div>
                </div>
                </div>
                <div className="item">
                <div class='serviceItem'>
                    <div className="serviceText">
                        <div className="serviceIcon">
                        <i class="fa-solid fa-users-gear"></i>
                        </div>
                        <h2>Business and Industry</h2>
                        <p>It is enough that the people know there was an election. The people who cast the votes decide nothing.</p>
                    </div>
                </div>
                </div>
                <div className="item">
                <div class='serviceItem'>
                    <div className="serviceText">
                        <div className="serviceIcon">
                        <i class="fa-solid fa-bus"></i>
                        </div>
                        <h2>Roads and Transport Service</h2>
                        <p>It is enough that the people know there was an election. The people who cast the votes decide nothing.</p>
                    </div>
                </div>
                </div>
                <div className="item">
                <div class='serviceItem'>
                    <div className="serviceText">
                        <div className="serviceIcon">
                        <i class="fa-solid fa-bus"></i>
                        </div>
                        <h2>Roads and Transport Service</h2>
                        <p>It is enough that the people know there was an election. The people who cast the votes decide nothing.</p>
                    </div>
                </div>
                </div>
            </OwlCarousel>  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ServiceArea
