import { useState } from "react";
import DropDown from "../components/DropDown";
import { Footer, HomeHeader } from "../components/ui/index";
function SignedInPage({ children, theme, setTheme }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="dark:bg-black">
      <HomeHeader setDropDown={setDropDown} dropDown={dropDown} />
      {children}
      <Footer />
      <DropDown
        dropDown={dropDown}
        setDropDown={setDropDown}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default SignedInPage;
