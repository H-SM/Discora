import React from "react";
import ServerList from "../components/ServerList";
import UserChat from "../components/UserChat/UserChat";

const Home = () => {
  return (
    <div className="w-100 h-[100vh] flex flex-row">
      <ServerList />
      <UserChat />
    </div>
  );
};

export default Home;
