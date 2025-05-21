import React from 'react'
import { blogThumb1_1, blogThumb1_2, calendar, fireIcon, FolderIcon, userIcon } from '../assets'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const BlogSection = ({ blogData, addGap }) => {

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
        <section className={`blog-section ${addGap ? 'section-padding-3' : 'section-padding'} fix`} id='blog'>
            <div className="container">
                <div  className="blog-wrapper style1">

                    <div className="section-title text-center mxw-685 mx-auto">
                        {!addGap &&
                            <motion.div
                                className={`subtitle `}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                Our Blog <img src={fireIcon} alt="icon" />
                            </motion.div>
                        }

                        <motion.h2
                            className={`title `}
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}

                        >
                            Recent Articles And Latest Blog
                        </motion.h2>
                    </div>
                    <div className="row gy-5">

                        {blogData?.map((blog, index) => (
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <motion.div
                                    className={`blog-card style1 img-srinck`}
                                    initial={{ y: 80, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-50px" }}

                                >
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
                                </motion.div>
                            </div>

                        ))}




                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
