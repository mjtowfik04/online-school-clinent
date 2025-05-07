import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient";

const UseFetchCourses =(currentPage)=>{
        const [courses, setCourses] = useState([]);
        const [loading, setLoading] = useState(false);
        const[totalPages,setTotalpages]=useState(0)
    useEffect(()=>{ const 
        fetchCourses = async () => {
            const url= `/api/v1/course/?page=${currentPage}`
        try {
            setLoading(true);
            const response = await apiClient.get(url);
            const data = response.data;
            setCourses(data.results);
            setTotalpages(Math.ceil(data.count / data.results.length));
        } catch (err) {
            console.error("Error fetching courses:", err);
        } finally {
            setLoading(false);
        }
    };
    fetchCourses()
},[currentPage])  

return{loading,courses,totalPages}
}

export default UseFetchCourses