import React from 'react'
import './Share.css'

import { Followers } from '../../Data/FollowersData'
const Share = () => {
  return (
    <div className="Share">
        <h2>Who Shared your post</h2>

        {Followers.map((follower, id)=>{
            return (
                <>
                <div className="liker">
                    <div>
                        <img src={follower.img} alt="" className='LikerImage' />
                        <div className="Likername">
                            
                          <span>{follower.username}</span>
                          <h4> shared your post </h4>
                        </div>
                        </div>
                        
                    </div>
                 </>
            )
        })}
    </div>
  )
}

export default Share