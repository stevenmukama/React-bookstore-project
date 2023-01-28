import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddnewBook from './AddnewBook';
import Book from './Book';
import { getBooks } from '../redux/books/books';
import '../index.css';

const Books = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="maincontainer">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;
