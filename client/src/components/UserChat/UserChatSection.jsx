import React, { useContext } from 'react'
import contextValue from "../../context/user/userContext";
import logo from "../../assets/logo_discora_nobg_new.png";
import UserChatStart from './UserChatStart';
import ChatLog from './ChatLog';
import DateLog from './DateLog';

const UserChatSection = () => {
  const context = useContext(contextValue);
  const {userInfo, userChat }  = context;

  return (
    <div className='bg-[#313338] h-full
    2xl:w-[76rem] w-[53rem] 
    flex flex-col justify-end items-center gap-2'>
      <div className='w-full h-[51rem] bg-gray-700/5 text-white flex flex-col-reverse items-start justify-start mb-1 px-2 overflow-y-auto pl-4'>
        {userInfo == 1 ?  
          <>
            {/* 0 -> me  */}
            {/* 1 -> other  */}
            <ChatLog userType="1" chathere="hmmmm..."/> 
            <ChatLog userType="0" chathere="this is discora!"/> 
            <ChatLog userType="1" chathere="ayo"/> 
            <ChatLog userType="0" chathere="hi, I am here!!"/> 
            <DateLog date = {"21 january, 2024"}/>
            <ChatLog userType="1" chathere="hmmmm..."/> 
            <ChatLog userType="0" chathere="this is discora!"/> 
            <ChatLog userType="1" chathere="ayo"/> 
            <ChatLog userType="0" chathere="hi, I am here!!"/> 
            <DateLog date = {"21 january, 2024"}/>
            <ChatLog userType="1" chathere="hmmmm..."/> 
            <ChatLog userType="0" chathere="this is discora!"/> 
            <ChatLog userType="1" chathere="ayo"/> 
            <ChatLog userType="0" chathere="hi, I am here!!"/> 
            <DateLog date = {"21 january, 2024"}/>
            <ChatLog userType="1" chathere="hmmmm..."/> 
            <ChatLog userType="0" chathere="this is discora!"/> 
            <ChatLog userType="1" chathere="ayo"/> 
            <ChatLog userType="0" chathere="hi, I am here!!"/> 
            <DateLog date = {"21 january, 2024"}/>
            <ChatLog userType="1" chathere="hmmmm..."/> 
            <ChatLog userType="0" chathere="this is discora!"/> 
            <ChatLog userType="1" chathere="ayo"/> 
            <ChatLog userType="0" chathere="hi, I am here!!"/> 
            <DateLog date = {"21 january, 2024"}/>
            <UserChatStart/>
          </>
        // this is where the chat log will come in (prepare a cache for the loaded [bounded] chats)
        :
        <></>
        }
      </div>
      <div class="flex flex-row items-center relative 2xl:w-[73rem] w-[50rem] mb-4 rounded-md text-[1rem] outline-none bg-white/5 h-[2.8rem] font-roboto gap-3 px-2"> 
      <div class="flex items-center hover:cursor-pointer text-gray-300/80 hover:text-gray-300 transition ease-in-out duration-150">
            <svg class="w-6 h-6 " viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="currentColor"></path> </g></svg>
        </div>
        <input type="search" id="default-search" class="block w-full text-md text-white/80 outline-none bg-transparent placeholder:text-gray-300/20" placeholder="Message @Sidhant"/>
        
        <div class="flex items-center hover:cursor-pointer text-gray-300/80 hover:text-gray-300 transition ease-in-out duration-150">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div class="flex items-center hover:cursor-pointer text-gray-300/80 hover:text-gray-300 transition ease-in-out duration-150">
            <svg class="w-7 h-7" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_gif_24_filled" fill="currentColor" fill-rule="nonzero"> <path d="M18.75,3.50054297 C20.5449254,3.50054297 22,4.95561754 22,6.75054297 L22,17.2531195 C22,19.048045 20.5449254,20.5031195 18.75,20.5031195 L5.25,20.5031195 C3.45507456,20.5031195 2,19.048045 2,17.2531195 L2,6.75054297 C2,4.95561754 3.45507456,3.50054297 5.25,3.50054297 L18.75,3.50054297 Z M8.01459972,8.87193666 C6.38839145,8.87193666 5.26103525,10.2816525 5.26103525,11.9943017 C5.26103525,13.707564 6.38857781,15.1202789 8.01459972,15.1202789 C8.90237918,15.1202789 9.71768065,14.6931811 10.1262731,13.9063503 L10.2024697,13.7442077 L10.226,13.674543 L10.2440163,13.5999276 L10.2440163,13.5999276 L10.2516169,13.5169334 L10.2518215,11.9961937 L10.2450448,11.9038358 C10.2053646,11.6359388 9.99569349,11.4234501 9.72919932,11.3795378 L9.62682145,11.3711937 L8.62521827,11.3711937 L8.53286035,11.3779703 C8.26496328,11.4176506 8.05247466,11.6273217 8.00856234,11.8938159 L8.00021827,11.9961937 L8.00699487,12.0885517 C8.0466751,12.3564487 8.25634623,12.5689373 8.5228404,12.6128497 L8.62521827,12.6211937 L9.00103525,12.6209367 L9.00103525,13.3549367 L8.99484486,13.3695045 C8.80607251,13.6904125 8.44322427,13.8702789 8.01459972,13.8702789 C7.14873038,13.8702789 6.51103525,13.0713011 6.51103525,11.9943017 C6.51103525,10.9182985 7.14788947,10.1219367 8.01459972,10.1219367 C8.43601415,10.1219367 8.67582824,10.1681491 8.97565738,10.3121334 C9.28681641,10.4615586 9.6601937,10.3304474 9.80961888,10.0192884 C9.95904407,9.70812933 9.82793289,9.33475204 9.51677386,9.18532686 C9.03352891,8.95326234 8.61149825,8.87193666 8.01459972,8.87193666 Z M12.6289445,8.99393497 C12.3151463,8.99393497 12.0553614,9.22519285 12.0107211,9.52657705 L12.0039445,9.61893497 L12.0039445,14.381065 L12.0107211,14.4734229 C12.0553614,14.7748072 12.3151463,15.006065 12.6289445,15.006065 C12.9427427,15.006065 13.2025276,14.7748072 13.2471679,14.4734229 L13.2539445,14.381065 L13.2539445,9.61893497 L13.2471679,9.52657705 C13.2025276,9.22519285 12.9427427,8.99393497 12.6289445,8.99393497 Z M17.6221579,9.00083497 L15.6247564,8.99393111 C15.3109601,8.99285493 15.0503782,9.22321481 15.0046948,9.52444312 L14.9975984,9.61677709 L14.9975984,14.3649711 L15.0043751,14.4573291 C15.0440553,14.7252261 15.2537265,14.9377148 15.5202206,14.9816271 L15.6225985,14.9899711 L15.7149564,14.9831945 C15.9828535,14.9435143 16.1953421,14.7338432 16.2392544,14.467349 L16.2475985,14.3649711 L16.2470353,13.2499367 L17.37,13.2504012 L17.4623579,13.2436246 C17.730255,13.2039444 17.9427436,12.9942732 17.9866559,12.7277791 L17.995,12.6254012 L17.9882234,12.5330433 C17.9485432,12.2651462 17.738872,12.0526576 17.4723779,12.0087453 L17.37,12.0004012 L16.2470353,11.9999367 L16.2470353,10.2449367 L17.6178421,10.2508313 L17.7102229,10.2443727 C18.0117595,10.2007704 18.2439132,9.94178541 18.2450039,9.62798912 C18.24608,9.31419284 18.0157202,9.05361096 17.7144919,9.00793041 L17.6221579,9.00083497 L15.6247564,8.99393111 L17.6221579,9.00083497 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
        </div>
        <div class="flex items-center hover:cursor-pointer text-gray-300/80 hover:text-gray-300 transition ease-in-out duration-150">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 21.8389C16.4873 21.8417 16.4745 21.8444 16.4617 21.8472L16.4582 21.8479C16.4424 21.8512 16.4266 21.8545 16.4107 21.8578L16.4092 21.8581C16.4256 21.8548 16.4419 21.8514 16.4582 21.8479C16.4722 21.8449 16.4861 21.8419 16.5 21.8389Z" fill="#currentColor"></path> <path d="M22 15C21.4162 15 20.9239 15 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15 20.9239 15 21.4162 15 22C15.4827 22 15.954 21.9511 16.4092 21.8581L16.4107 21.8578L16.4582 21.8479L16.4617 21.8472L16.5 21.8389C19.162 21.2577 21.2577 19.162 21.8389 16.5C21.9444 16.0168 22 15.5149 22 15Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22H13.5L13.4999 21.7409C13.499 20.1325 13.4984 18.9754 13.8181 17.9914C13.8873 17.7786 13.9669 17.5708 14.0565 17.3684C13.4157 17.615 12.723 17.75 12 17.75C10.7151 17.75 9.52585 17.3234 8.55343 16.6026C8.22067 16.3559 8.15086 15.8862 8.39752 15.5534C8.64418 15.2207 9.11389 15.1509 9.44666 15.3975C10.175 15.9374 11.0541 16.25 12 16.25C12.9459 16.25 13.8251 15.9374 14.5534 15.3975C14.8179 15.2015 15.1688 15.2053 15.4255 15.3822C16.1372 14.6772 17.012 14.1364 17.9914 13.8181C18.9754 13.4984 20.1325 13.499 21.7409 13.4999L22 13.5V12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12ZM15 12C15.5523 12 16 11.3284 16 10.5C16 9.67157 15.5523 9 15 9C14.4477 9 14 9.67157 14 10.5C14 11.3284 14.4477 12 15 12ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z" fill="currentColor"></path> </g></svg>
        </div>
        <div className="flex items-center hover:cursor-pointer text-gray-300/80 hover:text-gray-300 transition ease-in-out duration-150">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="currentColor"></path> <path d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z" fill="currentColor"></path> <path d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="currentColor"></path> </g></svg>
        </div>
    </div>
    </div>
  )
}

export default UserChatSection
