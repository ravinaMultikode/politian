import React from 'react'
import { Link } from 'react-router-dom'
// import bgImg from '../Image/funfact-img.jpg'

const FunFactArea = () => {
  return (
    <>
      <div className="funFactArea">
        <div className="container-fluid ps-0">
            <div className="row">
                <div className="col-lg-6 pe-0">
                    <div className="funFactWrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="info">
                                    <h3>35k</h3>
                                    <p>Total People lived in our city</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info">
                                    <h3>12k</h3>
                                    <p>Square kilometers region covers</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info">
                                    <h3>25%</h3>
                                    <p>Private & domestic garden land</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info">
                                    <h3>8th</h3>
                                    <p>Average Costs of Home Ownership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ps-0">
                    <div className="right-bg">
                        <div className="videoBtn">
                            <div className="btnWrap">
                            <Link to="blob:https://www.youtube.com/f8cab3d1-f961-4635-9ecf-3f07ef9b3f56">
                                <i class="fa-regular fa-circle-play"></i>
                            </Link>
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

export default FunFactArea
