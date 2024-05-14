import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import insta1 from '../Image/insta-1.jpg'
import insta2 from '../Image/insta-2.jpg'
import insta3 from '../Image/insta-3.jpg'
import insta4 from '../Image/insta-4.jpg'
import insta5 from '../Image/insta-5.jpg'


const InstagramArea = () => {
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      };
      const responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      };
  return (
    <>
      <div className="instagramArea">
        <div className="container-fluid ps-0">
            <div className="row">
                <div className="col-lg-12">
                <div className="aboutSectionTitle text-center">
                    <span>WORK</span>
                    <h2>Our Instagram Feed</h2>
                </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-xl-12">
                <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} items={4}
                navText={['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']}
                {...options}
                responsive={responsive}>
                <div class='item'>
                    <div className="instaImg">
                        <img src={insta1} alt="" className='w-100'/>
                    </div>
                </div>
                <div class='item'>
                    <div className="instaImg">
                        <img src={insta2} alt="" className='w-100'/>
                    </div>
                </div>
                <div class='item'>
                    <div className="instaImg">
                        <img src={insta3} alt="" className='w-100'/>
                    </div>
                </div>
                <div class='item'>
                    <div className="instaImg">
                        <img src={insta4} alt="" className='w-100'/>
                    </div>
                </div>
                <div class='item'>
                    <div className="instaImg">
                        <img src={insta5} alt="" className='w-100'/>
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

export default InstagramArea
