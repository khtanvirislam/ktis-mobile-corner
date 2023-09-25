import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 shadow-md py-5">
        <Logo></Logo>
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 font-semibold p-2 rounded"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 font-semibold p-2 rounded"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/logIn"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 font-semibold p-2 rounded"
                  : ""
              }
            >
              Log-In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
