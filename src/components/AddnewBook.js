import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../index.css';

const categories = ['Action', 'Science Fiction', 'Economy', 'Software Enginering'];

const AddnewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (title, author, category) => {
    if (!title || !author) return;
    const Newbook = {
      id: uuidv4(),
      title,
      author,
      category,
      complete: false,
      chapter: 0,
    };
    dispatch(addBook(Newbook));
    setTitle('');
    setAuthor('');
    setCategory('Action');
  };
  return (
    <div className="addbook">
      <hr />
      <h1>Add New Book</h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleTitle}
          value={title}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={handleAuthor}
          value={author}
          required
        />
        <select name="category" id="category" value={category} onChange={handleCategory}>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={() => submitBookToStore(title, author, category)}
        >
          Add Book

        </button>
      </form>
    </div>
  );
};

export default AddnewBook;
