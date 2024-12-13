import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // Destructure restaurant data
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    discountInfo,
  } = resData?.info || {}; // Use optional chaining to prevent errors

  return (
    <div className="w-64 bg-white mx-2 my-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer border border-gray-200 overflow-hidden relative">
      {/* Image Section with Gradient */}
      <div className="relative w-full h-32">
        <img
          className="w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name || "Restaurant Image"}
          loading="lazy"
        />
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        {/* Discount Badge */}
        {discountInfo?.header && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-md">
            {discountInfo.header}
          </div>
        )}
      </div>

      {/* Restaurant Details */}
      <div className="p-3">
        {/* Restaurant Name */}
        <h4 className="text-md font-semibold truncate">{name || "Restaurant Name"}</h4>
        {/* Cuisines */}
        <p className="text-xs text-gray-600 truncate">{cuisines?.slice(0, 3).join(", ") || "Various Cuisines"}</p>
        {/* Rating and Delivery Time */}
        <div className="flex items-center justify-between mt-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              avgRating >= 4
                ? "bg-green-600 text-white"
                : avgRating >= 3
                ? "bg-yellow-500 text-white " 
                : "bg-red-500 text-white"
            }`}
          >
            {avgRating ? `${avgRating} ★` : "No Rating"}
          </span>
          <span className="text-xs text-gray-600">{sla?.deliveryTime || "N/A"} mins</span>
        </div>
        {/* Cost for Two */}
        <p className="text-xs text-gray-500 mt-1">{costForTwo ? `₹${costForTwo} for two` : "Cost info unavailable"}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
