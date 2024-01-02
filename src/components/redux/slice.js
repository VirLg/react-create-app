import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const carSlice = createSlice({
  name: 'carState',
  initialState: {
    modal: false,
    favorite: [],
  },
  reducers: {
    modalShow(state, action) {
      state.modal = action.payload;
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
export const { modalShow, favorite } = carSlice.actions;

export const carReduser = carSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   access_token: '',
//   isLoading: false,
//   error: '',
//   profile: null,
//   carsCatalog: [],
//   carsFavorite: [],
// };

// // const handleFulfilledGetAllCar = (state, action) => {
// //   state.isLoading = false;
// //   state.carsCatalog = action.payload;
// // };

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = '';
// };

// const handleRejected = (state, { error, payload }) => {
//   state.isLoading = false;
//   state.error = payload ?? error.message;
// };

// const carSlice = createSlice({
//   name: 'car',
//   initialState,
//   reducers: {
//     get: (state, action) => action.payload,
//     // add: (state, action) => [...state, action.payload],
//     // remove: (state, action) => [...action.payload],
//     // filterSlice: (state, action) => [action.payload],
//   },
//   extraReducers: builder => {
//     builder
//       // .addCase(thunkGetAllCars.fulfilled, handleFulfilledGetAllCar)
//       // .addCase(thunkPortionDeleteWater.fulfilled, handleFulfilledDelete)
//       // .addCase(thunkPortionRemoveWater.fulfilled, handleFulfilledRemove)
//       // .addCase(thunkPortionOfDrinkingToday.fulfilled, handleFulfilledGetPortion)
//       // .addCase(thunkPortionGetForMonth.fulfilled, handleGetForMonth)

//       //   .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
//       .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
//       .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
//   },
// });

// export const { get } = carSlice.actions;
// export const carReducer = carSlice.reducer;
