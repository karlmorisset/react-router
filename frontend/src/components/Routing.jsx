import Home from "@pages/Home.jsx";
import Contact from "@pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
