import React from 'react';
import { IoIosStarHalf } from 'react-icons/io';

const Book = ({ singlebook }) => {

  const { author, bookName, category, image, publisher, rating, review,reviews,totalPages} = singlebook;

  return (
    <div className="card w-full bg-base-100 shadow-sm ">
      
      <figure className="p-4 bg-[#f8f9fa]">
        <img
          className="h-52 w-full object-contain"
          src={image}
          alt={bookName}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <div className=' text-sm'>
            {bookName}
          </div>
          
          <div className=" text-sm text-white bg-pink-600 py-1 px-3 rounded-2xl">{totalPages}</div>
        </h2>

        <p className="text-sm text-gray-500">
          by {publisher}
        </p>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="">{rating}</div> <IoIosStarHalf size={20}/>
        </div>
      </div>

    </div>
  );
};

export default Book;