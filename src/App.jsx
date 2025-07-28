import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";



const App = () => {
  return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/products" element={<Products />} />
       <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
  );
}

export default App;