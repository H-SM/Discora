import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import UserState from './context/user/userState'

function App() {

  return (
    <UserState>
      <Home/>
    </UserState>
  )
}

export default App
