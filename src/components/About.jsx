import React from 'react';
import "../styles/about.css";

function About() {
    return (
        <section className="about">
            <div className="about-heading-container ">
                <h1 className="about-heading">About Us</h1>
                <img src="bottomdesign.png" alt="bottom effect" className="about-heading-img" />
            </div>
            <div className='content-wrapper'>

                <div className='image-wrapper'>

                    <img src="/torn-bootom.png" alt="Torn Top" className="torn top" />


                    <img src="/5.jpg" alt="Tattooed Person" className="about-image" />


                    <img src="/torn-bootom.png" alt="Torn Bottom" className="torn bottom" />
                </div>

                <div className='content-section'>
                    <h1 className='main-title'>perfection that is forever</h1>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laborum veniam, minima magnam itaque nemo consectetur voluptatem. Ab dolorum, dolore qui aspernatur corrupti nihil facere earum rem vero reiciendis nobis distinctio in Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore nam officia atque iure tenetur impedit, ex quam illo odio ipsum repellendus pariatur quod, veritatis voluptatem sequi debitis ad fugit..</p>
                        <div>
                            <img src="/2.png" alt="Tattoo Icon" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
