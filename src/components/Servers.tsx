import React, { useContext } from "react";
import contextValue, { UserContext } from "../context/user/userContext";

    
const Servers = () => {
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
    <div className="flex flex-col gap-2">
      {/* here will be the list of the servers where the user is part of */}
      <button className="active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338] w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center z-5" onClick={() => handleClick("hsm-s")}>
        {/* {!Servers.icon ?  */}
        <p className="text-white/90 text-[0.765rem]">hsm-s</p>
        {/* } */}
      </button>
      <button className="active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338] w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center" onClick={() => handleClick("sidserver")}>
        <img
          className="object-cover w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl"
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
          alt="server_icon"
        />
      </button>
    </div>
  );
};

export default Servers;
