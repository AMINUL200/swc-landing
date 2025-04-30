import React from 'react'
import { blogThumb1_1, blogThumb1_2, calendar, fireIcon, FolderIcon, userIcon } from '../assets'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer';

const BlogSection = () => {
    const [ref9, inView9] = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <section className="blog-section section-padding fix" id='blog'>
            <div className="container">
                <div ref={ref9} className="blog-wrapper style1">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <div className={`subtitle ${inView9 ? 'fadeInUp delay-1' : ''} `} >
                            Our Blog <img src={fireIcon} alt="icon" />
                        </div>
                        <h2 className={`title ${inView9 ? 'fadeInUp delay-2' : ''}`} >Recent Articles And Latest Blog</h2>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6">
                            <div className={`blog-card style1 ${inView9 ? 'fadeInUp delay-1' : ''}`} >
                                <div className="thumb">
                                    <img src={blogThumb1_1} alt="thumb" />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        <img src={FolderIcon} alt="icon" />
                                        Workplace
                                    </div>
                                    <h3><Link to='/blog-details' >Services that printing at you is important</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                                <img src={userIcon} alt="icon" />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                                <img src={calendar} alt="icon" />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className={`blog-card style1 ${inView9 ? 'fadeInUp delay-2' : ''}`} data-wow-delay=".4s">
                                <div className="thumb">
                                    <img src={blogThumb1_2} alt="thumb" />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        <img src={FolderIcon} alt="icon" />
                                        Coding
                                    </div>
                                    <h3><Link to='/blog-details' >A checklist to improve your daily routine</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                                <img src={userIcon} alt="icon" />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                                <img src={calendar} alt="icon" />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className={`blog-card style1 ${inView9 ? 'fadeInUp delay-3' : ''}`} >
                                <div className="thumb">
                                    <img src={blogThumb1_1} alt="thumb" />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        <img src={FolderIcon} alt="icon" />
                                        Technology
                                    </div>
                                    <h3><Link to='/blog-details' >That will help you get 1% better every day</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                                <img src={userIcon} alt="icon" />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                                <img src={calendar} alt="icon" />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
