import React from 'react'
import Icons from '../Icons/Icons'
import Likes from '../Likes/Likes'
import LogoSearch from '../LogoSearch/LogoSearch'
import { UilSearch } from '@iconscout/react-unicons'
import './LikesPage.css'

const LikesPage = () => {
    return (
      
      <div className='LikesPage'>

        <LogoSearch />
        
        <div>
            <div className="Search">
                    <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                    <div className="s-icon">
                       <UilSearch />
                    </div>
                </div>    
            <Likes/>
        </div>
        
        <div className="SIcoms">
          <Icons/>
        </div>
          
            

        
    </div>
  )
}

export default LikesPage