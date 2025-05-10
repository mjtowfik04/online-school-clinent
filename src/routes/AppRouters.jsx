import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout"; // ✅ Make sure this is added
import About from "../pages/About";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ActivateAccount from "../components/Registration/ActivateAccount";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import Category from "../components/Categorys/Category";

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="class" element={<Courses />} />
        <Route path="Category" element={Category}/>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
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
         </Route>

    </Routes>
  );
};

export default AppRouters;
