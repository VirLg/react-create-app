// export const getItemSelector = state => state.car;
// export const getElFavoriteSelector = state => state.favorite;

import { createSelector } from '@reduxjs/toolkit';

// export const getAllCarCatalogSelector = state => state.car.carsCatalog;
export const showModalSelector = state => state.carState.modal;
export const favoriteSelector = state => state.carState.favorite;
export const searchedSelector = state => state.carState.searchValue;
