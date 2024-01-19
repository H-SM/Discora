import React from 'react'

const UserTopNav = () => {
  return (
    <div className='bg-[#313338] h-[3rem] flex flex-row justify-between  border-b-2 border-black/20'>
        <div className='h-[3rem] flex flex-row'>
        <div className='w-[15rem] bg-black/20 flex justify-center items-center'>
            {true ?
            <div className='w-[15rem] h-full px-3 flex justify-between items-center'>
                <p className='font-medium text-white text-[0.9rem] pl-1'>hsm-s's server</p>
                <svg viewBox="0 -4.5 20 20" className='w-3 h-3' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </g></svg>
            </div> 
            : 
            <input className='w-[14rem] h-[1.8rem] px-1 py-[0.175rem] rounded-sm text-[0.875rem] outline-none bg-[#1e1f22] mx-2' placeholder='Find or start a conversation'/>}
        </div>
        {false ? 
        <div className='w-full h-full flex items-center justify-start ml-2'>
            <div className='w-[7rem] h-full flex gap-1 items-center text-white/50 justify-center'>
            <img src='https://i.redd.it/3fc3wd5xwf171.png' alt="user_name_here" className='rounded-full w-[1.9rem]'/>
            <p className='text-[0.9rem] leading-[1.3rem] text-white font-semibold ml-1'>Sidhant</p>
            </div>
        </div>
        : false ?  
        <div className='w-full h-full flex items-center justify-start'>
            <div className='w-[7rem] h-full flex gap-1 items-center text-white/50 justify-center'>
            <svg fill="currentColor" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" width={"2rem"} height={"2rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g><g id="SVGRepo_iconCarrier"> <title>friend</title> <path d="M17.25 20.5c1.281 0.719 2 1.906 1.875 3.125-0.063 0.75-0.031 0.75-1 0.875-0.594 0.063-4.375 0.094-8.219 0.094-4.375 0-8.938-0.031-9.281-0.125-1.281-0.344-0.531-2.719 1.156-3.844 1.344-0.844 4.063-2.156 4.813-2.313 1.031-0.219 1.156-0.875 0-2.844-0.25-0.469-0.531-1.813-0.563-3.25-0.031-2.313 0.375-3.875 2.406-4.656 0.375-0.125 0.813-0.188 1.219-0.188 1.344 0 2.594 0.75 3.125 1.844 0.719 1.469 0.375 5.313-0.375 6.719-0.906 1.594-0.813 2.094 0.188 2.344 0.625 0.156 2.688 1.125 4.656 2.219zM24.094 18.531c1 0.531 1.563 1.5 1.469 2.438-0.031 0.563-0.031 0.594-0.781 0.688-0.375 0.063-2.344 0.094-4.656 0.094-0.406-0.969-1.188-1.844-2.25-2.406-1.219-0.688-2.656-1.406-3.75-1.875 0.719-0.344 1.344-0.625 1.625-0.688 0.781-0.188 0.875-0.625 0-2.188-0.219-0.375-0.469-1.438-0.5-2.563-0.031-1.813 0.375-3.063 1.938-3.656 0.313-0.094 0.656-0.156 0.969-0.156 1.031 0 2 0.563 2.406 1.438 0.531 1.156 0.281 4.156-0.281 5.281-0.688 1.25-0.625 1.625 0.156 1.813 0.5 0.125 2.094 0.906 3.656 1.781z"></path> </g></svg>
            <p className='font-semibold text-white'>Friends</p>
            </div>
            <div className='bg-white/10 w-[0.09rem] h-[1.5rem] rounded-sm'/>  
            <div className='w-[5rem] h-full flex items-center justify-center'>
                <button className='px-2 max-w-[5rem] rounded-md hover:bg-white/5 active:bg-white/10 hover:text-white font-semibold text-gray-300'>Online</button>
            </div> 
            <div className='w-[3rem] h-full flex items-center justify-center'>
                <button className='px-3 max-w-[5rem] rounded-md hover:bg-white/5 active:bg-white/10 hover:text-white font-semibold text-gray-300'>All</button>
            </div>
            <div className='w-[5rem] h-full flex items-center justify-center'>
                <button className='px-2 max-w-[5rem] rounded-md hover:bg-white/5 active:bg-white/10 hover:text-white font-semibold text-gray-300'>Pending</button>
            </div>           
            <div className='w-[5rem] h-full flex items-center justify-center'>
                <button className='px-2 max-w-[5rem] rounded-md hover:bg-white/5 active:bg-white/10 hover:text-white font-semibold text-gray-300'>Blocked</button>
            </div>
            <div className='w-[7rem] h-full flex items-center justify-center'>
                <button className='px-2 rounded-md bg-green-700 font-semibold'>Add Friend</button>
            </div>
        </div>
        :
        <div className='w-full h-full flex items-center justify-start ml-2'>
            <div className='w-[7rem] h-full flex gap-1 items-center text-white justify-center'>
            <div className='opacity-50'><svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 21L17 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 21L11 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 9L4 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 15L20 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            <p className='text-[0.9rem] leading-[1.3rem] text-white font-semibold ml-1'>general</p>
            </div>
        </div>
        }
        </div>
        <div className='w-[10rem] flex flex-row justify-end items-center gap-3 mx-3 text-gray-300/80'>
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={"1.85rem"} height={"1.85rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Chat_Circle"> <path id="Vector" d="M7.50977 19.8018C8.83126 20.5639 10.3645 21 11.9996 21C16.9702 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.6351 3.43604 15.1684 4.19819 16.4899L4.20114 16.495C4.27448 16.6221 4.31146 16.6863 4.32821 16.7469C4.34401 16.804 4.34842 16.8554 4.34437 16.9146C4.34003 16.9781 4.3186 17.044 4.27468 17.1758L3.50586 19.4823L3.50489 19.4853C3.34268 19.9719 3.26157 20.2152 3.31938 20.3774C3.36979 20.5187 3.48169 20.6303 3.62305 20.6807C3.78482 20.7384 4.02705 20.6577 4.51155 20.4962L4.51758 20.4939L6.82405 19.7251C6.95537 19.6813 7.02214 19.6591 7.08559 19.6548C7.14475 19.6507 7.19578 19.6561 7.25293 19.6719C7.31368 19.6887 7.37783 19.7257 7.50563 19.7994L7.50977 19.8018Z" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        <div className='bg-white/10 w-[0.09rem] h-[1.5rem] rounded-sm'/>  
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={"1.85rem"} height={"1.85rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V12M3 12H6.67452C7.16369 12 7.40829 12 7.63846 12.0553C7.84254 12.1043 8.03763 12.1851 8.21657 12.2947C8.4184 12.4184 8.59136 12.5914 8.93726 12.9373L9.06274 13.0627C9.40865 13.4086 9.5816 13.5816 9.78343 13.7053C9.96237 13.8149 10.1575 13.8957 10.3615 13.9447C10.5917 14 10.8363 14 11.3255 14H12.6745C13.1637 14 13.4083 14 13.6385 13.9447C13.8425 13.8957 14.0376 13.8149 14.2166 13.7053C14.4184 13.5816 14.5914 13.4086 14.9373 13.0627L15.0627 12.9373C15.4086 12.5914 15.5816 12.4184 15.7834 12.2947C15.9624 12.1851 16.1575 12.1043 16.3615 12.0553C16.5917 12 16.8363 12 17.3255 12H21M3 12L5.32639 6.83025C5.78752 5.8055 6.0181 5.29312 6.38026 4.91755C6.70041 4.58556 7.09278 4.33186 7.52691 4.17615C8.01802 4 8.57988 4 9.70361 4H14.2964C15.4201 4 15.982 4 16.4731 4.17615C16.9072 4.33186 17.2996 4.58556 17.6197 4.91755C17.9819 5.29312 18.2125 5.8055 18.6736 6.83025L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" width={"1.85rem"} height={"1.85rem"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>help</title> <g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"> <g id="add" fill="currentColor" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.153707,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.153707,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M213.332053,282.666667 C198.60416,282.666667 186.665387,294.60544 186.665387,309.333333 C186.665387,324.061227 198.60416,336 213.332053,336 C228.059947,336 239.99872,324.061227 239.99872,309.333333 C239.99872,294.60544 228.059947,282.666667 213.332053,282.666667 Z M209.77344,93.3346133 C189.007787,93.3346133 171.554773,98.9922133 157.43488,110.274773 C140.703147,123.790507 132.34368,143.751253 132.34368,170.173227 L132.34368,170.173227 L177.7056,170.173227 L177.7056,169.868587 C177.7056,159.787733 179.829333,151.518293 184.065067,145.069013 C189.911467,136.398507 199.39328,132.059947 212.501333,132.059947 C220.56768,132.059947 227.4336,134.177067 233.070293,138.404907 C240.125013,144.26304 243.664,153.13024 243.664,165.028693 C243.664,172.49216 241.839787,179.143253 238.214827,184.994773 C235.188693,190.2368 230.350293,195.374933 223.686187,200.42048 C209.571627,210.098773 200.394453,219.679573 196.165333,229.162667 C192.53504,237.027413 190.710827,249.530027 190.710827,266.666667 L190.710827,266.666667 L233.376213,266.666667 C233.376213,255.371093 234.87744,246.90624 237.916587,241.257813 C240.331947,236.618667 245.378987,231.682347 253.042987,226.434987 C266.358187,216.549547 275.828267,207.371093 281.479253,198.90112 C288.33216,188.82176 291.76704,177.01952 291.76704,163.504 C291.76704,135.494827 280.37504,115.62624 257.571627,103.9232 C243.865813,96.86848 227.933653,93.3346133 209.77344,93.3346133 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
        </div>
        {/* TODO: add the call and user specific svg's here */}
    </div>
  )
}

export default UserTopNav
