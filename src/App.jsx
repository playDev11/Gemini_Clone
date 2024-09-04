import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/Main'

const App = () => (
  <div className='container' style={{
    display: 'flex',
    width: '100vw'
  }}>
    <Sidebar />
    <Main />
  </div>
)

export default App
