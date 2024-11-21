import type { ObjectId } from 'mongodb';

export type ProductType = 'doorstep';
export type ProductName = 'Порог';
export type ProductMaterial = 'Алюминий';

export interface Product {
    _id: ObjectId;
    id: number;
    name: ProductName;
    color: ProductField<string>;
    length: ProductField<number>;
    width: ProductField<number>;
    price: number;
    country_of_origin: ProductField<number>;
    firm: ProductField<number>;
    images: string[];
    material: ProductField<ProductMaterial>;
}

export type ProductField<T> = {
    _id: ObjectId;
    id: number;
    value: T;
};
