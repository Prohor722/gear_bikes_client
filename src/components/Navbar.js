import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useUser from "../hooks/useUser";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, isLoading] = useUser();
  const navigate = useNavigate();

  if (loading || isLoading) {
    return <Loading />;
  }
  if (error) {
    navigate("/login");
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="navbar bg-accent text-accent py-4 drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown z-5 absolute">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* <div className="drawer-content flex">
            <label className="avatar" htmlFor="my-drawer-2">
              <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" alt="avatar" />
              </div>
            </label>
          </div> */}

          <ul
            tabindex="0"
            className="menu menu-compact z-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/myPortfolio">My Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              {user ? (
                <a onClick={logout}>Sign out</a>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost font-extrabold text-2xl normal-case text-primary ml-6 lg:ml-0"
        >
          GearBikes
        </Link>
      </div>

      {userData?.img && (
        <div className="navbar-end mt-2 mr-2 lg:hidden">
          <label className="avatar">
            <div className="w-12 rounded-full ring ring-primary">
              <img src={userData?.img} alt="avatar" />
            </div>
          </label>
        </div>
      )}

      <div className="navbar-center hidden lg:flex ml-auto">
        <ul className="menu menu-horizontal p-0 text-white">
          {userData?.img && (
            <>
              <div className="avatar p-0 mr-4">
                <div className="w-12 rounded-full ring ring-primary " >
                  <img src={userData?.img} alt="hamburger menu icon" />
                </div>
              </div>
            </>
          )}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/myPortfolio">My Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            {user ? (
              <button className="" type="link" onClick={logout}>
                Sign out
              </button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
