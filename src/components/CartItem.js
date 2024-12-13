import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { MENU_URL } from '../utils/constants';

const CartItem = () => {
  const totalitems = useSelector((state) => state.cart?.items || []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
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
    </div>
  </div>
))}

          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;