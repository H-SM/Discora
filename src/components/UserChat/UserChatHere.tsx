import { useContext } from 'react';
import UserSideNav from './UserSideNav';
import UserFriendsMenu from './UserFriendsMenu';
import UserRightSec from './UserRightSec';
import UserChatSection from './UserChatSection';
import { UserContext } from '../../context/user/userContext';

const UserChatHere = () => {
  const context = useContext(UserContext);
  const { userInfo } = context!;

  return (
    <div className='w-full h-full flex flex-row justify-between'>
      <UserSideNav />
      {userInfo === 0 || userInfo === 5 ? <UserFriendsMenu /> : <UserChatSection />}
      <UserRightSec />
    </div>
  );
};

export default UserChatHere;
