// Actions
const checkStatus = 'bookstore/categories/CHECK_STATUS';

// intial State
const initialState = [];

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkStatus:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
const checkStatusAction = () => ({
  type: checkStatus,
});

// Export
export { checkStatusAction };
export default categoriesReducer;
