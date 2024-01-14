import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const carSlice = createSlice({
  name: 'carState',
  initialState: {
    modal: false,
    favorite: [],
    searchValue: null,
  },
  reducers: {
    modalShow(state, action) {
      state.modal = action.payload;
    },
    searched(state, action) {
      state.searchValue = action.payload;
    },
    favorite(state, action) {
      const unic = state.favorite.find(el => el._id === action.payload._id);
      if (unic) {
        state.favorite = state.favorite.filter(el => el._id !== unic._id);
        Notify.success('Delete with favorite');
      } else {
        state.favorite = [...state.favorite, action.payload];
        Notify.success('Add to favorite');
      }
    },
  },
});
export const { modalShow, favorite, searched } = carSlice.actions;

export const carReduser = carSlice.reducer;
