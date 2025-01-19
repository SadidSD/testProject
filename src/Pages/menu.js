import React from 'react'
import '../Styles/menu.css'
import app from '../Images/application.png'
import shop from '../Images/shopping.png'
import analytics from '../Images/analytics.png'
import banking from '../Images/bank.png'
import booking from '../Images/booking.png'
import file from '../Images/file.png'
import user from '../Images/friends.png'
import product from '../Images/box.png'
import order from '../Images/checkout.png'
import invoice from '../Images/invoice.png'
import blog from '../Images/blog.png'
import job from '../Images/suitcase.png'
import tour from '../Images/tourism.png'
import fileManager from '../Images/folder.png'
import mail from '../Images/email.png'
import chat from '../Images/chat.png'
import calendar from '../Images/calendar.png'



function Menu({menuOpen}) {
    console.log(menuOpen)
  return (<>{menuOpen && (
        <div className="menuBody" style={{position:'fixed', zIndex:10}}>
            <p className="overview">OVERVIEW</p>
            <div className="option">
                <img src={app} alt="" className="icon" />
                <p className="text">Application</p>
            </div>
            <div className="option">
                <img src={shop} alt="" className="icon" />
                <p className="text">E-Commerce</p>
            </div>
            <div className="option">
                <img src={analytics} alt="" className="icon" />
                <p className="text">Analytics</p>
            </div>
            <div className="option">
                <img src={banking} alt="" className="icon" />
                <p className="text">Banking</p>
            </div>
            <div className="option">
                <img src={booking} alt="" className="icon" />
                <p className="text">Booking</p>
            </div>
            <div className="option">
                <img src={file} alt="" className="icon" />
                <p className="text">File</p>
            </div>
            <p className="management">MANAGEMENT</p>
            <div className="option">
                <img src={user} alt="" className="icon" />
                <p className="text">User</p>
            </div>
            <div className="option">
                <img src={product} alt="" className="icon" />
                <p className="text">Product</p>
            </div>
            <div className="option">
                <img src={order} alt="" className="icon" />
                <p className="text">Order</p>
            </div>
            <div className="option">
                <img src={invoice} alt="" className="icon" />
                <p className="text">Invoice</p>
            </div>
            <div className="option">
                <img src={blog} alt="" className="icon" />
                <p className="text">Blog</p>
            </div>
            <div className="option">
                <img src={job} alt="" className="icon" />
                <p className="text">Job</p>
            </div>
            <div className="option">
                <img src={tour} alt="" className="icon" />
                <p className="text">Tour</p>
            </div>
            <div className="option">
                <img src={fileManager} alt="" className="icon" />
                <p className="text">File Manager</p>
            </div>
            <div className="option">
                <img src={mail} alt="" className="icon" />
                <p className="text">Mail</p>
            </div>
            <div className="option">
                <img src={chat} alt="" className="icon" />
                <p className="text">Chat</p>
            </div>
            <div className="option">
                <img src={calendar} alt="" className="icon" />
                <p className="text">Calendar</p>
            </div>
        </div>
      )}</>
    
  )
}

export default Menu
