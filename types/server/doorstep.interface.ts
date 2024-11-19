import type { ProductDatabase } from './product.interface';

export type DoorstepDatabase = ProductDatabase & {
    hidden_mount: boolean;
    with_transition: boolean;
};
