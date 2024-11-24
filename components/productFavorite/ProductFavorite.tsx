'use client';

import useFavorite from '@/hooks/useFavorite';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import type { AllProducts } from '@/types/client/product.interface';

type ProductFavoriteProps = {
    product: AllProducts;
};

export default function ProductFavorite({ product }: ProductFavoriteProps): React.JSX.Element {
    const { isFavorite, setFavorite } = useFavorite(product);

    return (
        <button className="product-favorite" type="button" onClick={setFavorite}>
            {isFavorite() ? <HeartFilled /> : <HeartOutlined />}
        </button>
    );
}
