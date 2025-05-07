import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import apiClient from "../../services/apiClient";

const Category = () => {
  const [Category, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/api/v1/categories/")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        <div className="flex  justify-center gap-7 ">
          {Category.map((category) => (
            <CategoryItem key={category.id} Category={category} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
