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
import Uppgifter from "./pages/Uppgifter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/"component={<Home/>}></Route>
          <Route path="/hogstaidet" component={<Hogstadiet/>}></Route>
          <Route path="/mellanstadiet" component={<Mellanstadiet/>}></Route>
          <Route path="/document" component={<Document/>}></Route>
          <Route path="/login" component={<Login/>}></Route>
          <Route path="/latar" component={<Latar/>}></Route>
          <Route path="/ovrigt" component={<Ovrigt/>}></Route>
          <Route path="/uppgifter" component={<Uppgifter/>}></Route>
        </Routes>
    </>
  );
}

export default App;