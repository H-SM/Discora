import { useAuth0 } from '@auth0/auth0-react'
import React, { MouseEventHandler, useContext, useEffect } from 'react'
import { UserContext } from "../context/user/userContext";
import axios from 'axios';

const Login = () => {

  const context = useContext(UserContext);
  const { SetMyDetail } = context!;

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently
  } = useAuth0()

  const handleLoginClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    loginWithRedirect();
    console.log(user);
    // if(isAuthenticated){
    //   SetMyDetail({
    //     name: user?.name!,
    //     img: user?.picture!,
    //     userid: user?.nickname!,
    //     joined: Date.now(),
    //     color: "orange"
    //   });
    // }
  };

  const callUserhere = () => {
    axios.get("http://localhost:8000/user")
      .then(response => console.log(response.data))
      .catch(e => console.error(e.message));

  }

  const callUserProtectedRoute = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:8000/protected", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
    } catch (Error : any) {
      console.error(Error.message);
    }
  //   axios.get("http://localhost:8000/protected")
  //   .then(response => console.log(response.data))
  //   .catch(e => console.error(e.message));
  }
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
      <p style={{ textAlign: 'start' }}>
        {isAuthenticated && JSON.stringify(user, null, 2)}
      </p>
      <button onClick={callUserhere}>Call the open API</button>
      <button onClick={callUserProtectedRoute}>Call the protected API</button>
    </div>
  )
}

export default Login
