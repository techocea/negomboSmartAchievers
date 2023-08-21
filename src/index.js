import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Countries from "./Pages/Countries";
import Serving from "./Pages/Serving";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/services" element={<Serving />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);
