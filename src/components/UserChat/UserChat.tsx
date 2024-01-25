import UserTopNav from './UserTopNav'
import UserChatHere from './UserChatHere'

const UserChat = () => {
  return (
    <div className='w-[97%] h-full flex flex-col'>
      <UserTopNav/>
      <UserChatHere/>
    </div>
  )
}

export default UserChat
