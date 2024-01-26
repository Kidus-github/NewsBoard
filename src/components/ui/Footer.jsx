import { NavLink } from "react-router-dom";
function Footer() {
  const currentDate = new Date();

  // Get the year
  const year = currentDate.getFullYear();
  return (
    <div className=" dark:bg-black dark:text-white relative top-8">
      <ul className="pt-12 flex justify-center gap-4 underline underline-offset-2 ">
        <li>
          <NavLink to="login">Log In</NavLink>
        </li>
        <li>
          <NavLink>Newsletters</NavLink>
        </li>
        <li>
          <NavLink>About Us</NavLink>
        </li>
        <li>
          <NavLink>Blog</NavLink>
        </li>
        <li>
          <NavLink>Tools</NavLink>
        </li>
        <li>
          <NavLink>Publishers</NavLink>
        </li>
        <li>
          <NavLink>Help</NavLink>
        </li>
        <li>
          <NavLink>Terms</NavLink>
        </li>
        <li>
          <NavLink>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink>Sitemap</NavLink>
        </li>
      </ul>
      <div className="flex justify-center pt-6 pb-32">
        <NavLink>© {year} Newsboard</NavLink>
      </div>
    </div>
  );
}

export default Footer;
