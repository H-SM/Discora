import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) =>{
    const userInitial = [];
    const [userInfo, setUserInfo] = useState(0);

    // const getuserinfo = async () => {
    //   try{
    //     const response = await fetch(`${host}/api/auth/getuser`, {
    //       method: 'GET',
    //       headers: {
    //         'auth-token' : localStorage.getItem("token")
    //       },
    //       })
    //       const json = await response.json();
    //       setUserData(json);
    //   }catch(error){
    //     console.error('Error fetching user data:', error);
    //   }
    // }

    return (
        <userContext.Provider value={{userInfo, setUserInfo}}>
            {props.children}
        </userContext.Provider>
    );

};

export default UserState;
