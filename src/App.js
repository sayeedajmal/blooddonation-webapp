import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./Staff/Auth/Auth/AuthProvider";
import Dashboard from "./Staff/Dashboard";
import LoginStaff from "./Staff/LoginStaff";
import { AppointForm, Donor, MedicalHistory } from "./Staff/components";
import { Navbar } from "./components";
import { About, Donate, Footer, Home, Service, Campaign } from "./containers";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginStaff" element={<LoginStaff />} />
            <Route path="/AppointForm" element={<AppointForm />} />
            <Route path="/Donor" element={<Donor />} />
            <Route path="/MedicalHistory" element={<MedicalHistory />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Campaign />
      <Donate />
      <About />
      <Footer />
    </div>
  );
};

export default App;
