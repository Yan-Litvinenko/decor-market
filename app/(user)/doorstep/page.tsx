import getDoorsteps from '@/helpers/getDoorsteps';

export default async function DoorstepPage(): Promise<React.JSX.Element> {
    const doorstepCollection = await getDoorsteps();

    console.log(doorstepCollection);

    return (
        <section>
            <h1>Doorstep</h1>
        </section>
    );
}
