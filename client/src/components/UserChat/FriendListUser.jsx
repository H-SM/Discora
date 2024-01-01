import React from 'react'

const FriendListUser = () => {
  return (
    <div className='flex flex-col justify-start items-center gap-2 w-[13rem]'>
      <div className='w-full h-[2.5rem] flex gap-3 items-center focus:text-white active:text-white text-gray-200 justify-start hover:bg-white/5 active:bg-white/10 focus:bg-white/10 px-2 rounded-md hover:cursor-pointer '>
            <img className='rounded-full object-cover w-[2rem] h-[2rem]' src='https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' alt="user_here" />
            <p className='font-normal select-none font-roboto'>Sid</p>
      </div>
      
      {/* TODO: get the list of user's friends here */}
    </div>
  )
}

export default FriendListUser
