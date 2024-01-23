import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) =>{
    const userInitial = [];
    const [userInfo, setUserInfo] = useState(0);
    const [userChat, setUserChat] = useState({});
    const [serverChat, setServerChat] = useState({
        name : "hi"
    });
    const [myDetail, SetMyDetail] = useState({
        name: "h-s-m",
        img: "https://avatars.githubusercontent.com/u/98532264?v=4",
        userid: "h-s-m",
        joined: "Jul 23,2020",
        color: "orange"
    });

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
        <userContext.Provider value={{userInfo, setUserInfo, userChat, setUserChat, myDetail, SetMyDetail, serverChat, setServerChat}}>
            {props.children}
        </userContext.Provider>
    );

};

export default UserState;
