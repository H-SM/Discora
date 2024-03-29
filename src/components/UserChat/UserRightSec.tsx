import { useContext} from 'react'
import logo from "../../assets/logo_discora_nobg_new.png";
import clsx from 'clsx';
import { UserContext } from "../../context/user/userContext";
import RoleTitle from '../ServerLists/RoleTitle';
import UserCard from '../ServerLists/UserCard';
import { format } from 'date-fns';

    
const UserRightSec = () => {
    const context = useContext(UserContext);
    const {userInfo, userChat} = context!;

    const showDate = (inputDate : string) => {
      const dateObject: Date = new Date(inputDate);
      const formattedDate: string = format(dateObject, "dd MMM yyyy").toUpperCase();
      return formattedDate;
    }
  return (
    <div className={clsx(`w-[30rem] h-full 2xl:h-full border-l-2 border-gray-600/20`,
    userInfo == 1 ? `bg-[#232428]`: userInfo == 0 ?`bg-[#303238]` : `bg-[#27292d]`
    )} >
      {userInfo == 1?
        <div className='w-full h-full'>
          <div className='absolute w-[6rem] h-[6rem] mt-[3rem] ml-3 rounded-full bg-[#232428] z-10 flex justify-center items-center'>

          <img src= {`${userChat.img ? userChat.img : logo}`} alt="logo" className='relative w-[5.3rem] bg-white/5 rounded-full object-cover '/>
       
          <div className='absolute rounded-full bg-[#232428] w-5 h-5 bottom-[0.5rem] right-[0.5rem] flex items-center justify-center'>
            <div className='absolute rounded-full bg-green-600 w-3 h-3'/>
          </div>
          </div>
          <div className='relative w-full h-[6rem] bg-white '/>
          <div className=' w-full h-[4rem] flex justify-end items-center bg-[#232428]'/>  
          <div className='w-full h-full flex justify-start items-center flex-col gap-y-3.5 px-3'>
            <div className='w-[35vh] h-fit bg-[#111214] rounded-md flex flex-col justify-between items-start'>
              <div className='w-[33vh] flex flex-col mx-2 mt-2 pb-2 justify-start items-start border-white/20 border-b-[0.01rem]'>
                <p className='font-bold text-[1.1rem]'>{userChat.name}</p>
                <p className='font-semibold text-[0.7rem]'>{userChat.userid}</p>
              </div>
              <div className='w-[33vh] flex flex-col mt-2 mx-2 pb-2 justify-start items-start gap-1 border-white/20 border-b-[0.01rem]'>
                <p className='font-extrabold text-[0.65rem]'>DISCORA MEMBER SINCE</p>
                <p className='text-[0.7rem] font-roboto'>{showDate(userChat.joined)}</p>
              </div>
              <div className='w-[33vh] flex flex-col mt-2 mx-2 pb-2 justify-start items-start h-[5rem] gap-1'>
                <p className='font-extrabold text-[0.65rem]'>NOTE</p>
                <textarea className='font-medium text-[0.7rem] font-sans bg-transparent outline-none resize-none  w-full h-fit mt-1 placeholder:opacity-90' placeholder='Click to add a note'/>
              </div>
            </div>
            <div className='w-[35vh] h-fit bg-[#111214] rounded-md flex flex-col justify-between items-start'>
              <button className='w-full flex px-2 py-3 justify-between items-center border-white/20 border-b-[0.01rem] text-white'>
                <p className='font-medium text-[0.8rem] font-roboto'>5 Mutual Servers</p>
                <svg className="w-[0.7rem]" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                // xmlns:xlink="http://www.w3.org/1999/xlink" 
                fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
              </button>
              <button className='w-full flex px-2 py-3 justify-between items-center text-white'>
                <p className='font-medium text-[0.8rem] font-roboto'>2 Mutual Friends</p>
                <svg className="w-[0.7rem]" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                // xmlns:xlink="http://www.w3.org/1999/xlink" 
                fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
              </button>
            </div>
          </div>
        </div>
        : userInfo == 0 || userInfo === 5?
        <div className='w-full h-full flex items-center justify-center '>
          <img src={logo} alt="logo" className='w-[24vh] opacity-10'/>
        </div>
        :
        <div className='w-full h-[90vh] overflow-y-auto flex flex-col mt-2'>
            <RoleTitle title="MOD" color="cyan"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="cyan"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="cyan"/>
            {/* TODO: make a color picker here in the future over the role the current user have & a infinite scroll loader over the user infos in the server  */}
            <RoleTitle title="admin" color="black"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="black"/>
            <RoleTitle title="booster" color="green"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="green"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="green"/>
            <RoleTitle title="peps" color="orange"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="orange"/>
            <UserCard name="sid" img="https://i.redd.it/3fc3wd5xwf171.png" color="orange"/>
        </div>
      }
    </div>
  )
}

export default UserRightSec
