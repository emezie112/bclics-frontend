import React from 'react'
import Icons from '../Icons/Icons'
import LogoSearch from '../LogoSearch/LogoSearch'
import { UilSearch } from '@iconscout/react-unicons'
import './ViewsPage.css'
import Views from '../Views/Views'

const ViewsPage = () => {
    return (
      
      <div className='ViewsPage'>

        <LogoSearch />
        
        <div>
            <div className="Search">
                    <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                    <div className="s-icon">
                       <UilSearch />
                    </div>
                </div>    
            <Views/>
        </div>
        
        <div className="SIcoms">
          <Icons/>
        </div>
          
            

        
    </div>
  )
}

export default ViewsPage