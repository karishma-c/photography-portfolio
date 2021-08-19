import * as React from 'react'

import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import One from './../assets/images/babies/1.jpg'
import Two from './../assets/images/babies/2.jpg'
import Three from './../assets/images/babies/3.jpg'
import Four from './../assets/images/babies/4.jpg'
import Five from './../assets/images/babies/5.jpg'
import Six from './../assets/images/babies/6.jpg'
import leftArrow from './../assets/images/left-arrow.svg'
import rightArrow from './../assets/images/right-arrow.svg'
import {
    babyImageSection,
    heading,
    imageSection,
    imageDiv,
    modal,
    modalContent,
    modalContainer,
    modalImage,
    closeIcon,
    image, 
    prev,
    next
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
                    <div className={modalContainer}>
                        <img id="left-arrow" className={prev} src={leftArrow} alt="image"></img>
                        <div className={modalImage}>
                           <img id="image" className={image} src="" alt="image"></img>
                        </div>
                        <img id="right-arrow" className={next} src={rightArrow} alt="image"></img>
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
        let imageDiv = document.querySelectorAll("#Imagediv");
        let leftArrow = document.getElementById("left-arrow");
        let rightArrow = document.getElementById("right-arrow");
        rightArrow.addEventListener("click", () => {
            next();
        })
        leftArrow.addEventListener("click", () => {
            previous();
        })
        var num=0;
        function next()
        {
            num++;
            //checking whether the new position of image is greater or equal to the no. of images we use
            if(num >= imageDiv.length)//images is the defined arary
            {
               num=0;
               //if the condition is true num is defined to hold to first image of the slider
            }
            Image.src=imageDiv[num].src;
        }
        function previous()
        {
            num--;
            //checking whether the new position of image is bfore or after the first image 
            if(num < 0)//images is the defined arary
            {
                num=imageDiv.length-1; //if the condition is true num is defined to hold to last image of the slider
            }
            Image.src=imageDiv[num].src;
        }
    }
    function hideModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
}
   
export default BabyPage

