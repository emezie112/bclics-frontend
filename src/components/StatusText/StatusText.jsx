import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './StatusText.css'
import img1 from "../../img/postpic1.jpg";
import img2 from "../../img/postpic2.jpg";
import img3 from "../../img/postpic3.JPG";
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentChartLine } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'


const StatusText = () => {
  const images = [img1, img2, img3]
  const [currentImage, setCurrentImage] = useState(0)
  console.log(currentImage, "curr")
  return (
    <div className='statustext'>
      <div className='line-wrapper'>
        {images.map((line, index) => {
        return <div key={index} onClick={() => setCurrentImage(index)} className='line'>
          <svg fill="#fff" class="hamburger" viewBox="0 0 80 10" width="100">
            <rect class="line top" width="50" height="6" rx="5"></rect>
          </svg>
        </div>
      })}
      </div>
      <div className='statuspic-wrapper' >
        <img src={images[currentImage]} alt="" />       
      </div>

      {/* <div className="postReactw">
        <div>
          <i><UilHeart /></i>

          <Link style={{ textDecoration: "none", color: "inherit" }} to='/likes'>
            <span>
            {999}
          </span></Link>
        
        </div>
        <div>
          <i><UilCommentChartLine /></i>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/comments'>
            <span> 356 </span></Link>
          
        </div>

        <div>
          <i><UilEye/></i>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/views'>
            <span>3000</span></Link>
          
        </div>
        <div>
          <i><UilShareAlt /></i>
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/share'>
            <span> 52 </span></Link>
          
        </div>
            
      </div> */}

    </div>
  )
}

export default StatusText