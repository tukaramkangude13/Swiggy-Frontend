import './style.css';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';

import Header from './components/Header';
import ErrorHandle from './components/ErrorHandle';
import Shimmer from './components/shimmer';
import About from './components/About';
import ContactUs from './components/ContactUs';
import CartItem from './components/CartItem';
import Basket from './components/Basket';
import SignInSignUp from './components/SignInSignUp';

// Lazy-loaded components
const Body = lazy(() => import('./components/Body'));
const Grocery = lazy(() => import('./components/Grocery'));
const RestaurentMenu = lazy(() => import('./components/RestaurentMenu'));

const App = () => {
  return (
    <Provider store={appstore}>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header /> {/* Header stays on all pages */}
        <main className="flex-1 p-4">
          <Suspense fallback={<Shimmer />}>
            <Outlet /> {/* Outlet renders nested routes */}
          </Suspense>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          &copy; 2024 My Website. All Rights Reserved.
        </footer>
      </div>
    </Provider>
  );
};

// Define routes with nested structure
const appRouter = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // Main layout with Header
    errorElement: <ErrorHandle />, // Error boundary
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />,
      },
      {
        path: '/Grocery',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/ResreturnMenu/:resId',
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurentMenu />
          </Suspense>
        ),
      },
      {
        path: '/MyCart',
        element: <CartItem />,
      },
      {
        path: '/Basket',
        element: <Basket />,
      },
      {
        path: '/SignInSignUp',
        element: <SignInSignUp />,
      },
    ],
  },
]);

// Create root and render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
