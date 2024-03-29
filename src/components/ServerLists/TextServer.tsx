import React, { useContext, useState } from 'react'
import { UserContext } from "../../context/user/userContext";

interface TextServerProps {
  title: string;
}

const textServer: React.FC<TextServerProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const context = useContext(UserContext);
  const {setServerChat} = context!;
  return (
    <div className='w-[14rem] h-fit ml-2 hover:bg-white/5 text-gray-300 flex justify-between items-center rounded-md px-2 py-1 opacity-70 hover:opacity-100'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <button className='w-[13rem] flex justify-start items-center' onClick={() => setServerChat({
        name : props.title
      })}>
        <div className='w-[1rem] h-fit flex gap-1 items-center justify-center'>
          <div><svg viewBox="0 0 24 24" className="w-4 " fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 21L17 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 21L11 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 9L4 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 15L20 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
        </div>
        <p className='text-[0.8rem] leading-[1.3rem] font-semibold ml-1'>{props.title}</p>
      </button>
      <div className={`w-fit h-full ${isHovered ? 'flex' : 'hidden'}`}>
        <button className='opacity-30 hover:opacity-80'>
          <svg viewBox="0 0 24 24" version="1.1" className="w-4 " xmlns="http://www.w3.org/2000/svg" 
          // xmlns:xlink="http://www.w3.org/1999/xlink" 
          fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_people_add_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_people_add_24_filled" fill="currentColor" fill-rule="nonzero"> <path d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M4,12.999 L12.8093956,13.000184 C11.6887317,14.1680611 11,15.7535996 11,17.5 C11,18.5873606 11.266999,19.6123603 11.7390124,20.5130144 C10.6887116,20.8629701 9.53056842,21 8.5,21 C5.77786667,21 2.16469531,20.0439506 2.00545418,16.7296461 L2,16.5 L2,14.999 C2,13.895 2.896,12.999 4,12.999 Z M17.5,14.0015812 L17.4101244,14.0096369 C17.2060313,14.0466809 17.0450996,14.2076126 17.0080557,14.4117056 L17,14.5015812 L17,16.9995812 L14.5,17 L14.4101244,17.0080557 C14.2060313,17.0450996 14.0450996,17.2060313 14.0080557,17.4101244 L14,17.5 L14.0080557,17.5898756 C14.0450996,17.7939687 14.2060313,17.9549004 14.4101244,17.9919443 L14.5,18 L17,17.9995812 L17,20.5 L17.0080557,20.5898756 C17.0450996,20.7939687 17.2060313,20.9549004 17.4101244,20.9919443 L17.5,21 L17.5898756,20.9919443 C17.7939687,20.9549004 17.9549004,20.7939687 17.9919443,20.5898756 L18,20.5 L18,17.9995812 L20.5,18 L20.5898756,17.9919443 C20.7939687,17.9549004 20.9549004,17.7939687 20.9919443,17.5898756 L21,17.5 L20.9919443,17.4101244 C20.9549004,17.2060313 20.7939687,17.0450996 20.5898756,17.0080557 L20.5,17 L18,16.9995812 L18,14.5015812 L17.9919443,14.4117056 C17.9549004,14.2076126 17.7939687,14.0466809 17.5898756,14.0096369 L17.5,14.0015812 Z M8.5,2 C10.985,2 13,4.015 13,6.5 C13,8.985 10.985,11 8.5,11 C6.015,11 4,8.985 4,6.5 C4,4.015 6.015,2 8.5,2 Z M17.5,4 C19.433,4 21,5.567 21,7.5 C21,9.433 19.433,11 17.5,11 C15.567,11 14,9.433 14,7.5 C14,5.567 15.567,4 17.5,4 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
        </button>
      </div>
    </div>
  )
}

export default textServer
