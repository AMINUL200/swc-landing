import React from 'react'
import { blogThumb1_1, blogThumb1_2, calendar, fireIcon, FolderIcon, userIcon } from '../assets'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';

const BlogSection = ({ blogData }) => {
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

                        {blogData?.map((blog, index) => (
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <div className={`blog-card style1 ${inView9 ? `fadeInUp ${getDelayClass(index)}` : ''}`}>
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
    )
}

export default BlogSection
