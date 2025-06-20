'use client'
import React, { useState } from 'react';
import "../styles/artists.css"

const Artists = () => {
    const [currentArtist, setCurrentArtist] = useState(0);

    const artistsData = [
        {
            name: "ETHAN WADE",
            title: "PROFESSIONAL TATTOO ARTIST | EXPERIENCE 10+ YEARS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.",
            image: "/3.webp"
        },
        {
            name: "SARAH MARTINEZ",
            title: "MANDALA SPECIALIST | EXPERIENCE 8+ YEARS",
            description: "Expert in intricate mandala designs and geometric patterns. Creates stunning spiritual and meditative tattoo art with precision and creativity that transforms skin into canvas.",
            image: "/3.webp"
        },
        {
            name: "MIKE THOMPSON",
            title: "TRIBAL ARTIST | EXPERIENCE 12+ YEARS",
            description: "Master of traditional and modern tribal tattoo styles. Specializes in bold, powerful designs that tell stories through ancient art forms and cultural heritage.",
            image: "/3.webp"
        },
        {
            name: "ALEX JOHNSON",
            title: "REALISTIC PORTRAIT ARTIST | EXPERIENCE 9+ YEARS",
            description: "Creates lifelike portraits and realistic tattoos with incredible attention to detail. Transforms precious memories into permanent masterpieces on skin.",
            image: "/3.webp"
        }
    ];

    const nextArtist = () => {
        setCurrentArtist((prev) => (prev + 1) % artistsData.length);
    };

    const prevArtist = () => {
        setCurrentArtist((prev) => (prev - 1 + artistsData.length) % artistsData.length);
    };

    return (
        <section className="artists-section">
            <div className="artists-container">
                <div className="artists-header">
                   <div className='artists-heading-container'> <h1 className="artists-title">MEET OUR ARTISTS</h1>
                        <img src="bottomdesign.png" alt="bottom effect" className="about-heading-img" /></div>        
                </div>
                <div className="artist-showcase-wrapper">
                    <div className="artist-showcase">

                        <div className="artist-image-container">
                            <div className="image-torn-top"></div>
                            <img
                                src={artistsData[currentArtist].image}
                                alt={artistsData[currentArtist].name}
                                className="artist-image"
                            />
                            <div className="image-torn-bottom"></div>
                        </div>  
                        <div className="artist-info">
                            <h2 className="artist-name">{artistsData[currentArtist].name}</h2>
                            <p className="artist-title">{artistsData[currentArtist].title}</p>
                            <p className="artist-description">{artistsData[currentArtist].description}</p>
                        </div>
                    </div>             
                </div>
                <div className="navigation-container">
                    <button className="nav-arrow left" onClick={prevArtist}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="dots-container">
                        {artistsData.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentArtist ? 'active' : ''}`}
                                onClick={() => setCurrentArtist(index)}
                            />
                        ))}
                    </div>
                    <button className="nav-arrow right" onClick={nextArtist}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                
            `}</style>
        </section>
    );
};

export default Artists;