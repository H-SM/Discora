import React from 'react'
import FriendsSecUser from './FriendsSecUser'
import ProfileSecUser from './ProfileSecUser'

const UserSideNav = () => {
  return (
    <div className='w-[15rem] h-full bg-[#27292d] flex flex-col items-center justify-between '>
        <FriendsSecUser/>
        <ProfileSecUser/>
    </div>
  )
}

export default UserSideNav
