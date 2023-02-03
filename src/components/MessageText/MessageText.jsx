import React from 'react'
import './MessageText.css'
import img1 from "../../img/img1.png";
import { UilPlusSquare } from '@iconscout/react-unicons'
import Icons from '../Icons/Icons';

const MessageText = () => {
  return (
      <div className="boxb">
          <div className="MessageText">
              
              <div className="position">
                <img src={img1} alt="" />
                <span>AndrewThomas</span>
              </div>

              <div className="word">
                <h5>online</h5>
              </div>
              
          </div>
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />

          <div className='Bubbles'>
              <div className='MessageBubble1'>
               <span> Hello bro how are you doing</span>
              
               </div>

             <div className='MessageBubble2'>
               <span> I'm good bro you?</span>
              
              </div>
            
          </div>


      <div className="IcoT">
          <div className='input_text'>
              <span><button className="button fc-button Span"> + </button></span>
              <input type="text" name="text" placeholder="       Message " id="" />
            <button className="button fc-button"> send </button>
        </div>
        <div className="Ic">
          <Icons />
        </div>
          
        </div>
          
    </div>
  )
}

export default MessageText