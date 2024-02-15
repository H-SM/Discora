import { Key, useContext, useEffect } from 'react'
import { UserContext } from "../../context/user/userContext";
import FriendMessageCard from './FriendMessageCard';

    
const FriendListUser = () => {
    const context = useContext(UserContext);
    const { setUserInfo, myDetail, setUserChat,getfriendids, friendIds, getfrienddetails, friendDetails } = context!;

    useEffect(() => {
      if(myDetail.userid){
        getfriendids(myDetail.userid);
      }
    },[]);

    useEffect(() => {
      if(friendIds.friendIds[0] != ""){
        //TODO: make a 20 element infinite scroll section here
        getfrienddetails(friendIds.friendIds);
        console.log(friendDetails);

      }
    },[]);
    
  return (
    <div className='flex flex-col justify-start items-center gap-2 w-[13rem]'>
      {friendDetails.friendDetails[0] != "" ?
      friendDetails.friendDetails.map((friend: any, key : Key) => (
        <FriendMessageCard 
        key={key} 
        username={friend.username}
        userid={friend.userid}
        img={friend.img}
        joined={friend.joined}/>
        ))
        :
        <>No Friends :)</>
      }
    </div>
  )
}

export default FriendListUser
