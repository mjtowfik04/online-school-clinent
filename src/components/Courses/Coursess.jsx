import { useState } from "react";
import CoursesList from "./CoursesList";
import Pagination from "./Pagination";
import useFetchCourses from "../hooks/UseFetchCourses"; 


const Coursess = () => {
    const [currentPage, setCurrent] = useState(1);
    const { loading, courses, totalPages } = useFetchCourses(currentPage); 
    return (
        <div>
            <CoursesList courses={courses} loading={loading} />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handleChange={setCurrent}
            />
        </div>
    );
};

export default Coursess;