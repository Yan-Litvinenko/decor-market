'use client';

import Base64Image from '@/components/base64Image/Base64Image';
import getPriceCurrency from '@/helpers/getPriceCurrency';
import ProductControls from '@/components/productControls/ProductControls';
import Link from 'next/link';
import { setProductDetail } from '@/redux/slice/productDetailSlice';
import { unitConversionToMeters } from '@/helpers/productSizeConversion';
import { useAppDispatch } from '@/hooks/useAppRedux';
import type { AllProducts, ProductType } from '@/types/client/product.interface';

type ProductCardProps = {
    product: AllProducts;
    page: ProductType;
};

export default function ProductCard({ product, page }: ProductCardProps): React.JSX.Element | null {
    const dispatch = useAppDispatch();

    if (!product) return null;

    const { name, color, length, width, price } = product;
    const handleDetail = (): void => {
        dispatch(setProductDetail(product));
    };

    return (
        <article className="product-card">
            <ProductControls product={product} />
            <div className="product-card__box-image">
                <Base64Image className="product-card__image" base64string={product.images[0]} alt={name} />
            </div>
            <section className="product-card__info">
                <h3 className="product-card__title">{name}</h3>
                <section className="product-card__description">
                    <p>{color.value}</p>
                    <p>
                        {unitConversionToMeters(length.value, 'cm')}м X {width.value}см
                    </p>
                    <p>{getPriceCurrency(price)}</p>
                </section>
                <div className="product-card__box-buttons">
                    <button className="product-card__button" type="button" onClick={handleDetail}>
                        <Link href={`${page}/${product._id}`} />
                        Подробнее
                    </button>
                    <button className="product-card__button" type="button">
                        Добавить в заказ
                    </button>
                </div>
            </section>
        </article>
    );
}
