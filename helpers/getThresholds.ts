import type { ProductThresholds } from '@/types/client/thresholds.interface';

export default async function getThresholds(): Promise<ProductThresholds[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/thresholdsCollection`, {
            method: 'GET',
            next: { revalidate: 600 },
        });
        const data = await response.json();

        return data as ProductThresholds[];
    } catch (error) {
        console.error('Failed to fetch doorsteps:', error);
        throw new Error('Error: failed to fetch doorstep collection');
    }
}
