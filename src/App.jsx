import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";  // ← IMPORT GUEST LAYOUT
import Loading from "./components/Loading";
import LandingPage from "./pages/guest/LandingPage";
import "./assets/tailwind.css";

// Lazy loading untuk halaman yang membutuhkan autentikasi
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {/* ========== GUEST ROUTES (dengan GuestLayout) ========== */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/guest" element={<LandingPage />} />
        </Route>

        {/* ========== AUTH ROUTES (Login, Register, Forgot - dengan AuthLayout) ========== */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ========== PROTECTED ROUTES (Dashboard, dll - dengan MainLayout) ========== */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;