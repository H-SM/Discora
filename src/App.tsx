import './App.css'
import Home from './pages/Home'
import UserProvider from './context/user/userContext'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'

function App() {
  
  return (
    <Auth0Provider
      domain="dev-046fg2rv0glrfkho.us.auth0.com"
      clientId="Z2dGjAAIU52vOBHD3KtPmJAczkIKnC8X"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>

    </Auth0Provider>
  )
}

export default App
