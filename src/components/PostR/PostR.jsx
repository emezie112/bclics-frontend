import React from 'react'
import './PostR.css'
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentChartLine } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'


const PostR = ({data}) => {
  return (
    <div className="PostR">
      <div className="imgclassw" >
        <img src={data.img} alt="" />
        
      </div>
      
      
      <div className="postReactw">
        <img src={data.img} alt="" />
        <div>
          <i><UilHeart /></i>

          <Link style={{ textDecoration: "none", color: "inherit" }} to='/likes'>
            <span>
            {data.likes}
          </span></Link>
        
        </div>
        <div>
          <i><UilCommentChartLine /></i>
          {/* {   Comments  } */}
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/comments'>
            <span> 356 </span></Link>
          
        </div>

        <div>
          <i><UilEye/></i>
          {/* {   Shares   } */}
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/views'>
            <span>3000</span></Link>
          
        </div>
        <div>
          <i><UilShareAlt /></i>
          {/* {   Shares   } */}
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/share'>
            <span> 52 </span></Link>
          
        </div>
            
      </div>

         {/* PostR Details */}
        <div className="detailw">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
          </div>
    </div>
  )
}

export default PostR