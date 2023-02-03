import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">

      <div className="logss">
        <ProfileSide/>
      </div>
      
      <div className="Pos">
        <div className="logg">
          <ProfileSide/>
        </div>
        <PostSide />
      </div>
      
      <div className="rightSide">
        <RightSide/>
      </div>
        
    </div>
  )
}

export default Profile