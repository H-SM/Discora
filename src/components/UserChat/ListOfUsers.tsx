import React from 'react'

const ListOfUsers = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center mt-2 overflow-y-auto h-[79vh]'>
        <div className='w-[118vh] h-[6vh] flex flex-col items-center'>
            <div className='w-[112vh] h-[0.0725rem] bg-gray-100/10'/>
            <div className='w-full h-full flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-start items-center h-full  mx-[2rem] w-[17rem]'>
                    <img src='https://i.redd.it/3fc3wd5xwf171.png' alt="user_name_here" className='rounded-full w-[2.1rem] h-[2.1rem]'/>
                    <div className='ml-3 mb-2 w-fit h-fit flex flex-col justify-center items-start'>
                        <div className='h-[0.7rem] mb-1'>
                        <p className='font-roboto font-semibold text-[0.9rem]'>sid</p>
                        </div>
                        <div className='h-[0.7rem]'>
                        <p className='font-mono font-medium text-gray-300/50 text-[0.7rem]'>online</p>
                        </div>
                    </div>
                </div>
                <div className='mr-9 mt-[0.175rem] h-full flex flex-row-reverse justify-center items-center gap-2 text-gray-300/80'>
                    <div
                     className='w-9 h-9 bg-white/5 hover:bg-white/10 transition ease-in-out duration-150 rounded-full object-cover flex justify-center items-center'>
                        <svg fill="currentColor" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width={"1.3rem"} height={"1.3rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M603 192q0-43-30-73t-73-30-73 30.5-30 73 30 72.5 72.5 30 73-30.5T603 192zm0 616q0-43-30-73t-73-30-73 30-30 73 30 73 72.5 30 73-30.5T603 808zm0-308q0-43-30-73t-73-30-73 30-30 73 30 73 72.5 30 73-30.5T603 500z"></path></g></svg>
                    </div>
                    <div 
                     className='w-9 h-9 bg-white/5 hover:bg-white/10 transition ease-in-out duration-150 rounded-full object-cover flex justify-center items-center'>
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={"1.5rem"} height={"1.5rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Chat_Circle"> <path id="Vector" d="M7.50977 19.8018C8.83126 20.5639 10.3645 21 11.9996 21C16.9702 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.6351 3.43604 15.1684 4.19819 16.4899L4.20114 16.495C4.27448 16.6221 4.31146 16.6863 4.32821 16.7469C4.34401 16.804 4.34842 16.8554 4.34437 16.9146C4.34003 16.9781 4.3186 17.044 4.27468 17.1758L3.50586 19.4823L3.50489 19.4853C3.34268 19.9719 3.26157 20.2152 3.31938 20.3774C3.36979 20.5187 3.48169 20.6303 3.62305 20.6807C3.78482 20.7384 4.02705 20.6577 4.51155 20.4962L4.51758 20.4939L6.82405 19.7251C6.95537 19.6813 7.02214 19.6591 7.08559 19.6548C7.14475 19.6507 7.19578 19.6561 7.25293 19.6719C7.31368 19.6887 7.37783 19.7257 7.50563 19.7994L7.50977 19.8018Z" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListOfUsers
