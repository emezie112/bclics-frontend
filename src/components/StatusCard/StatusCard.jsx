import React from 'react'
import './StatusCard.css'
import { Followers } from '../../Data/FollowersData'
import { Link } from 'react-router-dom'
import { UilSearch } from '@iconscout/react-unicons'
import img1 from "../../img/img1.png";

const StatusCard = () => {
  return (
    <div className="StatusCard">

        <div className="Search">
                    <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                    <div className="s-icon">
                       <UilSearch />
                    </div>
          </div>

            <div className="Message">
                   <div className="MessageCont">
                  <img src={img1} alt="" className="MessageImage" />
                  <div className='add'>+</div>
                            <div className="MessageName">
                                <div className="MessageNameInner">
                                    <span>My status</span>
                                    
                                </div>
                              
                            {/* Number of status posted */}
                            <span>Tap to add status update</span>
                        </div>
                    </div>
            </div>
          
        <h2> View Status of those You are following </h2>

        {Followers.map((follower, id)=>{
            return (
                <>
                <Link style={{ textDecoration: "none", color: "inherit"}} to='/statusimg'>
                    
                <div className="Message">
                    <div className="MessageCont">
                        <img src={follower.img} alt="" className="MessageImage" />
                            <div className="MessageName">
                                <div className="MessageNameInner">
                                    <span>{follower.username}</span>
                                        
                                    {/* Number of status posted */}
                                    <div>5</div>
                                    
                                </div>
                              
                            <span> Today, 4:41 AM</span>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
                    
                </>
            )
        })}
    </div>
  )
}

export default StatusCard