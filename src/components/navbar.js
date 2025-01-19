import React from 'react'
import '../components/navbar.css'
import search from '../Images/search.png'
import notification from '../Images/notification.png'
import profile from '../Images/profile.png'
import setting from '../Images/setting.png'
import user from '../Images/friends.png'
import flag from '../Images/uk.png'
import menu1 from '../Images/hamburger.png'



function navbar({toggleMenu}) {
  return (
    <div className='navBody'>
      <div className="leftside">
        <img src={menu1} alt="" className="menu1" onClick={toggleMenu} />
        <img src={search} alt="" className="search" />
        <input type="text" className='searchBox' />
      </div>
      <div className="rightside">
        <img src={flag} alt="" className="flag" />
        <img src={notification} alt="" className="notification" />
        <img src={user} alt="" className="user" />
        <img src={setting} alt="" className="setting" />
        <img src={profile} alt="" className="profile" />
      </div>
    </div>
  )
}

export default navbar
