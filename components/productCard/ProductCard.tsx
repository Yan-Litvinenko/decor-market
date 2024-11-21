import Base64Image from '@/components/base64Image/Base64Image';
import getPriceCurrency from '@/helpers/getpriceCurrency';
import type { Product } from '@/types/client/product.interface';

type ProductCardProps<T> = {
    product: T;
};

export default function ProductCard<T extends Product>({ product }: ProductCardProps<T>): React.JSX.Element {
    if (!product) return <></>;

    const { name, color, length, width, price } = product;

    return (
        <article className="product-card">
            <div className="product-card__box-image">
                <Base64Image base64string={product.images[0]} alt={name} />
            </div>
            <section className="product-card__info">
                <h3 className="product-card__title">{name}</h3>
                <section className="product-card__description">
                    <p>Цена: {getPriceCurrency(price)}</p>
                    <p>Цвет: {color.value}</p>
                    <p>Ширина: {width.value} см</p>
                    <p>Высота: {length.value} см</p>
                </section>
                <div className="product-card__box-buttons">
                    <button className="product-card__button" type="button">
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
