import React from 'react'
import logo from "../../assets/logo_discora_nobg_new.png"
import clsx from 'clsx';

const UserRightSec = () => {
  return (
    <div className={clsx(`w-full h-full border-l-2 border-gray-600/20`,
    true ? `bg-[#232428]`: `items-center justify-center bg-[#303238]`
    )} >
      {true ?
        <>
          <div className='absolute w-[6rem] h-[6rem] mt-[3rem] ml-3 rounded-full bg-[#232428] z-10 flex justify-center items-center'>
          <img src={logo} alt="logo" className='relative w-[5.3rem] bg-white/5 rounded-full object-cover '/>
          <div className='absolute rounded-full bg-[#232428] w-5 h-5 bottom-[0.5rem] right-[0.5rem] flex items-center justify-center'>
            <div className='absolute rounded-full bg-green-600 w-3 h-3'/>
          </div>
          </div>
          <div className='relative w-full h-[6rem] bg-white '/>
          <div className=' w-full h-[4rem] flex justify-between bg-[#232428]'>
            
            <p>hi</p>
          </div>
        </>
        :
        <img src={logo} alt="logo" className='w-[24vh] opacity-10'/>
      }
    </div>
  )
}

export default UserRightSec
