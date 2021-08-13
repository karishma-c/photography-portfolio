import * as React from 'react'
import {
    introduction,
    introContent,
    introText,
    subText,
    bookBtn,
    introImage
} from './../styles/introduction.module.css'

const Introduction = () => {
    return (
        <div className={introduction}>
            <div className={introContent}>
                <h1 className={introText}>Vijay</h1>
                <h4 className={subText}>Photography</h4>
                <button className={bookBtn}><a href="">Book Now</a></button>
            </div>
            <div className={introImage}>
                <img src="" alt="image"></img>
            </div>
        </div>
    )
  }
  
export default Introduction