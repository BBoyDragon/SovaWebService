// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <h2>Галерея</h2>
            <div className="gallery-images">
                <img src="image1.jpg" alt="Гимнастика 1" />
                <img src="image2.jpg" alt="Гимнастика 2" />
                <img src="image3.jpg" alt="Гимнастика 3" />
            </div>
        </section>
    );
}

export default Gallery;
