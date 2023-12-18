import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="sticky border-solid border-x-0 border-y-2 border-slate-200 py-3 flex justify-around mb-8 top-14 bg-white">
      <NavLink className="text-slate-600 font-bold " path="news">
        NEWS
      </NavLink>
      <NavLink className="text-slate-600 font-bold " path="entertainment">
        ENTERTAINMENT
      </NavLink>
      <NavLink className="text-slate-600 font-bold " path="technology">
        TECHNOLOGY
      </NavLink>
      <NavLink className="text-slate-600 font-bold " path="travel">
        TRAVEL
      </NavLink>
      <NavLink className="text-slate-600 font-bold " path="food">
        FOOD
      </NavLink>
      <NavLink className="text-slate-600 font-bold " path="sports">
        SPORTS
      </NavLink>
      <NavLink className="text-slate-600 font-bold " path="flipboardtv">
        FLIPBOARD TV
      </NavLink>
    </div>
  );
}

export default Nav;
