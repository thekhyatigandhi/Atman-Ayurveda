import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Import specific content components
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import KnowYourDosha from "./pages/KnowYourDosha";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/know-your-dosha" element={<KnowYourDosha />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
