import Input from "../Input";
function SignupModal() {
  return (
    <div className=" h-full flex items-center justify-center fixed left-0 top-0 select-none w-[100%] z-[999] rounded-lg bg-[#666666d7]">
      <section className="bg-[#141414] rounded-lg select-text h-[95%]  relative z-[9991]">
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
        <div className="w-[720px] rounded-lg text-center h-full ">
          <div className="flex justify-center h-full">
            <div className=" p-6 bg-[#262626] text-white flex flex-col items-center font-[FaktCondensed, AvenirNextCondensed-Medium, Segoe UI, sans-serif]">
              <img
                src="/src/assets/Logo.png"
                width={100}
                height={100}
                className="my-12"
              />
              <h1 className="font-extrabold text-2xl leading-8 uppercase mb-2">
                Join Newsboard
              </h1>
              <p className="mb-20 font-medium text-base text-wrap">
                Stay Informed. Stay inspired.
              </p>
              <div className="flex flex-col justify-center items-center gap-8 w-max">
                <div className="flex  w-full gap-4">
                  <svg
                    role="img"
                    aria-labelledby="pound-icon-title"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <title id="pound-icon-title">pound</title>
                    <g id="Group-4">
                      <circle
                        id="Oval"
                        fill="#F52828"
                        cx="12"
                        cy="12"
                        r="12"
                      ></circle>
                      <g
                        id="Group-3"
                        transform="translate(5.327934, 5.000000)"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                      >
                        <line
                          x1="3.09695712"
                          y1="6.297185e-13"
                          x2="3.09695712"
                          y2="13.344133"
                          id="Path"
                        ></line>
                        <line
                          x1="9.7907949"
                          y1="6.297185e-13"
                          x2="9.7907949"
                          y2="13.344133"
                          id="Path"
                        ></line>
                        <line
                          x1="13.344133"
                          y1="3.44106346"
                          x2="-5.24025268e-14"
                          y2="3.44106346"
                          id="Path"
                        ></line>
                        <line
                          x1="13.344133"
                          y1="9.63497769"
                          x2="-5.24025268e-14"
                          y2="9.63497769"
                          id="Path"
                        ></line>
                      </g>
                    </g>
                  </svg>
                  <p>Follow Topics</p>
                </div>
                <div className="flex  w-full gap-4">
                  <svg
                    role="img"
                    aria-labelledby="plus-icon-title"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <title id="plus-icon-title">plus</title>
                    <g id="Group-5">
                      <circle
                        id="Oval"
                        fill="#F52828"
                        cx="12"
                        cy="12"
                        r="12"
                      ></circle>
                      <g
                        id="Group"
                        transform="translate(6.000000, 6.000000)"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                      >
                        <line
                          x1="5.74667526"
                          y1="0"
                          x2="5.74667526"
                          y2="11.4933505"
                          id="Path-5"
                        ></line>
                        <line
                          x1="-9.09162994e-15"
                          y1="5.74667526"
                          x2="11.4933505"
                          y2="5.74667526"
                          id="Path-6"
                        ></line>
                      </g>
                    </g>
                  </svg>
                  <p>Curate Stories</p>
                </div>
                <div className="flex  w-full gap-4">
                  <svg
                    role="img"
                    aria-labelledby="share-icon-title"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <title id="share-icon-title">Share</title>
                    <g id="Group-8">
                      <circle
                        id="Oval"
                        fill="#F52828"
                        cx="12"
                        cy="12"
                        r="12"
                      ></circle>
                      <g
                        id="Group-2"
                        transform="translate(7.500000, 6.500000)"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                      >
                        <polyline
                          id="Path-7"
                          fill="#F52828"
                          points="-3.55501217e-13 4.06205162 -3.55501217e-13 10.4937496 8.54601996 10.4937496 8.54601996 4.06205162"
                        ></polyline>
                        <polyline
                          id="Path-8"
                          points="6.50554753 2.23253755 4.27300998 8.9688449e-13 2.04047243 2.23253755"
                        ></polyline>
                        <line
                          x1="4.27300998"
                          y1="-1.01628839e-12"
                          x2="4.27300998"
                          y2="7.28042115"
                          id="Path-9"
                        ></line>
                      </g>
                    </g>
                  </svg>
                  <p>Share Ideas</p>
                </div>
              </div>
            </div>
            <div className="pt-[60px] px-[24px] pb-[48px]  flex-1">
              <form action="" className="mb-[48px] flex flex-col gap-4">
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input type="text" placeholder="Full Name" />
                </div>
                <div>
                  <Input type="text" placeholder="Password" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupModal;
