import InStockSign from '@/components/inStockSign/InStockSign';
import ProductFavorite from '@/components/productFavorite/ProductFavorite';
import type { AllProducts } from '@/types/client/product.interface';

type ProductControlsProps = {
    product: AllProducts;
};

export default function ProductControls({ product }: ProductControlsProps): React.JSX.Element {
    return (
        <div className="product-controls">
            <InStockSign isInStock={product.in_stock_count > 0} />
            <ProductFavorite product={product} />
        </div>
    );
}
