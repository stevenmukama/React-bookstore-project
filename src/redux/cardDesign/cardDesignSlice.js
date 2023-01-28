import { createSlice } from '@reduxjs/toolkit';

const cardDesignSlice = createSlice({
  name: 'cardDesign',
  initialState: {
    showModal: false,
    loading: false,
    isError: false,
    message: '',
  },
  reducers: {
    pendingModal(state) {
      const newState = {
        ...state,
        showModal: true,
        loading: true,
        isError: false,
        message: '',
      };
      return newState;
    },
    successModal(state, action) {
      const newState = {
        ...state,
        showModal: true,
        loading: false,
        isError: false,
        message: action.payload || 'Success',
      };

      return newState;
    },
    rejectModal(state, action) {
      const newState = {
        ...state,
        showModal: true,
        loading: false,
        isError: true,
        message: action.payload || 'Success',
      };

      return newState;
    },
    closeModal() {
      const newState = {
        showModal: false,
        loading: false,
        isError: false,
        message: '',
      };

      return newState;
    },
  },
});

export const cardDesignActions = cardDesignSlice.actions;

export default cardDesignSlice.reducer;
