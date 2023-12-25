import { NavLink } from "react-router-dom";
function Footer() {
  const currentDate = new Date();

  // Get the year
  const year = currentDate.getFullYear();
  return (
    <>
      <ul className="mt-4 flex justify-center gap-4 underline underline-offset-2">
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
      <div className="flex justify-center mt-6 mb-32">
        <NavLink>© {year} Newsboard</NavLink>
      </div>
    </>
  );
}

export default Footer;
