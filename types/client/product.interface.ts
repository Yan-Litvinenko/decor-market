import type { ObjectId } from 'mongodb';
import type { ProductThresholds } from './thresholds.interface';

export type ProductType = 'thresholds';
export type ProductName = 'Порог';
export type ProductMaterial = 'алюминий';
export type AllProducts = ProductThresholds;

export interface Product {
    _id: ObjectId;
    id: number;
    name: ProductName;
    color: ProductField<string>;
    length: ProductField<number>;
    width: ProductField<number>;
    price: number;
    type: ProductType;
    country_of_origin: ProductField<number>;
    firm: ProductField<number>;
    images: string[];
    material: ProductField<ProductMaterial>;
    in_stock_count: number;
}

export type ProductField<T> = {
    _id: ObjectId;
    id: number;
    value: T;
};
