import React from "react";

function Header(){
    return(<div className='header'>
      <p>DEV@Deakin</p>
      <input type="text" placeholder="Search.."></input>
      <button type="button">Post</button> 
      <button type="button">Login</button>
    </div>)
}

export default Header