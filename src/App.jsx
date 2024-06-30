import React from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Document from "./pages/Document";
import Latar from "./pages/Latar";
import Mellanstadiet from "./pages/Mellanstadiet";
import Hogstadiet from "./pages/Hogstadiet";
import Ovrigt from "./pages/Ovrigt";
import Uppgifter from "./pages/uppgifter/Uppgifter";
import Login from "./pages/Login";
import Upload from "./components/upload/Upload";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hogstaidet" element={<Hogstadiet/>}></Route>
          <Route path="/mellanstadiet" element={<Mellanstadiet/>}></Route>
          <Route path="/document" element={<Document/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/latar" element={<Latar/>}></Route>
          <Route path="/ovrigt" element={<Ovrigt/>}></Route>
          <Route path="/uppgifter" element={<Uppgifter/>}></Route>
          <Route path="/upload" element={<Upload/>}></Route>

        </Routes>
        
        <Footer />
    </>
  );
};

export default App;