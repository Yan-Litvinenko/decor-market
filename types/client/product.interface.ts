import type { ObjectId } from 'mongodb';

export type Product = {
    _id: ObjectId;
    id: number;
    name: ProductField<string>;
    color: ProductField<string>;
    length: ProductField<number>;
    width: ProductField<number>;
    price: number;
};

export type ProductField<T> = {
    _id: ObjectId;
    id: number;
    value: T;
};
