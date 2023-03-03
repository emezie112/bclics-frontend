import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../components/Icons/Icons'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import MessageCard from '../../components/MessageCard/MessageCard'
import MessageText from '../../components/MessageText/MessageText'
import { Followers } from '../../Data/FollowersData'
import './Message.css'

const Message = () => {
  return (

    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className='LogoSearch'><LogoSearch /></div>
        <div className="Chat-cover">
          <div className="row">
            <h2>Chats</h2>

            <Link style={{ textDecoration: "none", color: "inherit" }} to='/status'>
            <h2>Status</h2></Link>
          </div>
          <div className="Chat-list">

            <MessageCard/>


          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div className="IcoS">
          <Icons />
        </div>
          <div style={{ width: "90%", alignSelf: "flex-end" }} className="MessageT">
            <MessageText/>
          </div>
      </div>
    </div>
  )
}

export default Message