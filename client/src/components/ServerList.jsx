import React from "react";
import UserMessage from "./UserMessage";
import Servers from "./Servers";
import AddServer from "./AddServer";
import DiscoverServers from "./DiscoverServers";

const ServerList = () => {
  return (
    <div className="bg-black/20 text-black h-[100%] w-[4.5rem] flex flex-col items-center pt-4 gap-2 justify-start overflow-x-auto border-r-2 border-black/10">
      <UserMessage />
      <div className="bg-[#313338] w-[1.75rem] h-[0.1rem] rounded-sm" />
      <Servers />
      <AddServer />
      <DiscoverServers />
    </div>
  );
};

export default ServerList;
