import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
const PostSide = ({setImageNum, imgModal, setImgModal}) => {
  return (
   <div className="PostSide">
       <PostShare/>
       <Posts imgModal={imgModal} setImageNum={setImageNum} setImgModal={setImgModal}/>
   </div>
  )
}

export default PostSide