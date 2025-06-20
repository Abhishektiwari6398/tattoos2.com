import React from 'react';
import "../styles/gallery.css";

const Gallery = () => {
    return (
        <section className="gallery-wrapper">

            {/* <img src="/torn-bootom.png" alt="Top Torn" className="torn-bg top" /> */}


            <div className="gallery-container">
                <div className='gallery-heading-container'>
                <h1 className="gallery-heading">Gallery</h1>
                                       <img src="bottomdesign.png" alt="bottom effect" className="about-heading-img" />
                                       </div>  
                <div className="gallery-images">
                    <img src="/3.webp" alt="Tattoo 1" />
                    <img src="/3.webp" alt="Tattoo 2" />
                    <img src="/3.webp" alt="Tattoo 3" />
                    <img src="/3.webp" alt="Tattoo 4" />
                    <img src="/3.webp" alt="Tattoo 5" />
                    <img src="/3.webp" alt="Tattoo 1" />
                    <img src="/3.webp" alt="Tattoo 2" />
                    <img src="/3.webp" alt="Tattoo 3" />
                  
                </div>
                <button className="view-more-btn">View More</button>
            </div>

{/* 
            <img src="/torn-bootom.png" alt="Bottom Torn" className="torn-bg bottom" /> */}
        </section>
    );
};

export default Gallery;
