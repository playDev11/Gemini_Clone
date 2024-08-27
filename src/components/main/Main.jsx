import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
     <div className="main">
        <div className="nav">
            <p>Gemini_clone</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Where can i call a desolate area</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Where can i call a desolate area</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Where can i call a desolate area</p>
                    <img src={assets.message_icon} alt="" />

                </div>
                <div className="card">
                    <p>Where can i call a desolate area</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main