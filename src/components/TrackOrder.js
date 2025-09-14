import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

const TrackOrder = () => {
  const [orderStatus, setOrderStatus] = useState(0); // 0: Order Placed, 1: Packed, 2: Out for Delivery, 3: Delivered
  const [rating, setRating] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleSlideToggle = () => {
    setIsSliding(!isSliding);
  };

  const handleRatingClick = (index) => {
    setRating(index);
  };

  useEffect(() => {
    if (orderStatus < 3) {
      const timer = setTimeout(() => {
        setOrderStatus(orderStatus + 1);
      }, 1000 * (orderStatus + 1));
      return () => clearTimeout(timer);
    }
  }, [orderStatus]);

  const starCount = 5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
      {/* Order Summary Card */}
      {/* <div
        className={`bg-white p-6 rounded-lg shadow-md w-full max-w-sm transform transition-transform duration-1000 ease-in-out ${
          isSliding ? 'translate-x-full rotate-180' : ''
        }`}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <p className="text-gray-600 mb-2">Total: ₹500</p>
        <p className="text-gray-600 mb-2">Delivery Charges: ₹30</p>
        <p className="text-gray-600 mb-4">Taxes: ₹50</p>
        <p className="font-bold text-gray-800 text-lg">Final Amount: ₹580</p>
        <button
          onClick={handleSlideToggle}
          className="bg-green-600 text-white mt-4 py-2 px-4 rounded-lg w-full hover:bg-green-700 transition-all duration-200"
        >
          Place Order
        </button>
      </div> */}

      {/* Order Progress Tracker */}
      <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-lg mt-6">
        <h1 className="text-2xl font-semibold mb-4">Order Progress Tracker</h1>

        <div className="flex items-center justify-between mb-6 relative">
          {[0, 1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              {step > 0 && (
                <div
                  className={`absolute top-1/2 h-1 transform -translate-y-1/2 ${
                    orderStatus >= step ? 'bg-green-500' : 'bg-gray-300'
                  }`} style={{ left: `${(step - 1) * 25}%`, right: `${(4 - step) * 25}%` }}
                />
              )}
              <div
                className={`w-8 h-8 z-10 rounded-full flex items-center justify-center text-white ${
                  orderStatus >= step ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {step + 1}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="mb-6">
          {orderStatus === 0 && <p className="text-lg font-medium text-gray-700">Order Placed</p>}
          {orderStatus === 1 && <p className="text-lg font-medium text-gray-700">Packed</p>}
          {orderStatus === 2 && <p className="text-lg font-medium text-gray-700">Out for Delivery</p>}
          {orderStatus === 3 && <p className="text-lg font-medium text-gray-700">Delivered</p>}
        </div>

        {orderStatus === 3 && (
          <div>
            <p className="text-lg font-medium text-gray-700 mb-2">Please Rate Your Experience</p>
            <div className="flex justify-center space-x-2">
              {[...Array(starCount)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  className={`cursor-pointer text-2xl ${index + 1 <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  onClick={() => handleRatingClick(index + 1)}
                  icon={faStar}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;

