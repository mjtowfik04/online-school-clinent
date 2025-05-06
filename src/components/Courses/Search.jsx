const Search = ({
    
    searchQuery,
    handleSearchQuery,
    
  }) => {
    return (
      
  
        <div className="bg-white p-4 rounded-lg shadow">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            placeholder="Search books..."
            className="w-full p-2 border rounded-md"
          />
        </div>
  
    
    );
  };
  
  export default Search;