import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
    <Navbar />

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/products" element={<Products />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
     </Routes>
   </>

  );
}

export default App;




// import { Routes, Route } from 'react-router-dom';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Routes>
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;









// import { Routes, Route } from 'react-router-dom';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Routes>
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;




// import Contact from './pages/Contact';

// function App() {
//   return <Contact />;
// }

// export default App;




// function App() {
//   return <h1>Hello from App</h1>;
// }

// export default App;
