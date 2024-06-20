import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Profile from "./pages/Profile";
import { Home } from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <div className="max-w-screen-2xl mx-auto ">
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/login" />
          <Route path="/Sign" />
          <Route path="/profile" />
        </Routes>
        <Outlet />
        <Footer className="mt-6" />

        
      </div>
    </AuthProvider>
  );
}

export default App;
