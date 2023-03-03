import React from 'react'
import './Post.css'
// import { UilHeart } from '@iconscout/react-unicons'
// import { UilCommentChartLine } from '@iconscout/react-unicons'
// import { UilShareAlt } from '@iconscout/react-unicons'
// import { UilEye } from '@iconscout/react-unicons'
// import { Link } from 'react-router-dom'


const Post = ({data}) => {
  return (
    <div className="Post">
      <div className="imgclass" >
        <img src={data.img} alt="" />
        
      </div>
      
      
      {/* <div className="postReact">
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

         {/* Post Details */}
        {/* <div className="detail">
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
        </div> */}
    </div>
  )
}

export default Post