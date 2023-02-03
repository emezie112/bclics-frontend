import React from 'react'
import './Likes.css'

import { Followers } from '../../Data/FollowersData'
const Likes = () => {
  return (
    <div className="Likes">
        <h2>Who liked your post</h2>

        {Followers.map((follower, id)=>{
            return (
                <>
                <div className="liker">
                    <div>
                        <img src={follower.img} alt="" className='LikerImage' />
                        <div className="Likername">
                            
                                <span>{follower.username}</span>
                                <h4> liked your post </h4>
                        </div>
                        </div>
                        
                    </div>
                 </>
            )
        })}
    </div>
  )
}

export default Likes