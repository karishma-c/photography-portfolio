import * as React from 'react'
import camera from './../assets/images/camera-image.svg'
import location from './../assets/images/location.svg'
import {
    introduction,
    introContent,
    introText,
    introSubtext,
    district
} from './../styles/introduction.module.css'

const Introduction = () => {
    return (
        <div className={introduction}>
            <div className={introContent}>
                <h1 className={introText}>Vijay, Photographer</h1>
                <span><img src={camera} alt="cam"></img></span>
            </div>
            <div className={introSubtext}>
                <span><img src={location} alt="loc"></img></span>
                <h4 className={district}>Salem, TamilNadu</h4>
            </div>
        </div>
    )
  }
  
export default Introduction