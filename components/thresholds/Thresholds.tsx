'use client';

import React from 'react';
import ProductCard from '@/components/productCard/ProductCard';
import getThresholds from '@/helpers/getThresholds';
import Loader from '../loader/Loader';
import type { ProductThresholds } from '@/types/client/thresholds.interface';

export default function Thresholds(): React.JSX.Element {
    const [thresholdsCollection, setThresholdsCollection] = React.useState<ProductThresholds[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getThresholds()
            .then(setThresholdsCollection)
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                thresholdsCollection.map((threshold) => {
                    return <ProductCard key={threshold._id.toString()} product={threshold} page="/thresholds" />;
                })
            )}
        </>
    );
}
