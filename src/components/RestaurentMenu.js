import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { MENU_API, MENU_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import { addToCart } from "../utils/cartslice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [openSection, setOpenSection] = useState(0);
  const [veg, setVeg] = useState(false);
  const [nonVeg, setNonVeg] = useState(false);
  const [middle1, setMiddle1] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const resMockData = await data.json();
      setResInfo(resMockData);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const handleclick = (menu) => {
    console.log(menu);
    // setMessage(`${menu.name} added successfully to the cart!`);
    // setPrice(menu.price / 100); // Assuming price is in paise or cents
    dispatch(addToCart(menu)); // Dispatch the specific menu item to the cart
  };

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info;
  const offers = resInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const menuItems1 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const toppings = menuItems1?.filter(
    (item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const filterMenuItems = (menuItem) => {
    const priceInRupees = menuItem.card.info.price / 100;

    if (veg && menuItem.card.info.itemAttribute.vegClassifier !== "VEG") return false;
    if (nonVeg && menuItem.card.info.itemAttribute.vegClassifier !== "NONVEG") return false;
    if (middle1 && !(priceInRupees > 300 && priceInRupees < 600)) return false;
    if (middle && !(priceInRupees < 300)) return false;

    return true;
  };

  const filteredToppings = toppings?.map((item) => {
    const filteredItems = item?.card?.card?.itemCards?.filter(filterMenuItems);
    return { ...item, filteredItems };
  });

  const handleVeg = () => {
    setVeg(!veg);
    setNonVeg(false);
  };

  const handleNonVeg = () => {
    setNonVeg(!nonVeg);
    setVeg(false);
  };

  const handleMiddle1 = () => {
    setMiddle1(!middle1);
    setMiddle(false);
  };

  const handleMiddle = () => {
    setMiddle(!middle);
    setMiddle1(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 p-4">
      {/* Restaurant Header */}
      <h1 className="font-extrabold text-3xl text-center text-gray-800">
        {restaurantInfo?.name}
      </h1>

      {/* Restaurant Info */}
      <div className="flex flex-col bg-white shadow-md rounded-lg p-5 mt-6">
        <p className="font-bold text-gray-700 text-lg">
          {restaurantInfo?.avgRating} ({restaurantInfo?.totalRatingsString}) ·{" "}
          {restaurantInfo?.costForTwoMessage}
        </p>
        <p className="font-medium text-sm text-orange-600 underline mt-2">
          {restaurantInfo?.cuisines?.join(", ")}
        </p>
        <p className="font-medium text-sm text-gray-600 mt-1">
          {restaurantInfo?.sla?.minDeliveryTime} - {restaurantInfo?.sla?.maxDeliveryTime} mins
        </p>
      </div>

      {/* Offers */}
      {offers?.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-3">
          {offers.map((item, index) => (
            <li
              key={index}
              className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium shadow-md"
            >
              {item.info.header}
            </li>
          ))}
        </ul>
      )}

      {/* Filter Section */}
      <div className="flex gap-4 mt-8">
        <button
          className={`px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition ${
            veg ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={handleVeg}
        >
          Veg
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition ${
            nonVeg ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={handleNonVeg}
        >
          Non-Veg
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition ${
            middle1 ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={handleMiddle1}
        >
          ₹300-₹600
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition ${
            middle ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={handleMiddle}
        >
          Less than ₹300
        </button>
      </div>

      {/* Menu Items */}
      <div className="w-full mt-10 shadow-md rounded-lg">
        {filteredToppings?.map((item, index) => (
          <div key={index} className="p-5 border-b last:border-b-0">
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => setOpenSection(openSection === index ? -1 : index)}
            >
              <p className="font-bold text-gray-800">
                {item?.card?.card.title} ({item?.filteredItems.length})
              </p>
              <img
                src="https://www.svgrepo.com/show/520696/down-arrow-5.svg"
                className={`w-5 h-5 transform transition-transform ${
                  openSection === index ? "rotate-180" : ""
                }`}
                alt="Toggle"
              />
            </div>

            {openSection === index &&
              item.filteredItems.map((menuItem) => (
                <div key={menuItem.card.info.name} className="mt-5 flex items-start gap-4">
                  <img
                    className="w-28 h-28 rounded-lg shadow"
                    src={MENU_URL + menuItem.card.info.imageId}
                    alt={menuItem.card.info.name}
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-lg">
                      {menuItem.card.info.name}
                    </p>
                    {message && (
                      <p
                        className={`transition-opacity ml-32 fixed bg-white duration-500 ${
                          message ? "opacity-100" : "opacity-0"
                        } text-green-700 font-bold`}
                      >
                        {message} ₹{price||128} added successfully to the cart!
                      </p>
                    )}
                    <div className="gap-2 flex">
                      <p className="font-bold text-gray-700 text-sm">
                        ₹{(menuItem.card.info.price || menuItem.card.info.defaultPrice / 100).toFixed(2)}
                      </p>
                      {menuItem.card.info.itemAttribute.vegClassifier === "VEG" ? (
                        <FontAwesomeIcon icon={faCircle} className="text-green-600" />
                      ) : (
                        <FontAwesomeIcon icon={faCircle} className="text-red-600" />
                      )}
                    </div>
                    <button
                      className="mt-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow-md"
                      onClick={() => handleclick(menuItem.card.info)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
