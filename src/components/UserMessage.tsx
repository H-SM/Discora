import React, { useContext } from "react";
import logo from "../assets/logo_discora_nobg_new.png";
import contextValue from "../context/user/userContext";

    
const UserMessage = () => {
    const context = useContext(contextValue);
    const {userInfo, setUserInfo} = context!;
  return (
    <button className="active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338]  w-[3rem] h-[3rem] rounded-full hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center" onClick={() => setUserInfo(0)}>
      <img src={logo} alt="logo" className="w-11 h-11" />
      {/* this button will be linked to 1v1 chat section  */}
    </button>
  );
};

export default UserMessage;
