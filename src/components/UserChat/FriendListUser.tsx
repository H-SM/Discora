import React, { useContext, useEffect } from 'react'
import contextValue from "../../context/user/userContext";

    
const FriendListUser = () => {
    const context = useContext(contextValue);
    const { setUserInfo, userChat, setUserChat } = context!;

    useEffect(() => {
      console.log(userChat);
    },[userChat]);

    const handleButtonClick = () => {
      setUserInfo(1);
      setUserChat({
        name: "Sid",
        img: "https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg",
        userid: "sid_the_sloth",
        joined: "Jul 23,2020",
        color: "white"
      });
    };

    
  return (
    <div className='flex flex-col justify-start items-center gap-2 w-[13rem]'>
      <button className='w-full h-[2.5rem] flex gap-3 items-center focus:text-white active:text-white text-gray-200 justify-start hover:bg-white/5 active:bg-white/10 focus:bg-white/10 px-2 rounded-md hover:cursor-pointer ' onClick={handleButtonClick}>
            <img className='rounded-full object-cover w-[2rem] h-[2rem]' src='https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' alt="user_here" />
            <p className='font-normal select-none font-roboto'>Sid</p>
      </button>
      
      {/* TODO: get the list of user's friends here */}
    </div>
  )
}

export default FriendListUser
