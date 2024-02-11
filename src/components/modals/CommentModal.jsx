function CommentModal() {
  return (
    <div className=" h-full flex items-center justify-center fixed left-0 top-0 select-none w-[100%] z-[999] bg-[#000000a4]">
      <section className="  select-text max-h-[95%]  relative z-[9991]">
        <div className="absolute top-[12px] right-[12px] z-[11]">
          <button className="border-none bg-transparent cursor-pointer w-auto text-[#bcbcbc]">
            <div className="items-center flex justify-center p-0">
              <svg
                role="img"
                aria-labelledby="closenew-icon-title"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <title id="closenew-icon-title">closenew</title>
                <path
                  d="M15.7071 8.29304C16.0976 8.68357 16.0976 9.31673 15.7071 9.70726L13.4142 12.0002L15.7071 14.293C16.0976 14.6836 16.0976 15.3167 15.7071 15.7073C15.3166 16.0978 14.6834 16.0978 14.2929 15.7073L12 13.4144L9.70711 15.7073C9.31658 16.0978 8.68342 16.0978 8.29289 15.7073C7.90237 15.3167 7.90237 14.6836 8.29289 14.293L10.5858 12.0002L8.29289 9.70726C7.90237 9.31673 7.90237 8.68357 8.29289 8.29304C8.68342 7.90252 9.31658 7.90252 9.70711 8.29304L12 10.5859L14.2929 8.29304C14.6834 7.90252 15.3166 7.90252 15.7071 8.29304Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="w-[720px] text-center h-full ">
          <div className="flex justify-center h-full">
            <div className=" p-6 bg-[#f7f7f7] text-black flex flex-col items-center font-[FaktCondensed, AvenirNextCondensed-Medium, Segoe UI, sans-serif]">
              something is hewre
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentModal;
