import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { blogThumb1_1, blogThumb1_2, blogThumb3_1, blogThumb3_2, blogThumb3_3, blogThumb3_6, calendar, fireIcon, FolderIcon, teamThumb1_2, userIcon } from '../assets'
import { AppContext } from '../context/AppContext'
import { useInView } from 'react-intersection-observer'
import { motion } from "motion/react"
import { tr } from 'framer-motion/m'
import Loader from '../component/Loader'
import Preloader from '../component/Preloader'

// const {id} = useParams()
const BlogDetails = () => {
  const { blogData, blogDataInfo, blogDetailsLoading } = useContext(AppContext);
  const { id } = useParams()
  // const [blogInfo, setBlogInfo] = useState(null);
  const [blogDetailsData, setBlogDetailsData] = useState()
  const [recentPost, setRecentPost] = useState([]);



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




  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const data = await blogDataInfo(id);
        if (data) {
          console.log(data.blogs[0]);
          setBlogDetailsData(data.blogs[0]);
          setRecentPost(data.recent_posts || []);

        } else {
          setError("Failed to load blog details");
        }
      } catch (err) {
        setError("An error occurred while loading the blog");
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (blogDetailsLoading) {
    return <Preloader />
  }
  console.log(recentPost);



  return (
    <>
      {/* <BreadCumbSection /> */}

      <div className='blog-details-section'>
        <div className="w-layout-block-container container w-container">
          <div className="blog-details-section-wrap">

            <div className="blog-post-content-box">
              <div className="meta-text-block text-center">
                {/* <div className="blog-category-box">
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="blog-category">{blogDetailsData?.catagory_name}
                  </motion.div>
                </div> */}
                <motion.div
                  initial={{ x: 80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="blog-date text-dark">
                  {formatDate(blogDetailsData?.date)}
                </motion.div>
              </div>
              <div className="blog-post-title-block text-center">
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="blog-detail-title">
                  {blogDetailsData?.title}
                </motion.div>
              </div>
              <div className="blog-details-desc-box">
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="blog-desc">
                  {blogDetailsData?.paragraph1}
                </motion.p>
              </div>
              <div className="blog-details-thumbnail-box">
                <div ref={ref1} className="blog-single-image-box">
                  <img
                    className={`blog-single-image ${inView1 ? 'img-custom-anim-right delay-2' : ''}`}
                    src={`https://skilledworkerscloud.co.uk/media/blog/${blogDetailsData?.image}`} alt=""
                  />
                </div>
              </div>
            </div>
            <div className="blog-content-wrap">
              <div className="w-layout-grid blog-detail-grid">
                <div className="blog-grid">
                  <div className="blog-detail-content-block">
                    <div className="blog-rich-text-block-1">
                      <div className="blog-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: blogDetailsData?.content }} />


                    </div>
                  </div>
                  <div className="blog-sidebar">
                    <div className="blog-sidebar-contnent-block recnt-post">
                      <div className="blog-author-detail-box">
                        <div className="blog-author-thumbnail">
                          <h2 className='title text-start'>Recent Post</h2>
                        </div>
                        <div className="blog-author-box text-start">

                          {recentPost?.map((post, index) => (
                            <Link key={index} to={`/blog/${post.title}`}>
                              <img src={`https://skilledworkerscloud.co.uk/media/blog/${post.image}`} alt="" />
                              <motion.p
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay:index * 0.2 }}
                                viewport={{ once: true, margin: "-20px" }}
                              >
                                {post.title}
                              </motion.p>
                            </Link>
                          ))}



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
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              HRMS Software
                            </motion.p>

                          </Link>
                          <Link to='#'>
                            <img src={blogThumb1_2} alt="" he />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              HR File Prepareation
                            </motion.p>
                          </Link>

                          <Link to='#'>
                            <img src={blogThumb3_1} alt="" />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              File Manager
                            </motion.p>
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_2} alt="" />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              Software Devlopment
                            </motion.p>
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              Business Consultancy
                            </motion.p>
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              Web/ Profile Development
                            </motion.p>
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              Skilled Workers Industry
                            </motion.p>
                          </Link>
                          <Link to='#'>
                            <img src={blogThumb3_3} alt="" />
                            <motion.p
                              initial={{ x: 80, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true, margin: "-40px" }}
                            >
                              Recruitment
                            </motion.p>
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

      {/* <section className="blog-section section-padding fix">
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
      </section> */}

    </>

  )
}

export default BlogDetails


export const blogdataInfo = async ({ params }) => {
  const { id } = params;
  try {
    const blogDetailsRes = await fetch(`https://skilledworkerscloud.co.uk/website-api/api/controller/blog_details.php?blog=${id}`);
    const blogDetailsJson = await blogDetailsRes.json(); // <-- ADD await here

    if (blogDetailsJson.flag === 1 && blogDetailsJson.status === 200) {
      return blogDetailsJson.data; // Assuming you want the first (and only) blog
    } else {
      return null;
    }

  } catch (error) {
    console.error("blog Details error", error);
    return null;
  }
}
