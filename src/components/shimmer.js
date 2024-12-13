const Shimmer = () => {
  const shimmerArray = Array(8).fill(0);

  return (
    <div className="flex flex-wrap      justify-between ">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="w-64 h-72 p-4 bg-gray-200 rounded-lg shadow-md animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-36 bg-gray-300 rounded-lg"></div>

          {/* Text placeholders */}
          <div className="mt-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>

          {/* Additional placeholders */}
          <div className="mt-4 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-full"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
