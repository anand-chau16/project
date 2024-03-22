import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Preg from "./pages/Preg.jsx";
import LogIn from "./pages/LogIn.jsx";
import StuReg from "./pages/StuReg.jsx";
import MenReg from "./pages/MenReg.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="preg" element={<Preg />} />
      <Route path="login" element={<LogIn />} />
      <Route path="stureg" element={<StuReg />} />
      <Route path="menreg" element={<MenReg />} />

      {/* jaise hi cursor aata hai usi samay fetch ho ke cache ho jaata hai */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
