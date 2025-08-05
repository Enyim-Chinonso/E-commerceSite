// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Products from "./pages/Products";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";
// import Cart from "./pages/Cart";
// import Checkout from './pages/Checkout';


// const App = () => {
//   return (
//     <>
//     <Navbar />

//      <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/login" element={<Login />} />
//        <Route path="/register" element={<Register />} />
//        <Route path="/products" element={<Products />} />
//        <Route path="/dashboard" element={<Dashboard />} />
//        <Route path="/contact" element={<Contact />} />
//        <Route path="/about" element={<About />} />
//        <Route path="/cart" element={<Cart />} />
//        <Route path="/checkout" element={<Checkout />} />
//      </Routes>
//    </>

//   );
// }

// export default App;




// // import { Routes, Route } from 'react-router-dom';
// // import Contact from './pages/Contact';

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/contact" element={<Contact />} />
// //     </Routes>
// //   );
// // }

// // export default App;









// // import { Routes, Route } from 'react-router-dom';
// // import Contact from './pages/Contact';

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/contact" element={<Contact />} />
// //     </Routes>
// //   );
// // }

// // export default App;




// // import Contact from './pages/Contact';

// // function App() {
// //   return <Contact />;
// // }

// // export default App;




// // function App() {
// //   return <h1>Hello from App</h1>;
// // }

// // export default App;




import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';
import ScrollSection from './components/ScrollSection';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <ScrollSection />

    </>
  );
};

export default App;
