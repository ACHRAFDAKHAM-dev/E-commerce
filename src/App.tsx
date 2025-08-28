import React from "react";
import Header from './components/Header/Header.jsx';
import  {Routes, Route}   from "react-router-dom";
import Home from "./pages/Home.js";
import ProductListing from "./pages/ProductListing/ProductListing.js";
import Footer from "../src/components/Footer/Footer.js";

const App: React.FC = () => {
  return (
    <>


        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
        </Routes>
        <Footer/>
    </>
  );
};

export default App;
