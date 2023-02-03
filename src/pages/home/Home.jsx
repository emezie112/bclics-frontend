import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">

      <div className="logss">
        <div className="LogoS">
         <LogoSearch/>
        </div>
      </div>
      
      <div className="Pos">
        <PostSide />
      </div>

        
        <div className="rightSide">
         <RightSide/>
        </div>
    </div>
  )
}

export default Home