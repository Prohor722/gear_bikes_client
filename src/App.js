import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Products from './pages/Products'
import Reviews from './pages/Reviews'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Blog from './pages/Blog'
import About from './pages/About'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/reviews' element={<Reviews/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
