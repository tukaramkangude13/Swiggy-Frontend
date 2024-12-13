const shimmer1 = () => {
    return (
      <div className="w-full max-w-[750px] mx-auto mt-28 animate-pulse">
        {/* Restaurant Cards Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 px-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-full max-w-[320px] mx-auto bg-slate-200 rounded-lg shadow-md p-4">
              {/* Restaurant Image Shimmer */}
              <div className="h-36 w-full bg-black rounded-lg mb-3"></div>
  
              {/* Restaurant Name Shimmer */}
              <div className="h-6 w-3/4 bg-slate-300 rounded-lg mb-3"></div>
  
              {/* Restaurant Rating and Other Info Shimmer */}
              <div className="flex justify-between items-center">
                <div className="h-4 w-1/4 bg-slate-200 rounded-lg mb-2"></div>
                <div className="h-4 w-1/4 bg-slate-200 rounded-lg"></div>
              </div>
  
              {/* Restaurant Cuisine and Distance Shimmer */}
              <div className="flex justify-between items-center mt-3">
                <div className="h-4 w-1/3 bg-slate-200 rounded-lg"></div>
                <div className="h-4 w-1/4 bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default shimmer1;
  