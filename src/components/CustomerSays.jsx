import React from 'react';
import "../styles/customersays.css";


const CustomerSays = () => {
  return (
    <section className="customer-section">
     <div className='customer-heading-container'>
         <h1 className="customer-heading">Our Customer Says</h1>
      <img src="bottomdesign.png" alt="bottom effect" className="about-heading-img" />
      
     </div>

      <div className="testimonial-box">
        <p className="testimonial">
          &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ex in diam viverra, vitae pharetra neque porta. Cras tempor, sapien sit amet cursus volutpat, nulla magna fermentum orci.&rdquo Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae dignissimos cum modi excepturi ullam animi! Consequatur ipsum quidem veniam aspernatur mollitia et? Doloribus ipsum illum voluptatem, itaque nam deserunt. &ldquo;
        </p>
        <h3 className="customer-name">Milton Glan</h3>
        <p className="customer-title">CTO at Comosic Pvt Ltd</p>
      </div>
    </section>
  );
};

export default CustomerSays;
