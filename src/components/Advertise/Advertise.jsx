import React from 'react' 
import { Link } from 'react-router-dom'
import { UilBell } from '@iconscout/react-unicons'
import './Advertise.css'
import Icons from '../Icons/Icons'

const Advertise = () => {
  return (
    <div className="Advertise">
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

      <div className="ads">
        <h1>Advertise with everyone on Bclics Social Media</h1>

        <h2>NOTE: any ads paid for, here will be seen by everyone on the social media</h2>


        <div className="adsPlan">
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />
          
          <span className="adsSpan">Advertise Daily, using the daily plan for #2,000 
            <span>you can only upload images or writeups for this plan</span>
            <div><button className="button L-button">
              Pay Now
            </button>
          </div>
          </span>
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />

          <span className="adsSpan">Advertise weekly, using the weekly plan for #9,700 
            <span>you can only upload images or writeups for this plan</span>
            <div><button className="button L-button">
              Pay Now
            </button>
          </div>
          </span>
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />

          <span className="adsSpan">Advertise Daily, using the daily plan for #3,500 
            <span>you can only videos for this plan</span>
            <div><button className="button L-button">
              Pay Now
            </button>
          </div>
          </span>
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />

          <span className="adsSpan">Advertise weekly, using the weekly plan for #17,500 
            <span>you can only upload images or writeups for this plan</span>
            <div><button className="button L-button">
              Pay Now
            </button>
          </div>
          </span>
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />
        </div>
      
      </div>

      <div className="SIcoms">
        <Icons/>
      </div>
    </div>
  )
}

export default Advertise