
interface SetLoadingAction {
    type: 'SET_LOADING';
    payload: boolean;
  }
  
  type LoadingActionTypes = SetLoadingAction;
  
  const initialState: boolean = false;
  
  const loadingReducer = (state: boolean = initialState, action: LoadingActionTypes): boolean => {
    switch (action.type) {
      case 'SET_LOADING':
        return action.payload ;
      default:
        return state;
    }
  };
  
  export default loadingReducer;
  // Loading: boolean,
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>,