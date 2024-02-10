import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import logo from "../../assets/logo_discora_nobg_new.png";

const ProfileSecUser = () => {
  const context = useContext(UserContext);
  const { myDetail } = context!;
  return (
    <div className='bg-black/30 h-[3.25rem] w-full flex flex-row gap-2 justify-between items-center'>
        <div className='flex flex-row gap-2 justify-center items-center ml-3'>
            <img className='rounded-full object-cover w-[2.5rem] h-[2.5rem] bg-white bg-opacity-10 ' src={myDetail.img ? myDetail.img : logo} alt="user_here" />
            <div className='flex flex-col gap-1'>
            <p className='font-semibold select-none font-mono h-[1rem]'>{myDetail.name}</p>
            <p className='text-[0.7rem] select-none font-roboto h-[1rem]'>online</p>
            </div>
        </div>
        <div className='flex flex-row-reverse gap-1 text-gray-300 mr-2'>
        <div className='w-[1.5rem] h-[2rem] flex items-center justify-center'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6527 10.3496L19.7085 10.6856C19.8769 10.713 20.0003 10.8584 20 11.0289V12.9419C20 13.1106 19.8789 13.2553 19.7123 13.2845L17.6537 13.6459C17.5344 14.0584 17.3706 14.4557 17.1643 14.8313L18.3811 16.5207C18.4809 16.6591 18.4653 16.8494 18.3449 16.9701L16.9924 18.3235C16.8728 18.4428 16.6849 18.4598 16.5465 18.3621L14.8402 17.1652C14.4639 17.3746 14.0642 17.5416 13.6471 17.6643L13.2836 19.713C13.2544 19.879 13.11 20 12.9413 20H11.0281C10.858 20 10.7129 19.8772 10.6855 19.7099L10.3459 17.6713C9.92956 17.551 9.52778 17.385 9.14758 17.176L7.45352 18.3624C7.31542 18.4595 7.12723 18.4428 7.00791 18.3235L5.65545 16.9701C5.53544 16.8494 5.51978 16.6598 5.61858 16.5217L6.81555 14.8477C6.6044 14.4657 6.43673 14.0626 6.31533 13.6442L4.28698 13.2845C4.12105 13.255 4 13.1106 4 12.9419V11.0289C4 10.8591 4.12314 10.7137 4.29081 10.6859L6.31916 10.3482C6.44126 9.9287 6.60892 9.52557 6.81938 9.1447L5.63701 7.45322C5.53996 7.31513 5.55666 7.1273 5.67597 7.008L7.02809 5.656C7.1488 5.536 7.33768 5.52 7.47648 5.61913L9.15662 6.81913C9.53405 6.61252 9.93478 6.448 10.3522 6.328L10.6848 4.29183C10.7122 4.12348 10.8576 4 11.0281 4H12.9413C13.1104 4 13.2547 4.12174 13.2839 4.288L13.6426 6.3353C14.0576 6.456 14.4576 6.62226 14.8364 6.83165L16.5211 5.62087C16.6595 5.52104 16.8495 5.5367 16.9702 5.65704L18.323 7.00904C18.4423 7.1287 18.459 7.31687 18.3619 7.45496L17.1618 9.16522C17.3678 9.54052 17.5323 9.93704 17.6527 10.3496ZM9.56501 12C9.56501 13.3447 10.6552 14.4348 12 14.4348C13.3448 14.4348 14.435 13.3447 14.435 12C14.435 10.6553 13.3448 9.56522 12 9.56522C10.6552 9.56522 9.56501 10.6553 9.56501 12Z" fill="currentColor"></path> </g></svg>
        </div>
        
        <div className='w-[1.5rem] h-[2rem] flex items-center justify-center'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4587 4.71321C11.476 4.50597 12.524 4.50597 13.5413 4.71321C16.947 5.40696 19.5666 8.08688 20.2726 11.4523C19.8627 11.2485 19.4016 11.134 18.9141 11.134C18.5532 11.134 18.1939 11.1845 17.8466 11.2841L17.578 11.3611C16.0326 11.804 14.8649 13.0899 14.5584 14.6863C14.3833 15.5982 14.3833 16.5358 14.5584 17.4477C14.8649 19.0442 16.0326 20.3301 17.578 20.773L17.8466 20.85C18.1939 20.9495 18.5532 21 18.9141 21C20.6184 21 22 19.6011 22 17.8754L22 12.9248L21.9757 12.566C21.6624 7.94133 18.3328 4.10026 13.8447 3.18603C12.6271 2.93799 11.3729 2.93799 10.1553 3.18603C5.66717 4.10026 2.33756 7.94133 2.0243 12.566L2 12.9248L2.00001 17.8754C2 19.6011 3.38158 21 5.08586 21C5.44684 21 5.80608 20.9495 6.15342 20.85L6.42199 20.773C7.96742 20.3301 9.13514 19.0442 9.44163 17.4477C9.6167 16.5358 9.6167 15.5982 9.44163 14.6863C9.13514 13.0899 7.96743 11.804 6.42199 11.3611L6.15342 11.2841C5.80609 11.1845 5.44684 11.134 5.08586 11.134C4.5984 11.134 4.13733 11.2485 3.72744 11.4523C4.4334 8.08687 7.05297 5.40696 10.4587 4.71321Z" fill="currentColor"></path> </g></svg>
        </div>
        <div className='w-[1.4rem] h-[2rem] flex items-center justify-center'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V5Z" fill="currentColor"></path> <path d="M6.25 11.8438V12C6.25 13.525 6.8558 14.9875 7.93414 16.0659C9.01247 17.1442 10.475 17.75 12 17.75C13.525 17.75 14.9875 17.1442 16.0659 16.0659C17.1442 14.9875 17.75 13.525 17.75 12V11.8438C17.75 11.2915 18.1977 10.8438 18.75 10.8438H19.25C19.8023 10.8438 20.25 11.2915 20.25 11.8437V12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.5842 19.0831 14.9753 19.8903 13.25 20.1548V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V20.1548C9.02471 19.8903 7.41579 19.0831 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12V11.8438C3.75 11.2915 4.19772 10.8438 4.75 10.8438H5.25C5.80228 10.8438 6.25 11.2915 6.25 11.8438Z" fill="currentColor"></path> </g></svg>
        </div>
        </div>
    </div>
  )
}

export default ProfileSecUser
