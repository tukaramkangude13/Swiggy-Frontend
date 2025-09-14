import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { MENU_URL } from '../utils/constants';
import { addToCart, removeFromCart, decreaseQuantity } from '../utils/cartslice';
import TrackOrder from './TrackOrder';

const CartItem = () => {
  const totalitems = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();
  const [track, settrack] = useState(true);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id)); // Decrease the quantity when clicked
  };

  const getQuantity = (id) => {
    const item = totalitems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  const total = totalitems.reduce(
    (sum, menuItem) => sum + (menuItem?.price || menuItem?.defaultPrice) * menuItem?.quantity / 100,
    0
  );

  const handlePlaceOrder = () => {
    settrack(false); // Update the state when the order is placed
  };

  return (
    <div>
      {track ? (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
          <div className="fixed ml-[1100px] mt-28 flex flex-col z-10 bg-white p-4 rounded-lg shadow-lg w-[300px]">
            <p className="font-semibold text-lg">Order Summary</p>
            <div className="flex justify-between text-sm py-2">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>

            <div className="flex justify-between text-sm py-2">
              <span>Delivery Charges</span>
              <span>₹ {total > 500 ? 50 : 30}</span>
            </div>

            <div className="flex justify-between text-sm py-2">
              <span>Taxes (10%)</span>
              <span>₹ {(total * 0.1).toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm py-2">
              <span>Discount</span>
              <span className="text-green-500">-₹ {total > 500 ? 100 : 0}</span>
            </div>

            <div className="flex justify-between font-bold text-lg py-2">
              <span>Final Amount</span>
              <span>₹ {(
                total + (total * 0.1) + (total > 500 ? 50 : 30) - (total > 500 ? 100 : 0)
              ).toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder} // Use the function for the onClick
              className="mt-4 bg-[#60b246] text-white py-2 px-4 rounded-lg w-full font-semibold transition-all duration-200 hover:bg-[#4a9c3b]"
            >
              Place Order
            </button>
          </div>

          <div className="max-w-[800px] w-full mx-auto bg-white rounded-xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Your Cart</h1>
            {totalitems.length === 0 ? (
              <p className="text-center text-gray-600 text-lg">Your cart is empty!</p>
            ) : (
              <div className="space-y-6">
                {totalitems.map((menuItem) => (
                  <div
                    key={menuItem?.id}
                    className="flex items-center gap-6 border-b border-gray-300 pb-6"
                  >
                    <img
                      className="w-28 h-28 rounded-lg object-cover"
                      src={MENU_URL + menuItem?.imageId}
                      alt={menuItem?.name}
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-lg capitalize">
                        {menuItem?.name}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Price: <span className="font-medium">₹{((menuItem?.price || menuItem?.defaultPrice) / 100).toFixed(2)}</span>
                      </p>
                      <p className="text-gray-500 text-sm mt-2">Quantity: {menuItem.quantity}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {menuItem?.itemAttribute.vegClassifier === 'VEG' ? (
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="text-green-600 text-xs"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="text-red-600 text-xs"
                          />
                        )}
                        <span className="text-gray-500 text-sm">
                          {menuItem?.itemAttribute.vegClassifier}
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md w-[120px]">
                        {/* Decrement Button */}
                        <button
                          onClick={() => handleDecreaseQuantity(menuItem.id)}
                          className="text-[#60b246] font-bold text-xl hover:text-[#4a9c3b]"
                        >
                          -
                        </button>

                        {/* Display quantity */}
                        <p className="text-[#60b246] font-bold">{getQuantity(menuItem.id)}</p>

                        {/* Increment Button */}
                        <button
                          onClick={() => handleAddToCart(menuItem)}
                          className="text-[#60b246] font-bold text-xl hover:text-[#4a9c3b]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-32">
<TrackOrder/>        </div>
      )}
    </div>
  );
};

export default CartItem;
