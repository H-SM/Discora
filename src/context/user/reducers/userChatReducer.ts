export interface UserChat {
  name: string;
  img: string;
  userid: string;
  joined: string;
  color: string;
}

interface SetUserChatAction {
  type: 'SET_USER_CHAT';
  payload: UserChat;
}

type UserChatActionTypes = SetUserChatAction;

const initialState: UserChat = {
  name: "",
  img: "",
  userid: "",
  joined: "",
  color: ""
};

const userChatReducer = (state: UserChat = initialState, action: UserChatActionTypes): UserChat => {
  switch (action.type) {
    case 'SET_USER_CHAT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userChatReducer;
//   userChat: UserChat,
//   setUserChat: Dispatch<SetStateAction<UserChat>>,