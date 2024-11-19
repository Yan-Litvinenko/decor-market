import getDoorsteps from '@/helpers/getDoorsteps';
import ProductCard from '@/components/productCard/ProductCard';
import type { DoorstepType } from '@/types/client/doorstep.interface';

export default async function DoorstepPage(): Promise<React.JSX.Element> {
    const doorstepCollection: DoorstepType[] = await getDoorsteps();

    console.log(doorstepCollection);

    return (
        <section>
            <h1>Doorstep</h1>

            <ProductCard />
        </section>
    );
}
