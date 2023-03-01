import React from 'react'
import "./imageModal.css"
import { PostsData } from '../../Data/PostsData'

const ImageModal = ({imageNum, setImgModal, imgModal}) => {
  return (
    <div className='pic-wrapper'>
        <h2 onClick={() => setImgModal(!imgModal)}>X</h2>
        <div className='picc'><img src={PostsData[imageNum].img} alt='pic' /></div>
    </div>
  )
}

export default ImageModal