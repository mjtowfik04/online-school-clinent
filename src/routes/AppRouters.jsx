import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout"; 
import About from "../pages/About";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ActivateAccount from "../components/Registration/ActivateAccount";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Order from "../pages/Order";

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="class" element={<Courses />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="class/:courseId" element={<ProductDetail/>} />
      </Route>

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart/>} />         
        <Route path="order" element={<Order/>} />         
      </Route>
    </Routes>
  );
};

export default AppRouters;
