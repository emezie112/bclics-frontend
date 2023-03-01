import React from 'react'
import ImageModal from '../../components/ImageModal/ImageModal'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = ({imageNum, setImageNum, imgModal, setImgModal}) => {
  return (
    <>
      {imgModal && <><ImageModal imgModal={imgModal} setImgModal={setImgModal} imageNum={imageNum} /></>}
    <div className="Home">

      <div className="logss">
        <div className="LogoS">
         <LogoSearch/>
        </div>
      </div>
      
      <div className="Pos">
        <PostSide imgModal={imgModal} setImageNum={setImageNum} setImgModal={setImgModal} />
      </div>

        
        <div className="rightSide">
         <RightSide/>
        </div>
    </div>
  </>
  )
}

export default Home