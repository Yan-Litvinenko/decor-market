import { setFavoriteList } from '@/redux/slice/favoriteSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import type { AllProducts } from '@/types/client/product.interface';
import type { RootState } from '@/redux/store';

type UseFavorite = (product: AllProducts) => {
    isFavorite: () => boolean;
    setFavorite: () => void;
    favoriteList: AllProducts[];
};

const useFavorite: UseFavorite = (product) => {
    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector((state: RootState) => state.favorite.favoriteList) as AllProducts[];

    const isFavorite = (): boolean => favoriteList.some((favoriteProduct) => favoriteProduct._id === product._id);
    const setFavorite = (): void => {
        dispatch(setFavoriteList(product as AllProducts));
    };

    return { isFavorite, setFavorite, favoriteList };
};

export default useFavorite;
