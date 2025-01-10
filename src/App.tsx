import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import AllUsers from "./pages/AllUsers.tsx";

// Using the React Router package allows you to route paths to the
// Corresponding pages under the pages subfolder.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all_users" element={<AllUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
