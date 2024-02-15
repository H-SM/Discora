import UsersLeftSecUser from './UsersLeftSecUser'
import ProfileSecUser from './ProfileSecUser'

const UserSideNav = () => {
  return (
    <div className='h-full bg-[#27292d] flex flex-col items-center justify-between '>
        <UsersLeftSecUser/>
        <ProfileSecUser/>
    </div>
  )
}

export default UserSideNav
