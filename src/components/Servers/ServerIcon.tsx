import React, { useContext } from 'react'
import { UserContext } from "../../context/user/userContext";

interface Propshere {
    img : string | null, 
    name : string 
}
const ServerIcon : React.FC<Propshere> = (props) => {
    const context = useContext(UserContext);
    const { setUserInfo, setServer, setServerChat } = context!;

    const handleClick : (namer: string) => void = (namer) => {
        setUserInfo(2);
        setServer({
          name : namer
        });
        setServerChat({
          name : "general"
      });
    }
  return (
    <button className="active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338] w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center z-5" onClick={() => handleClick(props.name)}>
        {props.img ? 
        <p className="text-white/90 text-[0.765rem]">{props.name}</p>
        :
        <img
          className="object-cover w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl"
          src={props.img!}
          alt="server_icon"
        />
        }
      </button>
  )
}

export default ServerIcon
