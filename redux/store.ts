import { configureStore } from '@reduxjs/toolkit';
import { Action, ThunkAction } from '@reduxjs/toolkit';

import productDetailReducer from './slice/productDetailSlice';

export const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
