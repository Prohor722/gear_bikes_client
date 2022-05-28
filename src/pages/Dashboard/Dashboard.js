import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useUser from "../../hooks/useUser";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [userData] = useUser();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
    navigate("/login");
  };

  if (loading || adminLoading) {
    return <Loading />;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Page content here */}
        <h2 className="text-secondary text-center text-3xl mt-10 mb-4">
          Welcome to your Dashboard
        </h2>
        <label
          htmlFor="dashboard-sidebar"
          className="btn btn-primary drawer-button lg:hidden mb-10"
        >
          Open drawer
        </label>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 pt-10 bg-gray-700 text-white font-semibold ">
          {user && (
            <>
              <li className="text-2xl font-bold text-primary">
                <Link to="/">GearBikes</Link>
              </li>
              <li>
                <NavLink to="/dashboard/myProfile">My Profile</NavLink>
              </li>
            </>
          )}
          {!admin && (
            <li>
              <NavLink to="/dashboard/myOrders">My Orders</NavLink>
            </li>
          )}
          {!admin && (
            <li>
              <NavLink to="/dashboard/addReview">Add a Review</NavLink>
            </li>
          )}

          {/* Admin  */}
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/manageOrders">
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addProduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
