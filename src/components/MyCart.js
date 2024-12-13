import React from 'react';

const MyCart = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Empty Cart Section */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-48 h-48 mb-6"
        />
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 text-center mb-6">
          It seems you haven't added anything to your cart yet. Browse our menu and add some delicious items to your cart!
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md"
          onClick={() => (window.location.href = '/')}
        >
          Explore Menu
        </button>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-10 text-gray-600 text-sm">
        <p>&copy; 2024 Your E-commerce. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MyCart;
