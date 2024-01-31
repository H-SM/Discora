import React, { Dispatch, SetStateAction, createContext, useState } from "react";
import UserChat from "../../components/UserChat/UserChat";

export interface UserChat {
  name: string;
  img: string;
  userid: string;
  joined: string;
  color: string;
}


export interface myDetailer {
  name: string;
  img: string;
  userid: string;
  joined: number;
  color: string;
}

export interface Server {
  name: string;
  // Add other details for the server
}

export interface ServerChat {
  name: string;
  // Add other details for the server
}

export interface UserContextInterface {
  userChat: UserChat,
  setUserChat: Dispatch<SetStateAction<UserChat>>,
  serverChat: ServerChat,
  setServerChat: Dispatch<SetStateAction<ServerChat>>,
  userInfo: number,
  setUserInfo: React.Dispatch<React.SetStateAction<number>>,
  server: Server,
  setServer: Dispatch<SetStateAction<Server>>,
  myDetail: myDetailer,
  SetMyDetail: Dispatch<SetStateAction<myDetailer>>,
}

const defaultState = {
  userChat: {
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: ""
  },
  setUserChat: (userChat : UserChat) => {},
  serverChat: {
    name: "general"
  },
  setServerChat: (serverChat : ServerChat) => {},
  userInfo: 0,
  setUserInfo: (userInfo : number) => {},
  server: {
    name : "default",
  },
  setServer:(server : Server) => {},
  myDetail: {
    name: "h-s-m",
    img: "https://avatars.githubusercontent.com/u/98532264?v=4",
    userid: "h-s-m",
    joined: Date.now(),
    color: "orange"
  },
  SetMyDetail: (myDetail : myDetailer) => {},
} as UserContextInterface

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children : React.ReactNode
}

const UserProvider = ({children} : UserProviderProps) => {
  const [userInfo, setUserInfo] = useState(0);
  const [userChat, setUserChat] = useState({
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: ""
  });
  const [serverChat, setServerChat] = useState({
      name : "general"
  });
  const [server, setServer] = useState({
      name : "default"
      // make the rest of the details for the servers soon
  });
  const [myDetail, SetMyDetail] = useState({
      name: "h-s-m",
      img: "https://avatars.githubusercontent.com/u/98532264?v=4",
      userid: "h-s-m",
      joined: Date.now(),
      color: "orange"
  });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, userChat, setUserChat, serverChat, setServerChat,server, setServer, myDetail, SetMyDetail}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider

