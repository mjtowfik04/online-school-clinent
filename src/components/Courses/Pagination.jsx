const Pagination = ({ totalPages, currentPage, handleChange }) => {
   
 return (
      <div className="flex justify-center items-center mt-6 space-x-2 my-3">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = currentPage === page;
  
          return (
            <button
              key={page}
              onClick={() => handleChange(page)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default Pagination;
  