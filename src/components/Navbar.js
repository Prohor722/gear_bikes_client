import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-secondary text-accent py-4 drop-shadow-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
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
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost font-extrabold text-2xl normal-case text-primary">GearBikes</Link>
      </div>
      <div class="navbar-center hidden lg:flex ml-auto">
        <ul class="menu menu-horizontal p-0">
          <li>
            <div class="avatar p-0 mr-4">
              <div class="w-12 rounded-full ring ring-primary ">
                <img src="https://api.lorem.space/image/face?hash=3174" alt="hamburger menu icon"/>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
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
            <NavLink to="/login">Login</NavLink>
          </li>
          {/* <li tabindex="0">
            <NavLink to='/dashboard'>
              Dashboard
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink to='/myProfile'>Profile</NavLink>
              </li>
              <li>
                <NavLink to='/myOrders'>My Orders</NavLink>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
