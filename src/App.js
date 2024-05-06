import React from "react";

import { About, Footer, Header } from "./containers";

import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default App;
