import React, { useContext } from 'react'
import contextValue from "../../context/user/userContext";

const ChatLog = (props) => {
    
    const context = useContext(contextValue);
    const { userChat, myDetail} = context;
  return (
    <div className='w-full h-[3rem] bg-gray-700/5 text-white flex items-center justify-start mb-1 px-2 gap-2'>
      <img src={props.userType == "0" ? myDetail.img : userChat.img} alt="" className='w-9 rounded-full '/>
      <div className='flex flex-col justify-center items-start h-fit  opacity-90'>
        <p className='font-bold text-[0.9rem]'>{props.userType == "0" ? myDetail.name : userChat.name}</p>
        <p className='font-roboto text-[0.8rem]'>{props.chathere}</p>
      </div>
    </div>
  )
}

export default ChatLog
