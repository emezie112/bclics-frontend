import React from 'react'
import './PostsR.css'
import { PostsData } from '../../Data/PostsData'
import PostR from '../PostR/PostR'
const PostsR = () => {
  return (
    <div className="PostsR">
        {PostsData.map((post, id)=>{
            return <PostR data={post} id={id}/>
        })}
    </div>
  )
}

export default PostsR