import React from "react";
import Bookss from "../../assets/Bookss.png";

const Banner = () => {
  return (
    <div className="bg-[#f1faee]">
      <div className="flex max-w-6xl mx-auto">
        <div>
          <h1
            className=" text-3xl md:text-4xl lg:text-5xl ml-4 md:ml-0 lg:ml-24 pt-10 md:pt-16 lg:pt-24 md:text-center lg:text-left font-bold">

            Books to freshen up <br />{" "}
            <span className="block mt-1">your bookshelf</span>
          </h1>
          <button className="border py-2 px-7 rounded bg-green-500 text-white ml-25 mt-5 cursor-pointer hover:bg-green-600">
            View the List
          </button>
        </div>

        <div className="ml-45 h-40 w-50 mb-50 mt-18">
          <img src={Bookss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
