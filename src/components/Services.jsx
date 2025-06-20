import React from 'react';
import "../styles/service.css";

function Services() {
    return (
        <section id="services" className="services">
            <div className="services-heading-container">
                <h1 className="services-heading">Our Services</h1>
                 <img src="bottomdesign.png" alt="bottom effect" className="about-heading-img" />
            </div>

            <div className="content-wrapper">
             
                <div className="services-nav">
                    {[
                        "Mandala Tattoos",
                        "Tribal Tattoos",
                        "Realistic Tattoos",
                        "Black Ink Tattoos",
                        "Piercing",
                        "Tattoo Removal"
                    ].map((title, idx) => (
                        <div className="service-item" key={idx}>
                            <div className="image-container">
                                <img src="/torn-bootom.png" alt="Torn Top" className="torn top" />
                                <img src="/3.webp" alt={title} className="service-image" />
                            </div>
                            <p>{title}</p>
                        </div>
                    ))}
                </div>

           
                <div className="featured-service">
                    <img src="/torn-bootom.png" alt="Torn Top" className="torn top" />
                    <img src="/3.webp" alt="Realistic Tattoos" className="featured-image" />
                    <div className="featured-text">
                        <h2>Realistic Tattoos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt velit eius blanditiis provident dolor hic aut necessitatibus nam fugiat, nobis vero quae sapiente vitae, impedit eum officiis exercitationem cum ad?.</p>
                        <button>Know More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
