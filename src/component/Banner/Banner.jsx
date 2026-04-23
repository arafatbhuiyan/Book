import React from "react";
import Bookss from "../../assets/Bookss.png";

const Banner = () => {
    const ButtonClick = ()=>{
        alert("No Added")
    }
  return (
    
    <div className="bg-[#f1faee] py-2 md:py-20 lg:py-15 mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col lg:flex-row items-center justify-around max-w-6xl mx-auto px-4 lg:px-8">

        {/* Text Section */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">
            Books to freshen up <br />
            <span className="block mt-2">your bookshelf</span>
          </h1>

          <button onClick={ButtonClick} className="mt-6 py-2 px-7 rounded bg-green-500 text-white hover:bg-green-600">
            View the List
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 order-1 lg:order-2">
          <img
            src={Bookss}
            alt="Books"
            className="w-25 md:w-80 lg:w-40"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;