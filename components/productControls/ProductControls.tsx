import InStockSign from '@/components/inStockSign/InStockSign';
import ProductFavorite from '@/components/productFavorite/ProductFavorite';
import type { AllProducts } from '@/types/client/product.interface';

type ProductControlsProps = {
    isInStock: boolean;
    product: AllProducts;
};

export default function ProductControls({ isInStock, product }: ProductControlsProps): React.JSX.Element {
    return (
        <div className="product-controls">
            <InStockSign isInStock={isInStock} />
            <ProductFavorite product={product} />
        </div>
    );
}
