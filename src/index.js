import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Profile from "./pages/profile/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


