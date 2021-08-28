import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
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
                <Row>
                    <Col className="col-12 col-sm-10 col-md-8 mx-auto col-lg-6 col-xl-6 p-0">
                        <div className={babyCard} onClick={handleSubmit}>
                            <img src={baby} alt="image"></img>
                            <div className={bottomCenter}>Baby</div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-10 col-md-8 mx-auto col-lg-6 col-xl-6 p-0">
                        <div className={weddingCard} onClick={handleSubmit}>
                            <img src={couples} alt="image"></img>
                            <div className={bottomCenter}>Wedding</div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-10 col-md-8 mx-auto col-lg-6 col-xl-6 p-0">
                        <div className={modalCard} onClick={handleSubmit}>
                            <img src={modal} alt="image"></img>
                            <div className={bottomCenter}>Modal</div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-10 col-md-8 mx-auto col-lg-6 col-xl-6 p-0">
                        <div className={natureCard} onClick={handleSubmit}>
                            <img src={nature} alt="image"></img>
                            <div className={bottomCenter}>Nature</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )

}
  
export default Gallery