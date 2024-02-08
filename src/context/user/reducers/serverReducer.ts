export interface ServerChat {
    name: string;
    // Add other details for the server
}

interface SetServerChatAction {
    type: 'SET_SERVER';
    payload: ServerChat;
}

type UserServerChatTypes = SetServerChatAction;

const initialState: ServerChat = {
    name: "default"
};

const ServerChatReducer = (state: ServerChat = initialState, action: UserServerChatTypes): ServerChat => {
    switch (action.type) {
      case 'SET_SERVER':
        return { ...state, ...action.payload };
      default:
        return state;
    }
};
  
export default ServerChatReducer;
// serverChat: ServerChat,
// setServerChat: Dispatch<SetStateAction<ServerChat>>,