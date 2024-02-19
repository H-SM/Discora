import ListOfUsers from './ListOfUsers'
import { UserContext } from '../../context/user/userContext';
import React, { useContext, ChangeEvent, FormEvent, Key } from 'react';

const UserFriendsMenu = () => {
  const context = useContext(UserContext);
  const { userInfo, addfriends, UserDetailsFirebase, friendDetails } = context!;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    if (!value.startsWith("#")) {
      value = "#" + value;
    }
    if (/^#([0-9]{0,4})$/.test(value)) {
      e.target.value = value;
    } else {
      e.target.value = "#0000";
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const hashtagInput = form.elements.namedItem('hashtag') as HTMLInputElement;

    // Log the values
    console.log('Name:', nameInput.value, nameInput.value.length);
    console.log('Hashtag:', hashtagInput.value);

    addfriends(UserDetailsFirebase!.uid, nameInput.value,  hashtagInput.value.substring(1, 5));

  };

  return (
    <>
      {userInfo === 0 ?
        <div className='bg-[#313338] h-full w-[120vh] flex flex-col justify-start items-center'>
          <div className="relative w-[116vh] mt-2">
            <input type="search" id="default-search" className="block w-full p-4 pe-10 text-sm text-gray-300/60 rounded-md text-[1rem] outline-none bg-[#1e1f22] h-[2.2rem] font-roboto" placeholder="Search" />
            <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
          <div className=' w-full font-roboto font-semibold text-[0.7rem] leading-4 text-gray-300/80 mt-8 ml-12'>
            <p>ONLINE - 0</p>
          </div>
          <div className='w-full flex flex-col justify-start items-center mt-2 overflow-y-auto h-[79vh]'>
          {friendDetails.friendDetails[0] != "" ?
          friendDetails.friendDetails.map((friend: any, key : Key) => (
          <ListOfUsers
          key={key}
          username={friend.username} 
          userid={friend.userid} 
          img={friend.img} 
          joined={friend.joined}
          />
          ))
          :
          <>
          no friends :)
          </>
          }
          </div>
        </div>
        :
        //5 
        <>
          <div className='bg-[#313338] h-full w-[120vh] flex flex-col justify-start items-center'>
            <div className="relative w-[116vh] mt-4 ">
              <div className=' w-full font-roboto font-normal text-[0.8rem] leading-4 text-gray-300/80 ml-2 mb-2'>
                <h1 className='text-[0.95rem] leading-[1.1rem] text-white font-extrabold'>ADD FRIEND</h1>
                <p>You can add friends with Discora username & hastag</p>
              </div>
              <form onSubmit={handleSubmit} className="flex items-center justify-start gap-3 ps-3 ">
                <input type="string" id='name' className="block w-[12rem] p-4 pe-10 text-sm text-gray-300/60 rounded-md text-[1rem] bg-[#1e1f22] h-[2.2rem] font-roboto outline outline-2 outline-white/5" placeholder="Name" />
                <input
                  type="text"
                  id="hashtag"
                  className="block w-[4rem] p-2 text-sm text-gray-300/60 rounded-md text-[1rem] bg-[#1e1f22] h-[2.2rem] font-roboto outline outline-2 outline-white/5"
                  placeholder="Hashtag"
                  defaultValue={"#0000"}
                  maxLength={5}
                  onInput={handleInputChange}
                />
                <button type="submit">
                  Add Friend
                </button>
              </form>
            </div>

          </div>
        </>
      }
    </>
  )
}

export default UserFriendsMenu
