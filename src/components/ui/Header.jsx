// import { useNavigate } from "react-router-dom";
import SearchInput from "../SearchInput";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Header({ setIsSignUp, setIsLogIn }) {
  // const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-2 px-5 border-solid border-0 border-b-2 border-slate-100 fixed w-full bg-white top-0 dark:bg-black dark:text-[#ccccc0]">
      <NavLink to="/">
        <div className="flex justify-center items-center">
          <img
            src="/src/assets/Logo.png"
            alt="News Board Logo"
            className="w-[40px] h-[40px]"
          />

          <h1 className="font-bold font-sans text-2xl ">NEWSBOARD</h1>
        </div>
      </NavLink>
      <div className="flex gap-3">
        <SearchInput />
        <Button
          className=" bg-primary text-white rounded-md hover:bg-[#ad2224] "
          onClick={() => {
            setIsSignUp(true);
          }}
        >
          Sign up
        </Button>
        <Button
          className="text-slate-700 hover:text-[#6f1414] text-sm "
          onClick={() => {
            console.log("this is clicked");
            setIsLogIn(true);
            // navigate("login");
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Header;
