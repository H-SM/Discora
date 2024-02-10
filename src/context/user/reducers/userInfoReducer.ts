
  interface SetUserInfoAction {
    type: 'SET_USER_INFO';
    payload: number;
  }
  
  type UserInfoActionTypes = SetUserInfoAction;
  
  const initialState: number = 0;
  
  const userInfoReducer = (state: number = initialState, action: UserInfoActionTypes): number => {
    switch (action.type) {
      case 'SET_USER_INFO':
        return action.payload ;
      default:
        return state;
    }
  };
  
  export default userInfoReducer;
//   userInfo: number,
//   setUserInfo: React.Dispatch<React.SetStateAction<number>>,