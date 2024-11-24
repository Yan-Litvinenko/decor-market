import { configureStore } from '@reduxjs/toolkit';
import { type Action, type ThunkAction } from '@reduxjs/toolkit';

import favoriteReducer from './slice/favoriteSlice';
import productDetailReducer from './slice/productDetailSlice';

export const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
        favorite: favoriteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
