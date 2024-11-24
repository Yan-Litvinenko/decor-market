import InStockSign from '@/components/inStockSign/InStockSign';
import ProductFavorite from '@/components/productFavorite/ProductFavorite';

type ProductControlsProps = {
    isInStock: boolean;
};

export default function ProductControls({ isInStock }: ProductControlsProps): React.JSX.Element {
    return (
        <div className="product-controls">
            <InStockSign isInStock={isInStock} />
            <ProductFavorite />
        </div>
    );
}
