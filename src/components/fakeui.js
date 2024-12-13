import React from 'react'

const fakeui = () => {
  return (
    <div className="body flex flex-col gap-5 -mb-5">
      {/* Search Section Shimmer */}
      <div className="flex flex-col -mt-32 md:flex-row w-full max-w-[1080px] mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-4 w-full md:w-1/2">
          <div className="h-10 w-40 bg-slate-200 rounded-md"></div>
          <div className="h-10 w-24 bg-slate-200 rounded-md"></div>
        </div>
        <div className="h-10 w-32 bg-slate-200 rounded-md"></div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="res-container grid grid-cols-1 max-w-[1080px] mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 px-4">
        {/* Shimmer Placeholder for Restaurant Cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full bg-white shadow-md rounded-2xl p-5">
            {/* Restaurant Image */}
            <div className="h-40 w-full bg-slate-200 rounded-lg mb-4"></div>

            {/* Restaurant Name */}
            <div className="h-6 w-3/4 bg-slate-200 rounded-lg mb-2"></div>

            {/* Restaurant Rating */}
            <div className="h-4 w-1/2 bg-slate-200 rounded-lg mb-3"></div>

            {/* Restaurant Info */}
            <div className="h-4 w-2/3 bg-slate-200 rounded-lg mb-3"></div>
            <div className="h-4 w-1/4 bg-slate-200 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex flex-wrap transition-all duration-1000 mt-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-32 h-10 bg-slate-200 rounded-lg mb-4"></div>
        ))}
      </div>
    </div>
  )
}

export default fakeui