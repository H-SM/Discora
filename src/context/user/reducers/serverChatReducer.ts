export interface ServerChat {
    name: string;
    // Add other details for the server
}

interface SetServerChatAction {
    type: 'SET_SERVER_CHAT';
    payload: ServerChat;
}

type UserServerChatTypes = SetServerChatAction;

const initialState: ServerChat = {
    name: "general"
};

const ServerChatReducer = (state: ServerChat = initialState, action: UserServerChatTypes): ServerChat => {
    switch (action.type) {
      case 'SET_SERVER_CHAT':
        return { ...state, ...action.payload };
      default:
        return state;
    }
};
  
export default ServerChatReducer;
// serverChat: ServerChat,
// setServerChat: Dispatch<SetStateAction<ServerChat>>,