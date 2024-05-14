import React from 'react'
import teamImg from '../Image/about-img.jpg'
import cer1 from '../Image/cer-1.jpg'
import cer2 from '../Image/cer-2.jpg'
import cer3 from '../Image/cer-3.jpg'
import cer4 from '../Image/cer-4.jpg'
import { Link } from 'react-router-dom'

const TeamProfileArea = () => {
  return (
    <>
      <div className="teamProfile">
        <div className="container">
            <div className="teamInfoWrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="teamInfoImg">
                            <img src={teamImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="teamInfoText">
                            <h2>Esther Howard</h2>
                            <ul className='p-0'>
                                <li>Position: 
                                <span>Councilor, District 3</span>
                                </li>
                                <li>Experience: 
                                <span>12 Years</span>
                                </li>
                                <li>Address: 
                                <span>6391 Elgin St. Celina, Delaware 10299</span>
                                </li>
                                <li>Phone: 
                                <span>+00 568 746 987</span>
                                </li>
                                <li>Email: 
                                <span>youremail@gmail.com</span>
                                </li>
                            </ul>
                            <div className="certificateWrap">
                                <h4>Certificates</h4>
                                <div className="certificateItem d-flex" style={{gap:"20px"}}>
                                    <div className="certificateImg">
                                        <img src={cer1} alt="" />
                                    </div>
                                    <div className="certificateImg">
                                        <img src={cer2} alt="" />
                                    </div>
                                    <div className="certificateImg">
                                        <img src={cer3} alt="" />
                                    </div>
                                    <div className="certificateImg">
                                        <img src={cer4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teamExprienceArea">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="experienceWrap">
                                <h2 className='mb-5'>Personal Experience</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="educationWrap">
                          <h2>Education</h2>
                          <ul className='p-0 mt-5'>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Academy University School of Political Science, Boston, MA
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Admization Institute of Political Science, Juzment School of Management,Cambridge
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            The Syntify High School Of New York
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Education & Political Admissions
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Admization Institute of Political Science, Juzment School of Management,Cambridge
                            </li>
                          </ul>
                          </div>
                        </div>
                    </div>
                    <div className="skillArea">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="experienceWrap">
                                    <h2>Skills</h2>
                                    <div className="skillSection mt-5">
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"90%"}}>
                                                <div className="value d-flex">
                                                <span>Political Science</span>
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"80%"}}>
                                                <div className="value d-flex">
                                                <span>Education</span>
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"95%"}}>
                                                <div className="value d-flex">
                                                <span>Development</span>
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"70%"}}>
                                                <div className="value d-flex">
                                                <span>Qualification</span>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                          <div className="educationWrap">
                          <h2>Achievements</h2>
                          <ul className='p-0 mt-5'>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Best Political Science award 2017
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Specials awards for Political activity 2018
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Super Politician Top 50 Politician in USA
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Young star Award at politician in 2021
                            </li>
                            <li><i class="fa-solid fa-angles-right me-3"></i>
                            Greatest Politician Top 10
                            </li>
                          </ul>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="contactArea">
                    <div className="contactTitle">
                        <h3>Make an Appointment</h3>
                        <p>Do not put off until tomorrow the problems that need to be solved today, especially if it concerns your life!</p>
                    </div>
                    <div className="quoteForm">
                        <form>
                           <div className="row text-center">
                            <div className="col-md-6 col-lg-6">
                            <input type="text" placeholder='Name:' />
                            </div>
                            <div className="col-md-6 col-lg-6">
                            <input type="text" placeholder='Email:' />
                            </div>
                            <div className="col-md-6 col-lg-6">
                            <input type="text" placeholder='Phone:' />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <select name="" id="">
                                    <option value="0">Subject</option>
                                    <option value="0">River Development</option>
                                    <option value="0">Village Development</option>
                                    <option value="0">Road Development</option>
                                    <option value="0">Town Development</option>
                                    <option value="0">Social Development</option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <textarea name="" id="" placeholder='Case Discription'></textarea>
                            </div>
                           </div>
                           <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="themeBtn">
                                    <Link to='#'>
                                    <button>Appointment</button>
                                    </Link>
                                </div>
                            </div>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default TeamProfileArea
