'use client';

import ProductCard from '../productCard/ProductCard';
import { useAppSelector } from '@/hooks/useAppRedux';
import type { RootState } from '@/redux/store';
import type { AllProducts } from '@/types/client/product.interface';

export default function FavoritePage(): React.JSX.Element {
    const favoriteList = useAppSelector((state: RootState) => state.favorite.favoriteList) as AllProducts[];

    if (!favoriteList.length) return <p>Список избранного пуст</p>;

    return (
        <>
            {favoriteList.map((product) => (
                <ProductCard key={product._id.toString()} product={product} page={product.type} />
            ))}
        </>
    );
}
