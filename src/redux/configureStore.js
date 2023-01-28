import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootreducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootreducer });

export default store;
