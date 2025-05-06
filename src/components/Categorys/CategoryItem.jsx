import defaultIme from "../../assets/images/default.jpg";

const CategoryItem = ({ Category }) => {
  if (!Category) return null;

  return (
    <div className="flex justify-between items-center gap-5">
  <div className=" gap-3 card bg-white w-72 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
    <figure className="relative px-6 pt-6">
      <img
        src={
          Category.images.length > 0 ? Category.images[0].image : defaultIme
        }
        alt="Category"
        className="rounded-xl w-full h-36 object-cover"
      />
    </figure>
    <div className="card-body items-center text-center p-4">
      {/* Category Title */}
      <h2 className="card-title text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-all duration-300">
        {Category.title}
      </h2>
      
      {/* Category Description */}
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {Category.description}
      </p>

      {/* View All Button */}
      <div className="card-actions mt-4">
        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-indigo-500">
          View All
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default CategoryItem;
