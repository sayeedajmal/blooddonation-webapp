import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./Staff/Auth/Auth/AuthProvider";
import Dashboard from "./Staff/Dashboard";
import Staff from "./Staff/Staff";
import { Donor, MedicalHistory, AppointForm } from "./Staff/components";
import { Navbar } from "./components";
import { About, Footer, Header, Service } from "./containers";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Staff" element={<Staff />} />
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
      <Header />
      <Service />
      <About />
      <Footer />
    </div>
  );
};

export default App;
