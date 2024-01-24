import clsx from 'clsx'
import React from 'react'

import { textcolors } from '../../constants'
  
interface ColorHere {
  color: keyof typeof textcolors,
  title : string,
}

const RoleTitle :  React.FC<ColorHere> = (props) => {
    let colorhere : string = textcolors[props.color];
  return (
    <div className={clsx(
        'w-[14rem] h-[1rem] ml-3 flex items-center justify-start my-1',
        props.color ? `${colorhere}` :`text-gray-200/90`
    )}>     
            <p className='font-bold select-none text-[0.7rem] opacity-75 uppercase'>{props.title} - {2}</p>
            {/* TODO: add the online in the session here (for that role)*/}
        </div>
  )
}

export default RoleTitle

{/* <script>
  menuButton.addEventListener('click', function () {
    let classList = document.getElementById('nav').classList
    classList.toggle('hidden')
    classList.toggle('block')
  })
</script> */}