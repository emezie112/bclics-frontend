import React from 'react'
import Icons from '../Icons/Icons'
import LogoSearch from '../LogoSearch/LogoSearch'
import { UilSearch } from '@iconscout/react-unicons'
import './CommentsPage.css'
import Comments from '../Comments/Comments'

const CommentsPage = () => {
    return (
      
      <div className='CommentsPage'>

        <LogoSearch />
        
        <div>
            <div className="Search">
                    <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                    <div className="s-icon">
                       <UilSearch />
                    </div>
                </div>    
            <Comments/>
        </div>
        
        <div className="SIcoms">
          <Icons/>
        </div>
          
            

        
    </div>
  )
}

export default CommentsPage