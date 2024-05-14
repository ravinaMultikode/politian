import React from 'react'
import  blog1 from '../Image/blog-1.jpg'
import  blog2 from '../Image/blog-2.jpg'
import  blog3 from '../Image/blog-3.jpg'
import { Link } from 'react-router-dom'

const BlogArea = () => {
  return (
    <>
      <div className="blogArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="aboutSectionTitle text-center">
                    <span>OUR BLOG</span>
                    <h2>Latest News & Press</h2>
                </div>
                </div>
            </div>
            <div className="blogWrap pt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blogItem">
                            <div className="blogImg">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="blog-content p-4">
                                <ul className='d-flex p-0'>
                                    <li>25 Sep 2023</li>
                                    <li className='ps-5'>by: Anne William</li>
                                </ul>
                                <h2>We’re the people who don’t just support progressive change.</h2>
                                <Link to="/">Continue Reading</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blogItem">
                            <div className="blogImg">
                                <img src={blog2} alt="" />
                            </div>
                            <div className="blog-content p-4">
                                <ul className='d-flex p-0'>
                                    <li>26 Sep 2023</li>
                                    <li className='ps-5'>by: Robert Fox</li>
                                </ul>
                                <h2>Politics is why we can’t have nice things. Like the internet.</h2>
                                <Link to="/">Continue Reading</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blogItem">
                            <div className="blogImg">
                                <img src={blog3} alt="" />
                            </div>
                            <div className="blog-content p-4">
                                <ul className='d-flex p-0'>
                                    <li>28 Sep 2023</li>
                                    <li className='ps-5'>by:  Devon Lane</li>
                                </ul>
                                <h2>Liberty Divided Over Criticism Justice League</h2>
                                <Link to="/">Continue Reading</Link>
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

export default BlogArea
