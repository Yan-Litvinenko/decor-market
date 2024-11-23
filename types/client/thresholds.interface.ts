import type { Product } from './product.interface';

export type TypeOfInstallation = 'открытый' | 'скрытый';
export type MountingMethod = 'дюбель-гвоздь';

export type ThresholdsType = {
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

export type ProductThresholds = Product & ThresholdsType;
