import React from 'react'
import { Link } from 'react-router-dom'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import Icons from '../Icons/Icons'
import './FollowersBox.css'

const FollowersBox = () => {
    return (
      
      <div className='FollowersBox'>
        
        <div>
          <FollowersCard />
         <div className="more">
          <Link style={{ textDecoration: "none", color: "inherit" }} to='/follow'>
          <span> more...</span></Link>
         </div>
        </div>
        
        
          
            

        
    </div>
  )
}

export default FollowersBox