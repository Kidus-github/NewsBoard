import { useState, useEffect } from "react";
import ProfileSection from "../components/ProfileSection";

function Profile() {
  const [user, setUser] = useState({});
  useEffect(function () {
    fetch("https://localhost:7281/api/User/65ba438c901aa63ea7bec827")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
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
