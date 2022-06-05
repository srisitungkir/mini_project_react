import "./assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import DetailProduct from "./pages/detail_product/detail_product"
import DashboardAdmin from "./pages/dashboard_admin/dashboard_admin";
import Login from "./pages/login/login";
import Register from "./pages/register/register";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail_product" element={<DetailProduct />} />
        <Route path="/dashboard_admin" element={<DashboardAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
