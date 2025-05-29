import React from 'react'
import { blogThumb1_1, blogThumb1_2, calendar, fireIcon, FolderIcon, userIcon } from '../assets'
import { Link } from 'react-router-dom'
import FadeInUp from './AnimationCom/FadeInUp'

const BlogSection = ({ blogData, addGap }) => {

    // Format date function
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    // console.log(blogData);
    


    // Get only the first 3 blogs
    const limitedBlogData = blogData?.slice(1, 4);
    return (
        <section className={`blog-section ${addGap ? 'section-padding-3' : 'section-padding'} fix`} id='blog'>
            <div className="container">
                <div className="blog-wrapper style1">

                    <div className="section-title text-center mxw-685 mx-auto">
                        {!addGap &&
                            <FadeInUp
                                as='div'
                                delay={0.2}
                                className='subtitle'
                            >
                                Our Blog <img src={fireIcon} alt="icon" />
                            </FadeInUp>

                        }
                        <FadeInUp
                            as='h2'
                            delay={0.3}
                            className='title'
                        >
                            Recent Articles And Latest Blog
                        </FadeInUp>

                    </div>
                    <div className="row gy-5">

                        {limitedBlogData?.map((blog, index) => (
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <FadeInUp
                                    as='div'
                                    delay={index * 0.2}
                                    className='blog-card style1 img-srinck'
                                >
                                    <div className="thumb">
                                        <img src={`https://skilledworkerscloud.co.uk/media/blog/${blog.image}`} alt={blog.title} />
                                    </div>
                                    <div className="body">
                                        <div className="tag-meta">
                                            <img src={FolderIcon} alt="icon" />
                                            {blog.category_id}
                                        </div>
                                        <h3>
                                            <Link to={`/blog/${blog.title}`}>{blog.title}</Link>
                                        </h3>
                                        <div className="blog-meta">
                                            <div className="item child1">
                                                <span className="icon">
                                                    <img src={userIcon} alt="icon" />
                                                </span>
                                                <span className="text">{blog.link_name}</span>
                                            </div>
                                            <div className="item">
                                                <span className="icon">
                                                    <img src={calendar} alt="icon" />
                                                </span>
                                                <span className="text">{formatDate(blog.date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInUp>

                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
