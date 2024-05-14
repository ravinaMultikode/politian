import React from 'react'
import img1 from '../Image/detailsImg.jpg'
import post1 from '../Image/blog-1.jpg'
import post2 from '../Image/blog-2.jpg'
import post3 from '../Image/blog-3.jpg'

const CampaignSingleArea = () => {
  return (
    <>
      <div className="campaignSingleArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="detailsWrap">
                        <div className="detailsImg">
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <div className="detailsTab">
                                <ul className='d-flex flex-wrap'>
                                    <li className='active'>Description</li>
                                    <li>Donations</li>
                                    <li>Comments</li>
                                </ul>
                            </div>
                            <div className="detailsText">
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="contentTop">
                                                <h2>New York: Support for Womans April 2023</h2>
                                                <div className="progressSection">
                                        <div className="process">
                                            <div className="progressBar" style={{width:"90%"}}>
                                                <div className="value">
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex justify-content-between p-0 flex-wrap'>
                                        <li>
                                            <span>Raised:</span>
                                            $2000.00
                                        </li>
                                        <li>
                                            <span>Goal:</span>
                                            $3000.00
                                        </li>
                                        <li>
                                            <span>Donar:</span>
                                            380
                                        </li>
                                    </ul>
                                    <div className="campaignTopText">
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                        <p>These campaigns are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                        <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures.</p>
                                    </div>
                                    <div className="campaignBottomText">
                                        <h4 className='pb-3'>Support for Woman's April 2023</h4>
                                        <p>These campaigns are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                                        <ul className='p-0'>
                                            <li>The wise man therefore always holds in these matters.</li>
                                            <li>In a free hour, when our power of choice and when nothing.</li>
                                            <li>Else he endures pains to avoid worse pains.</li>
                                            <li>We denounce with righteous indignation and dislike men.</li>
                                            <li>Which is the same as saying through.</li>
                                        </ul>
                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blogSideBar">   
                        <div className="widGetForm">
                            <input type="text"  placeholder='Search Post..'/>
                            <button type='button'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className="widgetCategory">
                            <h4>Services</h4>
                            <ul className='p-0'>
                                <li>Economic Establishment</li>
                                <li>Jobs and Unemployment</li>
                                <li>Business and Industry</li>
                                <li>Roads and Transport Service</li>
                                <li>Jobs and Unemployment</li>
                            </ul>
                        </div>
                        <div className="recentPost">
                        <h4>Related Posts</h4>
                        <div className="posts">
                            <div className="post">
                                <div className="imgHolder">
                                    <img src={post1} alt="" />
                                </div>
                                <div className="postDetails">
                                    <h5>We’re the people who don’t just support progressive change.</h5>
                                    <span>25 Sep 2023</span>
                                </div>
                            </div>
                            <div className="post">
                                <div className="imgHolder">
                                    <img src={post2} alt="" />
                                </div>
                                <div className="postDetails">
                                    <h5>Politics is why we can’t have nice things. Like the internet.</h5>
                                    <span>26 Sep 2023</span>
                                </div>
                            </div>
                            <div className="post">
                                <div className="imgHolder">
                                    <img src={post3} alt="" />
                                </div>
                                <div className="postDetails">
                                    <h5>Liberty Divided Over Criticism Justice League</h5>
                                    <span>28 Sep 2023</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="tagWidget">
                        <h4>Tags</h4>
                            <ul className=' ps-0'>
                                <li>ELECTION</li>
                                <li>Campaign</li>
                                <li>STATEMENT</li>
                                <li>POLITICS</li>
                                <li>PRESS</li>
                                <li>SOCIAL</li>
                                <li>SECURITY</li>
                                <li>VOTE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CampaignSingleArea
