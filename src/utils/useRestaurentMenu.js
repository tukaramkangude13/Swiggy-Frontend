import React, { useState, useEffect } from 'react';
import { MENU_API } from './constants';

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch menu data
  useEffect(() => {
    if (!resId) return; // Avoid unnecessary fetches if resId is not provided
    fetchMenu();
  }, [resId]); // Add resId as a dependency to refetch when it changes

  const fetchMenu = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error('Failed to fetch menu data');
      }
      const data = await response.json();
      setResInfo(data?.data);

    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Console logs for debugging

  // Return the fetched data, loading state, and error for consumption
  return { resInfo, loading, error };
};

export default useRestaurentMenu;
