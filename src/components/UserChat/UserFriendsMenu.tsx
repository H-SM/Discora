import React from 'react'
import ListOfUsers from './ListOfUsers'

const UserFriendsMenu = () => {
  return (
    <div className='bg-[#313338] h-full w-[120vh] flex flex-col justify-start items-center'>
      <div className="relative w-[116vh] mt-2"> 
        <input type="search" id="default-search" className="block w-full p-4 pe-10 text-sm text-gray-300/60 rounded-md text-[1rem] outline-none bg-[#1e1f22] h-[2.2rem] font-roboto" placeholder="Search"/>
        <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </div>
    <div className=' w-full font-roboto font-semibold text-[0.7rem] leading-4 text-gray-300/80 mt-8 ml-12'>
      <p>ONLINE - 0</p>
    </div>
    <ListOfUsers/>
    </div>
  )
}

export default UserFriendsMenu
