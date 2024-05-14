import React from 'react'
import team1 from '../Image/team-1.jpg'
import team2 from '../Image/team-2.jpg'
import team3 from '../Image/team-3.jpg'
import team4 from '../Image/team-4.jpg'

const TeamArea = () => {
  return (
    <>
      <div className="teamArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="aboutSectionTitle text-center">
                    <span>OUR TEAM</span>
                    <h2>Meet Our City Council</h2>
                </div>
                </div>
            </div>
            <div className="wpoWrap">
                  <div className="row pt-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="teamItem">
                            <div className="teamImg">
                                <img src={team1} alt="" />
                                <ul className='d-flex p-0' style={{gap:"10px"}}>
                                    <li><i class="fa-brands fa-facebook-f"></i></li>
                                    <li><i class="fa-brands fa-twitter"></i></li>
                                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                                </ul>
                            </div>
                            <div className="teamName pt-4">
                                <h3>Esther Howard</h3>
                                <p>Councilor, District 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="teamItem">
                            <div className="teamImg">
                                <img src={team2} alt="" />
                                <ul className='d-flex p-0' style={{gap:"10px"}}>
                                    <li><i class="fa-brands fa-facebook-f"></i></li>
                                    <li><i class="fa-brands fa-twitter"></i></li>
                                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                                </ul>
                            </div>
                            <div className="teamName pt-4">
                                <h3>Guy Hawkins</h3>
                                <p>Marketing Coordinator</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="teamItem">
                            <div className="teamImg">
                                <img src={team3} alt="" />
                                <ul className='d-flex p-0' style={{gap:"10px"}}>
                                    <li><i class="fa-brands fa-facebook-f"></i></li>
                                    <li><i class="fa-brands fa-twitter"></i></li>
                                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                                </ul>
                            </div>
                            <div className="teamName pt-4">
                                <h3>Robert Fox</h3>
                                <p>Medical Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="teamItem">
                            <div className="teamImg">
                                <img src={team4} alt="" />
                                <ul className='d-flex p-0' style={{gap:"10px"}}>
                                    <li><i class="fa-brands fa-facebook-f"></i></li>
                                    <li><i class="fa-brands fa-twitter"></i></li>
                                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                                </ul>
                            </div>
                            <div className="teamName pt-4">
                                <h3>Devon Lane</h3>
                                <p>President of Sales</p>
                            </div>
                        </div>
                    </div>
                  </div>      
            </div>
        </div>
      </div>
    </>
  )
}

export default TeamArea
