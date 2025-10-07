import React from 'react'
import Navbar from './components/Navbar'
import Library from './components/Library/Library'
import Main from './components/RightMain/Main'
import Login from './components/Login/Login'


const App = () => {
  return (
    <>
    <Login />
    <Navbar />
    <div className="flex gap-2">
    <Library />
    <Main/>
    </div>
    
    
    </>
  )
}

export default App
