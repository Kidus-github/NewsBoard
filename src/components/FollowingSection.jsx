import { FollowNav } from "../components/ui/index";
function FollowingSection() {
  return (
    <div className="m-28">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold uppercase text-3xl">Following</h1>
        <FollowNav />
      </div>
      <div>All Following lists</div>
    </div>
  );
}

export default FollowingSection;
