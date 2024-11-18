export default function ProductCard(): React.JSX.Element {
    return (
        <article className="product-card">
            <div className="product-card__box-image">
                {/* <Image className="product-card__image" src={productTestImage} alt="product" /> */}
            </div>
            <section className="product-card__info">
                <h3 className="product-card__title">Название товара</h3>
                <section className="product-card__description">
                    <p>Цена: 1000 BYN</p>
                    <p>Цвет: Белый</p>
                    <p>Ширина: 100 см</p>
                    <p>Высота: 100 см</p>
                </section>
                <div className="product-card__box-buttons">
                    <button className="product-card__button" type="button">
                        Подробнее
                    </button>
                    <button className="product-card__button" type="button">
                        Добавть в заказ
                    </button>
                </div>
            </section>
        </article>
    );
}
