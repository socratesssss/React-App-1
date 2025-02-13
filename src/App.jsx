import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Import Components
import Navbar from "./Component/navbar";
import Hero from "./Component/hero";
import Presentation from "./Component/Presentation";
import Footer from "./Component/Footer";
import Sliders from "./Component/Slider";
import Video from "./Component/Video";
import TimeWork from "./Component/TimeWork";
import BombArea from "./Component/BombArea";
import Blog from "./Component/Blog";
import ErrorX from "./Component/Error";

// Home Component
const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <Presentation />
      <Sliders />
      <Video />
      <TimeWork />
      <BombArea />
      <Blog />
      <Footer />
    </>
  );
};

// **Separate Layout Component to Use `useLocation` Correctly**
const Layout = () => {
  const location = useLocation(); // Get the current route
  const showNavbar = location.pathname !== "*"; // Hide Navbar on error page

  return (
    <>
       {/* Show Navbar except on /error */}
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorX />} /> {/* Handles 404 errors */}
      </Routes>
    </>
  );
};

// **App Component with BrowserRouter**
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
