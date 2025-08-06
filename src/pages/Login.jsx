// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(email); // simulate login
//     navigate('/dashboard');
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Login</h2>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>

//         <div className='mb-3'>
//         <label htmlFor="">Enter your email adress:</label> <br />
//         <input
//           type="email"
//           placeholder="Email"
//           className="form-control mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required/>  
//           </div> <br />
          
//         <div className='mb-3 position -relative'>
//         <label htmlFor="">Enter your password:</label> <br />
//         <input type={showPassword ? "text" : "password"}
//         className="form-control mb-3" placeholder="Password" required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)} /> <br />
          
//         <div className='mb-3 position -relative'>
//         <label htmlFor="">Confirm password:</label> <br />
//         <input type={showPassword ? "text" : "password"}
//         className="form-control mb-3" placeholder="Password" required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)} /> <br />
         
//         {/* 👁️ Toggle icon */}
//          <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               top: "50%",
//               right: "15px",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               color: "#6c757d"
//             }}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>

//         {/* <label htmlFor="">Confirm password:</label> <br />
//         <input type="password" className="form-control mb-3" placeholder="Password" required /> 
//         </div> <br /> */}


//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//    </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email); // simulate login
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        {/* Email Field */}
        <div className="mb-3">
          <label>Enter your email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field with Toggle */}
        <div className="mb-3 position-relative">
          <label>Enter your password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#6c757d"
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Optional: Confirm password (if needed in a Register form, not here) */}
        {/* 
        <div className="mb-3">
          <label>Confirm password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Confirm Password"
          />
        </div> 
        */}

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
