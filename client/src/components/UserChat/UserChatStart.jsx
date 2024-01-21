import React, { useContext } from 'react'
import contextValue from "../../context/user/userContext";
import logo from "../../assets/logo_discora_nobg_new.png";

const UserChatStart = () => {
    const context = useContext(contextValue);
    const { userChat } = context;
    return (
        <div className='flex flex-col-reverse justify-start items-start'>
            <p className='text-[0.8rem] leading-[1.5rem] text-white ml-1 opacity-60 m-2'>This is the beginning of the direct messaging with <b>{userChat.name}</b>.</p>
            <p className='text-[1.1rem] leading-[1.2rem] text-white font-medium ml-1'>{userChat.userid}</p>
            <p className='text-[1.5rem] leading-[2.5rem] text-white font-bold ml-1'>{userChat.name}</p>
            <img src={`${userChat.img ? userChat.img : logo}`} alt="user_pfp" className='w-[6rem] rounded-full object-cover' />
        </div>
    )
}

export default UserChatStart
