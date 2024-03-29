import { NavLink, useNavigate } from "react-router-dom";
function DropDown({ dropDown, setDropDown, theme, setTheme }) {
  let Navigate = useNavigate();
  return (
    <div
      className={`fixed top-16 right-0 bg-[#f7f7f7] shadow-[0_2px_4px_rgba(0,0,0,0.2)] ${
        dropDown ? "block" : "hidden"
      }`}
    >
      <ul
        className="flex flex-col text-right"
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <li className="px-10 py-5 cursor-pointer">
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <NavLink to={"/analytics"}>Analytics</NavLink>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <NavLink to={"/setting"}>Settings</NavLink>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            Dark mode
          </button>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <NavLink to={"/privacy"}>Privacy policy</NavLink>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <NavLink to={"privacychoices"}>Your Privacy Choices</NavLink>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <NavLink to={"/help"}>Help</NavLink>
        </li>
        <li className="px-10 py-5 cursor-pointer">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              Navigate("/");
            }}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
