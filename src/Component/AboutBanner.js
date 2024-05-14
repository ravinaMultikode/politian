import React from 'react'
import { Link } from 'react-router-dom'

const AboutBanner = ({title}) => {
  return (
    <>                                      
      <div className="aboutBanner">
        <div className="container">
           <div className="row">
            <div className="col-lg-12 text-center">
                <h2>{title}</h2>
                <ul>  
                    <li><Link to='/'>Home</Link></li>
                    <li className='ps-3'>{title}</li>
                </ul>
            </div>
           </div>
        </div>
      </div>

    </>
  )
}

export default AboutBanner
