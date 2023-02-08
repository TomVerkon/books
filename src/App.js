import React, { useState, useEffect } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  const createBook = async (title) => {
    if (title !== '') {
      const response = await axios.post('http://localhost:3001/books', { title });
      setBooks([...books, response.data]);
    }
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      };
      return book;
    });
    setBooks(updatedBooks);

  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
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