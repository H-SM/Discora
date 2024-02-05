export interface myDetailer {
    name: string;
    img: string;
    userid: string;
    joined: number;
    color: string;
  }

interface SetMyDetailerAction {
    type: 'SET_MY_DETAILER';
    payload: myDetailer;
}

type UserMyDetailerTypes = SetMyDetailerAction;

const initialState: myDetailer = {
    name: "h-s-m",
    img: "https://avatars.githubusercontent.com/u/98532264?v=4",
    userid: "h-s-m",
    joined: Date.now(),
    color: "orange"
};

const myDetailerReducer = (state: myDetailer = initialState, action: UserMyDetailerTypes): myDetailer => {
    switch (action.type) {
      case 'SET_MY_DETAILER':
        return { ...state, ...action.payload };
      default:
        return state;
    }
};
  
export default myDetailerReducer;
// myDetail: myDetailer,
// SetMyDetail: Dispatch<SetStateAction<myDetailer>>,


