import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini_clone</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult?
        
        <>
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can i help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Where can i call a desolate area</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Show me flights to Tokyo and give me ideas of things to do. How
              about Seoul too?
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              What are some tips to improve public speaking skills for
              beginners?
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Explain this code. Go step by step, explaining each line in detail
            </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        : <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
        </div>
      }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input } type="text" placeholder="Enter a Prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main