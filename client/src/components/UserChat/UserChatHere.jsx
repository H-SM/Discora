import React from 'react'
import UserSideNav from './UserSideNav'
import UserFriendsMenu from './UserFriendsMenu'
import UserRightSec from './UserRightSec'
import UserChatSection from './UserChatSection'

const UserChatHere = () => {
  return (
    <div className='w-full h-full flex flex-row justify-between'>
        <div className='h-full flex flex-row'>
        <UserSideNav/>
        {false ? <UserFriendsMenu/> : <UserChatSection/>} 
        </div> 
        <UserRightSec/>
    </div>
  )
}

export default UserChatHere
