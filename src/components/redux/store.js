// import { configureStore } from '@reduxjs/toolkit';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { reducer } from './reducer';

// const persistConfig = {
//   key: 'car',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({ reducer: persistedReducer });
// export const persistor = persistStore(store);
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsApi } from './rtkQuery/cars';
import { carReduser } from './slice';

export const store = configureStore({
  reducer: combineReducers({
    [carsApi.reducerPath]: carsApi.reducer,
    carState: carReduser,
  }),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});
