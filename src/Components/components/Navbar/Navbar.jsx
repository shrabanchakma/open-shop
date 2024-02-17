import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => [
            isActive ? "bg-base-200 py-[.2rem] px-[.3rem] rounded-lg" : "",
          ]}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/something-else"
          className={({ isActive }) => [
            isActive ? "bg-base-200 py-[.2rem] px-[.3rem] rounded-lg" : "",
          ]}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/again-something-else"
          className={({ isActive }) => [
            isActive ? "bg-base-200 py-[.2rem] px-[.3rem] rounded-lg" : "",
          ]}
        >
          about us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex items-center">
          <a className="btn btn-ghost text-3xl mr-32 font-medium">EasyMart</a>
          <ul className="flex gap-10 items-center font-medium">{navOptions}</ul>
        </div>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div> */}
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
