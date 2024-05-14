import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon1 from '../Image/icon-1.png'
import icon2 from '../Image/icon-2.png'
import icon3 from '../Image/icon-3.png'
import icon4 from '../Image/icon-4.png'
import icon5 from '../Image/icon-5.png'
import icon6 from '../Image/icon-6.png'


const IconArea = () => {
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      };
      const responsive = {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        900: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      };
  return (
    <>
      <div className="iconArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} items={6}
                {...options}
                responsive={responsive}>
                    <div class='item'>
                    <div className="iconImg">
                        <img src={icon1} alt="" className='w-100'/>
                    </div>
                </div>
                    <div class='item'>
                    <div className="iconImg">
                        <img src={icon2} alt="" className='w-100'/>
                    </div>
                </div>
                    <div class='item'>
                    <div className="iconImg">
                        <img src={icon3} alt="" className='w-100'/>
                    </div>
                </div>
                    <div class='item'>
                    <div className="iconImg">
                        <img src={icon4} alt="" className='w-100'/>
                    </div>
                </div>
                    <div class='item'>
                    <div className="iconImg">
                        <img src={icon5} alt="" className='w-100'/>
                    </div>
                </div>
                    <div class='item'>
                    <div className="iconImg">
                        <img src={icon6} alt="" className='w-100'/>
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

export default IconArea
