import React from 'react'
import logo from '../assets/logo_discora_nobg_new.png'
const UserMessage = () => {
  return (
    <button className='active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338]  w-[3rem] h-[3rem] rounded-full hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center'>
      <img src={logo} alt="logo" className='w-11 h-11'/>
      {/* this button will be linked to 1v1 chat section  */}
    </button>
  )
}

export default UserMessage
