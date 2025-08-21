import React from "react";
import Header from './components/Header/Header.jsx';
import  {Routes, Route}   from "react-router-dom";
import Home from "./pages/Home.js";

const App: React.FC = () => {
  return (
    <>


        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    </>
  );
};

export default App;
