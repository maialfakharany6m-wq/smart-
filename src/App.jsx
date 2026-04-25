import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Executive from "./pages/Executive";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/executive" element={<MainLayout><Executive /></MainLayout>} />
        <Route path="/achievements" element={<MainLayout><Achievements /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

      </Routes>

    </BrowserRouter>
  );
}