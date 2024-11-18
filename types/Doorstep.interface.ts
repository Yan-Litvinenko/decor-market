import type { ObjectId } from 'mongodb';

export type DoorstepDb = {
    _id: ObjectId;
    id: number;
    name: string;
    color: number;
    length: number;
    width: number;
    hidden_mount: boolean;
    with_transition: boolean;
};

export type DoorstepColorDb = {
    _id: ObjectId;
    id: number;
    name: string;
};

export type Doorstep = DoorstepDb & { color: DoorstepColorDb };
