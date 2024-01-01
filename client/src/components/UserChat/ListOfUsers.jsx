import React from 'react'

const ListOfUsers = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center mt-2'>
        <div className='w-[118vh] h-[6vh] flex flex-col items-center'>
            <div className='w-[112vh] h-[0.0725rem] bg-gray-100/10'/>
            <div className='w-full h-full flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-start items-center h-full bg-white/10 mx-[2rem] w-[17rem]'>
                    <img src='https://i.redd.it/3fc3wd5xwf171.png' alt="user_name_here" className='rounded-full w-[2.1rem] h-[2.1rem]'/>
                    <div className='ml-3 h-[1rem] w-full flex flex-col justify-center items-start'>
                        <p className='font-roboto font-semibold'>sid</p>
                        <p className='font-mono font-thin text-[0.75rem]'>online</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ListOfUsers
