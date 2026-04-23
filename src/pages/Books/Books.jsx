import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const[allBooks, setAllBooks] =useState([])

    // const bookPromis = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <Suspense fallback={<h1>Loading.....</h1>}>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                data.map((singlebook)=><Book key={singlebook.bookId} singlebook={singlebook}></Book> )
               }
            </div>
               
            </Suspense>
        
        </div>
    );
};

export default Books;