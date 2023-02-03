import React from "react";
import "./Icons.css";
import { UilPresentationPlay } from '@iconscout/react-unicons'
import { UilSearchAlt } from '@iconscout/react-unicons'
import { UilTransaction } from '@iconscout/react-unicons'
import { UilEnvelopeEdit } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="Icons">
      <div className="navIcons">
      <Link style={{ textDecoration: "none", color: "inherit"}} to='/video'><UilPresentationPlay /></Link>
      <Link style={{ textDecoration: "none", color: "inherit"}} to='/search'><UilSearchAlt /></Link> 
      <Link style={{ textDecoration: "none", color: "inherit"}} to='/myPage'><UilTransaction /></Link>  
      <Link style={{ textDecoration: "none", color: "inherit"}} to='/message'><UilEnvelopeEdit /></Link>  
      <Link style={{ textDecoration: "none", color: "inherit"}} to='/account'><UilUser/></Link>  
      </div>
          
    </div>
  );
};

export default Icons;
