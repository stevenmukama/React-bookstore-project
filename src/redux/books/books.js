import axios from 'axios';

// Actions
const Addbook = 'bookstore/books/ADD_BOOK';
const Removebook = 'bookstore/books/REMOVE_BOOK';
const GetBooks = 'bookstore/books/GET_BOOKS';
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/v74KU1kb6ATX7KCQFVTz/books/';

// intial State
const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Addbook:
      return [...state, action.payload];
    case Removebook:
      return state.filter((book) => book.id !== action.id);
    case GetBooks:
      return action.payload;
    default:
      return state;
  }
};

// Action Creators
const getBooks = () => async (dispatch) => {
  const allBook = [];
  const response = await axios.get(api);
  const books = Object.values(response.data);
  const keys = Object.keys(response.data);
  books.forEach((book, index) => {
    allBook.push({
      id: keys[index],
      title: book[0].title,
      author: book[0].author,
      category: book[0].category,
      complete: Math.floor(Math.random() * 100),
      chapter: Math.floor(Math.random() * 10),
    });
  });
  dispatch({
    type: GetBooks,
    payload: allBook,
  });
};

const addBook = (payload) => async (dispatch) => {
  const book = {
    item_id: `${payload.id}`,
    title: `${payload.title}`,
    author: `${payload.author}`,
    category: `${payload.category}`,
  };
  await axios.post(api, book);
  dispatch({
    type: Addbook,
    payload: book,
  });
};

const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${api}${id}`);
  dispatch({
    type: Removebook,
    id,
  });
};

// Export
export { addBook, removeBook, getBooks };
export default booksReducer;
