import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Signup } from "./components";
import { About, Footer, Header } from "./containers";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      <Navbar />  
      <Header />
      <About />
      <Footer />
    </div>
  );
};

const SignupPage = () => {
  return (
    <div className="signup-page">
      <Signup />
    </div>
  );
};

export default App;
