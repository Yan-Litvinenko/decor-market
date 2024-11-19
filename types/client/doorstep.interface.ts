import type { Product } from './product.interface';

export type DoorstepType = Product & {
    hidden_mount: boolean;
    with_transition: boolean;
};
