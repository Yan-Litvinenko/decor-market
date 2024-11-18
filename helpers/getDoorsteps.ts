import { Doorstep } from '@/types/Doorstep.interface';

export default async function getDoorsteps(): Promise<Doorstep[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doorstepCollection`, {
            method: 'GET',
            next: { revalidate: 600 },
        });
        const data = await response.json();

        return data as Doorstep[];
    } catch (error) {
        console.error('Failed to fetch doorsteps:', error);
        throw new Error('Error: failed to fetch doorstep collection');
    }
}
