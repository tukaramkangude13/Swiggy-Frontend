import { useRef } from "react";

const OfferCardSection = () => {
  const scrollContainerRef = useRef(null);

  // Function to handle horizontal scroll when the arrow is clicked
  const handleScroll = () => {
    // Check if the reference is available
    if (scrollContainerRef.current) {
      // Scroll the container by 300px (or any desired value)
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    } else {
      console.error("scrollContainerRef is not available");
    }
  };

  return (
    <div className="w-full mt-6">
      {/* Offer Section Header */}
      <h2 className="font-bold text-xl text-gray-800 mb-4">Special Offers</h2>

      <div className="relative">
        {/* Offer Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 pb-4"
        >
          {/* Example Offer Cards */}
          <div className="min-w-[200px] bg-green-600 text-white p-4 rounded-lg">
            Offer 1
          </div>
          <div className="min-w-[200px] bg-blue-600 text-white p-4 rounded-lg">
            Offer 2
          </div>
          <div className="min-w-[200px] bg-red-600 text-white p-4 rounded-lg">
            Offer 3
          </div>
          <div className="min-w-[200px] bg-yellow-600 text-white p-4 rounded-lg">
            Offer 4
          </div>
        </div>

        {/* Arrow Button */}
        <button
          onClick={handleScroll}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default OfferCardSection;
