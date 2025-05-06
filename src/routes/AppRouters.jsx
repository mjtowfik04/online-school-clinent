import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home"
import Courses from "../pages/Courses";

const AppRouters = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> 
                <Route path="class" element={<Courses />} /> 
      </Route>
        </Routes>
    );
};

export default AppRouters;