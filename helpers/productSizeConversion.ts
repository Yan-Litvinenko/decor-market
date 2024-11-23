type Unit = 'cm';

export const unitConversionToMeters = (size: number, unit: Unit) => {
    if (unit === 'cm') {
        return size / 100;
    }
    return size;
};
