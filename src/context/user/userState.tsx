import React, { createContext, useState, ReactNode } from "react";

interface User {
  name: string;
  img: string;
  userid: string;
  joined: string;
  color: string;
}

interface Server {
  name: string;
  // Add other details for the server
}

interface UserContextProps {
  userInfo: number;
  setUserInfo: React.Dispatch<React.SetStateAction<number>>;
  userChat: User; // Update the type based on your use case
  setUserChat: React.Dispatch<React.SetStateAction<User>>; // Corrected type
  serverChat: { name: string };
  setServerChat: React.Dispatch<React.SetStateAction<{ name: string }>>;  
  server: Server;
  setServer: React.Dispatch<React.SetStateAction<Server>>;
  myDetail: User;
  SetMyDetail: React.Dispatch<React.SetStateAction<User>>;
}

const userContext = createContext<UserContextProps | undefined>(undefined);

interface UserStateProps {
  children: ReactNode;
}

const initialUserChat: User = {
  name: "",
  img: "",
  userid: "",
  joined: "",
  color: ""
};

const UserState: React.FC<UserStateProps> = (props) => {
  const [userInfo, setUserInfo] = useState<number>(0);
  const [userChat, setUserChat] = useState<User>(initialUserChat);
  const [serverChat, setServerChat] = useState({ name: "general" });
  const [server, setServer] = useState<Server>({ name: "default" });
  const [myDetail, SetMyDetail] = useState<User>({
    name: "h-s-m",
    img: "https://avatars.githubusercontent.com/u/98532264?v=4",
    userid: "h-s-m",
    joined: "Jul 23,2020",
    color: "orange",
  });

  return (
    <userContext.Provider
      value={{userInfo, setUserInfo, userChat, setUserChat, myDetail, SetMyDetail, serverChat, setServerChat, server, setServer}}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
