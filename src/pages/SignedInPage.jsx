import { useState } from "react";

import DropDown from "../components/DropDown";
import { Footer, HomeHeader } from "../components/ui/index";
import CreateNewsModal from "../components/modals/CreateNewsModal";
function SignedInPage({ children, theme, setTheme, user }) {
  const [dropDown, setDropDown] = useState(false);
  const [create, setCreate] = useState(false);

  const bodyStyle = document.body.style;
  create ? (bodyStyle.overflowY = "hidden") : (bodyStyle.overflowY = "auto");

  return (
    <div className="dark:bg-black">
      <HomeHeader
        setDropDown={setDropDown}
        dropDown={dropDown}
        setCreate={setCreate}
        create={create}
        user={user}
      />
      {children}
      <Footer />
      <DropDown
        dropDown={dropDown}
        setDropDown={setDropDown}
        theme={theme}
        setTheme={setTheme}
      />
      {create && <CreateNewsModal />}
    </div>
  );
}

export default SignedInPage;
