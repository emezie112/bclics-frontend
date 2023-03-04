import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import PostSideR from '../../components/PostSideR/PostSideR'
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
        <PostSideR />
      </div>

        
        <div className="rightSide">
         <RightSide/>
        </div>
    </div>
  )
}

export default Home