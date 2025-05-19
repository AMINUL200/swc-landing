import React, { useContext } from 'react'
import BreadCumbSection from '../component/BreadCumbSection'
import { Link } from 'react-router-dom'
import { blogThumb3_1, blogThumb3_2, blogThumb3_3, blogThumb3_4, blogThumb3_5, blogThumb3_6, blogThumb3_7, blogThumb3_8, blogThumb3_9, tagIcon, userIcon } from '../assets'
import { useInView } from 'react-intersection-observer'
import { AppContext } from '../context/AppContext'
import BlogSection from '../component/BlogSection'

const BlogPage = () => {
  const {blogData} = useContext(AppContext)
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref6, inView6] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref7, inView7] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref8, inView8] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref9, inView9] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* <BreadCumbSection page='Blog' /> */}

      {/* <!-- Blog Grid Section S T A R T --> */}
      {/* <section className="blog-area section-padding fix">
        <div className="container">
          <div className="blog-card-wrap style1 mb-30">
            <div ref={ref1} className={`blog-card style2 ${inView1 ? 'fadeInUp delay-1' : ''} `} >
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_1} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">Technology</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/Technology">Regional Managers time management.</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/Technology">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg> </Link>
                </div>
                <div className="calendar">
                  <div className="date">20</div>
                  <div className="month">june</div>
                </div>
              </div>
            </div>
            <div ref={ref2} className={`blog-card style2 ${inView2 ? 'fadeInUp delay-2' : ''} `}>
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_2} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">Solutions</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/Solutions">Revitalising your people in a retail downturn</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/Solutions">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">28</div>
                  <div className="month">March</div>
                </div>
              </div>
            </div>
            <div ref={ref3} className={`blog-card style2 ${inView3 ? 'fadeInUp delay-4' : ''} `} >
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_3} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">UI/UX Design</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/UI-UX-Design">Organisationaly teams are just like families.</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/UI-UX-Design">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg></Link>
                </div>
                <div className="calendar">
                  <div className="date">16</div>
                  <div className="month">june</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-card-wrap style1 mb-30">
            <div ref={ref4} className={`blog-card style2 ${inView4 ? 'fadeInUp delay-1' : ''} `}>
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_4} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">Technology</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/Technology">Services that printing at you is important</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/Technology">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">30</div>
                  <div className="month">june</div>
                </div>
              </div>
            </div>
            <div ref={ref5} className={`blog-card style2 ${inView5 ? 'fadeInUp delay-2' : ''} `}>
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_5} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">Solutions</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/Solutions">That will help you get 1% better every day</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/Solutions">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">24</div>
                  <div className="month">March</div>
                </div>
              </div>
            </div>
            <div ref={ref6} className={`blog-card style2 ${inView6 ? 'fadeInUp delay-4' : ''} `} >
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_6} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">UI/UX Design</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/UI-UX-Design">A checklist to improve your daily routine</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/UI-UX-Design">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">17</div>
                  <div className="month">june</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-card-wrap style1">
            <div ref={ref7} className={`blog-card style2 ${inView7 ? 'fadeInUp delay-1' : ''} `} >
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_7} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">Technology</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/Technology">Principles UX that should be aware of winner</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/Technology">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">30</div>
                  <div className="month">june</div>
                </div>
              </div>
            </div>
            <div ref={ref8} className={`blog-card style2 ${inView8 ? 'fadeInUp delay-2' : ''} `} >
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_8} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">Solutions</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/Solutions">Awaited technology final change the world</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/Solutions">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">24</div>
                  <div className="month">March</div>
                </div>
              </div>
            </div>
            <div ref={ref9} className={`blog-card style2 ${inView9 ? 'fadeInUp delay-4' : ''} `} >
              <div className="blog-card-thumb style1">
                <img src={blogThumb3_9} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon"><img src={userIcon} alt="icon" /></span>
                    <span className="text">By Admin</span>
                  </div>
                  <div className="meta">
                    <span className="icon"><img src={tagIcon} alt="icon" /></span>
                    <span className="text">UI/UX Design</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link to="/blog/UI-UX-Design">Artificial intelligence that will blow your mind</Link>
                </h3>
                <div className="btn-wrapper">
                  <Link to="/blog/UI-UX-Design">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewbox="0 0 16 10" fill="none">
                    <path d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z" fill="#565656"></path>
                  </svg>
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">17</div>
                  <div className="month">june</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <BlogSection blogData={blogData} addGap={true}/>
    </>
  )
}

export default BlogPage
