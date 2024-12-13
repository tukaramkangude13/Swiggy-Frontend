import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  // Initialize the state based on the current online status using navigator.onLine
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    // Function to handle online status change
    const handleOnline = () => {
      setOnlineStatus(true);  // Set to true when online
    };

    // Function to handle offline status change
    const handleOffline = () => {
      setOnlineStatus(false);  // Set to false when offline
    };

    // Attach event listeners for 'online' and 'offline' events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners when component unmounts
    // return () => {
    //   window.removeEventListener("online", handleOnline);
    //   window.removeEventListener("offline", handleOffline);
    // };
  }, []);  // Empty dependency array ensures the effect runs only once

  return onlineStatus;  // Return the online status
};

export default useOnlineStatus;
