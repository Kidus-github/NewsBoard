import { NavLink } from "react-router-dom";
function FollowNav() {
  return (
    <div className="flex gap-4 mt-6 text-slate-600 decoration-[#f52828] underline-offset-8 decoration-2">
      <NavLink className="underline" path="All">
        All
      </NavLink>
      <div className="text-slate-300">|</div>
      <NavLink className="" path="Topics">
        Topics
      </NavLink>
      <div className="text-slate-300">|</div>
      <NavLink className="" path="Profiles">
        Profiles
      </NavLink>
      <div className="text-slate-300">|</div>
      <NavLink className="" path="Magazines">
        Magazines
      </NavLink>
      <div className="text-slate-300">|</div>
      <NavLink className="" path="Videos">
        Videos
      </NavLink>
    </div>
  );
}

export default FollowNav;
