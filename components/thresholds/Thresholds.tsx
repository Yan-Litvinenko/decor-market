'use client';

import React from 'react';
import ProductCard from '@/components/productCard/ProductCard';
import getThresholds from '@/helpers/getThresholds';
import type { ProductThresholds } from '@/types/client/thresholds.interface';

export default function Thresholds() {
    const [thresholdsCollection, setThresholdsCollection] = React.useState<ProductThresholds[]>([]);

    React.useEffect(() => {
        getThresholds().then(setThresholdsCollection);
    }, []);

    return (
        <>
            {thresholdsCollection.map((threshold) => {
                return <ProductCard key={threshold._id.toString()} product={threshold} page="/thresholds" />;
            })}
        </>
    );
}
