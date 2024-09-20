import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./views/Register/Register";
import Shop from "./views/Shop";

const Home = lazy(() => import("./views/Home/Home"));
const About = lazy(() => import("./views/About/About"));
const Contact = lazy(() => import("./views/Contact/Contact"));
const Career = lazy(() => import("./views/career/career"));
const Community = lazy(() => import("./views/Community/Community"));
const Project = lazy(() => import("./views/Project/Project"));

function App() {
  return (
    <Router>
      {/* <Navbar /> */}


      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/community" element={<Community />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/shop" element={<Shop/>} />
        
          {/* <Route path="/temp" element={<TempComp />} /> */}
        </Routes>
      </Suspense>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
