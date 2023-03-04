import React from 'react'
import './MessageCard.css'
import { Followers } from '../../Data/FollowersData'
import { Link } from 'react-router-dom'
import { UilSearch } from '@iconscout/react-unicons'

const MessageCard = () => {
  return (
    <div className="MessageCard">

        <div className="Search">
                    <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                    <div className="s-icon">
                       <UilSearch />
                    </div>
          </div>
          
        <h2>Chat With people You're Following</h2>

        {Followers.map((follower, id)=>{
            return (
                <>
                <Link style={{ textDecoration: "none", color: "inherit"}} to='/chat'>
                    
                <div className="Messages">
                    <div className="MessagesCont">
                        <img src={follower.img} alt="" className="MessagesImage" />
                            <div className="MessagesName">
                                <div className="MessagesNameInner">
                                    <span>{follower.username}</span> 
                                    <div>1</div>
                                    <h5 className="MessagesNameOnline"> online</h5>
                                    
                                </div>
                              
                               <span>Hello how you doing jjfhfhdhhysshhshshshsh djdjdkddkssskskskkuhshshhh...</span>
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

export default MessageCard