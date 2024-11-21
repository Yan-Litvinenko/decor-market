import type { DoorstepType } from '@/types/client/doorstep.interface';

export default async function getDoorsteps(): Promise<DoorstepType[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doorstepCollection`, {
            method: 'GET',
            next: { revalidate: 600 },
        });
        const data = await response.json();

        return data as DoorstepType[];
    } catch (error) {
        console.error('Failed to fetch doorsteps:', error);
        throw new Error('Error: failed to fetch doorstep collection');
    }
}
