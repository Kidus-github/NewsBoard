import { useState, useEffect } from "react";
import { HomeHeader, Footer } from "../components/ui/index";
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
    <div className="relative top-16">
      <ProfileSection user={user} />
    </div>
  );
}

export default Profile;
