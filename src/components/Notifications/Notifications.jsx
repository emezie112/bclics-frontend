import React from 'react'
import Icons from '../Icons/Icons'
import Likes from '../Likes/Likes'
import LogoSearch from '../LogoSearch/LogoSearch'
import './Notifications.css'
import Comments from '../Comments/Comments'

const Notifications = () => {
    return (
      
      <div className='Notifications'>

        <LogoSearch />
        
        <div>
            <Comments/> 
            <Likes/>
        </div>
        
        <div className="SIcoms">
          <Icons/>
        </div>
          
            

        
    </div>
  )
}

export default Notifications