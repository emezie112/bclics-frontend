import React from 'react'
import Icons from '../Icons/Icons'
import LogoSearch from '../LogoSearch/LogoSearch'
import { UilSearch } from '@iconscout/react-unicons'
import './SharePage.css'
import Share from '../Share/Share'

const SharePage = () => {
    return (
      
      <div className='SharePage'>

        <LogoSearch />
        
        <div>
            <div className="Search">
                    <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                    <div className="s-icon">
                       <UilSearch />
                    </div>
                </div>    
            <Share/>
        </div>
        
        <div className="SIcoms">
          <Icons/>
        </div>
          
            

        
    </div>
  )
}

export default SharePage