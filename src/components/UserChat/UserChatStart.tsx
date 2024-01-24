import React, { useContext, useEffect } from 'react'
import contextValue from "../../context/user/userContext";
import logo from "../../assets/logo_discora_nobg_new.png";

const UserChatStart = () => {
    const context = useContext(contextValue);
    const { userChat, userInfo, serverChat } = context!;

    // useEffect(() => {
    //         setCurrentUserChat(userChat);
    //         setCurrentServerChat(serverChat);
    // }, [userChat, serverChat, userInfo]);


    return (
        <div className='flex flex-col-reverse justify-start items-start'>
            { userInfo == 1 ?
            <>
             <p className='text-[0.8rem] leading-[1.5rem] text-white ml-1 opacity-60 m-2'>This is the beginning of the direct messaging with <b>{userChat.name}</b>.</p>
             <p className='text-[1.1rem] leading-[1.2rem] text-white font-medium ml-1'>{userChat.userid}</p>
             <p className='text-[1.5rem] leading-[2.5rem] text-white font-bold ml-1'>{userChat.name}</p>
             <img src={`${userChat.img ? userChat.img : logo}`} alt="user_pfp" className='w-[6rem] rounded-full object-cover' />
            </>
            :
            <>
            <p className='text-[0.8rem] leading-[1.5rem] text-white ml-1 opacity-60 m-2'>This is the beginning of the channel <b>#{serverChat.name}</b>.</p>
            <p className='text-[1.5rem] leading-[1.6rem] text-white font-bold ml-1'>#{serverChat.name}</p>
            <div className='w-[5rem] h-[5rem] rounded-full object-cover mb-2 bg-white/5 flex justify-center items-center opacity-75' >
            <svg viewBox="0 0 24 24" className="w-12 opacity-85" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 21L17 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 21L11 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 9L4 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 15L20 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    
            </div>
            </>
            }
        </div>
    )
}

export default UserChatStart
