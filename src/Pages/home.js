import React from 'react'
import topLeft from '../Images/top-left.png'
import topRight from '../Images/top-right.webp'
import '../Styles/home.css'
import DoughnutChart from '../components/DoughnutChart'
import LineChart from '../components/LineChart'
import arrowUp from '../Images/arrowUp.png'
import arrowDown from '../Images/arrowDown.png'
import greenGrow from '../Images/greenGrow.png'
import redDown from '../Images/redDown.png'

function home({menuOpen}) {
  return (
    <div className='homeBody'>
      <div className="topRow" style={menuOpen?{marginLeft:'30px'}:{marginLeft:'130px'}}>
        <div className='topLeftDiv'>
            <img src={topLeft} alt="" className="topLeft" />
           <div className='intro'> <p className="welcome">Welcome Back 👋🏻<br/> User</p>
            <p className="subWelcome">If you are going to use a passage of Lorem Ipsum,you<br/>need to be sure there isnt anything</p>
            <button className="button">Go Now</button></div>
        </div>
        <img src={topRight} alt="" className="topRight" />
      </div>
      <div className="middleRow" style={menuOpen?{marginLeft:'30px'}:{marginLeft:'130px'}}>
        <div className="middleLeft">
            <p className="middleLeftTop">Total Active Users</p>
            <div className="middleLeftMiddle">
                <div className="middleLeftMiddleLeft">
                    <img src={arrowUp} alt="" className="arrowup" />
                    <p>+2.6%</p>
                </div>
            <img src={greenGrow} alt="" className="greenGrow" />
            </div>
            <p className="middleLeftLast">18,975</p>
        </div>
        <div className="middleMiddle">
        <p className="middleLeftTop">Total Installed</p>
            <div className="middleLeftMiddle">
                <div className="middleLeftMiddleLeft">
                    <img src={arrowUp} alt="" className="arrowup" />
                    <p>+0.6%</p>
                </div>
            <img src={greenGrow} alt="" className="greenGrow" />
            </div>
            <p className="middleLeftLast">4,976</p>
        </div>
        <div className="middleRight">
        <p className="middleLeftTop">Total Downloads</p>
            <div className="middleLeftMiddle">
                <div className="middleLeftMiddleLeft">
                    <img src={arrowDown} alt="" className="arrowup" />
                    <p>-0.1%</p>
                </div>
            <img src={redDown} alt="" className="greenGrow" />
            </div>
            <p className="middleLeftLast">675</p>
        </div>
      </div>
      <div className="lastRow"  style={{ marginLeft: menuOpen ? '30px' : '130px' }}>
        <div className="bottomLeft">
            <p className="currentDonwload">Current Download</p>
            <div className='pieChart'><DoughnutChart /></div>
        </div>
        <div className="bottomRight">
            <div className="divTop">
            <p className="areaInstalled">Area Installed</p>
            <select className="select">
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
            </select>
        </div>
        <LineChart/>
        </div>
      </div>
    </div>
  )
}

export default home;