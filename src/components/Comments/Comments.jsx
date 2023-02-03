import React from 'react'
import './Comments.css'

import { Followers } from '../../Data/FollowersData'
const Comments = () => {
  return (
    <div className="Comments">
        <h2>Who Commented your post</h2>

        {Followers.map((follower, id)=>{
            return (
                <>
                <div className="liker">
                    <div>
                        <img src={follower.img} alt="" className='LikerImage' />
                        <div className="Likername">
                                <span>{follower.username}</span>
                                <h4> commented on your post </h4>
                        </div>
                        </div>
                        
                    </div>
                 </>
            )
        })}
    </div>
  )
}

export default Comments