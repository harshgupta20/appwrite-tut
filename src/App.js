import './App.css';
import Navbar from './components/Navbar';

import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Account from './pages/Account';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<Account />} />
    </Routes>
    </>
  );
}

export default App;
