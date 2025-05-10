import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogThumb1_1, blogThumb1_2, blogThumb3_1, blogThumb3_2, blogThumb3_3, blogThumb3_6, calendar, fireIcon, FolderIcon, teamThumb1_2, userIcon } from '../assets'
import BreadCumbSection from '../component/BreadCumbSection'
import { AppContext } from '../context/AppContext'
import { useInView } from 'react-intersection-observer'

const BlogDetails = () => {
  const { blogData } = useContext(AppContext);
  const { id } = useParams()


  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref9, inView9] = useInView({ threshold: 0.1, triggerOnce: true });

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  // Animation delays for each blog card
  const getDelayClass = (index) => {
    const delays = ['delay-1', 'delay-2', 'delay-3'];
    return delays[index % delays.length];
  };


  return (
    <>
      {/* <BreadCumbSection /> */}

      <div className='blog-details-section'>
        <div className="w-layout-block-container container w-container">
          <div className="blog-details-section-wrap">

            <div className="blog-post-content-box">
              <div className="meta-text-block text-center">
                <div className="blog-category-box">
                  <div className="blog-category">{id}</div>
                </div>
                <div className="blog-date text-dark">February 28, 2025</div>
              </div>
              <div className="blog-post-title-block text-center">
                <div className="blog-detail-title">Future trends, today's insights</div>
              </div>
              <div className="blog-details-desc-box">
                <p className="blog-desc">
                  Tellus nibh sed est accumsan blandit. Aliquam sapien sed in tellus porta augue in tincidunt. Pulvinar morbi maecenas sed est feugiat eget nullam malesuada risus.
                </p>
              </div>
              <div className="blog-details-thumbnail-box">
                <div ref={ref1} className="blog-single-image-box">
                  <img className={`blog-single-image ${inView1 ? 'img-custom-anim-right delay-2':''}`}src={blogThumb3_6} alt="" />
                </div>
              </div>
            </div>
            <div className="blog-content-wrap">
              <div className="w-layout-grid blog-detail-grid">
                <div className="blog-grid">
                  <div className="blog-detail-content-block">
                    <div className="blog-rich-text-block-1">
                      <div className="blog-rich-text w-richtext">
                        <p>
                          Faucibus pharetra phasellus morbi duis tortor nunc. Suscipit morbi condimentum tellus lacus congue sit cum. Odio odio lorem nunc amet blandit velit habitant lectus lectus. Senectus ultrices laoreet felis pulvinar ipsum iaculis. Magna fringilla neque condimentum lorem. Lacus sit egestas aliquam pellentesque tortor et quis. Neque tellus egestas placerat et sem vitae mi.
                        </p>
                        <h2>the mindful tech consumer</h2>
                        <p>Diam dui eget egestas dapibus mi condimentum lacus amet tempor. Eu tempus est nullam malesuada risus ullamcorper risus. Nulla orci adipiscing tincidunt tellus in. Turpis ipsum ipsum montes vivamus amet volutpat sed magnis fames. Viverra hac lorem sed scelerisque cras in nibh ac sapien.</p>
                        <h2>Integrating mindfulness in tech</h2>
                        <p>Aliquet donec vehicula leo augue volutpat donec sed vel. Cras mi ut pharetra sit leo sed augue. Viverra eu enim aliquam semper. Odio id nec odio ultricies purus. Faucibus nisi ut vitae tortor cras</p>
                        <h2>Tech CSR and ethical standards</h2>
                        <p>Diam dui eget egestas dapibus mi condimentum lacus amet tempor. Eu tempus est nullam malesuada risus ullamcorper risus. Nulla orci adipiscing tincidunt tellus in. Turpis ipsum ipsum montes vivamus amet volutpat sed magnis fames. Viverra hac lorem sed scelerisque cras in nibh ac sapien.</p>
                        <blockquote>
                          “Lorem ipsum dolor sit amet consectetur. Odio tortor arcu urna nullam. Tellus duis ut quisque et nisi in faucibus. Ante ante amet nunc sed tellus eros amet facilisis.”
                        </blockquote>
                        <h2>Why Businesses Are Making the Shift</h2>
                        <p>Corporate environments are rapidly evolving, and remote/hybrid work models demand flexible tech infrastructure. Cross-platform apps serve as a bridge to connect systems, people, and workflows — regardless of location or device. This agility not only increases productivity but also enhances employee satisfaction and customer service quality</p>
                        <h2>Driving sustainable innovation</h2>
                        <p>Sed nunc ac cras praesent varius at felis mauris. Enim dignissim pulvinar laoreet nibh elementum ultricies. Dignissim arcu molestie dui a. Libero ultrices est amet sed elit aliquam. Morbi viverra vitae volutpat rutrum. Vel vitae adipiscing tempor sed eu sit.</p>
                        <h2>Conclusion</h2>
                        <p>Tristique ultricies vitae suscipit aliquet vitae. Mauris egestas mattis tortor massa elementum eu. Scelerisque ultrices fusce elit fusce tincidunt duis sit cum eros. Ultrices nisl aenean in vel aliquam tellus tempus. Rhoncus magna aenean purus urna turpis rutrum non vestibulum pharetra. Arcu lobortis imperdiet diam velit fermentum libero. In ante viverra eu pellentesque commodo risus facilisi.</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-sidebar">
                    <div className="blog-sidebar-contnent-block recnt-post">
                      <div className="blog-author-detail-box">
                        <div className="blog-author-thumbnail">
                          {/* <img src={teamThumb1_2} className='blog-author-image' alt="" /> */}
                          <h2 className='title text-start'>Recent Post</h2>
                        </div>
                        <div className="blog-author-box text-start">
                          {/* <h2 className="blog-author-name"> &nbsp; Jhon Doe</h2>
                          <p className="author-desc">Ornare et sem imperdiet dui quis viverra id.</p> */}
                          <Link to='#'>
                            <img src={blogThumb1_1} alt="" />
                            <p> Future-Focused Performance Mangement: Shaping the Workforec of Tomorrow.</p>

                          </Link>
                          <Link to='#'>
                            <img src={blogThumb1_2} alt="" he />
                            Software Ecosystem Revamp for a Retail Chain
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_1} alt="" />
                            Essential Employment Law Updates for Small Business in the UK
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_2} alt="" />
                            Save Time, Reduce Errors, Stay Comliant with Our HRMS
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            Employ Mangement: The Key to a Successful Workforce
                          </Link>

                        </div>
                      </div>
                    </div>

                    <div className="blog-sidebar-contnent-block our-service">
                      <div className="blog-author-detail-box">
                        <div className="blog-author-thumbnail">
                          {/* <img src={teamThumb1_2} className='blog-author-image' alt="" /> */}
                          <h2 className='title text-start'>Our Services</h2>
                        </div>
                        <div className="blog-author-box text-start">
                          {/* <h2 className="blog-author-name"> &nbsp; Jhon Doe</h2>
                          <p className="author-desc">Ornare et sem imperdiet dui quis viverra id.</p> */}
                          <Link to='#'>
                            <img src={blogThumb1_1} alt="" />
                            <p> HRMS Software</p>

                          </Link>
                          <Link to='#'>
                            <img src={blogThumb1_2} alt="" he />
                            HR File Prepareation
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_1} alt="" />
                            File Manager
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_2} alt="" />
                            Software Devlopment
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            Business Consultancy
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                           Web/ Profile Development
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            Skilled Workers Industry
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            Recruitment
                          </Link>

                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <section className="blog-section section-padding fix" id='blog'>
        <div className="container">
          <div ref={ref9} className="blog-wrapper style1">
            <div className="section-title text-center mxw-685 mx-auto">

              <h2 className={`title ${inView9 ? 'fadeInUp delay-2' : ''}`} >Related Blog</h2>
            </div>
            <div className="row gy-5">

              {blogData?.map((blog, index) => (
                <div className="col-xl-4 col-md-6" key={blog.id}>
                  <div className={`blog-card style1 img-srinck ${inView9 ? `fadeInUp ${getDelayClass(index)}` : ''}`}>
                    <div className="thumb">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="body">
                      <div className="tag-meta">
                        <img src={FolderIcon} alt="icon" />
                        {blog.catagory}
                      </div>
                      <h3>
                        <Link to={`/blog/${blog.catagory}`}>{blog.heading}</Link>
                      </h3>
                      <div className="blog-meta">
                        <div className="item child1">
                          <span className="icon">
                            <img src={userIcon} alt="icon" />
                          </span>
                          <span className="text">{blog.paragraph1}</span>
                        </div>
                        <div className="item">
                          <span className="icon">
                            <img src={calendar} alt="icon" />
                          </span>
                          <span className="text">{formatDate(blog.published_date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}




            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default BlogDetails
