import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBarApp from './Header';
import FooterApp from './Footer';
import Home from './Home';
import Products from './products/Products';
import Login from './authentification/Login';
import SingUp from './authentification/SingUp';
import ProfilePage from './ProfilePage';
import Unauthorized from './authentification/Unauthorized';
import RequireAuth from '../route/RequireAuth';



const Routage = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        
        <Route element={<RequireAuth allowedRole={"client"} />}>
          <Route path='/profil' element={<ProfilePage />} />
        </Route>

        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
};

export default Routage;
