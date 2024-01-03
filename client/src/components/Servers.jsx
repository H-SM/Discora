import React from "react";

const Servers = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* here will be the list of the servers where the user is part of */}
      <div className="active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338] w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center z-5">
        {/* {!Servers.icon ?  */}
        <p className="text-white/90 text-[0.765rem]">hsm-s</p>
        {/* } */}
      </div>
      <div className="active:bg-indigo-500 hover:bg-indigo-500 bg-[#313338] w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center">
        <img
          className="object-cover w-[3rem] h-[3rem] rounded-2xl hover:rounded-xl"
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
          alt="server_icon"
        />
      </div>
    </div>
  );
};

export default Servers;
