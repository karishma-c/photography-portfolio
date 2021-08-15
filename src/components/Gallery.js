import * as React from 'react'
import {navigate} from 'gatsby'
import baby from './../assets/images/baby-image.jpg'
import couples from './../assets/images/couples-image.jpg'
import modal from './../assets/images/modal-image.jpg'
import nature from './../assets/images/nature-image.jpg'
import {
    gallerySection, 
    gallery,
    babyCard,
    weddingCard,
    modalCard,
    natureCard,
    bottomCenter
} from './../styles/gallery.module.css'

const Gallery = () => {

    const handleSubmit = event => {
        event.preventDefault();
    
        navigate('/baby');
    };

    return (
        <div className={gallerySection}>
            <div className={gallery}>
                <div className={babyCard} onClick={handleSubmit}>
                    <img src={baby} alt="image"></img>
                    <div className={bottomCenter}>Baby</div>
                </div>
                <div className={weddingCard} onClick={handleSubmit}>
                    <img src={couples} alt="image"></img>
                    <div className={bottomCenter}>Wedding</div>
                </div>
                <div className={modalCard} onClick={handleSubmit}>
                    <img src={modal} alt="image"></img>
                    <div className={bottomCenter}>Modal</div>
                </div>
                <div className={natureCard} onClick={handleSubmit}>
                    <img src={nature} alt="image"></img>
                    <div className={bottomCenter}>Nature</div>
                </div>
            </div>
        </div>
    )

}
  
export default Gallery