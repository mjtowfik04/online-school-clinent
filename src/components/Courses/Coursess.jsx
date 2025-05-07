import { useState } from "react";
import CoursesList from "./CoursesList";
import Pagination from "./Pagination";
import useFetchCourses from "../hooks/useFetchCourses"; // Update path as needed

const Coursess = () => {
    const [currentPage, setCurrent] = useState(1);
    const { loading, courses, totalPages } = useFetchCourses(currentPage); // Likely needs currentPage

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