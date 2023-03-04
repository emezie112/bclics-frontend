import React from 'react'
import PostsR from '../PostsR/PostsR'
import PostShare from '../PostShare/PostShare'
import './PostSideR.css'
const PostSideR = () => {
  return (
   <div className="PostSideR">
       <PostShare/>
       <PostsR/>
   </div>
  )
}

export default PostSideR