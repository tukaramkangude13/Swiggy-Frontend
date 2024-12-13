import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen  mt-24 flex flex-col items-center justify-center">
      {/* About Section */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">About Us</h1>
        <p className="text-gray-600 text-center mb-6">
          Welcome to our e-commerce platform! We are committed to providing the best
          service and the highest quality products to our customers. Our platform is
          designed to be user-friendly, fast, and convenient, ensuring that your shopping
          experience is always enjoyable.
        </p>
        <p className="text-gray-600 text-center mb-6">
          Whether you're looking for your favorite snacks or discovering something new, 
          we're here to fulfill your cravings and provide a seamless shopping experience. 
          Thank you for choosing us!
        </p>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-center mb-6">
            Our mission is to bring quality products directly to your door with an emphasis
            on speed, affordability, and a variety of options. We are committed to providing
            great customer service and making your shopping experience effortless.
          </p>
        </div>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md mt-8"
          onClick={() => (window.location.href = '/')}
        >
          Go Back to Menu
        </button>
      </div>
      
      {/* Footer Section */}
      <footer className="text-center mt-10 text-gray-600 text-sm">
        <p>&copy; 2024 Your E-commerce. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
