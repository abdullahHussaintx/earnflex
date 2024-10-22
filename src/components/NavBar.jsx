import { Link, NavLink } from "react-router-dom";
import { mediaData, menuItmes } from "../utils/data";

export const NavBar = () => {
  return (
    <nav className="h-16 hidden md:flex shadow-lg bg-blue-600 text-white  items-center">
      <div className="container mx-auto px-5 lg:px-40  flex justify-between">
        <Link to="/" className="font-bold text-lg">
          <img src={mediaData.logo} className=" w-[150px]" alt="logo" />
        </Link>
        <div className="flex items-center gap-10">
          {menuItmes.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : "font-normal"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
