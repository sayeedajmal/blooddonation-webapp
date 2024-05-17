import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Donor, MedicalHistory, Staff } from "./components";
import { About, Footer, Header, Service } from "./containers";
import AppointForm from "./components/Appoint/AppointForm";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/AppointForm" element={<AppointForm />} />
          <Route path="/Donor" element={<Donor />} />
          <Route path="/MedicalHistory" element={<MedicalHistory />} />
          <Route path="/Staff" element={<Staff />} />
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
      <Service />
      <About />
      <Footer />
    </div>
  );
};

const SignupPage = () => {
  return <div className="signup-page"></div>;
};

export default App;
