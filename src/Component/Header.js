import React from 'react'
import logo from '../Image/logo.svg'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useEffect } from 'react'

const Header = () => {
  return (
    <>
    <MenuScript/>
    <header>
      <div className="mainHeader">
        <div className="container-fluid">
            <div className="headerParent">
            <div className="toggle d-lg-none d-block">
                <i class="fa-solid fa-bars"></i>
                </div>                
            <div className="logoBar">
                        <img src={logo} alt="" />
            </div>
                               
                    <div className="navigation mt-2 ps-5">
                        <nav>
                            <ul className="mainMenu mb-0 d-flex">
                                <li><Link to='/'>
                                    HOME
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="#">
                                        MAIN HOME
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                        ELECTION HOME
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    Male Candidate
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    FEMale Candidate
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='/AboutUs'>
                                    ABOUT US
                                </Link>
                                </li>
                                <li><Link to='/'>
                                    Campaign
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="/CampaignPage">
                                    Campaign Style 1
                                    </Link>
                                    </li>
                                    <li><Link to="/campaign2">
                                    Campaign Style 2
                                    </Link>
                                    </li>
                                    <li><Link to="/campaign2">
                                    Campaign Style 3
                                    </Link>
                                    </li>
                                    <li><Link to="/campaignSingle">
                                    Campaign single
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='/'>
                                    PAGES
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="/gallery">
                                    gallery
                                    </Link>
                                    </li>
                                    <li><Link to="/testmonial">
                                    Testimonial
                                    </Link>
                                    </li>
                                    <li><Link to="/teamPage">
                                    Team
                                    </Link>
                                    </li>
                                    <li><Link to="/teamSingle">
                                    Team single
                                    </Link>
                                    </li>
                                    <li><Link to="/">
                                    <div className='d-flex justify-content-between'>
                                        services
                                     <span><i class="fa-solid fa-angle-right"></i></span>
                                     </div>
                                    </Link>
                                    <ul className="petaMenu">
                                        <li><Link to="/service">
                                            services
                                        </Link></li>
                                        <li><Link to="/service2">
                                            services single
                                        </Link></li>
                                    </ul>
                                    </li>
                                    <li><Link to="/shop">
                                    shop
                                    </Link>
                                    </li>
                                    <li><Link to="/shopsingle">
                                    shop single
                                    </Link>
                                    </li>
                                    <li><Link to="/cart">
                                    cart
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    checkout
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    faq
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    volunteer
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    404 error
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    login
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    register
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='#'>
                                    BLOG
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="#">
                                    Blog right sidebar
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    Blog left sidebar
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    Blog fullwidth
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    <div className='d-flex justify-content-between'>
                                    Blog details
                                     <span><i class="fa-solid fa-angle-right"></i></span>
                                     </div>
                                    </Link>
                                    <ul className="petaMenu">
                                        <li><Link to="#">
                                        Blog details right sidebar
                                        </Link></li>
                                        <li><Link to="#">
                                        Blog details left sidebar
                                        </Link></li>
                                        <li><Link to="#">
                                        Blog details fullwidth

                                        </Link></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='#'>
                                    CONTACT
                                </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>                                 
                <div className="mobNavigation mt-2 offSideBar">
                    <span className='close'><i class="fa-regular fa-rectangle-xmark"></i></span>
                        <nav>
                            <ul className="mainMenu mb-0 p-0">
                                <li><Link to='/'>
                                   <div className='d-flex justify-content-between'>
                                     Home
                                    <span><i class="fa-solid fa-angle-down"></i></span>
                                   </div>
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="#">
                                        MAIN HOME
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                        ELECTION HOME
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    Male Candidate
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    FEMale Candidate
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='/AboutUs'>
                                    About
                                </Link>
                                </li>
                                <li><Link to='/'>
                                <div className='d-flex justify-content-between'>
                                    Campaign
                                    <span><i class="fa-solid fa-angle-down"></i></span>
                                   </div>
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="/CampaignPage">
                                    Campaign Style 1
                                    </Link>
                                    </li>
                                    <li><Link to="/campaign2">
                                    Campaign Style 2
                                    </Link>
                                    </li>
                                    <li><Link to="/campaign2">
                                    Campaign Style 3
                                    </Link>
                                    </li>
                                    <li><Link to="/campaignSingle">
                                    Campaign single
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='/'>
                                <div className='d-flex justify-content-between'>
                                    Pages
                                    <span><i class="fa-solid fa-angle-down"></i></span>
                                   </div>
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="/gallery">
                                    gallery
                                    </Link>
                                    </li>
                                    <li><Link to="/testmonial">
                                    Testimonial
                                    </Link>
                                    </li>
                                    <li><Link to="/teamPage">
                                    Team
                                    </Link>
                                    </li>
                                    <li><Link to="/teamSingle">
                                    Team single
                                    </Link>
                                    </li>
                                    <li><Link to="/">
                                    <div className='d-flex justify-content-between'>
                                        services
                                     <span><i class="fa-solid fa-angle-right"></i></span>
                                     </div>
                                    </Link>
                                    <ul className="petaMenu">
                                        <li><Link to="/service">
                                            services
                                        </Link></li>
                                        <li><Link to="/service2">
                                            services single
                                        </Link></li>
                                    </ul>
                                    </li>
                                    <li><Link to="/shop">
                                    shop
                                    </Link>
                                    </li>
                                    <li><Link to="/shopsingle">
                                    shop single
                                    </Link>
                                    </li>
                                    <li><Link to="/cart">
                                    cart
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    checkout
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    faq
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    volunteer
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    404 error
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    login
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    register
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='#'>
                                <div className='d-flex justify-content-between'>
                                    Blog
                                    <span><i class="fa-solid fa-angle-down"></i></span>
                                   </div>
                                </Link>
                                <ul className="subMenu">
                                    <li><Link to="#">
                                    Blog right sidebar
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    Blog left sidebar
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    Blog fullwidth
                                    </Link>
                                    </li>
                                    <li><Link to="#">
                                    <div className='d-flex justify-content-between'>
                                    Blog details
                                     <span><i class="fa-solid fa-angle-right"></i></span>
                                     </div>
                                    </Link>
                                    <ul className="petaMenu">
                                        <li><Link to="#">
                                        Blog details right sidebar
                                        </Link></li>
                                        <li><Link to="#">
                                        Blog details left sidebar
                                        </Link></li>
                                        <li><Link to="#">
                                        Blog details fullwidth

                                        </Link></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to='#'>
                                    Contact
                                </Link>
                                </li>
                            </ul>
                        </nav>
                </div>             
                    <div className="headerRight d-flex align-items-center mt-2">
                        <div className="searchBar">
                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                        </div>
                        <div className="themeBtn ps-4">
                            <Link to="/Donate">
                                <button className='d-lg-block d-none'>DONATE NOW</button>
                                <button className='d-lg-none d-block p-2'><i class="fa-solid fa-hands-holding-circle"></i></button>                            
                            </Link>
                            
                        </div>
                    </div>
        </div>
        </div>
      </div>
      </header>
    </>
  )
}

export default Header

export const MenuScript=()=>{

    useEffect(() => {
        $ (".mobNavigation").hide()

        const handleToggleMenu=()=>{
            $(".mobNavigation").show();
            $(".mobNavigation").toggleClass("offSideBar  onSideBar")
        }
        $(".toggle").on("click",handleToggleMenu)

        const handleCloseMenu=()=>{
            $(".mobNavigation").hide();
        }
        $(".close").on("click",handleCloseMenu)

        const handleSubMenu = (e) => {
            const target = e.currentTarget;
            $(".subMenu").not($(target).next()).slideUp();
            $(target).next().slideToggle();
          };
          $(".mobNavigation .mainMenu li a").on("click", handleSubMenu);
      
          const handlePetaMenu = (e) => {
            const target = e.currentTarget;
            $(".petaMenu").not($(target).next()).slideUp();
            $(target).next().slideToggle();
          };
          $(".mobNavigation .subMenu li a").on("click", handlePetaMenu);

        return ()=>{
            $(".toggle").off("click",handleToggleMenu)
            $(".mobNavigation .mainMenu li a").off("click", handleSubMenu);
            $(".mobNavigation .subMenu li a").off("click", handlePetaMenu);
            $(".close").off("click",handleCloseMenu);
        }

    }, [])
    return null;
}
