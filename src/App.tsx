import './App.css'
import Home from './pages/Home'
import UserProvider from './context/user/userContext'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  // const domainid = process.env.AUTH_DOMAIN;
  // const clientid = process.env.AUTH_CLIENT_ID;

  // console.log(domainid,clientid);
  return (
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>
  )
}

export default App
