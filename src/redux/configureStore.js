import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import cardDesignSlice from './cardDesign/cardDesignSlice';

const store = configureStore({
  reducer: { books: booksReducer, categories: categoriesReducer, cardDesign: cardDesignSlice },
});

export default store;
