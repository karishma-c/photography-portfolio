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
    myModal,
    modalContent,
    modalheader,
    modalBody,
    modalFooter,
} from './../styles/babies.module.css'


const BabyPage = () => {

    
    
    return (
        <Layout>
            
            <Navbar></Navbar>
            <div className={babyImageSection}>
                <h1 className={heading}>Babies</h1>
                <div className={imageSection}>
                    <div className={imageDiv} onClick={showModal}>                   
                        <img src={One} alt="1"></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Two} alt="2"></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Three} alt="3"></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Four} alt="4"></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Five} alt="5"></img>
                    </div>
                    <div className={imageDiv}>
                        <img src={Six} alt="6"></img>
                    </div>
                </div>
            </div>

            <div id="myModal" className={modal}>
                <div className={modalContent}>
                    <div className={modalheader}>
                    
                    <h2>Modal Header</h2>
                    </div>
                    <div className={modalBody}>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    </div>
                    <div className={modalFooter}>
                    <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )

    function showModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}
  
  
  export default BabyPage

