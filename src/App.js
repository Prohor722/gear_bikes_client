import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Navbar from "./components/Navbar";
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

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />


        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="users" element={<AllUsers/>} />
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purchase/:id" element={<Purchase />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
