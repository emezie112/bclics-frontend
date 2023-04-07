import React from 'react'
import "./imageModal.css"
import { PostsData } from '../../Data/PostsData'
import times from "../Icons/times.svg"

const ImageModal = ({imageNum, setImgModal, imgModal}) => {
  return (
    <div className='pic-wrapper'>
        <div className='close-icon-wrapper' onClick={() => setImgModal(!imgModal)}>
          <img src={times} alt='close-btn' />
        </div>
        <div className='picc'><img src={PostsData[imageNum].img} alt='pic' /></div>
    </div>
  )
}

export default ImageModal