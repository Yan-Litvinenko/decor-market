import type { ObjectId } from 'mongodb';

export type ProductType = 'doorstep';

export interface Product {
    _id: ObjectId;
    id: number;
    name: ProductField<string>;
    color: ProductField<string>;
    length: ProductField<number>;
    width: ProductField<number>;
    price: number;
    country_of_origin: ProductField<number>;
    firm: ProductField<number>;
}

export type ProductField<T> = {
    _id: ObjectId;
    id: number;
    value: T;
};
