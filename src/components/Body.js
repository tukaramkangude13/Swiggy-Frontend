import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import EntryLevelPage from "./EntryLevelPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import fakeui from "./fakeui";
import Shimmer from "./shimmer";

const Body = () => {
  const cart = useSelector((state) => state.cart);
  const [mockData, setMockData] = useState(null);
  const [visible, setVisible] = useState(9);
  const [searchText, setSearchText] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log("Failed to fetch location:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchMenu(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchMenu = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
      );
      const data = await response.json();
      setMockData(data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const handleSearch = () => {
    const filteredRes = mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
      (restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setMockData((prevState) => ({
      ...prevState,
      data: {
        ...prevState?.data,
        cards: [
          prevState?.data?.cards[0],
          {
            ...prevState?.data?.cards[1],
            card: {
              ...prevState?.data?.cards[1].card,
              card: {
                ...prevState?.data?.cards[1].card.card,
                gridElements: {
                  ...prevState?.data?.cards[1].card.card.gridElements,
                  infoWithStyle: { restaurants: filteredRes },
                },
              },
            },
          },
        ],
      },
    }));
  };

  const handleTopRated = () => {
    const topRated = mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
      (restaurant) => parseFloat(restaurant?.info?.avgRating) > 4
    );
    setMockData((prevState) => ({
      ...prevState,
      data: {
        ...prevState?.data,
        cards: [
          prevState?.data?.cards[0],
          {
            ...prevState?.data?.cards[1],
            card: {
              ...prevState?.data?.cards[1].card,
              card: {
                ...prevState?.data?.cards[1].card.card,
                gridElements: {
                  ...prevState?.data?.cards[1].card.card.gridElements,
                  infoWithStyle: { restaurants: topRated },
                },
              },
            },
          },
        ],
      },
    }));
  };

  if (mockData == null) return <Shimmer />;

  return (
    <div
      className={`body flex flex-col gap-5 -mb-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-[#f8f8f8] text-black"
      }`}
    >
      <div className="flex  mt-14 justify-end p-4">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? (
            <>
              <FontAwesomeIcon icon={faSun} />
              Light Mode
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMoon} />
              Dark Mode
            </>
          )}
        </button>
      </div>

      <EntryLevelPage className="mb-4" />

      <div className="flex flex-col md:flex-row w-full max-w-[1080px] mx-auto items-center justify-between px-4 mt-4">
        <div className="flex items-center gap-4 w-full md:w-1/2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-4 py-2 border border-gray-400 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search for a restaurant"
          />
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleTopRated}
          className="mt-4 md:mt-0 text-sm font-semibold px-4 py-2 border rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300"
        >
          Top Rated
        </button>
      </div>

      <div>
        <p className="font-gilroyBold font-bold text-3xl text-center mt-4 text-black dark:text-white">
          {mockData?.data?.cards[1]?.card?.card?.header?.title}
        </p>
      </div>

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 px-4">
        {mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length === 0 ? (
          <div className="text-center mt-4 text-lg text-gray-600">
            No results found
          </div>
        ) : (
          mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={`/ResreturnMenu/${restaurant?.info?.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>

      <div className="brands-section mt-8">
        <h2 className="font-bold text-2xl text-center text-black dark:text-white">
          {mockData?.data?.cards[6]?.card?.card?.title}
        </h2>
        <div className="flex flex-wrap transition-all duration-1000">
          {mockData?.data?.cards[6]?.card?.card?.brands?.slice(0, visible).map((x) => (
            <Footer key={x.id} resData={x} />
          ))}
          {visible < mockData?.data?.cards[6]?.card?.card?.brands.length && (
            <div className="flex justify-center w-full mt-5">
              <button
                onClick={() => setVisible(mockData?.data?.cards[6]?.card?.card?.brands.length)}
                className="bg-[#f0f0f0] w-56 py-2 text-sm text-black font-bold border rounded-lg shadow-md transition-all duration-300 hover:scale-110"
              >
                Show More
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          )}
          {visible === mockData?.data?.cards[6]?.card?.card?.brands.length && (
            <div onClick={() => setVisible(9)} className="flex justify-center w-full mt-5">
              <button className="bg-[#f0f0f0] w-56 py-2 text-sm text-black font-bold border rounded-lg shadow-md transition-all duration-300 hover:scale-110">
                Show Less
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
