import React from 'react'

const Preloader = ({loading}) => {
    return (
        <div id="preloader" className="preloader" style={{display:`${!loading ?'none':''}`}}>
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="S" className="letters-loading">
                        S
                    </span>
                    <span data-text-preloader="W" className="letters-loading">
                        W
                    </span>
                    <span data-text-preloader="C" className="letters-loading">
                        C
                    </span>
                   
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
