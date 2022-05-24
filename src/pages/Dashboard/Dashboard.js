import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile bg-gradient-to-r from-yellow-200 to-base-100">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <h2 className="text-secondary text-3xl">Welcome to your Dashboard</h2>
        <Outlet/>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to='/dashboard/myOrders'>My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/myProfile'>My Profile</Link>
          </li>
          <li>
            <Link to='/dashboard/addReview'>Add a Review</Link>
          </li>

          {/* Admin  */}
          <li>
            <Link to='/dashboard/manageOrders'>Manage All Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/addProduct'>Add Product</Link>
          </li>
          <li>
            <Link to='/dashboard/users'>All Users</Link>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
