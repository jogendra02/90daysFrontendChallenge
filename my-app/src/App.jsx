import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

const App = () => {
  return (
    <Router>
      <nav>
  
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
