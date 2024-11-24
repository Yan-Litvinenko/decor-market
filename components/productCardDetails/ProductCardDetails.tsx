'use client';

import React from 'react';
import getPriceCurrency from '@/helpers/getPriceCurrency';
import Image from 'next/image';
import useFavorite from '@/hooks/useFavorite';
import { unitConversionToMeters } from '@/helpers/productSizeConversion';
import { useAppSelector } from '@/hooks/useAppRedux';
import type { AllProducts, ProductType } from '@/types/client/product.interface';

export default function ProductCardDetails(): React.JSX.Element {
    const productDetail = useAppSelector((state) => state.productDetail.productDetail) as AllProducts;
    const { isFavorite, setFavorite } = useFavorite(productDetail);

    if (!productDetail) return <>Нет данных о продукте</>;

    const { name, color, length, width, price, country_of_origin } = productDetail;
    const { firm, material, images, type, in_stock_count } = productDetail;

    const renderAdditionalFields = (productType: ProductType): React.JSX.Element | null => {
        switch (productType) {
            case 'thresholds':
                return (
                    <>
                        <li className="product-card-details__item">
                            Крепление: {productDetail.mounting_method === 'дюбель-гвоздь' ? 'дюбель-гвоздь' : ''}
                        </li>
                        <li className="product-card-details__item">
                            Тип крепления: {productDetail.type_of_installation === 'открытый' ? 'открытое' : 'скрытое'}
                        </li>
                        <li className="product-card-details__item">
                            Скрытие перепада: от {productDetail.drop_level.from}см до {productDetail.drop_level.to}см
                        </li>
                        <li className="product-card-details__item">
                            С переходом: {productDetail.with_transition ? 'да' : 'нет'}
                        </li>
                        <li className="product-card-details__item">
                            Крепж в комплекте: {productDetail.fasteners_included ? 'есть' : 'отсутствует'}
                        </li>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <section className="product-card-details">
            <div className="product-card-details__content">
                <aside className="product-card-details__aside">
                    <h1 className="product-card-details__title">
                        {name}, {color.value}, {getPriceCurrency(price)}
                    </h1>
                    <Image src={images[0]} alt={productDetail.type} width={100} height={100} />

                    <div className="product-card-details__buttons">
                        <button className="product-card-details__button" type="button">
                            Добавить в заказ
                        </button>
                        <button
                            className={
                                isFavorite()
                                    ? 'product-card-details__button button-deactive'
                                    : 'product-card-details__button'
                            }
                            type="button"
                            onClick={() => (isFavorite() ? null : setFavorite())}
                        >
                            {isFavorite() ? 'В избранном' : 'Добавить в избранное'}
                        </button>
                    </div>
                </aside>
                <div className="product-card-details__info">
                    <ul className="product-card-details__list">
                        <li className="product-card-details__item">Название: {name}</li>
                        <li className="product-card-details__item">Цвет: {color.value}</li>
                        <li className="product-card-details__item">Цена: {getPriceCurrency(price)}</li>
                        <li className="product-card-details__item">
                            Длина: {unitConversionToMeters(length.value, 'cm')}м.
                        </li>
                        <li className="product-card-details__item">Ширина: {width.value}см.</li>
                        <li className="product-card-details__item">Страна производитель: {country_of_origin.value}</li>
                        <li className="product-card-details__item">Фирма: {firm.value}</li>
                        <li className="product-card-details__item">Материал: {material.value}</li>
                        {renderAdditionalFields(type)}
                        <li className="product-card-details__item">В наличии: {in_stock_count} шт.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
