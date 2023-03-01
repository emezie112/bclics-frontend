import React from 'react'
import './Video.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import Posts from '../../components/Posts/Posts'
import Icons from '../../components/Icons/Icons'
import ImageModal from '../../components/ImageModal/ImageModal'


const Video = ({imageNum, setImageNum, imgModal, setImgModal}) => {
  return (
    <>
    {imgModal && <><ImageModal imgModal={imgModal} setImgModal={setImgModal} imageNum={imageNum} /></>}
    <div className='Video'>
      <div className="logss">
        <LogoSearch />
      </div>
      
      <div className="Pos">
        {/* <div className="logg">
          <LogoSearch />
        </div> */}
        <Posts imgModal={imgModal} setImageNum={setImageNum} setImgModal={setImgModal} />
      </div>
        
       <div className="Icoms">
        <Icons/>
       </div>
      
    </div>
    </>
  )
}

export default Video