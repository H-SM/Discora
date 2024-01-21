import React from 'react'
import { textcolors } from '../../constants'
import clsx from 'clsx';

const UserCard = (props) => {
    let colorhere = textcolors[props.color];
    return (
        <div className={clsx('w-[14rem] h-[2.5rem] ml-3 flex items-center justify-start  my-1 px-2 gap-2 opacity-90 hover:opacity-100 hover:bg-white/5 rounded-md',
        props.color ? colorhere : `text-gray-200/90` 
        )}>
                <img src={props.img} alt="" className='w-8 rounded-full object-cover' />
                <p className='font-medium select-none text-[0.9rem] uppercase'>{props.name}</p>
        </div>
  )
}

export default UserCard
