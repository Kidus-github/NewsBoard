import ProfileSection from "../components/ProfileSection";

function Profile({ user }) {
  return (
    <div className=" dark:bg-black dark:text-white">
      <div className="relative top-16 dark:bg-black">
        <ProfileSection user={user} />
      </div>
    </div>
  );
}

export default Profile;
