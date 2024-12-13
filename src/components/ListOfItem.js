// import React from 'react';
// import { MENU_URL } from '../utils/constants';

// const ListOfItem = ({ data }) => {
//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.card.info.name} className="flex items-start border-b-2 mt-3 pb-4 w-full justify-between bg-gradient-to-r from-white via-gray-50 to-gray-200 p-4 rounded-lg shadow-md relative">
//           <div className="flex gap-3">
//             <div className="pt-1 flex flex-col">
//               {/* Veg/Non-Veg icon from sprite */}
//               {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
//                 <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
//                   <use href="/food/sprite-CiiAtHUR.svg#vegVeg16"></use>
//                 </svg>
//               ) : (
//                 <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
//                   <use href="/food/sprite-CiiAtHUR.svg#nonvegNonVeg16"></use>
//                 </svg>
//               )}
//             </div>
//             <div>
//               <p className="font-bold text-gray-800">{item.card.info.name}</p>
//               <p className="text-sm font-bold text-gray-600">&#8377;{(item.card.info.price / 100).toFixed(2)}</p>

//               {/* Rating */}
//               {item.card.info.ratings?.aggregatedRating?.rating && (
//                 <p className=" text-[#1ba672] flex items-center              font-gilroyBold font-bold text-[13px] leading-[16px] tracking-[-0.1px]">
//                 <div class="sc-fYEEdK hMhEZl"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillColor="#1BA672"><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#1BA672"></path></svg></div>
//                   {item.card.info.ratings.aggregatedRating.rating}
//                 </p>
//               )}

//               {/* Description */}
//               <p className="text-sm font-sans opacity-60 w-[90%] text-gray-700">{item.card.info.description}</p>
//             </div>
//           </div>

//           {/* Item Image */}
//           <img
//             className="w-28 h-28 rounded"
//             src={MENU_URL + item.card.info.imageId}
//             alt={item.card.info.name}
//           />

//           {/* Add Button */}
//           <div className="flex items-center justify-center absolute bottom-4 right-4">
//             <button className="text-green-700 font-bold bg-white rounded-md px-4 py-2 shadow-md">
//               ADD
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListOfItem;
