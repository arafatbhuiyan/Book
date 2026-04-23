import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-16 mt-10">
      <h1 className=' text-center text-4xl font-bold mb-10'>Books</h1>
      <Suspense fallback={<h1 className="text-center">Loading.....</h1>}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            data.map((singlebook) => (
              <Book 
                key={singlebook.bookId} 
                singlebook={singlebook} 
              />
            ))
          }
        </div>

      </Suspense>
    </div>
  );
};

export default Books;