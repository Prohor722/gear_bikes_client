import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center">
        {/* Page content here */}
        <h2 className="text-secondary text-3xl mt-10 mb-4">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
          {!admin && (
            <li>
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/addReview">Add a Review</Link>
            </li>
          )}

          {/* Admin  */}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">Manage Products</Link>
              </li>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
