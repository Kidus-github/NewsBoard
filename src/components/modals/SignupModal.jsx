import Input from "../Input";
import {Button} from "../ui/index"
function SignupModal() {
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
              <img
                src="/src/assets/Logo.png"
                width={100}
                height={100}
                className="my-12"
              />
              <h1 className="font-extrabold text-2xl leading-9 uppercase mb-2">
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
            <div className="bg-[#ffffff] rounded-r-lg pt-[80px] px-[48px] pb-[24px]  flex-1">
              <form action="" className="mb-[48px] flex flex-col gap-4">
                <div className="bg-[#f7f7f7] rounded-sm text-left">
                  <Input type="email" placeholder="Email " />
                </div>
                <div className="bg-[#f7f7f7] rounded-sm text-left">
                  <Input type="text" placeholder="Full Name" />
                </div>
                <div className="bg-[#f7f7f7] rounded-sm text-left">
                  <Input type="text" placeholder="Password" />
                </div>
                <Button className="w-full text-white bg-[#f5262650] ">Continue</Button>
              </form>
              <p className="mb-2">or Sign up with</p>
              <div className="mb-8 flex justify-center gap-3">
                
                  <button>
                  <svg role="img" aria-labelledby="close-icon-title"  width="18" height="18" viewBox="0 0 1000 1187.198"><title id="close-icon-title">Close</title><path fill="#000" d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z"></path></svg>                  </button>
                  <button>
                  <svg role="img" aria-labelledby="google-icon-title"  width="30" height="30" viewBox="0 0 30 30"><title id="google-icon-title">google</title><g data-name="google"><path d="M23.64 15.2a11 11 0 0 0-.16-1.84H15v3.48h4.84a4.15 4.15 0 0 1-1.79 2.72v2.26H21a8.76 8.76 0 0 0 2.68-6.61z" fill="#4285f4"></path><path d="M15 24a8.62 8.62 0 0 0 6-2.18l-2.91-2.26a5.43 5.43 0 0 1-3.05.86 5.37 5.37 0 0 1-5-3.71H7V19a9 9 0 0 0 8 5z" fill="#34a853"></path><path d="M10 16.71a5.36 5.36 0 0 1 0-3.42V11H7a9 9 0 0 0 0 8z" fill="#fbbc05"></path><path d="M15 9.58a4.83 4.83 0 0 1 3.44 1.35L21 8.35A8.61 8.61 0 0 0 15 6a9 9 0 0 0-8 5l3 2.33a5.37 5.37 0 0 1 5-3.75z" fill="#ea4335"></path></g></svg>
                  </button>
              </div>
              <div className="mb-4">
                  <p>Get started as a publisher</p>
                  <br />
                  <p>Already have an account?</p>
                  {/* Login */}
                  <a href="">Login</a>
              </div>
              <div className="pt-6 text-[14px]">
                <p>By continuing, you accept the Terms of Use and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupModal;
