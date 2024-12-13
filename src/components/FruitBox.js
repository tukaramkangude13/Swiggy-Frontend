import React, { useState, useRef } from "react";

const FruitBox = () => {
  const cardContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for 20 cards
  const cards = Array.from({ length: 20 }, (_, index) => `Card ${index + 1}`);

  const handleNext = () => {
    if (cardContainerRef.current) {
      // Calculate the width of a single card to scroll by
      const cardWidth = cardContainerRef.current.firstChild.offsetWidth;
      
      // Scroll by the width of one card to the right
      cardContainerRef.current.scrollBy({
        left: cardWidth, // Scroll by card width
        behavior: "smooth", // Smooth scroll
      });
      
      // Update the current index
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    }
  };

  const handlePrev = () => {
    if (cardContainerRef.current) {
      // Calculate the width of a single card to scroll by
      const cardWidth = cardContainerRef.current.firstChild.offsetWidth;

      // Scroll by the width of one card to the left
      cardContainerRef.current.scrollBy({
        left: -cardWidth, // Scroll by negative card width (to go left)
        behavior: "smooth", // Smooth scroll
      });

      // Update the current index
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Horizontal Scroll Cards</h1>

      {/* Scrollable card container */}
      <div className="relative">
        <div
          ref={cardContainerRef}
          className="flex overflow-x-auto gap-4 p-2 transition-all"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-40  bg-blue-300 rounded-md flex justify-center items-center text-white"
            >
              {card}
            </div>
          ))}
        </div>

        {/* Buttons to scroll left and right */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          &larr;
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default FruitBox;
