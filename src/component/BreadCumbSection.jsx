import React from 'react'
import { breadCumbShape1, breadCumbShape2 } from '../assets'
import { Link } from 'react-router-dom'

const BreadCumbSection = ({page}) => {
    return (
        <div className="breadcumb-section fix">
            <div className="breadcumb-container-wrapper" data-bg-src="assets/images/bg/breadcumgBg.png">
                <div className="container">
                    <div className="shape1"><img src={breadCumbShape1} alt="shape" /></div>
                    <div className="shape2"><img src={breadCumbShape2} alt="shape" /></div>
                    <div className="breadcumb-wrapper">
                        <div className="page-heading">
                            <h1>{page}</h1>
                            <div className="links">
                                <Link to='/' >Home<span className="slash">/</span></Link>{page}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCumbSection
