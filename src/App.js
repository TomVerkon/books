import React, { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from './context/books';


function App() {

  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='App'>
      <h1>Reading List</h1>
      <div><BookList /></div>
      <div><BookCreate /></div>
    </div>
  );
}

export default App;