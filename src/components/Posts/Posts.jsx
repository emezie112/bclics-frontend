import React, {useState} from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = ({imgModal, setImageNum ,setImgModal}) => {
  const handleClick = (index) => {
    setImageNum(index)
    setImgModal(!imgModal)
  }
  return (
    <div className="Posts">
        {PostsData.map((post, index)=>{
            return  <div key={index} onClick={() => handleClick(index)}><Post data={post}  /></div>
        })}
    </div>
  )
}

export default Posts