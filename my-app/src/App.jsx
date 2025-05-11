import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";

import Signup from "./Components/signup";
import Home from "./Components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
