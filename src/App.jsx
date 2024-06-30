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
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/hogstaidet" element={<Hogstadiet/>}>
          <Route path="/mellanstadiet" element={<Mellanstadiet/>}>
          <Route path="/document" element={<Document/>}>
          <Route path="/login" element={<Login/>}>
          <Route path="/latar" element={<Latar/>}>
          <Route path="/ovrigt" element={<Ovrigt/>}>
          <Route path="/uppgifter" element={<Uppgifter/>}> 
        </Routes>
        
        <Footer />
    </>
  );
}

export default App;