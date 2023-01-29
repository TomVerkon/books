import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    if (title !== '') {
      console.log('Need to add book with title:', title);
      setBooks([
        ...books, { id: Math.round(Math.random() * 9999), title }
      ]);
    }
  };

  const editBook = (params) => {

  };

  const deleteBook = (params) => {

  };




  return (
    <div className='App'>
      <div><BookList books={books} /></div>
      <div><BookCreate onCreate={createBook} /></div>
    </div>
  );
}

export default App;