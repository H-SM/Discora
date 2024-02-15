import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import logo from "../../assets/logo_discora_nobg_new.png";

interface PropsHere {
    username : string,
    userid : string,
    img : string,
    joined : string,
}

const FriendMessageCard : React.FC<PropsHere>  = (props) => {
    const context = useContext(UserContext);
    const { setUserInfo, setUserChat} = context!;

    const handleButtonClick = () => {
        setUserInfo(1);
        setUserChat({   
          name: props.username,
          img: props.img,
          userid: props.userid,
          joined: props.joined,
          color: "white"
        });
      };
  

  return (
    <button className='w-full h-[2.5rem] flex gap-3 items-center focus:text-white active:text-white text-gray-200 justify-start hover:bg-white/5 active:bg-white/10 focus:bg-white/10 px-2 rounded-md hover:cursor-pointer ' onClick={handleButtonClick}>
            <img className='rounded-full object-cover w-[2rem] h-[2rem]' src={props.img? props.img : logo} alt="user_here" />
            <p className='font-normal select-none font-roboto'>{props.username}</p>
      </button>
  )
}

export default FriendMessageCard
