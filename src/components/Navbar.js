import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    navigate("/login");
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    signOut(auth);
  };
  return (
    <div class="navbar bg-accent text-accent py-4 drop-shadow-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary"
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

          {/* <div class="drawer-content flex">
            <label class="avatar" for="my-drawer-2">
              <div class="w-12 rounded-full ring ring-primary ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" alt="avatar" />
              </div>
            </label>
          </div> */}

          <ul
            tabindex="0"
            class="menu menu-compact z-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
              <NavLink to="/about">About</NavLink>
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
          class="btn btn-ghost font-extrabold text-2xl normal-case text-primary"
        >
          GearBikes
        </Link>
      </div>

      <div class="navbar-end mt-2 mr-2 lg:hidden">
        <label class="avatar" for="dashboard-sidebar">
          <div class="w-12 rounded-full ring ring-primary">
            <img
              src="https://api.lorem.space/image/face?hash=3174"
              alt="avatar"
            />
          </div>
        </label>
      </div>

      <div class="navbar-center hidden lg:flex ml-auto">
        <ul class="menu menu-horizontal p-0 text-white">
          <li>
            <div class="avatar p-0 mr-4">
              <div class="w-12 rounded-full ring ring-primary ">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  alt="hamburger menu icon"
                />
              </div>
            </div>
          </li>
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
            <NavLink to="/about">About</NavLink>
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
    </div>
  );
};

export default Navbar;
