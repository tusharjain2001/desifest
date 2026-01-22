import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import React from "react";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
