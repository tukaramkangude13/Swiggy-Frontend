// import './style.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import Body from './components/Body';
// import Header from './components/Header';
// import MyCart from './components/MyCart';
// import ErrorHandle from './components/ErrorHandle';
// import About from './components/About';
// import ContactUs from './components/ContactUs';

// // Main Layout Component
// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Header /> {/* Header stays on all pages */}
//       <main className="flex-1 p-4">
//         <Outlet /> {/* Renders the child components based on the route */}
//       </main>
//       <footer className="bg-gray-800 text-white text-center py-4">
//         &copy; 2024 My Website. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// // Define routes with nested structure
// const appRouter = createBrowserRouter([
//   {
//     path: '/', // Root path
//     element: <App />, // Main layout with Header
//     errorElement: <ErrorHandle />, // Error boundary
//     children: [
//       {
//         path: '/', // Default page (Body)
//         element: <Body />,
//       },
//       {
//         path: '/MyCart', // MyCart page
//         element: <MyCart />,
//       },
//       {
//         path: '/About', // About page
//         element: <About />,
//       },
//       {
//         path: '/ContactUs', // ContactUs page
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

// // Create root and render
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <RouterProvider router={appRouter} />

// );

// export default App;
