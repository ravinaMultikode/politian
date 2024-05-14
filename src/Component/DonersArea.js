import React from 'react'

const DonersArea = () => {
  return (
    <>
      <div className="donorsArea">
        <div className="container">
            <div className="donorsWrap">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>
                        Would you like to become one of our honorable donors?
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="donersBtn">
                            <button className='btn btn-dark'>$10 Donation</button>
                            <button className='btn btn-light ms-3 text-danger'>Other</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DonersArea
