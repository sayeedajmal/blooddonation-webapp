import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Donor, MedicalHistory } from "./components";
import { About, Footer, Header, Service } from "./containers";
import AppointForm from "./components/Appoint/AppointForm";
import Staff from "./Staff/Staff";
import Dashboard from "./Staff/Dashboard";

const App = () => {
  return (
    <Router>
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
