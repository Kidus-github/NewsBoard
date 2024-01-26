import { useState, useEffect } from "react";
import ProfileSection from "../components/ProfileSection";

function Profile() {
  const [user, setUser] = useState({});
  useEffect(function () {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.at(0));
      })
      .catch(() => console.log("dataFailed"));
  }, []);
  return (
    <div className=" dark:bg-black dark:text-white">
      <div className="relative top-16 dark:bg-black">
        <ProfileSection user={user} />
      </div>
    </div>
  );
}

export default Profile;
