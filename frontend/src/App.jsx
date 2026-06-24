import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Expenses from "./pages/expense";
import Categories from "./pages/categories";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />

        <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;