import React from 'react'
import aboutimg from '../Image/about-img.jpg'
import sign from '../Image/sign.png'

const About = () => {
  return (
    <>
      <div className="aboutArea">
        <div className="container">
            <div className="aboutWrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="aboutImg">
                            <img src={aboutimg} alt=""  />
                            <div className="aboutImgText">
                                <h2>1998</h2>
                                <div className="rotateText">
                                    <span>W</span>
                                    <span>e</span>
                                    <span>A</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span>W</span>
                                    <span>o</span>
                                    <span>r</span>
                                    <span>k</span>
                                    <span>i</span>
                                    <span>n</span>
                                    <span>g</span>
                                    <span>F</span>
                                    <span>o</span>
                                    <span>r</span>
                                    <span>Y</span>
                                    <span>o</span>
                                    <span>u</span>
                                    <span>S</span>
                                    <span>i</span>
                                    <span>n</span>
                                    <span>c</span>
                                    <span>e</span>
                                </div>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="boderShape1"></div>
                                <div className="boderShape2"></div>
                                <div className="boderShape3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="aboutText">
                            <div className="aboutSectionTitle">
                                <span>ABOUT POLITIAN</span>
                                <h2>We Can Work Together For Create a Better Future.</h2>
                            </div>
                            <p>The leader is eager to listen to the needs of the youth generation and to hear what solutions they have to the problems they are facing. He hopes to find solutions that will help them lead meaningful lives and make lasting change in the world.</p>
                            <p>He believes that the collaboration between the youth and the leaders of society is necessary to bring about a brighter future. Now, he is ready to take the first step to making that happen.</p>
                            <div className="quote">
                                <p>“We can start by taking small steps and making small changes that can have a big impact on the world.
                                </p>
                            </div>
                            <div className="aboutInfo d-flex flex-wrap">
                                <div className="aboutLeftInner">
                                    <div className="leftText">
                                        <h2>Robert Willum</h2>
                                        <p>CEO & Founder of Manit</p>
                                    </div>
                                </div>
                                <div className="sign">
                                    <img src={sign} alt="" />
                                </div>
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

export default About
