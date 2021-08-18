import * as React from 'react'

import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import One from './../assets/images/babies/1.jpg'
import Two from './../assets/images/babies/2.jpg'
import Three from './../assets/images/babies/3.jpg'
import Four from './../assets/images/babies/4.jpg'
import Five from './../assets/images/babies/5.jpg'
import Six from './../assets/images/babies/6.jpg'
import {
    babyImageSection,
    heading,
    imageSection,
    imageDiv,
    modal,
    modalContent,
    modalImage,
    closeIcon,
    image
} from './../styles/babies.module.css'
import './../styles/babies.module.css'


const BabyPage = () => {

    
    
    return (
        <Layout>
            
            <Navbar></Navbar>
            <div className={babyImageSection} >
                <h1 className={heading}>Babies</h1>
                <div className={imageSection}>
                    <div className={imageDiv}  >                   
                        <img src={One} alt="1" id="Imagediv" onClick={showmodal}></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Two} alt="2" id="Imagediv" onClick={showmodal}></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Three} alt="3" id="Imagediv" onClick={showmodal}></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Four} alt="4" id="Imagediv" onClick={showmodal}></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Five} alt="5" id="Imagediv" onClick={showmodal}></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Six} alt="6" id="Imagediv" onClick={showmodal}></img>
                    </div>
                </div>
            </div>

            <div id="myModal" className={modal}>
                <div id="modal-content" className={modalContent} >
                    <span id="close" className={closeIcon} onClick={hideModal}>&times;</span>
                    <div className={modalImage}>
                        <img id="image" className={image} src="" alt="image"></img>
                        
                    </div>
                </div>
            </div>
        
        </Layout>
    )

    function showmodal(e) {
        let Image = document.getElementById("image");
        Image.src = e.target.src;
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    function hideModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
}
  
  
export default BabyPage

