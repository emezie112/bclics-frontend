import React from 'react'
import './Views.css'

import { Followers } from '../../Data/FollowersData'
const Views = () => {
  return (
    <div className="Views">
        <h2>Who Viewed your post</h2>

        {Followers.map((follower, id)=>{
            return (
                <>
                <div className="liker">
                    <div>
                        <img src={follower.img} alt="" className='LikerImage' />
                        <div className="Likername">
                            
                            <span>{follower.username}</span>
                            <h4> Viewed your post </h4>
                        </div>
                    </div>
                        
                </div>
                 </>
            )
        })}
    </div>
  )
}

export default Views