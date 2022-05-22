import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
        <Home/>
        {/* <Routes>
          <Route path='/' element={<Home/>} />
        </Routes> */}
    </div>
  );
}

export default App;
