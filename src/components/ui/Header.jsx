import { useNavigate } from "react-router-dom";
import SearchInput from "../SearchInput";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-2 px-5 border-solid border-0 border-b-2 border-slate-100 fixed w-full bg-white">
      <div className="flex justify-center items-center">
        <img
          src="/src/assets/Logo.png"
          alt="News Board Logo"
          className="w-[40px] h-[40px]"
        />
        <h1 className="font-bold font-sans text-2xl ">NEWSBOARD</h1>
      </div>
      <div className="flex gap-3">
        <SearchInput />
        <Button className=" bg-primary text-white rounded-md">SignUp</Button>
        <Button
          className="text-slate-700 "
          onClick={() => {
            console.log("this is clicked");
            navigate("login");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Header;
