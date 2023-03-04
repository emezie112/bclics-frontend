import React from 'react'
import './Video.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import Posts from '../../components/PostsR/PostsR'
import Icons from '../../components/Icons/Icons'


const Video = () => {
  return (
    <div className='Video'>
      <div className="logss">
        <LogoSearch />
      </div>
      
      <div className="Pos">
        <div className="logg">
          <LogoSearch />
        </div>
        <Posts />
      </div>
        
       <div className="Icoms">
        <Icons/>
       </div>
      
    </div>
  )
}

export default Video