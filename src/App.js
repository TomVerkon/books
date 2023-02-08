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

  const editBookById = (id, newTitle) => {
    console.log('App editBookById:', id, newTitle);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      };
      return book;
    });
    setBooks(updatedBooks);

  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);

  };




  return (
    <div className='App'>
      <h1>Reading List</h1>
      <div><BookList books={books} onDelete={deleteBookById} onEdit={editBookById} /></div>
      <div><BookCreate onCreate={createBook} /></div>
    </div>
  );
}

export default App;