import type { ObjectId } from 'mongodb';
import type { ProductName } from '../client/product.interface';

type IDValueField = number;

export type ProductDatabase = {
    _id: ObjectId;
    id: number;
    name: ProductName;
    color: IDValueField;
    length: IDValueField;
    width: IDValueField;
    price: number;
    country_of_origin: IDValueField;
    firm: IDValueField;
    images: string[];
    material: IDValueField;
};

export type ProductField<T> = {
    _id: ObjectId;
    id: number;
    value: T;
};
