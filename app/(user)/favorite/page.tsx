import FavoritePage from '@/components/favoritePage/FavoritePage';

export default function Favorite(): React.JSX.Element {
    return (
        <div className="container">
            <section className="favorite">
                <h1 className="favorite__title title">Избранное</h1>
                <FavoritePage />
            </section>
        </div>
    );
}
