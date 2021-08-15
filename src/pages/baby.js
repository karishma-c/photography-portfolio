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
    imageDiv
} from './../styles/babies.module.css'

const BabyPage = () => {
    return (
      <Layout>
        <Navbar></Navbar>
        <div className={babyImageSection}>
            <h1 className={heading}>Babies</h1>
            <div className={imageSection}>
                <div className={imageDiv}>
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
      </Layout>
    )
  }
  
  export default BabyPage