import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB"; // ⚠️ important

const BooksDetiles = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const book = data.find(item => item.bookId === bookId);

  if (!book) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const { bookName, image } = book;

  const handleMarkAsRead = () => {
    addToStoredDB(bookId);
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16 ">
      
      <img
        src={image}
        alt={bookName}
        className="h-80"
      />

      <h2 className="mt-4 text-xl font-bold">
        {bookName}
      </h2>

      <div className=" flex gap-3">
        <button
          onClick={handleMarkAsRead}
          className="btn btn-primary"
        >
          Mark as Read
        </button>

        <button className="btn btn-secondary">
          Add To Wishlist
        </button>
      </div>

    </div>
  );
};

export default BooksDetiles;