import { useAuth0 } from '@auth0/auth0-react'
import React, { MouseEventHandler, useEffect } from 'react'

const Login = () => {
  
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated
  } = useAuth0()

  useEffect(() => {
    console.log(user);
  },[]);

  const handleLoginClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    loginWithRedirect();
    console.log(user);
  };

  const handleLogoutClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    logout();
  };
  return (
    <div>
      login here
      <ul>
        <li>
          <button onClick={handleLoginClick}>Login</button>
        </li>
        <li>
          <button onClick={handleLogoutClick}>Logout</button>
        </li>
      </ul>
      user : {isAuthenticated ? "logged in" : "logged out"}
      <p style={{textAlign : 'start'}}>
        {isAuthenticated && JSON.stringify(user, null, 2)}
      </p>
    </div>
  )
}

export default Login
