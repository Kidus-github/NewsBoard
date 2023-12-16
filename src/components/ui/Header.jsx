import Input from "../Input";
import Button from "./Button";
function Header() {
  return (
    <div className="flex items-center justify-between py-1 px-5 border-solid border-0 border-b-2 border-slate-100 fixed w-full bg-white">
      <div className="flex justify-center items-center">
        <img
          src="/src/assets/Logo.png"
          alt="News Board Logo"
          className="w-[40px] h-[40px]"
        />
        <h1 className="font-bold font-sans text-2xl ">NEWSBOARD</h1>
      </div>
      <div className="flex gap-3">
        <Input />
        <Button type="solid">SignUp</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
