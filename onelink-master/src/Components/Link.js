import React from "react";
import {BiMinusCircle,BiEdit}from 'react-icons/bi';

const link = {
  fav: "https://assets.production.linktr.ee/profile-preview/latest/images/default-profile-picture.png",
  name: "Github",
  url: "github.com",
};

function Link() {
  return (
    <div style={{ width: "550px", height: "100px", backgroundColor: "purple" ,display:"flex"}}>
      <img style={{ width: "30px", height: "30px" }} src={link.fav} alt="" />
      <div style={{height:"100px"}}>
        <div style={{ color: "white" }}>{link.name}</div>
        <div style={{ color: "white" }}>{link.url}</div>
      </div>
      <div>
          <BiEdit fill="white"/>
          <BiMinusCircle fill="white"/>
      </div>
    </div>
  );
}

export default Link;
