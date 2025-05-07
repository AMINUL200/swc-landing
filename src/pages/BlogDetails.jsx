import React from 'react'
import { useParams } from 'react-router-dom'
import { blogThumb3_6, teamThumb1_2 } from '../assets'
import BreadCumbSection from '../component/BreadCumbSection'

const BlogDetails = () => {
  const { id } = useParams()
  return (
    <>
      <BreadCumbSection />

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
                <div className="blog-single-image-box">
                  <img className='blog-single-image' src={blogThumb3_6} alt="" />
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
                        <h2>Driving sustainable innovation</h2>
                        <p>Sed nunc ac cras praesent varius at felis mauris. Enim dignissim pulvinar laoreet nibh elementum ultricies. Dignissim arcu molestie dui a. Libero ultrices est amet sed elit aliquam. Morbi viverra vitae volutpat rutrum. Vel vitae adipiscing tempor sed eu sit.</p>
                        <h2>Conclusion</h2>
                        <p>Tristique ultricies vitae suscipit aliquet vitae. Mauris egestas mattis tortor massa elementum eu. Scelerisque ultrices fusce elit fusce tincidunt duis sit cum eros. Ultrices nisl aenean in vel aliquam tellus tempus. Rhoncus magna aenean purus urna turpis rutrum non vestibulum pharetra. Arcu lobortis imperdiet diam velit fermentum libero. In ante viverra eu pellentesque commodo risus facilisi.</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-sidebar">
                    <div className="blog-sidebar-contnent-block">
                      <div className="blog-author-detail-box">
                        <div className="blog-author-thumbnail">
                          <img src={teamThumb1_2} className='blog-author-image' alt="" />
                        </div>
                        <div className="blog-author-box">
                          <h2 className="blog-author-name"> &nbsp; Jhon Doe</h2>
                          <p className="author-desc">Ornare et sem imperdiet dui quis viverra id.</p>
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
    </>

  )
}

export default BlogDetails
