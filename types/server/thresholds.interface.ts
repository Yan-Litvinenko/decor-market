import type { ProductDatabase } from './product.interface';
import type { TypeOfInstallation, MountingMethod } from '@/types/client/thresholds.interface';

export type ThresholdsDatabase = ProductDatabase & {
    hidden_mount: boolean;
    with_transition: boolean;
    fasteners_included: boolean;
    type_of_installation: TypeOfInstallation;
    mounting_method: MountingMethod;
    drop_level: {
        from: number;
        to: number;
    };
};
