import type { ObjectId } from 'mongodb';

type IDValueField = number;

export type ProductDatabase = {
    _id: ObjectId;
    id: number;
    name: IDValueField;
    color: IDValueField;
    length: IDValueField;
    width: IDValueField;
    price: number;
};

export type ProductField<T> = {
    _id: ObjectId;
    id: number;
    value: T;
};
