import React, { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";


function App() {

  const { fetchBooks } = useBooksContext();

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