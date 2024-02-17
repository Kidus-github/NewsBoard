import { useState } from "react";
import { Button } from "../ui/index";
function LoginModal({ setIsLogIn }) {
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("https://localhost:7281/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token.toString());
      } else {
        console.log("Incorrect login");
      }
    } catch (error) {
      // Handle errors
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-full justify-center items-center bg-[#00000058] left-0 top-0 fixed select-none w-full z-[99] ">
      <section className="shadow-[0px_0px_16px_#00000006] rounded-xl select-text max-h-[95%] relative bg-white">
        <div className="absolute top-3 right-3 z-[999]">
          <button
            className="bg-transparent border-0 text-[#555] cursor-pointer p-0 "
            onClick={() => {
              setIsLogIn(false);
            }}
          >
            <div className="flex items-center justify-center p-0 text-[#262626]">
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
        <div className="w-[400px] rounded-md pt-[32px] px-[48px] pb-[24px] bg-white text-center flex flex-col items-center h-full">
          <img
            src="/src/assets/Logo.png"
            alt="News Board Logo"
            className="w-[40px] h-[40px] mb-4"
          />

          <h1 className="uppercase font-[FaktCondensed, AvenirNextCondensed-Medium, Segoe UI, sans-serif] font-extrabold text-[#262626] text-[22px] mb-4 ">
            Log in to StoryBoard
          </h1>
          <div className="flex gap-4 justify-center mb-4 text-center">
            <div className="cursor-pointer flex gap-4 ">
              <button className="h-[32px] w-[32px] rounded-[20px] p-0 border-solid border-[#eee] border-2 bg-white flex items-center justify-center">
                <svg
                  role="img"
                  aria-labelledby="close-icon-title"
                  width="18"
                  height="18"
                  viewBox="0 0 1000 1187.198"
                >
                  <title id="close-icon-title">Close</title>
                  <path
                    fill="#000"
                    d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z"
                  ></path>
                </svg>
              </button>

              <button className="h-[32px] w-[32px] rounded-[20px] p-0 border-solid border-[#eee] border-2 bg-white flex items-center justify-center">
                <svg
                  role="img"
                  aria-labelledby="facebook-icon-title"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <title id="facebook-icon-title">facebook</title>
                  <path
                    d="M17.1357031,15.5625 L17.5941117,12.4858984 L14.7279298,12.4858984 L14.7279298,10.4893945 C14.7279298,9.64769531 15.1283119,8.82724609 16.4119849,8.82724609 L17.715,8.82724609 L17.715,6.20785156 C17.715,6.20785156 16.5325509,6 15.4020031,6 C13.041618,6 11.4987605,7.47355469 11.4987605,10.1410937 L11.4987605,12.4858984 L8.875,12.4858984 L8.875,15.5625 L11.4987605,15.5625 L11.4987605,23 L14.7279298,23 L14.7279298,15.5625 L17.1357031,15.5625 Z"
                    id="Path"
                    fill="#4267b2"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </button>

              <button className="h-[32px] w-[32px] rounded-[20px] p-0 border-solid border-[#eee] border-2 bg-white flex items-center justify-center">
                <svg
                  role="img"
                  aria-labelledby="google-icon-title"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <title id="google-icon-title">google</title>
                  <g data-name="google">
                    <path
                      d="M23.64 15.2a11 11 0 0 0-.16-1.84H15v3.48h4.84a4.15 4.15 0 0 1-1.79 2.72v2.26H21a8.76 8.76 0 0 0 2.68-6.61z"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M15 24a8.62 8.62 0 0 0 6-2.18l-2.91-2.26a5.43 5.43 0 0 1-3.05.86 5.37 5.37 0 0 1-5-3.71H7V19a9 9 0 0 0 8 5z"
                      fill="#34a853"
                    ></path>
                    <path
                      d="M10 16.71a5.36 5.36 0 0 1 0-3.42V11H7a9 9 0 0 0 0 8z"
                      fill="#fbbc05"
                    ></path>
                    <path
                      d="M15 9.58a4.83 4.83 0 0 1 3.44 1.35L21 8.35A8.61 8.61 0 0 0 15 6a9 9 0 0 0-8 5l3 2.33a5.37 5.37 0 0 1 5-3.75z"
                      fill="#ea4335"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <Button className="text-slate-600 border-solid rounded-md border-2 border-slate-200 mb-[32px] hover:text-black">
            Get log in link
          </Button>
          <p className="text-[14px] break-words mb-[16px]">or with email</p>
          <form action="" className="w-full mb-[48px]">
            <div className="mb-[16px]">
              <div className="relative">
                <input
                  className="pl-2 text-left appearance-none bg-[#f7f7f7] border-solid border-2 border-transparent rounded-md caret-[#f52828] text-black font-medium h-[44px] py-[8px] px-[12] w-full"
                  type="text"
                  name="username"
                  placeholder="Username or Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-[16px]">
              <div className="relative">
                <input
                  className="pl-2 text-left appearance-none bg-[#f7f7f7] border-solid border-2 border-transparent rounded-md caret-[#f52828] text-black font-medium h-[44px] py-[8px] px-[12] w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-[26px] text-right">
              <a href="">Forgot your password?</a>
            </div>
            <button
              className="bg-[#f528284b] border-solid border-0 border-[#f528282f] text-white w-full py-[8px] px-[12px] text-lg hover:bg-[#ee2a2c]"
              onClick={() => {
                setIsLogIn(false);
                handleLogin(email, password);
              }}
            >
              Log In
            </button>
          </form>
          <p className="font-medium text-[14px] break-words text-[#555]">
            New to Storyboard{" "}
            <a href="" className="font-semibold cursor-pointer no-underline ">
              Sign Up
            </a>
          </p>
          <div className="pt-[24px]">
            <p>
              By continuing, you accept the &nbsp;
              <a href="">Terms of Use</a>
              and &nbsp;
              <a href="">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginModal;
