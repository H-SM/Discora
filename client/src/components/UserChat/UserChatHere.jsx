import React, { useContext } from 'react'
import UserSideNav from './UserSideNav'
import UserFriendsMenu from './UserFriendsMenu'
import UserRightSec from './UserRightSec'
import UserChatSection from './UserChatSection'
import contextValue from "../../context/user/userContext";

const UserChatHere = () => {
    const context = useContext(contextValue);
    const {userInfo, setUserinfo} = context;
  return (
    <div className='w-full h-full flex flex-row justify-between'>
        {/* <div className='h-full flex flex-row'> */}
        <UserSideNav/>
        {userInfo == 0 ? <UserFriendsMenu/> : <UserChatSection/>} 
        {/* </div>  */}
        <UserRightSec/>
    </div>
  )
}

export default UserChatHere
