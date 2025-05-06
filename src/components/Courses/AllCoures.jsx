import defaultIme from "../../assets/images/default.jpg";

const AllCoures = ({ course }) => {
  if (!course) return null;

  return (
    <div className="card bg-white w-96 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
  <figure className="relative px-10 pt-10">
    <img
      src={course.images.length > 0 ? course.images[0].image : defaultIme}
      alt="course"
      className="rounded-xl w-full h-48 object-cover"
    />
  </figure>
  <div className="card-body items-center text-center p-6">
    <h2 className="card-title text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-200">{course.title}</h2>
    <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
    
    {/* Price Section */}
    <div className="mt-4">
      <h1 className="text-lg font-medium text-gray-700">Price:</h1>
      <p className="text-3xl font-bold text-green-600 mt-1">${course.price}</p>
    </div>

    {/* Buy Now Button */}
    <div className="card-actions mt-6">
      <button className="btn bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-indigo-500">
        Buy Now
      </button>
    </div>
  </div>
</div>


  );
};

export default AllCoures;
