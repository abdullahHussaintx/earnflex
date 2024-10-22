import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useNavBar } from "../hooks/useNavBar";
import { mediaData, menuItmes } from "../utils/data";

export const MobileNav = () => {
  const { navOpen, handleClick } = useNavBar();

  return (
    <>
      <nav className="md:hidden h-16 bg-blue-600 flex items-center shadow-lg">
        <div className="flex justify-between w-full px-5 items-center gap-5">
          <Link to="/" className="text-white text-2xl font-semibold">
            <img src={mediaData.logo} className=" w-[150px]" />
          </Link>
          <GiHamburgerMenu
            size={40}
            className="text-white cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </nav>
      {navOpen && <MobileView onClick={handleClick} />}
    </>
  );
};

export const MobileView = ({ onClick }) => {
  return (
    <div className="h-screen bg-blue-600 w-full flex flex-col">
      <div className=" flex flex-col gap-10 mt-10 text-white text-3xl items-center w-full">
        {menuItmes.map((item) => (
          <NavLink
            onClick={onClick}
            key={item.id}
            to={item.url}
            className={({ isActive }) =>
              `p-4 rounded transition-all duration-200 ${
                isActive ? "bg-white w-full text-center bg-opacity-20" : ""
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
