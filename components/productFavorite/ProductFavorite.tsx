'use client';

import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { setFavoriteList } from '@/redux/slice/favoriteSlice';
import type { RootState } from '@/redux/store';
import type { AllProducts } from '@/types/client/product.interface';

type ProductFavoriteProps = {
    product: AllProducts;
};

export default function ProductFavorite({ product }: ProductFavoriteProps): React.JSX.Element {
    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector((state: RootState) => state.favorite.favoriteList) as AllProducts[];

    const isFavorite = (): boolean => favoriteList.some((favoriteProduct) => favoriteProduct._id === product._id);
    const clickHandler = (): void => {
        dispatch(setFavoriteList(product as AllProducts));
    };

    return (
        <button className="product-favorite" type="button" onClick={clickHandler}>
            {isFavorite() ? <HeartFilled /> : <HeartOutlined />}
        </button>
    );
}
