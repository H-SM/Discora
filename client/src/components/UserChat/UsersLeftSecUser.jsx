import React from 'react'
import FriendListUser from './FriendListUser'

const UsersLeftSecUser = () => {
  return (
    
    <div className='flex flex-col justify-start items-center gap-2 w-full overflow-y-auto overflow-x-hidden h-[86.2vh] pt-4'>
      {true ?
      <>
        <div className='w-[31vh] h-fit flex justify-center items-center pb-1  border-white/20 border-b-[0.01rem]'>
        <div className='w-full h-fit flex gap-3 items-center focus:text-white hover:text-white active:text-white text-gray-400/80 justify-start hover:bg-white/5 active:bg-white/10 focus:bg-white/10 px-[2rem] rounded-md hover:cursor-pointer py-1 mx-2'>
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2a1 1 0 0 0-1 1v1.001c-.961.014-1.34.129-1.721.333a2.272 2.272 0 0 0-.945.945C3.116 5.686 3 6.09 3 7.205v10.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h11.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V7.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C19.34 4.13 18.961 4.015 18 4V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM5 9v8.795c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049h11.59c.427 0 .694-.019.849-.049a.353.353 0 0 0 .134-.049.275.275 0 0 0 .125-.124.353.353 0 0 0 .048-.134c.03-.155.049-.422.049-.849L19.004 9H5zm8.75 4a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5z" fill="currentColor"></path></g></svg>
            <p className='font-normal select-none font-roboto'>Events</p>
        </div>
        </div>
      </> 
      :
      <>
      <div className='w-[14rem] h-[2.5rem] flex gap-3 items-center focus:text-white active:text-white text-gray-400/80 justify-start hover:bg-white/5 active:bg-white/10 focus:bg-white/10 px-[2rem] rounded-md hover:cursor-pointer py-1'>
            <svg fill="currentColor" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" width={"2rem"} height={"2rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g><g id="SVGRepo_iconCarrier"> <title>friend</title> <path d="M17.25 20.5c1.281 0.719 2 1.906 1.875 3.125-0.063 0.75-0.031 0.75-1 0.875-0.594 0.063-4.375 0.094-8.219 0.094-4.375 0-8.938-0.031-9.281-0.125-1.281-0.344-0.531-2.719 1.156-3.844 1.344-0.844 4.063-2.156 4.813-2.313 1.031-0.219 1.156-0.875 0-2.844-0.25-0.469-0.531-1.813-0.563-3.25-0.031-2.313 0.375-3.875 2.406-4.656 0.375-0.125 0.813-0.188 1.219-0.188 1.344 0 2.594 0.75 3.125 1.844 0.719 1.469 0.375 5.313-0.375 6.719-0.906 1.594-0.813 2.094 0.188 2.344 0.625 0.156 2.688 1.125 4.656 2.219zM24.094 18.531c1 0.531 1.563 1.5 1.469 2.438-0.031 0.563-0.031 0.594-0.781 0.688-0.375 0.063-2.344 0.094-4.656 0.094-0.406-0.969-1.188-1.844-2.25-2.406-1.219-0.688-2.656-1.406-3.75-1.875 0.719-0.344 1.344-0.625 1.625-0.688 0.781-0.188 0.875-0.625 0-2.188-0.219-0.375-0.469-1.438-0.5-2.563-0.031-1.813 0.375-3.063 1.938-3.656 0.313-0.094 0.656-0.156 0.969-0.156 1.031 0 2 0.563 2.406 1.438 0.531 1.156 0.281 4.156-0.281 5.281-0.688 1.25-0.625 1.625 0.156 1.813 0.5 0.125 2.094 0.906 3.656 1.781z"></path> </g></svg>
            <p className='font-normal select-none font-roboto'>Friends</p>
      </div>
      <div className='w-[14rem] h-[2.5rem] flex gap-3 items-center focus:text-white active:text-white text-gray-400/80 justify-start hover:bg-white/5 active:bg-white/10 focus:bg-white/10 px-[2rem] rounded-md hover:cursor-pointer py-2 mb-1'>
      <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"  width={"1.5rem"} height={"1.5rem"} className='mx-1'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <path d="M10,1L3,9h4.5L6,15l7-8H8.5L10,1z"></path> </g></svg>
      <p className='font-normal select-none font-roboto'>Nitro</p>
      </div>
      
      <div className=' w-[14rem] h-[1rem] flex justify-between text-gray-200/90 '>
      <p className='font-bold select-none font-roboto text-[0.75rem]'>DIRECT MESSAGES</p>
      <button>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={"1rem"} height={"1rem"} class="fill-current"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      </div>   
      <FriendListUser/>
      </>
      }
    </div>
  )
}

export default UsersLeftSecUser
