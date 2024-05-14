import React, { useState } from 'react'
import singleimg from '../Image/serviceImg.jpg'
import service1 from '../Image/g-2.jpg'
import service2 from '../Image/g-8.jpg'
import { Link, useNavigate } from 'react-router-dom'

const ServiceSingleArea = () => {
    const navigate=useNavigate()
    // const [data, setdata] = useState([])
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [service, setservice] = useState("")
    const [message, setmessage] = useState("")
    const [error, seterror] = useState({
        name:"",
        email:"",
        service:"",
        message:"",
    })

    const handleSubmit =()=>{
        if(!name || !email || !service || !message){
            if(!name){
                seterror((err)=>({...err,name:"Enter Name"}))
            }
            if(!email){
                seterror((err)=>({...err,email:"Enter Email"}))
            }
            if(!service){
                seterror((err)=>({...err,service:"Enter Service"}))
            }
            if(!message){
                seterror((err)=>({...err,message:"Type a Message"}))
            }
        }else{
            // alert("")
            navigate("/")
        }
    }

  return (
    <>
      <div className="serviceSingleArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="serviceSingleWrap">
                        <div className="serviceItem">
                            <div className="singleImg">
                                <img src={singleimg} alt="" />
                            </div>
                            <div className="singleTitle mt-4 mb-4">
                                <h2>Economic Establishment</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                            <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit</p>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <img src={service1} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={service2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="itemWidget">
                            <div className="singleTitle mt-5 mb-4">
                                <h2>Our Capabilities</h2>
                            </div>
                            <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.</p>
                            <ul className='p-0'>
                                <li>
                                <i class="fa-regular fa-circle-check me-2"></i>
                                Non saed velit dictum quam risus pharetra esta.
                                </li>
                                <li>
                                <i class="fa-regular fa-circle-check me-2"></i>
                                Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.
                                </li>
                                <li>
                                <i class="fa-regular fa-circle-check me-2"></i>
                                Hac nibh fermentum nisi, platea condimentum cursus.
                                </li>
                                <li>
                                <i class="fa-regular fa-circle-check me-2"></i>
                                Massa volutpat odio facilisis purus sit elementum.
                                </li>
                                <li>
                                <i class="fa-regular fa-circle-check me-2"></i>
                                Elit curabitur amet risus bibendum.
                                </li>
                            </ul>
                        </div>
                        <div className="serviceItem">
                        <div className="singleTitle mt-5 mb-4">
                                <h2>Related Service</h2>
                            </div>
                            <div className="serviceArea">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                    <div class='serviceItem p-3'>
                                        <div className="serviceText">
                                            <div className="serviceIcon">
                                            <i class="fa-solid fa-house-chimney-crack"></i>
                                            </div>
                                            <h2>Economic Establishment</h2>
                                            <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div class='serviceItem p-3'>
                                        <div className="serviceText">
                                            <div className="serviceIcon">
                                            <i class="fa-solid fa-flask"></i>
                                            </div>
                                            <h2>Jobs and Unemployment</h2>
                                            <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div class='serviceItem p-3'>
                                        <div className="serviceText">
                                            <div className="serviceIcon">
                                            <i class="fa-solid fa-users"></i>
                                            </div>
                                            <h2>Business and Industry</h2>
                                            <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem mt-5">
                            <div className="serviceContactArea">
                            <div className="singleTitle">
                                <h3>Have project in mind? Let's discuss</h3>
                                <p>Get in touch with us to see how we can help you with your project</p>
                            </div>
                            <div className="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="text" placeholder='Your Name' value={name}
                                        onChange={(e)=>{
                                            setname(e.target.value)
                                            if(!e.target.value){
                                                seterror((err)=>({...err,name:"Enter Nmae"}))
                                            }else{
                                                seterror((err)=>({...err,name:""}))
                                            }
                                        }}
                                        />
                                        <p className='error' style={{color:"red"}}>{error.name}</p>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <input type="text" placeholder='Your Email' value={email} 
                                        onChange={(e)=>{
                                            setemail(e.target.value)
                                            if(!e.target.value){
                                                seterror((err)=>({...err,email:"Enter email"}))
                                            }else{
                                                seterror((err)=>({...err,email:""}))
                                            }
                                        }}/>
                                         <p className='error' style={{color:"red"}}>{error.email}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <select name="" id="" value={service}
                                        onChange={(e)=>{
                                            setservice(e.target.value)
                                            if(!e.target.value){
                                                seterror((err)=>({...err,service:"Enter service"}))
                                            }else{
                                                seterror((err)=>({...err,service:""}))
                                            }
                                        }}>
                                            <option value="0">Choose a Service</option>
                                            <option value="1">Tax Management</option>
                                            <option value="2">Financial Advices</option>
                                            <option value="3">Risk Management</option>
                                        </select>
                                        <p className='error' style={{color:"red"}}>{error.service}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="" id="" placeholder='Message' value={message}
                                         onChange={(e)=>{
                                            setmessage(e.target.value)
                                            if(!e.target.value){
                                                seterror((err)=>({...err,message:"Enter message"}))
                                            }else{
                                                seterror((err)=>({...err,message:""}))
                                            }
                                        }}></textarea>
                                         <p className='error' style={{color:"red"}}>{error.message}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="themeBtn">
                                           <Link> <button type='button' onClick={handleSubmit}>SUBMITED NOW</button></Link>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="blogSideBar">
                    <div className="widGetForm">
                            <input type="text"  placeholder='Search Post..'/>
                            <button type='button'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className="widgetCategory">
                            <h4>All Services</h4>
                            <ul className='p-0'>
                                <li>Economic Establishment</li>
                                <li>Jobs and Unemployment</li>
                                <li>Business and Industry</li>
                                <li>Roads and Transport Service</li>
                                <li>Jobs and Unemployment</li>
                            </ul>
                        </div>
                        <div className="contactWidget mt-5">
                            <div className="iinerWidget">
                                <h2>Contact For Advertisment 270 x 310</h2>
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

export default ServiceSingleArea
