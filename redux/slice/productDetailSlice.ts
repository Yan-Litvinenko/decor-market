import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AllProducts } from '@/types/client/product.interface';

type ProductDetailState = {
    productDetail: AllProducts | null;
};

const initialState: ProductDetailState = {
    productDetail: null,
};

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setProductDetail: (state, action: PayloadAction<AllProducts>) => {
            state.productDetail = action.payload;
        },
    },
});

export const { setProductDetail } = productDetailSlice.actions;
export default productDetailSlice.reducer;
