import React from 'react'
import { Link } from 'react-router-dom'
import { UilBell } from '@iconscout/react-unicons'
import './LogoSearch.css'


const LogoSearch = () => {
  return (
    <div className="LogoSearch">

      <div className="brow">
       <div className="bclics">
          <Link style={{ textDecoration: "none", color: "inherit" }}
            to='/video'><h2>Bclics</h2></Link>
        
        </div>
        
        <div className="bell">
          <Link style={{ textDecoration: "none", color: "inherit" }}
            to='/notify'><UilBell/></Link>
        </div>
        <div className="num"><h6>15</h6></div>
       
      </div>

      <Link style={{ textDecoration: "none", color: "inherit" }}
        to='/advertise'>
        <button className="button L-button">
        Advertise
      </button>
      </Link>
      
    </div>
  );
}

export default LogoSearch