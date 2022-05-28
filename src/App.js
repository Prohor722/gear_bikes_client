import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Purchase from "./pages/Purchase";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import AddReview from "./pages/Dashboard/AddReview"
import ManageOrders from "./pages/Dashboard/ManageOrders";
import AddProduct from "./pages/Dashboard/AddProduct";
import AllUsers from "./pages/Dashboard/AllUsers";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireOnlyUser from './middleware/RequireOnlyUser'
import RequireAdmin from './middleware/RequireAdmin'
import RequireAuth from './middleware/RequireAuth'
import Payment from "./pages/Dashboard/Payment";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import NotFound from "./pages/NotFound";
import MyPortfolio from "./pages/MyPortfolio";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />


        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          } />
          
          <Route path="myOrders" element={
          <RequireOnlyUser>
            <MyOrders />
          </RequireOnlyUser>} />
          
          <Route path="myProfile" element={
          <RequireAuth>
            <MyProfile />
          </RequireAuth>} />
          
          <Route path="addReview" element={
            <RequireOnlyUser>
              <AddReview />
            </RequireOnlyUser>
          } />
          
          <Route path="payment/:id" element={
            <RequireOnlyUser>
              <Payment />
            </RequireOnlyUser>
          } />

          <Route path="manageOrders" element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          } />

          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>

          } />

          <Route path="manageProducts" element={
          <RequireAdmin>
            <ManageProducts/>
          </RequireAdmin>} />          

          <Route path="users" element={
          <RequireAdmin>
            <AllUsers/>
          </RequireAdmin>} />
        </Route>



        <Route path="/myPortfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purchase/:id" element={
          <RequireOnlyUser>
            <Purchase />
          </RequireOnlyUser>
        } />
        {/* <Route path="/loading" element={<Loading />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
