import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
  return (
    <div className='header-banner-section'>
        <div className="content">
            <div className="content-details">
                <h2>Order your favourite food here</h2>
                <p>Download the Source code of Food order website built with MongoDB, Express, React JS and Node JS. It includes the setup instruction document and setup video tutorial.</p>
                <div>
                    <button className='primary-btn'>
                        View 
                    </button>
                </div>
                {/* <div className="search_input">
                    <input type="text" className='input_feild h-full w-full' autoComplete='off'  />
                    <button className='btn_search'>Search</button>
                </div> */}

            </div>
            
        </div>

    </div>
  )
}

export default BannerSection