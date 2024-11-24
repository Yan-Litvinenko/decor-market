import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageManager } from '@/helpers/LocalStorageManager';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AllProducts } from '@/types/client/product.interface';

type FavoriteState = {
    favoriteList: AllProducts[];
};

const initialState: FavoriteState = {
    favoriteList: LocalStorageManager.getFavoriteList(),
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavoriteList: (state, action: PayloadAction<AllProducts>) => {
            const product: AllProducts = action.payload;
            const favoriteList: AllProducts[] = state.favoriteList;
            const isDelete: boolean = favoriteList.some(
                (favoriteProduct: AllProducts) => favoriteProduct._id === product._id,
            );

            const updatedFavoriteList: AllProducts[] = isDelete
                ? [...favoriteList.filter((favoriteProduct) => favoriteProduct._id !== product._id)]
                : [...favoriteList, product];

            state.favoriteList = updatedFavoriteList;
            LocalStorageManager.setFavoriteList(updatedFavoriteList);
        },
    },
});

export const { setFavoriteList } = favoriteSlice.actions;
export default favoriteSlice.reducer;
