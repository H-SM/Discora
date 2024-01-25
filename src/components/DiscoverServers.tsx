const DiscoverServers = () => {
  return (
    <div className="active:bg-green-400 hover:bg-green-400 bg-[#313338] w-[3rem] h-[3rem] rounded-full hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center z-5 text-green-400 hover:text-white">
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
        width={"1.5rem"}
        height={"1.5rem"}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <circle className="fill-current" cx="32" cy="32" r="4"></circle>
            <path
              className="fill-current"
              d="M32,0C14.328,0,0,14.328,0,32s14.328,32,32,32s32-14.328,32-32S49.672,0,32,0z M40,40l-22,6l6-22l22-6 L40,40z"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

export default DiscoverServers;
