const AddServer = () => {
  return (
    <div className="active:bg-green-400 hover:bg-green-400 bg-[#313338] w-[3rem] h-[3rem] rounded-full hover:rounded-xl transition ease-in-out duration-150 flex items-center justify-center z-5 text-green-400 hover:text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={"1.5rem"}
        height={"1.5rem"}
        className="fill-current"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 12H18M12 6V18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default AddServer;
